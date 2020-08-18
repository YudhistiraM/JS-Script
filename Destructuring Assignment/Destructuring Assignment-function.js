// destructuring function return value

function penjumlahanPerkalian(a,b){
  return [a + b,  a * b];
}

const [jumlah, kali] = penjumlahanPerkalian(2, 3);
console.log(jumlah);
console.log(kali);

// menggunakan return object (nama mengacu pada properti sehingga urutan tidak terpengaruh)

function kalkulasi(a, b){
   return {
     tambah: a + b,
     kurang: a - b,
     kali: a + b,
     bagi: a/b
   }
}

const { bagi, tambah, kali, kurang } = kalkulasi(2, 3);
console.log(bagi);

// Destructing Funtion Arguments
const mhs1 = {
  nama: 'Dika Raditya',
  umur: 22,
  email: 'dika@gmail.com',
  nilai: {
    tugas: 80,
    uts: 85,
    uas:75
  }
}

function cetakMhs({nama, umur, nilai: {tugas, uts, uas}}){
  return `Halo, nama saya ${nama}, saya berumur ${umur} tahun, 
  dan nilai uas saya adalah ${uas}`;
}

console.log(cetakMhs(mhs1));
// console.log(mhs1);
