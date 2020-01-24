/**
 * Encrypt Word
 * 
 * Function encryptWord menerima input berupa string yang akan menghasilkan sebuah string baru,
 * untuk menghasilkan string barunya kita harus merubah string awalnya menjadi array multidimensi
 * dimana setiap barisnya hanya boleh diisi oleh 4 karakter
 * setelah berhasil membuat array multidimensinya 
 * maka proses pembuatan outputnya mengambil karakter dari paling kiri atas lalu kebawah hingga ujung array
 * lalu kembali keatas pada kolom selanjutnya mulai dari baris pertama
 * 
 * 
 * Input :
 * feedthedog
 * 
 * Proses:
 * [
 *   [ 'f', 'e', 'e', 'd' ],
 *   [ 't', 'h', 'e', 'd' ],
 *   [ 'o', 'g' ]
 * ]
 * 
 * 
 * Output : 
 * ftoehgeedd
 * 
 * 
 * RULES 
 * 1. TIDAK MENGGUNAKAN MAGIC. ex: split() slice() splice() map() reduce() etc.
 * 
 */
function encryptWord(kata) {
  // Your code here
  var k = 0, l=0
  var n = kata.length/4
  var array = []
  for (var i=1; i<(n+1); i++){
    var arrBaris = []
    for (var j=0; j<4;j++){
      if(l>=kata.length){break}
      arrBaris.push(kata[l])
      l++
      //console.log(arrBaris)
    }
    arr = arrBaris.slice()
    array[k]= arr
    k++
    
  }
  //console.log(array)
  var newArray =[]
  for (var i=0; i<4; i++){
    for (var j=0; j<k; j++){
      if(array[j][i]===undefined){break}
      //console.log(array[j][i]+'<<<ji')
      newArray.push(array[j][i])
      //console.log(newArray)
    }
  }
  

  return newArray.join('')
}
console.log(encryptWord("haveaniceday"))
//haeandviaecy
console.log(encryptWord("feedthedog"))
//ftoehgeedd
console.log(encryptWord("sekarangtahunduaribuduapuluh"))
//srtnrdueaadiulknhubauaguauph