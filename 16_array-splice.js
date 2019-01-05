function spl() {        //splice adalah fungsi untuk menambahkan/menyisipkan data pada array dengan spesifik karena memasukan tergantung index yang kita inginkan
    var kota = ['Bandung','Jakarta','Jogja','Surabaya','Padang']    //array awal
    console.log(kota);
    kota.splice(3,0,'Palembang')    //"3" disini berarti menambahkan data pada index ke 3. dan "0" disini berarti data setelahnya tidak dihapus
    return kota
}

console.log(spl());
