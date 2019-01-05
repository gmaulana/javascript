function obj() {        //inisialisasi fungsi object
    var mobil = {       // pembuatan variabel mobil
     type : "Sedan",    //isi object ->
     harga : 2000000000,
     warna : "putih",   // <-
    }
    console.log(mobil);     //pemanggilan keseluruhan object
    console.log(mobil.harga);       //pemanggilan spesifik harga
    console.log("Tipe :", mobil.type, "Harga :", mobil.harga, "Warna :", mobil.warna);  //pemanggilan spesifik, tipe.harga, warna
}

obj()   //pemanggilan fungsi object