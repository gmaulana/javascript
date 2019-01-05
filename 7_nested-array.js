function nestedarray() {    //nested array adalaah array yang didalamnya ada array lagi
    var nested = [["AB", "AC", "AD"],["Gilang", "Maulanana", "Udin"],[20, 21, 22]]  //array didalam array

    console.log("Banyak Data :",nested.length);         //mengambil jumlah data array
    console.log("Array 0, Index 1 : ",nested[0][1]);    //mengambil array 0 index 1
    console.log("Array 1 Index 2 :",nested[1][2]);        //mengambil array 1 index 2
    console.log("Array 2 Index 0 :",nested [2][0]);       //mengambil array 2 index 0
}

nestedarray()       //panggil fungsi