const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };
  
  const addTurno = (obj, chave, valor) => {
    obj[chave] = valor;
  }
  
  const keyList = (obj) => {
    return Object.keys(obj)
  }
  
  const tamObj = (obj) => {
    const array = Object.entries(obj);
    return (array.length)
  }
  
  const valueList = (obj) => {
    return Object.values(obj)
  }
  
  const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});;
  
  const totalStudents = (obj) => {
    return lesson1.numeroEstudantes + lesson2.numeroEstudantes + lesson3.numeroEstudantes
  };
  
  const getValueByNumber = (obj, pos) => {
    const values = Object.values(obj);
    return values[pos];
  };
  
  const verifyPair = (obj, key, value) => {
    const array = Object.entries(obj);
    for (let i = 0; i < array.length; i += 1) {
      if (array[i][0] == key && array[i][1] == value) {
        return true
      } else {
        return false
      }
    }
  };
  
  addTurno(lesson2, 'turno', 'manhã');
  keyList(lesson3);
  valueList(lesson2);
  getValueByNumber(lesson2, 3);
  verifyPair(lesson3, 'materia', 'Matemática');
  