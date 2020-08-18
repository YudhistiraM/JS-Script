const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];

// Case: fillter angka >= 3

const newAngka = [];

//cara1

for (let i = 0; i < angka.length; i++){
    if (angka[i] >= 3){
    newAngka.push(angka[i]);
     }
}

console.log(newAngka);

//cara 2 (use filter)
const newAngka = angka.filter((a) => a >= 3);

console.log(newAngka);

// Map
// Case: Kalikan semua element array
const newAngka = angka.map(a => a * 2);

console.log(newAngka);


// Reduce : Melakukan sesuatu terhadap seluruh elemntnya
// Case : Jumlahkan seluruh element pada array
const newAngka = angka.reduce((accumulator, currentValue) => 
 accumulator + currentValue);

console.log(newAngka);

// Method Chaining //
// case : cari angka > 5, kalikan 3, jumlahkan

const hasil = angka.filter(a => a > 5) //8,9,9
  .map(a => a * 3) //24, 27, 27
  .reduce((acc, cur) => acc + cur); //78

  console.log(hasil);
