var nama = 'Yosephine';
var peran = 'Tabib';
var greeting = ''
//cek nama tidak kosong
if (nama !== '') { //true
  console.log('Selamat datang di Dunia Proxytia, ' + nama)
  //cek peran jika dia Ksatria
  if (peran === 'Ksatria') {
    console.log('Halo Ksatria, ' + nama + ',  kamu dapat menyerang dengan senjatamu!')
  }
  //cek peran jika dia Tabib
  else if (peran === 'Tabib') {
    console.log('Halo Tabib, ' + nama + ', kamu akan membantu temanmu yang terluka.')
  }
  //cek peran jika dia Penyihir
  else if (peran === 'Penyihir') {
    console.log('Halo Penyihir, ' + nama + ', ciptakan keajaiban yang membantu kemenanganmu!')
  }
  //bila peran tidak dipilih
  else {
    console.log('Pilih Peranmu untuk memulai game.')
  }

}
// kondisi nama kosong
else {
  console.log('nama harus diisi')
}














// case 1: { console.log(var nama1) + 'Peran1' + ''}



//var nama2 = 'Dirga'
//var peran2 = 'Tabib' {
  //console.log ('Hallo Tabib Dirga, kamu dapat membantu temanmu yang terluka!');
//}


//var nama3 = 'Sin'
//var peran3 = 'Penyihir' {
  //console.log ('Hallo Penyihir Sin, ciptakan keajaiban yang membantu kemenanganmu!')
//}


