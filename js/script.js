// Realizzare una todolist con Vue. La lista deve essere già popolata con alcuni elementi e si deve dare la possibilità di aggiungere nuovi item e di cancellarli.
// Bonus 1): permettere ai file cancellati di finire in un'area 'cestino' dove possono essere eliminati del tutto oppure ripristinati.
// Bonus 2): Dare la possibilità di eliminare tutti i file dal cestino
var app = new Vue({
  el: '#list',
  data: {
    impegni: ['Andare al lavoro','Fare la spesa', 'Andare in piscina', 'Comprare nuovi vestiti', 'Guardarsi un film'],
    impegniEliminati: [],
    nuovoImpegno: '',
    cambia: ''
  },
  methods: {
    //  Area dove inseriamo i dati
    aggiungiImpegno(){
      var primaLettera = this.nuovoImpegno.charAt(0).toUpperCase();
      var restoParola = this.nuovoImpegno.substring(1).toLowerCase();
      this.nuovoImpegno = primaLettera + restoParola;
      if (this.nuovoImpegno.length > 4) {
        this.impegni.push(this.nuovoImpegno);
      } else {
        alert('Hai inserito una parola troppo corta. La lunghezza deve superare i 4 caratteri.');
      }
      this.nuovoImpegno = '';
    },
    // Lista degli elementi
    modificaImpegno(index){
      this.cambia = prompt('Modifica ciò che hai inserito.', this.impegni[index]);
      var primaLettera = this.cambia.charAt(0).toUpperCase();
      var restoParola = this.cambia.substring(1).toLowerCase();
      this.cambia = primaLettera + restoParola;
      this.impegni.splice(index, 1, this.cambia);
    },
    cestinaImpegno (index){
      this.impegniEliminati.push(this.impegni[index]);
      // console.log(this.impegniEliminati);
      this.impegni.splice(index, 1);
    },
     cestinaTutto(){
      this.impegniEliminati.push(...this.impegni);
      this.impegni = [];
    },
    // Lista degli elementi eliminati
    ripristinaImpegno(index){
      this.impegni.push(this.impegniEliminati[index]);
      this.impegniEliminati.splice(index, 1);
    },
    ripristinaTutto(){
      this.impegni.push(...this.impegniEliminati);
      this.impegniEliminati = [];
    },
    cancellaImpegno(index){
      this.impegniEliminati.splice(index, 1);
    },
    cancellaTutto(){
      this.impegniEliminati.splice(0);
    }
  }
});

// Implementazioni
// (1) inserire il nuovo todo;
// (2) modificare un todo;
// (3) spostare il todo nel cestino;
// (4) pulsante per spostare tutti i todo nel cestino;
// (5) ripristinare dal cestino un todo;
// (6) eliminare definitivamente un todo dal cestino;
// (7) pulsante per eliminare tutti i todo del cestino.
