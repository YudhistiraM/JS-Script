// Object Version of Class

class Mahasiswa{
  constructor(nama, energi){
    this.nama = nama;

    this.energi = energi;
  }

 makan(porsi){
  this.energi += porsi;

  return `Halo ${this.nama}, Selamat Makan`;
}

main(jam){
  this.energi -= jam;

  return `Halo ${this.nama}, Selamat Main`;
}

tidur(jam){
  this.energi += jam * 2;

  return `Halo ${this.nama}, Selamat Tidur`;
}

}

let sandika = new Mahasiswa('sandika', 10);

let dodi = new Mahasiswa('dodi', 10);
