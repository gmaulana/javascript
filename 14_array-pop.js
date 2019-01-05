function arpop() {                      //pop adalah fungsi untuk menghapus array index terakhir di kasus ini "palgentong"                                 
    var indomie = ["goreng","soto","kari","palgentong"];

    console.log("indomie :",indomie);   //mencetak semua array indomie
    console.log("================");
    
    indomie.pop()                       //pop disini berfungsi untuk menghapus array index paling akhir
    return indomie
}

console.log("Indomie :",arpop());
