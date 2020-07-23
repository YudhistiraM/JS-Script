function kerjakanTugas(matakuliah, selesai){
// // Higher order function "Kerjakan Tugas" - memiliki callback
// // selesai disebut sebagai 'callback' - function sebagai argument
  console.log(`Mulai mengerjakan tugas ${matakuliah}...`);
  selesai();
}

function selesai(){
  alert('Selesai mengerjakan tugas');
}

kerjakanTugas('Pemrograman web', selesai);

// example II

function repeat(n, action){
  for(let i = 0; i < n; i++){
    action(i);
  }
}

repeat(3, console.log);
// repeat(3, alert);
