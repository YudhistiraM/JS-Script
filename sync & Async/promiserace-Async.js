
let peserta1 = new Promise(resolve => setTimeout(resolve, 30, 'peserta1.'))
let peserta2 = new Promise((resolve, reject) => setTimeout(reject, 20, 'peserta2.'))
let peserta3 = new Promise(resolve => setTimeout(resolve, 50, 'peserta3.'))
let peserta4 = new Promise(resolve => setTimeout(resolve, 100, 'peserta4.'))
let peserta5 = new Promise(resolve => setTimeout(resolve, 90, 'peserta5.'))

Promise.race([peserta1, peserta2, peserta3, peserta4, peserta5])
  .then(val => console.log('Balapan selesai, Pemenangnya adalah :', val))
  .catch(err => console.log('Balapan dihentikan karena :', err));




// -----NEWRULES-------------Peraturan di ubah, walaupun ada yang terjatuh pertandingan tetap dijalankan --------------------

Promise.seriousRace = function(promises){
  let indexPromises = promises.map((p, index) => p.catch(() => {throw index}))

  // console.log(indexPromises);
  
  return Promise.race(indexPromises).catch(index => {
    let p = promises.splice(index, 1)[0]
    p.catch(e => console.log(e + 'terjatuh, ahh sudahlah lanjutkan saja'))
    return Promise.seriousRace(promises)
  })
}


let peserta1 = new Promise(resolve => setTimeout(resolve, 30, 'peserta1.'))
let peserta2 = new Promise((resolve, reject) => setTimeout(reject, 20, 'peserta2.'))
let peserta3 = new Promise(resolve => setTimeout(resolve, 50, 'peserta3.'))
let peserta4 = new Promise(resolve => setTimeout(resolve, 100, 'peserta4.'))
let peserta5 = new Promise(resolve => setTimeout(resolve, 90, 'peserta5.'))

Promise.seriousRace([peserta1, peserta2, peserta3, peserta4, peserta5])
  .then(val => console.log('Balapan selesai, Pemenangnya adalah :', val))
  .catch(err => console.log('Balapan dihentikan karena :', err));
