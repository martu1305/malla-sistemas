// =====================================================
//  Plan de Estudios 2024 - Licenciatura en Sistemas (UNLa)
//
//  id:           identificador único (el código de la materia)
//  codigo:       código oficial
//  nombre:       nombre de la materia
//  anio / cuatri: año y cuatrimestre de la carrera
//  area:         área de formación
//  correlativas: ids de las materias que deben estar APROBADAS
//  nota:         texto opcional que se muestra en la tarjeta
// =====================================================

const PLAN = {
  carrera: "Licenciatura en Sistemas",
  universidad: "Universidad Nacional de Lanús · Plan 2024",
  materias: [
    // ---------- 1° AÑO ----------
    { id: "11500", codigo: "11500", nombre: "Expresión de Problemas y Algoritmos", anio: 1, cuatri: 1, area: "CBGyE",   correlativas: [] },
    { id: "11501", codigo: "11501", nombre: "Organización de Computadoras",        anio: 1, cuatri: 1, area: "ARSORE",  correlativas: [] },
    { id: "11502", codigo: "11502", nombre: "Elementos de Matemática",             anio: 1, cuatri: 1, area: "CBGyE",   correlativas: [] },
    { id: "11503", codigo: "11503", nombre: "Programación",                        anio: 1, cuatri: 2, area: "AyL",     correlativas: ["11500"] },
    { id: "11504", codigo: "11504", nombre: "Arquitectura de Computadoras",        anio: 1, cuatri: 2, area: "ARSORE",  correlativas: ["11501"] },
    { id: "11505", codigo: "11505", nombre: "Taller de Inglés I",                  anio: 1, cuatri: 2, area: "Idioma Extranjero", correlativas: [] },

    // ---------- 2° AÑO ----------
    { id: "11506", codigo: "11506", nombre: "Ingeniería de Software I",            anio: 2, cuatri: 3, area: "ISBDSI",  correlativas: ["11503"] },
    { id: "11507", codigo: "11507", nombre: "Introducción a las Bases de Datos",   anio: 2, cuatri: 3, area: "ISBDSI",  correlativas: ["11503"] },
    { id: "11508", codigo: "11508", nombre: "Algoritmos y Estructuras de Datos",   anio: 2, cuatri: 3, area: "AyL",     correlativas: ["11500", "11503"] },
    { id: "A10",   codigo: "A10",   nombre: "Seminario de Pensamiento Nacional Latinoamericano", anio: 2, cuatri: 3, area: "ASyP", correlativas: [] },
    { id: "11509", codigo: "11509", nombre: "Taller de Inglés II",                 anio: 2, cuatri: 4, area: "Idioma Extranjero", correlativas: ["11505"] },
    { id: "11510", codigo: "11510", nombre: "Seminario de Lenguajes",              anio: 2, cuatri: 4, area: "AyL",     correlativas: ["11503"] },
    { id: "11511", codigo: "11511", nombre: "Introducción a los Sistemas Operativos", anio: 2, cuatri: 4, area: "ARSORE", correlativas: ["11503"] },
    { id: "11512", codigo: "11512", nombre: "Matemática Discreta",                 anio: 2, cuatri: 4, area: "CBGyE",   correlativas: ["11502"] },

    // ---------- 3° AÑO ----------
    { id: "11513", codigo: "11513", nombre: "Orientación a Objetos I",             anio: 3, cuatri: 5, area: "AyL",     correlativas: ["11506", "11508"] },
    { id: "11514", codigo: "11514", nombre: "Taller de Inglés III",                anio: 3, cuatri: 5, area: "Idioma Extranjero", correlativas: ["11509"] },
    { id: "11515", codigo: "11515", nombre: "Programación Concurrente",            anio: 3, cuatri: 5, area: "AyL",     correlativas: ["11503"] },
    { id: "11516", codigo: "11516", nombre: "Ingeniería de Software II",          anio: 3, cuatri: 5, area: "ISBDSI",  correlativas: ["11506"] },
    { id: "11517", codigo: "11517", nombre: "Análisis Matemático I",               anio: 3, cuatri: 6, area: "CBGyE",   correlativas: ["11502"] },
    { id: "11518", codigo: "11518", nombre: "Bases de Datos I",                    anio: 3, cuatri: 6, area: "ISBDSI",  correlativas: ["11506", "11507"] },
    { id: "11519", codigo: "11519", nombre: "Redes y Comunicaciones",              anio: 3, cuatri: 6, area: "ARSORE",  correlativas: ["11502", "11511"] },
    { id: "N11",   codigo: "N11",   nombre: "Seminario de Justicia y Derechos Humanos", anio: 3, cuatri: 6, area: "ASyP", correlativas: [] },
    { id: "11520", codigo: "11520", nombre: "Prácticas Preprofesionales I",        anio: 3, cuatri: 6, area: "Espacios de integración", correlativas: [] },

    // ---------- 4° AÑO ----------
    { id: "11521", codigo: "11521", nombre: "Conceptos y Paradigmas de Lenguajes de Programación", anio: 4, cuatri: 7, area: "AyL", correlativas: ["11503"] },
    { id: "11522", codigo: "11522", nombre: "Orientación a Objetos II",            anio: 4, cuatri: 7, area: "AyL",     correlativas: ["11513"] },
    { id: "11523", codigo: "11523", nombre: "Ingeniería de Software III",          anio: 4, cuatri: 7, area: "ISBDSI",  correlativas: ["11516"] },
    { id: "11524", codigo: "11524", nombre: "Bases de Datos II",                   anio: 4, cuatri: 7, area: "ISBDSI",  correlativas: ["11518"] },
    { id: "11525", codigo: "11525", nombre: "Sistemas Operativos",                 anio: 4, cuatri: 7, area: "ARSORE",  correlativas: ["11511"] },
    { id: "11526", codigo: "11526", nombre: "Análisis Matemático II",              anio: 4, cuatri: 8, area: "CBGyE",   correlativas: ["11517"] },
    { id: "11528", codigo: "11528", nombre: "Fundamentos de Teoría de la Computación", anio: 4, cuatri: 8, area: "CBGyE", correlativas: ["11517", "11521"] },
    { id: "11527", codigo: "11527", nombre: "Desarrollo de Software en Sistemas Distribuidos", anio: 4, cuatri: 8, area: "ISBDSI", correlativas: ["11515", "11516", "11519"] },
    { id: "11529", codigo: "11529", nombre: "Sistemas y Organizaciones",           anio: 4, cuatri: 8, area: "ISBDSI",  correlativas: [] },

    // ---------- 5° AÑO ----------
    { id: "11530", codigo: "11530", nombre: "Proyecto de Software",                anio: 5, cuatri: 9, area: "ISBDSI",  correlativas: [], nota: "Correlativas: a confirmar" },
    { id: "11531", codigo: "11531", nombre: "Taller de Metodología de la Investigación", anio: 5, cuatri: 9, area: "CBGyE", correlativas: ["11516", "11518", "11519", "11522", "11525"] },
    { id: "11532", codigo: "11532", nombre: "Probabilidad y Estadística",          anio: 5, cuatri: 9, area: "CBGyE",   correlativas: ["11512", "11517"] },
    { id: "11533", codigo: "11533", nombre: "Seminario Optativo",                  anio: 5, cuatri: 9, area: "Optativo", correlativas: [] },
    { id: "11534", codigo: "11534", nombre: "Escenarios Tecnológicos",             anio: 5, cuatri: 10, area: "ASyP",   correlativas: [] },
    { id: "11535", codigo: "11535", nombre: "Aspectos Sociales y Profesionales de la Informática", anio: 5, cuatri: 10, area: "ASyP", correlativas: ["11529"] },
    { id: "11536", codigo: "11536", nombre: "Prácticas Preprofesionales II",       anio: 5, cuatri: 10, area: "Espacios de integración", correlativas: ["11520"] },
    { id: "11537", codigo: "11537", nombre: "Taller de Proyectos I+D+i",           anio: 5, cuatri: 10, area: "Espacios de integración", correlativas: ["11530", "11531", "11532"] }
  ]
};
