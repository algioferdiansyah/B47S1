// let namaSiswa1 = "Tamara";
// let namaSiswa2 = "Robby";
// let namaSiswa3 = "Puja";

// console.log(namaSiswa1);
// console.log(namaSiswa2);
// console.log(namaSiswa3);

// // // array
// let namaSiswa = ["Tamara", "Robby", "Puja", "Rendi"];
// console.log(namaSiswa);
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
//     alamat: "Bandung Utara",
//     umur: 23,
// }

// let dataPersonal2 = {
//     nama: "Pupu",
//     alamat: "Bandung Barat",
//     umur: 22,
// }

// let dataPersonal3 = {
//     nama: "Siti",
//     alamat: "Bandung Selatan",
//     umur: 20,
// }

// let dataPersonal4 = {
//     nama: "Rizal",
//     alamat: "Bandung Timur",
//     umur: 19,
// }

// console.log(dataPersonal1);
// console.log(dataPersonal2);
// console.log(dataPersonal3);
// console.log(dataPersonal4);
// console.log(dataPersonal2.umur);

// array of object
// let dataCaleg = [
//     {nama: "Joko Widodo", alamat:"Solo"},
//     {nama: "Puan", alamat:"Jakarta Barat"},
//     {nama: "Prabowo", alamat:"Semarang"},
// ];

// console.log(dataCaleg);
// console.log(dataCaleg[1]);
// console.log(dataCaleg[2].nama);

//tempat menyimpan inputannya di:
//dataBlog adalah variabel
let dataBlog = []

function addBlog(event) {
    event.preventDefault();

    let title = document.getElementById("input-blog-title").value;
    let content = document.getElementById("input-blog-content").value;
    let image = document.getElementById("input-blog-image").files;

    // untuk membuat url gambar agar tampil
    image = URL.createObjectURL(image[0]);
    console.log(image);

    let blog = {
        title,
        content,
        image,
        postAt: new Date(),
        author: "Algi Ferdiansyah",
    };

    dataBlog.push(blog);
    console.log(dataBlog);

    renderBlog();
}

function renderBlog() {
    document.getElementById("contents").innerHTML = "";

    for (let index = 0; index < dataBlog.length; index++) {
        console.log(index);
    }

    for (let index = 0; index < dataBlog.length; index++) {
        document.getElementById("contents").innerHTML +=
            `
            <div class="blog-list-item">
                    <div class="blog-image">
                        <img src="${dataBlog[index].image}" alt="blog-image"/>
                    </div>
                    <div class="blog-content">
                        <div class="btn-group">
                            <button class="btn-edit">Edit Post</button>
                            <button class="btn-delete">Delete Post</button>
                        </div>
                        <h1><a href="blog-detail.html" target="_blank"
                            >${dataBlog[index].title}</a>
                        </h1>
                        <div class="detail-blog-content">
                        ${getFullTime(dataBlog[index].postAt)} | ${dataBlog[index].author}
                        </div>
                        <p style="text-align: justify; font-family: 'IM Fell DW Pica', serif;" ;>
                        ${dataBlog[index].content}
                        </p>
                        <div style="float: left; margin: 10px">
                            <p style="font-size: 15px; color: grey">${getDistanceTime(dataBlog[index].postAt)}</p>
                        </div>
                    </div>

                </div>
                `
    }
}

// function: fungsi
// getFullTime: nama fungsi
// (time):parameter
function getFullTime(time) {
    // console.log("get Full Time");
    // let time = new Date();
    // console.log(time);

    // kurung siku untuk array(harus lebih dr 1 data),datanya adalah jan,feb,dll
    let monthName = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
    ];
    // console.log(monthName[9]);

    // getFullTime.date:function
    let date = time.getDate();
    // console.log(date);

    let monthIndex = time.getMonth();
    // console.log(monthIndex);

    let year = time.getFullYear();
    // console.log(year);

    let hours = time.getHours();
    let minutes = time.getMinutes();
    // console.log(minutes);

    // if dan else adalah pengkondisian
    // 0=jika commen terpenuhi, maka akan dia jalanin
    // hours, minutes adalah variabel
    if (hours <= 9) {
        hours = "0" + hours;
        // jika if gabisa dijalankan, maka akan menjalankan kondisi di else ini
        // <= 9 : value yang kurang dari 9 dan termasuk 9 maka dia jalan.
        // ==9 : hanya value 9 yg bisa jalan
        // != : tidak samadengan, jadi diluar angka 9 dia jalan
    } else if (minutes <= 9) {
        minutes = "0" + minutes;
    }

    return `${date} ${monthName[monthIndex]} ${year} ${hours}:${minutes} WIB`;
}

function getDistanceTime(time) { 
    // let adalah penampung, dan timeNow adalah nama variabel
    let timeNow = new Date();
    let timePost = time;

    //waktu skrg, akan dikurangin waktu kapan kita post
    let distance = timeNow - timePost; //hasilnya milidetik
    console.log(distance);

    let miliSecond = 1000 //penampung dengan nama milisecond
    let secondInHours = 3600 //penampung dengan nama secondinhours(dalam 1 jam ada 3600dtk)
    let hoursInDays = 24 //dalam 1 hari ada 24 jam

    // distanceday adalah jarak dari harinya
    // Math. adalah interistik objek yg membolehkan kita dalam menggunakan mtk
    // floor adalah Metod, dia bakal ngereturn(membalikan) dari nilai number yg sama/lebih/kurang.
    let distanceDay = Math.floor(distance / (miliSecond * secondInHours * hoursInDays)) //1000x3600x24= 86400000 = 1/86400000
    console.log(distanceDay);
    let distanceHours = Math.floor (distance / (miliSecond * 60 * 60)); // 1:3600000
    let distanceMinutes = Math.floor (distance / (miliSecond * 60)); // 1:60000
    let distanceSecond = Math.floor (distance / miliSecond); // 1:1000

    if (distanceDay > 0) {
        return `${distanceDay} Day Ago`;
    } else if (distanceHours > 0) {
        return `${distanceHours} Hours Ago`;
    } else if (distanceMinutes > 0) {
        return `${distanceMinutes} Minutes Ago`;
    } else {
        return `${distanceSecond} Seconds Ago`;
    }
}   

// fungsinya ketika kita ingin mengulang satu fungsi(renderBlog),300 (maka fungsi ini akan dijalankan setiap 3000 milisecond)
setInterval(function() {
    renderBlog()
}, 1000);
