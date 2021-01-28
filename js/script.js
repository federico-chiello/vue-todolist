// Realizzare una todolist con Vue. La lista deve essere già popolata con alcuni elementi e si deve dare la possibilità di aggiungere nuovi item e di cancellarli.
// Bonus 1): permettere ai file cancellati di finire in un'area 'cestino' dove possono essere eliminati del tutto oppure ripristinati.
// Bonus 2): Dare la possibilità di eliminare tutti i file dal cestino
var app = new Vue({
  el: '#list',
  data: {
    impegni: ['Andare a lavoro','Fare la spesa', 'Andare in piscina', 'Comprare nuovi vestiti', 'Guardarsi un film']
  }

});
