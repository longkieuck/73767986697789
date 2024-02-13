const textConfig = {
  text1: "App này dùng để update tình yêu của chúng mình ạ",
  text2: "",
  text3: "Đếm ngày iu nhau",
  text4: "Chúc em cùng đại gia đình sẽ có MỘT NĂM MỚI BÌNH AN",
  text5: "Để xem xét!",
  text6: "Em đồng ý!",
  text7: "lí do cậu thích tớ đi :vvvv",
  text8: "Gửi cho tớ <3",
  text9: "Vì cậu đẹp try vlllll",
  text10: "Tớ biết mà ^^ Yêu cậu 300.000",
  text11:
    "Tối nay tớ qua đón cậu đi chơi nhaa :v Còn giờ thì chờ gì nữa mà ko inbox cho tớ đi nàooo",
  text12: "Okii lunn <3",
};
const imageConfig = [
  'https://raw.githubusercontent.com/longkieuck/birthday_gift/master/img/im1.jpg',
  'https://raw.githubusercontent.com/longkieuck/birthday_gift/master/img/im2.jpg',
  'https://raw.githubusercontent.com/longkieuck/birthday_gift/master/img/im3.jpg',
  'https://raw.githubusercontent.com/longkieuck/birthday_gift/master/img/im4.jpg',
  ]
let index = 0, text = 'Web này được tạo ra để lưu lại những kỉ niệm của chúng mình. 2024 Hai đứa sẽ có thật nhiều những bức ảnh cùng nhau em nha.';
let iStatus= 0;
$(document).ready(function () {
  // process bar
  setTimeout(function () {
    firstQuestion();
    $(".spinner").fadeOut();
    $("#preloader").delay(350).fadeOut("slow");
    $("body").delay(350).css({
      overflow: "visible",
    });
  }, 600);
  setInterval(() => {
    loopImage()
  }, 2000);
  $("#text3").html(textConfig.text3);
  let firstDate  = new Date("02/14/2024");
  let secondDate = new Date();
  const oneDay = 24 * 60 * 60 * 1000;
  var ndays = Math.round(Math.abs((firstDate - secondDate) / oneDay));

  //Tính tgian
  $("#text4").html(ndays + ' Ngày');
  $("#no").html(textConfig.text5);
  $("#yes").html(textConfig.text6);

  function firstQuestion() {
    $(".content").hide();
    $(".cover-login").hide();
    Swal.fire({
      title: textConfig.text1,
      text: textConfig.text2,
      imageUrl: "https://raw.githubusercontent.com/longkieuck/birthday_gift/master/img/im1.jpg",
      imageWidth: 300,
      imageHeight: 300,
      background: '#fff url("img/iput-bg.jpg")',
      imageAlt: "Custom image",
    }).then(function () {
      $(".cover-login").show(200);
    });
  }

  // switch button position
  function switchButton() {
    var leftNo = $("#no").css("left");
    var topNO = $("#no").css("top");
    var leftY = $("#yes").css("left");
    var topY = $("#yes").css("top");
    $("#no").css("left", leftY);
    $("#no").css("top", topY);
    $("#yes").css("left", leftNo);
    $("#yes").css("top", topNO);
  }
  // move random button póition
  function moveButton() {

    if (screen.width <= 600) {
      var x = Math.random() * 300;
      var y = Math.random() * 500;
    } else {
      var x = Math.random() * 500;
      var y = Math.random() * 500;
    }
    var left = x + "px";
    var top = y + "px";
    $("#no").css("left", left);
    $("#no").css("top", top);
  }

  var n = 0;
  $("#no").mousemove(function () {
    moveButton();
    n++;
  });
  $("#no").click(() => {
    if (screen.width >= 900) switchButton();
  });

  // generate text in input
  function loopImage() {
    index++;
    if(index > 3) index = 0;
    document.getElementById("img").src = imageConfig[index]
  }

  // show popup
  $("#yes").click(function () {
    var audio = new Audio("sound/mp3.mp3");
    audio.play();
    window.open("https://www.facebook.com/long.kieu.771");
    $("#options").hide()
    let about = document.getElementById("text13");
    about.style.color = 'pink';
    let about1 = document.getElementById("text3");
    about1.style.color = 'pink';
    let about2 = document.getElementById("text4");
    about2.style.color = 'pink';
  });
  // show popup
  $("#next").click(function () {
    index++;
    if(index > 3) index = 0;
    document.getElementById("img").src = imageConfig[index]
    // $("#next").attr('src','https://scontent.fhan5-8.fna.fbcdn.net/v/t39.30808-6/306834128_201831088932568_29213235053674702_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=174925&_nc_ohc=IInDuFVUkTsAX8PsmJE&_nc_ht=scontent.fhan5-8.fna&oh=00_AT_p-vPTpoz5wRBgHZXuv2RSqS7PHTJ6QvK9_ITC31otag&oe=635047B6');
  });

  $("#back").click(function () {
    index--;
    if(index < 0) index = 3;
    document.getElementById("img").src = imageConfig[index]
    // $("#next").attr('src','https://scontent.fhan5-8.fna.fbcdn.net/v/t39.30808-6/306834128_201831088932568_29213235053674702_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=174925&_nc_ohc=IInDuFVUkTsAX8PsmJE&_nc_ht=scontent.fhan5-8.fna&oh=00_AT_p-vPTpoz5wRBgHZXuv2RSqS7PHTJ6QvK9_ITC31otag&oe=635047B6');
  });
  

  $("#submit").click(function () {
   let username = document.getElementById('username').value;
   let password = document.getElementById('password').value; 
   if(username.toLowerCase() == 'my love' && password.toLowerCase() == '017123'){
    $(".content").show();
    $(".cover-login").hide();
   }else{
    alert('Điền đúng mới vào được bạn ưiiii :v')
   }
  });
});
