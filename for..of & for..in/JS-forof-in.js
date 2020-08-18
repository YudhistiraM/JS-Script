// for ... of

// Array
const mhs = ['Sandika', 'Doddy', 'Erik'];

for ( const m of mhs ){
   console.log(m);
}

// string 
const nama = 'Sandika';
for (const n of nama){
   console.log(n);
}

 for (const m, of mhs){
   console.log(i);
}

// index for...of
const mhs = ['Sandika', 'Doddy', 'Erik'];

for ( const [i, m] of mhs.entries()){
  console.log(`${m} adalah mahasiswa ke-${i + 1}`);
}


// for..in (Porperti pada object)
const mhs = {
  nama: 'sandika',
  umur: 33,
  email: 'dika@gmail.com'
}

for (n in mhs){
   console.log(mhs[n]);
}

