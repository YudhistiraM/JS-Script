//1. Objaect Literal

let mahasiswa = {
  nama: 'sandika',
  energi: 10,
  makan: function(porsi){
    this.energi += porsi;
    console.log(`Halo! ${mahasiswa.nama}, selamat makan`);
  }
}

// 2.Function Declaration

function Mahasiswa(nama, energi){
  let mahasiswa = {};
  mahasiswa.nama = nama;
  mahasiswa.energi = energi;

  mahasiswa.makan = function(porsi){
    this.energi += porsi;
    console.log(`Halo! ${mahasiswa.nama}, selamat makan`);
  }

  mahasiswa.main = function(jam){
    mahasiswa.energi -= jam;
    console.log(`Halo! ${mahasiswa.nama}, selamat main`)
  }

  return mahasiswa;
}

// Intansiasi (pembuatan objek suatu kelas)
let sandika = Mahasiswa('sandika', 10);
let dodi = Mahasiswa('dodi', 10);

// 3. cara constructor function

function Mahasiswa(nama, energi){
  this.nama = nama;
  this.energi = energi;

  this.makan = function(porsi){
    this.energi += porsi;
    console.log(`Halo! ${this.nama}, selamat makan`);
  }

  this.main = function(jam){
    this.energi -= jam;
    console.log(`Halo! ${this.nama}, selamat main`)
  }

}

let sandika = new Mahasiswa('sandika', 10);
