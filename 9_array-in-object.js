function obj() {        //inisialisasi fungsi object
    var mobil = {       // pembuatan variabel mobil
     type : "Sedan",    //isi object ->
     harga : 2000000000,
     warna : "putih",   // <-
     tahun : [2001,2002,2003,2004,2005] //array didalam object
    }
    console.log(mobil);     //pemanggilan keseluruhan object
    console.log(mobil.harga);       //pemanggilan spesifik harga
    console.log("Tipe :", mobil.type, "Harga :", mobil.harga, "Warna :", mobil.warna);  //pemanggilan spesifik, tipe.harga, warna
    console.log("Array Dalam Object Panggil Tahun Semua :", mobil.tahun); //memanggil semua data array tahun
    console.log("Array Dalam Object Panggil Tahun Spesifik :", mobil.tahun[2]); //memanggil array ke 2(2003)
}

obj()   //pemanggilan fungsi object