// Realizzare una todolist con Vue. La lista deve essere già popolata con alcuni elementi e si deve dare la possibilità di aggiungere nuovi item e di cancellarli.
// Bonus 1): permettere ai file cancellati di finire in un'area 'cestino' dove possono essere eliminati del tutto oppure ripristinati.
// Bonus 2): Dare la possibilità di eliminare tutti i file dal cestino
var app = new Vue({
  el: '#list',
  data: {
    impegni: ['Andare al lavoro','Fare la spesa', 'Andare in piscina', 'Comprare nuovi vestiti', 'Guardarsi un film'],
    impegniEliminati: [],
    nuovoImpegno: ''
  },
  methods: {
    aggiungiImpegno(){
      var primaLettera = this.nuovoImpegno.charAt(0).toUpperCase();
      var restoParola = this.nuovoImpegno.substring(1).toLowerCase();
      this.nuovoImpegno = primaLettera + restoParola;
      this.impegni.push(this.nuovoImpegno);
      this.nuovoImpegno = '';
    },
    eliminaImpegno (index){
      this.impegniEliminati.push(this.impegni[index]);
      // console.log(this.impegniEliminati);
      this.impegni.splice(index, 1);
    },
    ripristinaImpegno(index){
      this.impegni.push(this.impegniEliminati[index]);
      this.impegniEliminati.splice(index, 1);
    },
    cancellaImpegno(index){
      this.impegniEliminati.splice(index, 1);
    },
    cancellaTutto(){
      this.impegniEliminati.splice(0);
    }
  }
});
