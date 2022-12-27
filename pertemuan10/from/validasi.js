function pesan() {
    console.log("hello");
    let nama = document.getElementById('nama').value;
    let email = document.getElementById('email').value;
    let waktu = document.getElementById('waktu').value;
    let tujuan = document.getElementById('tujuan').value;
    let tiket = document.getElementById('tiket').value;

    if (nama == '') {
        document.getElementById('errorname').innerHTML = 'Masukkan nama anda';
        document.getElementById('errorname').style = 'color: red';
    }
    
    if (email == '') {
        document.getElementById('erroremail').innerHTML = 'Masukkan email anda';
        document.getElementById('erroremail').style = 'color: red';
    }

    if (waktu == '') {
        document.getElementById('errorname').innerHTML = 'Pilih jam keberangkatan';
        document.getElementById('errorname').style = 'color: red';
    }

    if (tujuan == '') {
        document.getElementById('errorname').innerHTML = 'Masukan tujuan anda';
        document.getElementById('errorname').style = 'color: red';
    }

    if (tiket == '') {
        document.getElementById('errorname').innerHTML = 'Pilih jumlah tiket anda';
        document.getElementById('errorname').style = 'color: red';
    }

    else {

        document.getElementById('inputHasil').innerHTML = "Hasil Validasi";
        document.getElementById('inputNama').innerHTML = "Nama anda : "+ nama;
        document.getElementById('inputEmail').innerHTML = "Email anda : "+ email;
        document.getElementById('inputWaktu').innerHTML = "Jam keberangkatan anda : "+waktu;
        document.getElementById('inputTujuan').innerHTML = "Tujuan keberangkatan anda "+tujuan;
        document.getElementById('inputTiket').innerHTML = "Tiket yang anda pesan : "+tiket;
    }
}