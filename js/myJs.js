const textConfig = {
  text1: "Hello em iu ạ!",
  text2: "Cái web này a làm nhanh trong lúc nhắn tin với e tối hôm qua. Cùng xem có gì nha babe <3",
  text3: "Web page này để chúc mừng năm mới em iu ạ!",
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
  
  $("#text3").html(textConfig.text3);

  //Tính tuổi
  $("#text4").html(textConfig.text4);
  $("#no").html(textConfig.text5);
  $("#yes").html(textConfig.text6);

  function firstQuestion() {
    $(".content").hide();
    $(".cover-login").hide();
    Swal.fire({
      title: textConfig.text1,
      text: textConfig.text2,
      imageUrl: "https://zpsocial-f54-org.zadn.vn/3739e069f0501e0e4741.jpg",
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
    if(index > 1) index = 0;
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
    setInterval(() => {
      loopImage()
    }, 2000);
  });
  // show popup
  $("#next").click(function () {
    index++;
    if(index > 1) index = 0;
    document.getElementById("img").src = imageConfig[index]
    // $("#next").attr('src','https://scontent.fhan5-8.fna.fbcdn.net/v/t39.30808-6/306834128_201831088932568_29213235053674702_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=174925&_nc_ohc=IInDuFVUkTsAX8PsmJE&_nc_ht=scontent.fhan5-8.fna&oh=00_AT_p-vPTpoz5wRBgHZXuv2RSqS7PHTJ6QvK9_ITC31otag&oe=635047B6');
  });

  $("#back").click(function () {
    index--;
    if(index < 0) index = 1;
    document.getElementById("img").src = imageConfig[index]
    // $("#next").attr('src','https://scontent.fhan5-8.fna.fbcdn.net/v/t39.30808-6/306834128_201831088932568_29213235053674702_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=174925&_nc_ohc=IInDuFVUkTsAX8PsmJE&_nc_ht=scontent.fhan5-8.fna&oh=00_AT_p-vPTpoz5wRBgHZXuv2RSqS7PHTJ6QvK9_ITC31otag&oe=635047B6');
  });
  
  $("#status").click(function () {
   if(iStatus == 0){
    $("#text13").html(text);
    iStatus++;
    $("#status").html('Click me!')
    return
   }
   if(iStatus == 1){
    text = text + ' <br>Nhưng mà chắc chắn là sẽ không thể add thêm những bức ảnh vào đây được nếu như em say NO.'
    $("#text13").html(text);
    iStatus++;
    $("#status").html('Click me!')
    return
   }
   if(iStatus == 2){
    text = text + ' <br>Khi em đọc tới đoạn này thì cũng tới 2024 rùi.'
    $("#text13").html(text);
    iStatus++;
    $("#status").html('Click me!')
    return
   }
   if(iStatus == 3){
    text = text + ' <br>Chúc em iu sẽ luôn xinh đẹp này, kiếm nhiều siền này, ngày càng yêu đời hơn nữa nha.<br>Chúc bố/mẹ luôn dồi dào sức khoẻ, an khang, thịnh vượng ạ!<br>Chúc Dương/Chi chăm ngoan học giỏi và sẽ đạt được kết quả tốt nhất luôn!'
    $("#text13").html(text);
    iStatus++;
    $("#status").html('Click me!')
    return
   }

   if(iStatus == 4){
    text = text + ' <br>Sau này anh tỏ tình thì em sẽ đồng ý chứ?'
    $("#text13").html(text);
    iStatus++;
    $("#status").html('')
    $("#no-status").html('')
    $("#options").show()
    return
   }
  });

  $(document).on('input', '.username', function(e){
    
    if(e.target.value.toLowerCase() == 'my love'){
      $("#title-login").html('Happy New Year Ngọc Ánh');
      let about9 = document.getElementById("title-login");
      about9.style.color = 'pink';
      about9.style.fontSize = '35px'
    }else{
      let about9 = document.getElementById("title-login");
      about9.style.color = 'black';
      about9.style.fontSize = '25px'
      $("#title-login").html('Happy New Year ' + e.target.value);
    }
  });
  $("#submit").click(function () {
   let username = document.getElementById('username').value;
   let password = document.getElementById('password').value; 
   if(username.toLowerCase() == 'my love' && password.toLowerCase() == '171001'){
    $(".content").show();
    $(".cover-login").hide();
   }else{
    alert('Điền đúng mới vào được bạn ưiiii :v')
   }
  });
});
