function pus() {            //push adalah sebuah fungsi untuk menambahkan data pada array
    var data = [1,2,3,5,7,3,5,8]       //array sebelum di tambah data
    console.log(data);                  //mencetak array sebelum ditambah data
    data.push("Bandung")              //menambahkan data "Bandung" dengan fungsi push  
    return data
}

console.log(pus());
