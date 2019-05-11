function biodata () {
    return {
        "name" : "Vera Firdyana Agusti",
        "address" : "Pondok Ungu Permai, Blok AC 12 no 11 Rt. 007 Rw. 009 Kec. Babelan Kel. Bahagia",
        "hobbies" : ["Traveling", "Reading", "Watching Movie"],
        "is_married" : false,
        "school" : {
            "highschool" : "SMA Taman Harapan",
            "university" : "STMIK Bani Saleh"
        },
        "skills": [
            {
                "name" : "Java ( Android Studio )",
                "score" : 70
            },
            {
                "name" : "Javascript",
                "score" : 60
            },
            {
                "name" : "Vue.js",
                "score" : 70
            },
            {
                "name" : "Php",
                "score" : 70
            },
            {
                "name" : "SQL Server",
                "score" : 60
            },
            {
                "name" : "MySql",
                "score" : 60
            }
        ]
    }
}

let vera = biodata();
console.log(vera);

//=============== soal 2 =================

function is_username_valid(username) {
    return (/^[a-z]{8}$/.test(username));
}

function is_email_valid(email) {
    var re = /^(?=[^@]{4,}@)([\w\.-]*[a-zA-Z0-9_]@(?=.{3,}\.[^.]*$)[\w\.-]*[a-zA-Z0-9]\.[a-zA-Z][a-zA-Z\.]*[a-zA-Z])$/;
    return re.test(String(email));
}

console.log(is_username_valid('Verafir'));
console.log(is_username_valid('firdyan'));
console.log(is_username_valid('firdyana'));

console.log(is_email_valid('aku@kamu.com'));
console.log(is_email_valid('kamu@aku.com'));

//=============== soal 3 =================

var data = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function cetak(tcetak) {
    for (var x = 0; x < tcetak; x++) {
        var arr = [];
        for (var i = 0; i < 32; i++) {

            var index = Math.floor(Math.random() * data.length);
            
            arr.push(data[index]);
        }
        console.log(arr.join(""));
    }
}

cetak(2);

//=============== soal 4 =================

var strings = ['P','R','O','G','R','A','M','M','E','R'];

function cetak_gambar(){
    for (var i = 0; i < strings.length; i++) {
        var index1 = i;
        var index2 = strings.length - (i + 1);
        var temp = [];
        for (var a =0; a < strings.length; a++) {
            if (a === index1 || a === index2) {
                temp.push(strings[i]);
            }else{
                temp.push("=");
            }
        }
        console.log(temp.join(""));
    }
}

cetak_gambar();

//=============== soal 5 =================

var data = [
    ['a','c','b','e’','d'],
    ['g','e','f']
];

var datalain = [
    ['g','h','x','j'],
    ['a','c','b','e','d'],
    ['q','w','a']
];

function tukarUrutkan(arr) {
    var i = 0;
    var newArr = [];
    while (i < arr.length) {
        var sorted = arr[i].sort();
        newArr.push(sorted[sorted.length -1]);
        i++;
    }
    return newArr;
}

console.log(tukarUrutkan(data));
console.log(tukarUrutkan(datalain));