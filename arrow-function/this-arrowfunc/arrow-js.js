// // constructor function

const Mahasiswa = function (){
// constructor function tidak dapat menggunakan arrow function, kecuali method
  this.nama = 'sandika';
  this.umur = 33;

  this.sayHello = function () {
    console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun.`);
  }

  setInterval(() => {
    console.log(this.umur++)
  }, 500);
}

const sandika = new Mahasiswa();

// Object literal
// arrow function tidak memiliki fungsi 'this'
const mhs1 = {
  nama: 'sandika',
  umur: 33,

// if you need aprove it, change in method with 'arrow function'
  sayHello : function () {
    console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun.`)
  }
}

mhs1.sayHello();



