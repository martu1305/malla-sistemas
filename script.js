const materias = [
  { id: 'epa', nombre: 'Expresión de problemas y algoritmos', correlativas: [] },
  { id: 'orgco', nombre: 'Organización de computadoras', correlativas: [] },
  { id: 'elem', nombre: 'Elementos de matemática', correlativas: [] },
  { id: 'prog', nombre: 'Programación', correlativas: ['epa'] },
  { id: 'arqco', nombre: 'Arquitectura de computadoras', correlativas: ['orgco'] },
  { id: 'ing1', nombre: 'Taller de Inglés 1', correlativas: [] },
  { id: 'soft1', nombre: 'Ingeniería en Software 1', correlativas: ['prog'] },
  { id: 'bd1', nombre: 'Introducción a la base de datos', correlativas: ['prog'] },
  { id: 'aed', nombre: 'Algoritmos y Estructura de datos', correlativas: ['epa', 'prog'] },
  { id: 'pensam', nombre: 'Seminario de pensamiento nacional y latinoamericano', correlativas: [] },
  { id: 'ing2', nombre: 'Taller de Inglés 2', correlativas: ['ing1'] },
  { id: 'semileng', nombre: 'Seminario de lenguajes', correlativas: ['prog'] },
  { id: 'iso', nombre: 'Introducción a los sistemas operativos', correlativas: ['prog'] },
  { id: 'mdis', nombre: 'Matemática discreta', correlativas: ['elem'] },
  { id: 'oo1', nombre: 'Orientación a Objetos 1', correlativas: ['soft1', 'aed'] },
  { id: 'ing3', nombre: 'Taller de Inglés 3', correlativas: ['ing2'] },
  { id: 'concu', nombre: 'Programación Concurrente', correlativas: ['prog'] },
  { id: 'soft2', nombre: 'Ingeniería en Software 2', correlativas: ['soft1'] },
  { id: 'am1', nombre: 'Análisis Matemático 1', correlativas: ['elem'] },
  { id: 'bd2', nombre: 'Bases de Datos 1', correlativas: ['bd1'] },
  { id: 'redes', nombre: 'Redes y Comunicaciones', correlativas: ['elem', 'iso'] },
  { id: 'justicia', nombre: 'Seminario de justicia y derechos humanos', correlativas: [] },
  { id: 'pp1', nombre: 'Prácticas Preprofesionales', correlativas: [] },
  { id: 'cplp', nombre: 'Conceptos y Paradigmas de Lenguajes de Programación', correlativas: ['prog'] },
  { id: 'oo2', nombre: 'Orientación a Objetos 2', correlativas: ['oo1'] },
  { id: 'soft3', nombre: 'Ingeniería de Software 3', correlativas: ['soft2'] },
  { id: 'bd3', nombre: 'Bases de Datos 2', correlativas: ['bd2'] },
  { id: 'so', nombre: 'Sistemas Operativos', correlativas: ['iso'] },
  { id: 'am2', nombre: 'Análisis Matemático 2', correlativas: ['am1'] },
  { id: 'ftc', nombre: 'Fundamentos de Teoría de la Computación', correlativas: ['cplp', 'am1'] },
  { id: 'dist', nombre: 'Desarrollo de Software en Sistemas Distribuidos', correlativas: ['concu', 'soft2', 'redes'] },
  { id: 'syo', nombre: 'Sistemas y Organizaciones', correlativas: [] },
  { id: 'proy', nombre: 'Proyecto de Software', correlativas: [] },
  { id: 'metod', nombre: 'Taller de Metodología de la Investigación', correlativas: ['soft2', 'redes', 'bd2', 'so', 'oo2'] },
  { id: 'pe', nombre: 'Probabilidad y Estadística', correlativas: ['mdis', 'am1'] },
  { id: 'optativo', nombre: 'Seminario Optativo', correlativas: [] },
  { id: 'escenarios', nombre: 'Escenarios Tecnológicos', correlativas: [] },
  { id: 'aspectos', nombre: 'Aspectos sociales y profesionales de la Informática', correlativas: ['syo'] },
  { id: 'pp2', nombre: 'Prácticas Preprofesionales 2', correlativas: ['pp1'] },
  { id: 'id', nombre: 'Taller de Proyectos I+D+i', correlativas: ['proy', 'pe', 'metod'] }
];

const mallaContainer = document.getElementById('malla');

materias.forEach(m => {
  const div = document.createElement('div');
  div.className = 'materia';
  div.innerHTML = `<input type="checkbox" id="${m.id}" disabled>
                   <label for="${m.id}">${m.nombre}</label>`;
  mallaContainer.appendChild(div);
});

function actualizarEstado() {
  materias.forEach(m => {
    const check = document.getElementById(m.id);
    const habilitado = m.correlativas.every(c => document.getElementById(c).checked);
    check.disabled = !habilitado;
    if (!habilitado) check.checked = false;
  });
}

materias.forEach(m => {
  document.getElementById(m.id).addEventListener('change', actualizarEstado);
});

actualizarEstado();

