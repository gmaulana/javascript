function hapusdepan() {                         //shift adalah fungsi untuk menghapus array index pertama
    var tahun = [2001,2002,2003,2004,2005];

    console.log(tahun);                 //mencetak array tahun
    console.log("=================");   
    
    var tahun2 = tahun.shift()          //tahun.shift bergfungsi menghapus array index pertama, dalam kasus ini 2001
    console.log(tahun2);                //mencetak array yang sudah dihapus di atas
    
    return tahun                        
}

console.log(hapusdepan());
