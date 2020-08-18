// Array
const coba = ['satu', 'dua', 'tiga'];

const [a, b, c] = coba;

console.log();

// object
const mhs = {
  nama: 'sandika',
  umur: 33,
  email: 'dika@gmail.com'
};

const {nama, umur, email} = mhs;
console.log(nama);
console.log(umur);
console.log(email);

// swap items (menukar item)
let a = 1;
let b = 2;
console.log(a);

[a, b] = [b, a];
console.log(a);

// return value pada function

function coba(){
   return [1, 2];
}

const [a, b] = coba();
console.log(a);


// Rest Parameter
const [a, ...values] = [1, 2, 3];

console.log(values);

// Destructuring Object
const mhs ={
   nama: 'sandika',
   umur: 33
}

const {nama, umur} = mhs;
console.log(nama);


// assigment tanpa deklarasi object
({nama, umur} ={nama: 'sandika', umur: 33 });

console.log(umur);

// Asigment ke variabel baru
const mhs ={
   nama: 'sandika',
   umur: 33
}

const {nama: n, umur:u} = mhs;
console.log(n);

// memberikan Default value
const mhs ={
  nama: 'sandika',
  umur: 33,
  email: 'sand@gmail.com'
}

const {nama, ...values} = mhs;
console.log(values);

