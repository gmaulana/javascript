function spl() {        //selain untuk menyisipkan data splice juga dapat berfungsi untuk menghapus data pada array, dengan index yang spesifik
    var kota = ['Bandung','Jakarta','Jogja','Surabaya','Padang']    //array awal
    console.log(kota);
    kota.splice(1,1)    //"1" diawal berfungsi menghapus index ke 1 pada array, dan "1" ke 2 berfungsi untuk menghapus hanya 1 data
    console.log(kota);
    kota.splice(1,2)    //"1" diawal berfungsi menghapus index ke 1 pada array, dan "2"  berfungsi untuk menghapus 2 data pada array
    return kota
}

console.log(spl());
