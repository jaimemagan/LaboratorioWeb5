const estanteria = {
  libros: [
      {
        nombre: 'El caballero oscuro',
        autor: 'Frank Miller',
        leido: false
      },
      {
        nombre: 'El mundo amarillo',
        autor: 'Albert Espinosa',
        leido: false
      },
      {
        nombre: 'Harry Potter y el caliz de fuego',
        autor: 'J.K. Rowling',
        leido: true
      },
      {
        nombre: 'El ingenioso hidalgo Don Quijote de la Mancha',
        autor: 'Miguel de Cervantes',
        leido: false
      },
      {
        nombre: 'Berserk',
        autor: 'Kentaro Miura',
        leido: true
      },
      {
        nombre: 'Iliada',
        autor: 'Homero',
        leido: false
      }
  ],
  log() {
      const { libros } = this;
      let salidaHTML = "";
      for (const libro of libros) {
        const prefijo = libro.leido ? 'Ya has' : 'Aun no has';
        const resultado = `${prefijo} leído ${libro.nombre} de ${libro.autor}`;
        console.log(resultado);
        salidaHTML += resultado + "<br>";
      }
      document.getElementById("salida").innerHTML = salidaHTML;
  },
  sugerencia() {
    const librosNoLeidos = this.libros.filter(libro => !libro.leido);
    const indiceRandom = Math.floor(librosNoLeidos.length * Math.random());
    const elementoRandom = librosNoLeidos[indiceRandom];
    const sugerencia = `Te sugiero ${elementoRandom.nombre} de ${elementoRandom.autor}`;
    console.log(sugerencia);
    document.getElementById("salida").innerHTML += "<br><br><strong>" + sugerencia + "</strong>";
  }
};

// Mostramos todo al cargar
estanteria.log();
estanteria.sugerencia();