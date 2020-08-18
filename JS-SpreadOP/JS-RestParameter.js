// REST PARAMETER : merepresentasikan argument pada function dgn jumlah yg tdk terbatas menjadi sebuah array

function myFunc(...args){
// return args;
// return Array.from(arguments);
	return [...arguments];
}

console.log (myFunc(1, 2, 3, 4, 5));

function jumlahkan(...angka){
   let total = 0;
   for(const a of angka){
     total += a;
   }

   return total;

}

console.log(jumlahkan(1, 2, 3, 4, 5));

// array destructering

const kelompok1 = ['dika', 'dewi', 'erik', 'fajar']
const [ketua, wakil,...anggota] = kelompok1;
console.log(anggota);

// Object destruc

const team = {
   pm: 'dika',
   frontend: 'doddy',
   ux: 'dewi',
   decOps: 'dina'
}

const {pm,...myTeam} = team;
console.log(myTeam);

// Filltering

function fillterBy(type, ...values){
  return values.filter(v => typeof v === type)
}

// console.log(type);
console.log(fillterBy('number', 1, 2, 'sandika', false, 10, true, 'deddy'));
