//NOMOR 1
function shoutOut () {
console.log ('Halo Function!')
}

console.log (shoutOut ())

//NOMOR 2
var num1 = 5
var num2 = 6

function calculateMultiply (num1, num2) {
  var calcResult
  calcResult = num1*num2
  return calcResult
}

var hasilPerkalian = calculateMultiply(num1,num2);
console.log(hasilPerkalian)

//NOMOR 3
var name = "Yoyo"
var age = 28
var address = "Jln. Ploso Timur 1B No. 25, Surabaya"
var hobby = "Fotografi"

var name, age, address, hobby

function processSentence (name,age,address,hobby) {
  var sentenceResult
  console.log ('Nama Saya ' + name + ',umur Saya '+ age + ',alamat Saya ' + address + ',Hobby Saya ' + hobby)
}


var fullSentence = processSentence(name,age,address,hobby);
console.log(fullSentence ) 





