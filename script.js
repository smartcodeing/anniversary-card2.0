// ==============================
// STEP 1: ดึง element จาก HTML
// ==============================
var loadingScreen   = document.getElementById("loading-screen");
var passwordScreen  = document.getElementById("password-screen");
var cardScreen      = document.getElementById("card-screen");
var progressBar     = document.getElementById("progress-bar");
var percentText     = document.getElementById("percent-text");
var passwordInput   = document.getElementById("password-input");
var passwordBtn     = document.getElementById("password-btn");
var errorMsg        = document.getElementById("error-msg");
var cloudsBg        = document.getElementById("clouds-bg");

// ==============================
// STEP 2: สร้างก้อนเมฆ
// ==============================
for (var i = 0; i < 6; i++) {
  var cloud = document.createElement("div");
  cloud.classList.add("cloud");
  var size = 80 + (i * 30);
  var topPos = 5 + (i * 14);
  var duration = 18 + (i * 5);
  var delay = -(i * 4);
  cloud.style.width = size + "px";
  cloud.style.height = (size * 0.5) + "px";
  cloud.style.top = topPos + "%";
  cloud.style.left = "-200px";
  cloud.style.animationDuration = duration + "s";
  cloud.style.animationDelay = delay + "s";
  cloudsBg.appendChild(cloud);
}

// ==============================
// STEP 3: Loading Bar
// ==============================
var currentPercent = 0;

var loadingInterval = setInterval(function() {
  currentPercent = currentPercent + 1;
  progressBar.style.width = currentPercent + "%";
  percentText.textContent = currentPercent + "%";

  if (currentPercent >= 100) {
    clearInterval(loadingInterval);
    setTimeout(function() {
      loadingScreen.classList.add("hidden");
      passwordScreen.classList.remove("hidden");
    }, 500);
  }
}, 50);

// ==============================
// STEP 4: รหัสลับ
// ==============================
passwordBtn.addEventListener("click", function() {
  var typed = passwordInput.value;
  if (typed === "loveyousomuch") {
    passwordScreen.classList.add("hidden");
    cardScreen.classList.remove("hidden");
    errorMsg.classList.add("hidden");
    showSlide(0); 
    
  } else {
    errorMsg.classList.remove("hidden");
    passwordInput.value = "";
  }
});

passwordInput.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    passwordBtn.click();
  }
});

// ==============================
// STEP 5: ข้อมูล Slides
// ==============================
var slides = [
  { image: "images/1.jpg",  text: "สุขสันต์วันครบรอบบน้าาเธอมีฉันฉันมีเธออ" },
  { image: "images/2.jpg",  text: "อยากมองแบบนี้ทั้งวันเธอสวยมาก" },
  { image: "images/3.jpg",  text: "เหมือนคนญี่ปุ่นเลยอะคนสวย" },
  { image: "images/4.jpg",  text: "เสื้อดำการเกงดำผมดำหมวกสีเข้มคนขาววววนิ่มมากอิอิ" },
  { image: "images/5.jpg",  text: "อะไรที่กินกับแฟนจะอร่อยขี้น300เท่า" },
  { image: "images/6.jpg",  text: "มีหมา2ตัวหมาดำกับหมาแก่แก้มนิ่ม" },
  { image: "images/7.jpg",  text: "ก้าวไปด้วยกันนนน" },
  { image: "images/8.jpg",  text: "โคตรcollllอะ" },
  { image: "images/9.jpg",  text: "น่าร๊ากกกกเหมือนดาวเริ่ดๆๆ" },
  { image: "images/10.jpg", text: "อยากจุ๊บบแก้มม" },
  { image: "images/11.jpg", text: "โคตรสวยอะสุดๆเลยสายตาโคตรsexy" },
  { image: "images/12.jpg", text: "เวลานั้นคือเบลอมาก5555ไม่งั้ยจุ๊บละ" },
  { image: "images/13.jpg", text: "คนเยอะมากกเหมือนคนกรุงเทพมารวมกันหมด" },
  { image: "images/14.jpg", text: "หล่ออๆๆ" },
  { image: "images/15.jpg", text: "ไม่ได้จะต่อยนะ555555" },
  { image: "images/16.jpg", text: "แฟนเลี้ยงน่ารักมากกอิ่มท้องอิ่มใจจจ" },
];

// ==============================
// STEP 6: ระบบสลับ Slide
// ==============================
var currentSlide = 0;

