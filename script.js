function random(min, max) {
               return Math.round(Math.random() * (max - min) + min)
}
function color() {
               let r = random(0, 255)
               let g = random(0, 255)
               let b = random(0, 255)
               return "rgb(" + r + "," + g + "," + b + ")"
}
let body = document.querySelector("body")
setInterval(() => {
               body.style.backgroundColor = color()
               body.style.transition = "0.5s"
}, 1000);

let firstName = prompt("Iltimos ismingizni kiriting chunki sizning ismingiz dastur davomida sizga murojat qilishimiz uchun kerak bo'ladi !")
while (!isNaN(firstName)) {
               firstName = prompt("Iltimos, ismingizni kiritayotganingizda harflardan foydalaning !")
}
alert(firstName + ", siz bu dasturda kvadrat chizib, kvadratingizning ichiga x belgisini shakllantirishingiz mumkin !")
console.log(firstName + ", siz bu dasturda kvadrat chizib, kvadratingizning ichiga x belgisini shakllantirishingiz mumkin !")
let number = +prompt(firstName + ", iltimos kvadratingizning eni va bo'yini shakllantirish uchun son kiriting :  ")
while (isNaN(number)) {
               number = +prompt(firstName + ", iltimos sonlardan foydalaning !")
}
let total = ""
let finalnumber = number - 1
for (let i = 0; i < number; i++) {
               for (let j = 0; j < number; j++) {
                              if (i == j || (finalnumber - j) == i || i == 0 || j == 0 || i == (number - 1) || j == (number - 1)) {
                                             total += "[*]"
                              }
                              else {
                                             total += "   "
                              }
               }
               console.log(total)
               total = ""
}
