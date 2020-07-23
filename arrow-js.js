// Function Expression

// Implisit Return (if just have one arguments)
const tampilNama = nama => `Halo, ${nama}`;


console.log(tampilNama('sandika'));


const tampilNama = (nama, waktu) => {
   return `Halo, ${nama}, selamat ${waktu}`;
 }

console.log(tampilNama('sandika', 'Malam'));



//if you don't need arguments

const tampilNama = () => `Hello World`;
console.log(tampilNama());


//Example Case

let mahasiswa = ['sandika', 'dewi', 'indra'];

let jmlhHuruf = mahasiswa.map(nama => ({nama: nama, jmlhHuruf: nama.length}));

console.table(jmlhHuruf);
