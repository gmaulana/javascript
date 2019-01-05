function nilaiakhir() {     //inisialisasi fungsi
    var nilai = 10;         //membuat variabel nilai, dengan value 10

    switch (nilai) {        //fungsi switch case
        case 10:            //case pertama jika memenuhi case ini, maka akan eksekusi case ini
            console.log("Sangat Bagus");
            break;
        case 8:
            console.log("Cukup Bagus");
            break;
        case 6:
            console.log("Bagus");
            break;
        default:            //jika tidak ada dari semua  case, maka akan eksekusi default ini
            console.log("Lainnya");
            break;
    }
}

nilaiakhir()               //panggil fungsi nilaiakhir