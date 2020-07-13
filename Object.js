// Pengelolaan Object ANGKOT

// cara constructor

function Angkot(sopir, trayek, penumpang, kas){
//   Properti
  this.sopir = sopir;
  this.trayek = trayek;
  this.penumpang = penumpang;
  this.kas = kas;
  
//Method   
  this.penumpangNaik = function(namaPenumpang){
    this.penumpang.push(namaPenumpang);
    return this.penumpang;
  }
  
  this.penumpangTurun = function(namaPenumpang, bayar){
    if(this.penumpang.length === 0){
      alert('angkot masih kosong!');
      return false;
    }
    
    for(var 1 = 0; i < this.penumpang.length; i++){
      if (this.penumpang[i] == namaPenumpang){
        this.penumpang[i] = undifined;
        this.kas += bayar;
        return this.penumpang;
      }
    }
  }
  
}

var angkot1 = new Angkot(
  'Dina', ['cicaheum', 'cibiru'], [], 0
);

var angkot2 = new Angkot(
  'tom', ['antapani', 'ciroyom'], [], 0
);

//To Access Ketik 



