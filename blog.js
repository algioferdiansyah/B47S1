// let namaSiswa1 = "Tamara";
// let namaSiswa2 = "Robby";
// let namaSiswa3 = "Puja";

// console.log(namaSiswa1);
// console.log(namaSiswa2);
// console.log(namaSiswa3);

// // array
// let namaSiswa = ["Tamara", "Robby", "Puja", "Rendi"];
// console.log(namsiswa);
// console.log(namaSiswa[0]);
// console.log(namaSiswa[2]);

// let nama ="Algi";
// let alamat ="Bandung";
// let umur = 23;

// console.log(nama);
// console.log(alamat);
// console.log(umur);

// // object
// let dataPersonal1 = {
//     nama: "Algi",
//     alamat: "Bandung",
//     umur: 23,
// }

// let dataPersonal2 = {
//     nama: "Heri",
//     alamat: "Bandung Barat",
//     umur: 22,
// }

// let dataPersonal3 = {
//     nama: "Ferdi",
//     alamat: "Bandung Selatan",
//     umur: 20,
// }

// let dataPersonal4 = {
//     nama: "Ferdiansyah",
//     alamat: "Bandung Timur",
//     umur: 19,
// }

// console.log(dataPersonal1);
// console.log(dataPersonal2);
// console.log(dataPersonal3);
// console.log(dataPersonal4);
// console.log(datPersonal2.nama);

// array of object
// let dataCaleg = [
//     {nama: "Joko Widodo", alamat:"Solo"},
//     {nama: "Puan", alamat:"Jakarta Barat"},
//     {nama: "Prabowo", alamat:"Semarang"},
// ];

// console.log(dataCaleg);

let detailBlog = []

function addBlog (event) {
    event,preventDefault();

    let title =document.getElementById("input-blog-detail").value;
    let content = document.getElementById("input-blog-content").value;
    let image = document.getElementById("input-blog-image").value;

    // untuk membuat url gambar, agar tampil
    image = URL.createObjectURL(image[0]);
    console.log(image);

    let blog - {
        title,
        content,
        page,
        postAt: "19 May 2022"
    }
}

