(() => {
  const KEY = "malla-aprobadas:" + PLAN.carrera;
  const byId = Object.fromEntries(PLAN.materias.map(m => [m.id, m]));

  // Mapa inverso: quién depende de cada materia
  const dependientes = {};
  PLAN.materias.forEach(m => m.correlativas.forEach(c => (dependientes[c] ||= []).push(m.id)));

  let aprobadas = new Set();
  try { aprobadas = new Set(JSON.parse(localStorage.getItem(KEY) || "[]")); } catch (e) {}
  aprobadas = new Set([...aprobadas].filter(id => byId[id]));

  const guardar = () => { try { localStorage.setItem(KEY, JSON.stringify([...aprobadas])); } catch (e) {} };
  const estado = m => aprobadas.has(m.id) ? "aprobada"
    : m.correlativas.every(c => aprobadas.has(c)) ? "disponible" : "bloqueada";

  // Todas las materias que dependen (directa o indirectamente) de una
  function descendientes(id, acc = new Set()) {
    (dependientes[id] || []).forEach(d => { if (!acc.has(d)) { acc.add(d); descendientes(d, acc); } });
    return acc;
  }
  function ascendientes(id, acc = new Set()) {
    byId[id].correlativas.forEach(c => { if (!acc.has(c)) { acc.add(c); ascendientes(c, acc); } });
    return acc;
  }

  // ---------- Render ----------
  document.getElementById("titulo").textContent = PLAN.carrera;
  document.getElementById("subtitulo").textContent = PLAN.universidad;
  document.title = "Malla · " + PLAN.carrera;

  const malla = document.getElementById("malla");
  const anios = [...new Set(PLAN.materias.map(m => m.anio))].sort((a, b) => a - b);
  const els = {};

  anios.forEach(a => {
    const col = document.createElement("section");
    col.className = "anio";
    col.innerHTML = `<h2><span>${a}° año</span><span id="cnt-${a}"></span></h2>`;
    let ultCuatri = null;
    PLAN.materias.filter(m => m.anio === a).forEach(m => {
      if (m.cuatri && m.cuatri !== ultCuatri) {
        ultCuatri = m.cuatri;
        const h = document.createElement("h3");
        h.textContent = m.cuatri + "° cuatrimestre";
        col.appendChild(h);
      }
      const el = document.createElement("div");
      el.className = "materia";
      el.title = (m.codigo ? m.codigo + " · " : "") + (m.area || "");
      el.innerHTML = `<span class="nombre"></span><small></small>`;
      el.querySelector(".nombre").textContent = m.nombre;
      el.addEventListener("click", () => click(m));
      el.addEventListener("mouseenter", () => resaltar(m));
      el.addEventListener("mouseleave", quitarResaltado);
      els[m.id] = el;
      col.appendChild(el);
    });
    malla.appendChild(col);
  });

  function pintar() {
    PLAN.materias.forEach(m => {
      const e = estado(m), el = els[m.id];
      el.classList.remove("aprobada", "disponible", "bloqueada");
      el.classList.add(e);
      const falta = m.correlativas.filter(c => !aprobadas.has(c)).map(c => byId[c].nombre);
      el.querySelector("small").textContent =
        e === "bloqueada" ? "Requiere: " + falta.join(", ")
        : m.nota || (m.correlativas.length ? "Correlativas ✓" : "");
    });
    anios.forEach(a => {
      const ms = PLAN.materias.filter(m => m.anio === a);
      document.getElementById("cnt-" + a).textContent = `${ms.filter(m => aprobadas.has(m.id)).length}/${ms.length}`;
    });
    const total = PLAN.materias.length, ok = aprobadas.size, pct = Math.round(ok / total * 100);
    document.getElementById("barra-fill").style.width = pct + "%";
    document.getElementById("progreso-texto").textContent = `${ok}/${total} materias · ${pct}%`;
    const apu = PLAN.materias.filter(m => m.anio <= 3);
    document.getElementById("subtitulo").textContent =
      `${PLAN.universidad} · Analista Programador Universitario: ${apu.filter(m => aprobadas.has(m.id)).length}/${apu.length}`;
  }

  // ---------- Interacción ----------
  function click(m) {
    const e = estado(m);
    if (e === "bloqueada") {
      const falta = m.correlativas.filter(c => !aprobadas.has(c)).map(c => byId[c].nombre);
      toast("Primero aprobá: " + falta.join(", "));
      els[m.id].classList.add("shake");
      setTimeout(() => els[m.id].classList.remove("shake"), 300);
      return;
    }
    if (e === "aprobada") {
      // Al desaprobar, se desaprueban también las que dependían de ella
      const caen = [...descendientes(m.id)].filter(id => aprobadas.has(id));
      aprobadas.delete(m.id);
      caen.forEach(id => aprobadas.delete(id));
      if (caen.length) toast(`También se desmarcaron ${caen.length} materia(s) que dependían de esta`);
    } else {
      aprobadas.add(m.id);
    }
    guardar();
    pintar();
  }

  function resaltar(m) {
    document.body.classList.add("resaltando");
    els[m.id].classList.add("foco");
    ascendientes(m.id).forEach(id => els[id].classList.add("hl"));
    descendientes(m.id).forEach(id => els[id].classList.add("hl"));
  }
  function quitarResaltado() {
    document.body.classList.remove("resaltando");
    Object.values(els).forEach(el => el.classList.remove("hl", "foco"));
  }

  let t;
  function toast(msg) {
    const el = document.getElementById("toast");
    el.textContent = msg; el.classList.add("show");
    clearTimeout(t); t = setTimeout(() => el.classList.remove("show"), 2500);
  }

  document.getElementById("reset").addEventListener("click", () => {
    if (confirm("¿Borrar todo tu progreso?")) { aprobadas.clear(); guardar(); pintar(); }
  });

  pintar();
})();
