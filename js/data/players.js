// EDITAR AQUÍ: jugadores, dorsales, posiciones y datos de los perfiles.
// Las fotos individuales permanecen en null hasta recibir fotografías verificadas.
window.FDC21 = window.FDC21 || {};
window.FDC21.players = [
  {id:'martin-falla', name:'Martín Falla', number:13, position:'Arquero', category:'arqueros', active:true, captain:false, image:null, historyGoals:null},
  {id:'jairo-martinez', name:'Jairo Martínez', number:26, position:'Defensa', category:'defensas', active:true, captain:false, image:null, historyGoals:null},
  {id:'mathias-montesinos', name:'Mathias Montesinos', number:19, position:'Defensa', category:'defensas', active:true, captain:false, image:null, historyGoals:10},
  {id:'bruno-diaz', name:'Bruno Díaz', number:4, position:'Defensa / lateral', category:'defensas', active:true, captain:false, image: 'assets/jugadores/bruno-diaz.png', historyGoals:4},
  {id:'diego-canote', name:'Diego Cañote', number:6, position:'Volante', category:'mediocampistas', active:true, captain:false, image:null, historyGoals:6},
  {id:'jhovan-samayoa', name:'Jhovan Samayoa', number:16, position:'Volante', category:'mediocampistas', active:true, captain:false, image:null, historyGoals:5},
  {id:'daniel-manco', name:'Daniel Manco', number:8, position:'Volante', category:'mediocampistas', active:true, captain:false, image:null, historyGoals:2},
  {id:'sebastian-jayo', name:'Sebastián Jayo', number:7, position:'Mediocampista / delantero', category:'delanteros', active:true, captain:false, image:null, historyGoals:6},
  {id:'sebastian-montoro', name:'Sebastián Montoro', number:10, position:'Volante creativo', category:'mediocampistas', active:true, captain:false, image:null, historyGoals:1},
  {id:'edu-bravo', name:'Edu Bravo', number:18, position:'Delantero', category:'delanteros', active:true, captain:false, image:null, historyGoals:1},
  {id:'johnny-carrero', name:'Johnny Carrero', number:9, position:'Delantero centro', category:'delanteros', active:true, captain:false, image: 'assets/jugadores/enzo-carrero.png', historyGoals:19},
  {id:'enzo-carrero', name:'Enzo Carrero', number:11, position:'Delantero / volante ofensivo', category:'delanteros', active:true, captain:true, image:null, historyGoals:6},
  {id:'fabricio-buenano', name:'Fabricio Buenaño', number:17, position:'Defensa', category:'defensas', active:false, captain:false, image:null, historyGoals:2},
  {id:'fabricio-morote', name:'Fabricio Morote', number:14, position:'Volante', category:'mediocampistas', active:false, captain:false, image:null, historyGoals:1},
  {id:'fabrizio-quispe', name:'Fabrizio Quispe', number:null, position:'Exjugador', category:'mediocampistas', active:false, captain:false, image:null, historyGoals:1}
];
window.FDC21.staff = [
 {name:'Max Santa Cruz',role:'Director técnico',label:'Dirección técnica'},
 {name:'Fernando Pérez',role:'Videoanalista',label:'Análisis de juego'}
];
