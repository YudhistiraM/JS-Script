// spread operator : memecah (expand/unpack) iterables menjadi single element


const mhs = ['sandika', 'dodi', 'erik'];

console.log(...mhs[0]);

// fungsi:
// menggabungkan dua array 
const dosen = ['ade', 'satya', 'dewi'];

const orang = [...mhs, ...dosen];

console.log(orang);

// meng-copy array
const mhs = ['sandika', 'dodi', 'erik'];

const mhs1 = [...mhs];
mhs1[0] ='fajar';

console.log(mhs);
console.log(mhs1);

