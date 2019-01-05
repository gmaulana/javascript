function hitung() {
    var a = 2;      

    console.log(typeof(a));
    
    if (a === 2) {          //jika hanya menggunakan == (sama dengan 2 buah) berbeda tipe datapun bisa benar, asalkan valuenya sama
        return "sukses"
    }else {
        return "Gagal"
    }
}

console.log(hitung());
