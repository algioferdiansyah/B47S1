// console.log ("hello student");
// alert("Good morning");
// document.write("batch 47");

// variable

// untuk menyimpan data:
// var
// let
// cons

// String
// Number: 987
// boolean: t/f

// biar bisa dideklarasi ulang dan bisa diubah value/datanya
// var gelas = "air putih";
// var gelas = "kopi";
// var gelas = "Teh";
// console.log(gelas);

// // tidk bisa dideklarasikan ulang, namun value/datanya bisa diubah
// let pemerintah ="PDIP";
// pemerintah ="nasdem";
// console.log(pemerintah);

// let Pemerintah ="golkar";
// console.log(Pemerintah);

// // tidak bisa dideklarasikan ulang dan tidak bisa diubah value/nilai datanya
// const rog ="asus";
// // rog ="lenovo";
// console.log(rog);

// gender ="attack helicopter";
// console.log(gender);

// data type
// let nama ="Algi"
// let umur = 15
// let isMarried = false 

// // nama saya abel umur saya 15 tahun
// console.log("nama saya Algi umur saya 15 tahun");
// console.log(`nama saya ${nama} umur saya ${umur}`);
// console.log("nama saya", nama, "umur saya", umur, "tahun");
// console.log("nama saya " + nama + " umur saya " + umur + " tahun");

// operator
// let x = 48;
// let y = "4";

// let result = x + y;

// console.log(result);

// condition
// jika nilai sama dengan atau lebih dari 75 maka lulus

// let nilai = 76;
// if (nilai >= 75) {
//     console.log("kamu Lulus!");
// } else {
//     console.log("kamu tidak lulus!");
// }

// function
// function hello() {
//     let x = 5;
//     let y = 10;

//     let result = x *  y;
//     console.log(result);
// }

// hello();

// function hello2(x, y) {
//     console.log(x);
//     console.log(y);

//     let result = x * y;
//     console.log(result);
// }

// hello2(5, 10);

// // cameloase = namaSayaAdalah

// function namaSaya(name) {
//     console.log(name);
// }

// namaSaya("Algi");

function submitData() {
    let name = document.getElementById("input-name").value;
    let email = document.getElementById("input-email").value;
    let phone = document.getElementById("input-phone").value;
    let subject = document.getElementById("input-subject").value;
    let message = document.getElementById("input-messages").value;

if (name == "") {
    return alert("Nama harus diisi");
} else if (email == "") {
    return alert("Nama harus diisi");
} else if (phone == "") {
    return alert ("Phone number Harus diisi");
} else if (subject == "") {
    return alert ("Subject harus dipilih");
} else if (message == "") {
    return alert ("MEssage harus diisi");
}

let emailreceiver = "algiferdian@gmail.com";

 let a = document.createElement("a");
 a.href = `mailto:${emailreceiver}?subject=${subject}&body=Hallo nama saya ${name}, ${message}. silahkan kontak saya di nomor ${phone}, Terima Kasih`;
a.click();

// let emailer = {
//     name. email. phone. subject. message. 
// }
}