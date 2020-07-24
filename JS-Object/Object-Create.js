// 2.Function Declaration
const methodMahasiswa ={
  makan: function(porsi){
    this.energi += porsi;
    console.log(`Halo! ${this.nama}, selamat makan`);
  },

  main:  function(jam){
    this.energi -= jam;
    console.log(`Halo! ${this.nama}, selamat main`)
  }
};

function Mahasiswa(nama, energi){
  // Masukkan Parrent object 'methodMahasiswa'
  let mahasiswa = Object.create(methodMahasiswa);

  mahasiswa.nama = nama;
  mahasiswa.energi = energi;

  

  return mahasiswa;
}

// Intansiasi (pembuatan objek suatu kelas)
let sandika = Mahasiswa('sandika', 10);
let dodi = Mahasiswa('dodi', 10);

