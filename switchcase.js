var tanggal = '28'
var bulan = '5'
var tahun = '1990'


// switch(tanggal) {
//   case 1: { console.log ('1' + bulan + tahun); break; }
//   case 2: { console.log ('2' + bulan + tahun); break; }
//   case 3: { console.log ('3' + bulan + tahun); break; }
//   case 4: { console.log ('4' + bulan + tahun); break; }
//   case 5: { console.log ('5' + bulan + tahun); break; }
//   case 6: { console.log ('6' + bulan + tahun); break; }
//   case 7: { console.log ('7' + bulan + tahun); break; }
//   case 8: { console.log ('8' + bulan + tahun); break; }
//   case 9: { console.log ('9' + bulan + tahun); break; }
//   case 10: { console.log ('10' + bulan + tahun); break; }
//   case 11: { console.log ('11' + bulan + tahun); break; }
//   case 12: { console.log ('12' + bulan + tahun); break; }
//   case 13: { console.log ('13' + bulan + tahun); break; }
//   case 14: { console.log ('14' + bulan + tahun); break; }
//   case 15: { console.log ('15' + bulan + tahun); break; }
//   case 16: { console.log ('16' + bulan + tahun); break; }
//   case 17: { console.log ('17' + bulan + tahun); break; }
//   case 18: { console.log ('18' + bulan + tahun); break; }
//   case 19: { console.log ('19' + bulan + tahun); break; }
//   case 20: { console.log ('20' + bulan + tahun); break; }
//   case 21: { console.log ('21' + bulan + tahun); break; }
//   case 22: { console.log ('22' + bulan + tahun); break; }
//   case 23: { console.log ('23' + bulan + tahun); break; }
//   case 24: { console.log ('24' + bulan + tahun); break; }
//   case 25: { console.log ('25' + bulan + tahun); break; }
//   case 26: { console.log ('26' + bulan + tahun); break; }
//   case 27: { console.log ('27' + bulan + tahun); break; }
//   case 28: { console.log ('28' + bulan + tahun); break; }
//   case 29: { console.log ('29' + bulan + tahun); break; }
//   case 30: { console.log ('30' + bulan + tahun); break; }
//   case 31: { console.log ('31' + bulan + tahun); break; }
//   default : { console.log('Tanggal tidak tersedia'); }
// }
if (tanggal < 1 || tanggal > 31) {
  console.log('Tanggal Tidak Tersedia')
} else if (bulan < 1 || bulan > 12) {
  console.log('Salah bulan')
} else if (tahun < 1900 || tahun > 2200) {
  console.log('Salah tahun')
} else {
  switch(bulan) {
  case '1': { bulan = ' Januari '; break; }
  case '2': { bulan = ' Februari '; break; }
  case '3': { bulan = ' Maret '; break; }
  case '4': { bulan = ' April '; break; }
  case '5': { bulan = ' Mei '; break; }
  case '6': { bulan = ' Juni '; break; }  
  case '7': { bulan = ' Juli '; break; }
  case '8': { bulan = ' Agustus '; break; }
  case '9': { bulan = ' September '; break; }
  case '10': { bulan = ' Oktober '; break; }
  case '11': { bulan = ' November '; break; }
  case '12': { bulan = ' Desember '; break; }
  default: {
    tanggal = 'Bulan tidak tersedia'
    bulan = ''
    tahun = ''
  }
  }
}

console.log (tanggal+bulan+tahun)