var slideImage     = document.getElementById("slide-image");
var slideText      = document.getElementById("slide-text");
var slideCounter   = document.getElementById("slide-counter");
var slideContainer = document.getElementById("slide-container");
var prevBtn        = document.getElementById("prev-btn");
var nextBtn        = document.getElementById("next-btn");

function showSlide(index) {
  slideContainer.classList.add("fade-out");

  setTimeout(function() {
    slideImage.src            = slides[index].image;
    slideText.textContent     = slides[index].text;
    slideCounter.textContent  = (index + 1) + " / " + slides.length;

    if (index === 0) {
      prevBtn.disabled = true;
    } else {
      prevBtn.disabled = false;
    }

    if (index === slides.length - 1) {
      nextBtn.disabled = true;
    } else {
      nextBtn.disabled = false;
    }

    slideContainer.classList.remove("fade-out");
  }, 400);
}

nextBtn.addEventListener("click", function() {
  if (currentSlide < slides.length - 1) {
    currentSlide = currentSlide + 1;
    showSlide(currentSlide);
    // เพิ่มแค่บรรทัดนี้
    for (var h = 0; h < 5; h++) {
      setTimeout(spawnHeart, h * 120);
    }
  }
});

prevBtn.addEventListener("click", function() {
  if (currentSlide > 0) {
    currentSlide = currentSlide - 1;
    showSlide(currentSlide);
    // เพิ่มแค่บรรทัดนี้
    for (var h = 0; h < 5; h++) {
      setTimeout(spawnHeart, h * 120);
    }
  }
});

// ==============================
// STEP 7: เพลง Love - Keyshia Cole
// ==============================
// สร้าง audio element แล้วให้มันเล่นตอนเปิดการ์ด
// loop = true คือเล่นวนซ้ำตลอด

var music = new Audio("C:\\Users\\User\\Downloads\\Keyshia Cole - Love Audio.mp3");
music.loop   = true;
music.volume = 0.4;

// เพลงจะเริ่มเล่นตอนกดรหัสถูก
// browser บังคับว่าต้องมี user กด ก่อนถึงจะเล่นเสียงได้
passwordBtn.addEventListener("click", function() {
  if (passwordInput.value === "loveyousomuch") {
    music.play();
  }
});


// ==============================
// STEP 8: หัวใจลอยตอนกด Next/Prev
// ==============================

var heartEmojis = ["💕", "🩷", "💗", "💓", "💞", "🌸", "✨"];

function spawnHeart() {
  var heart = document.createElement("div");
  heart.classList.add("heart");
  var randomIndex = Math.floor(Math.random() * heartEmojis.length);
  heart.textContent = heartEmojis[randomIndex];
  var randomLeft = 10 + Math.random() * 80;
  heart.style.left = randomLeft + "%";
  heart.style.bottom = "80px";
  var randomDuration = 1.5 + Math.random() * 1.5;
  heart.style.animationDuration = randomDuration + "s";
  document.body.appendChild(heart);
  setTimeout(function() {
    heart.remove();
  }, randomDuration * 1000);
}


// ==============================
// STEP 9: Sparkle ตามคลิก/แตะ
// ==============================

function spawnSparkle(x, y) {
  // สร้าง sparkle 6 อัน กระจายรอบจุดที่คลิก
  for (var s = 0; s < 6; s++) {
    var sparkle = document.createElement("div");
    sparkle.classList.add("sparkle");

    // สุ่มสี
    var colors = ["#ffb6c1", "#d4537e", "#fff0f5", "#ff85a1", "#ffd6e7"];
    var randomColor = colors[Math.floor(Math.random() * colors.length)];
    sparkle.style.background = randomColor;

    // กระจายออกรอบจุดคลิก
    var offsetX = (Math.random() - 0.5) * 40;
    var offsetY = (Math.random() - 0.5) * 40;
    sparkle.style.left = (x + offsetX) + "px";
    sparkle.style.top  = (y + offsetY) + "px";

    var duration = 0.5 + Math.random() * 0.5;
    sparkle.style.animationDuration = duration + "s";

    document.body.appendChild(sparkle);

    setTimeout(function() {
      sparkle.remove();
    }, duration * 1000);
  }
}

// ฟัง event คลิก (PC) และ touch (มือถือ)
document.addEventListener("click", function(event) {
  spawnSparkle(event.clientX, event.clientY);
});

document.addEventListener("touchstart", function(event) {
  var touch = event.touches[0];
  spawnSparkle(touch.clientX, touch.clientY);
});