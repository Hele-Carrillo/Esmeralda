// Selecciona todos los botones con la clase 'btn'
constante botones = documento.consultaSelectorAll('.btn');

botones.para cada uno(boton =>{
  boton.añadirListener de eventos('hacer clic',() => {
    boton.lista de clases.agregar('hizo clic');
  
  establecer tiempo de espera (()=> {
    boton.lista de clases.agregar('hizo clic');
  }, 300);
});
});

