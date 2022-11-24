const textConfig = {
  text1: "Hello NTMy1",
  text2: "Chuẩn bị đọc thơ này <3",
  text3: "Hello Hello",
  text4: "Hi vọng mọi điều tốt đẹp và tuyệt vời nhất sẽ đến với em - My crush!",
  text5: "Mơ đi cưng!",
  text6: "Được nha!",
  text7: "lí do cậu thích tớ đi :vvvv",
  text8: "Gửi cho tớ <3",
  text9: "Vì cậu đẹp try vlllll",
  text10: "Tớ biết mà ^^ Yêu cậu 300.000",
  text11:
    "Tối nay tớ qua đón cậu đi chơi nhaa :v Còn giờ thì chờ gì nữa mà ko inbox cho tớ đi nàooo",
  text12: "Okii lunn <3",
};
const imageConfig = [
  'img/mylove.jpg'
  ]
let index = 0, 
text = `<span style="color:pink">Anh</span> muốn kể với em một câu chuyện
<br><span style="color:pink">Yêu</span> một người rất khó? Phải không em
<br><span style="color:pink">Em</span> là một bông hoa xinh đẹp nhất
<br><span style="color:pink">Nhiều</span> mơ ước khát vọng tuổi đôi mươi
<br>
<br><span style="color:pink">Lắm</span> lúc anh ngồi một mình suy nghĩ
<br><span style="color:pink">Trà</span> My liệu có thích mình không ha?
<br><span style="color:pink">My</span> là một cái tên anh thương nhớ
<br><span style="color:pink">À!</span> Không phải. Anh cất ở trong TYM`,
text133 = `<br><span style="color:pink">Cho</span> anh được một lần hôn lên má
<br><span style="color:pink">Anh</span> sẽ gửi lại cả cuộc đời anh
<br><span style="color:pink">Pass</span> Facebook, insta và tiktok
<br><span style="color:pink">Thử</span> một lần xao xuyến mãi không quên
<br>
<br><span style="color:pink">Việc</span> cuối cùng là hãy Say Đồng ý
<br><span style="color:pink">Nha!</span> Nha em! Anh vẫn đợi em nè!`
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
  $("#no").html(textConfig.text5);
  $("#yes").html(textConfig.text6);
  function firstQuestion() {
    $(".content").hide();
    $("#status").hide()
    Swal.fire({
      title: textConfig.text1,
      text: textConfig.text2,
      imageUrl: "img/mylove.jpg",
      imageWidth: 300,
      imageHeight: 300,
      background: '#fff url("img/iput-bg.jpg")',
      imageAlt: "Custom image",
    }).then(function () {
      $(".content").show(1000);
      $("#status").show(1000)
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
    if(index > 9) index = 0;
    document.getElementById("img").src = imageConfig[index]
  }

  // show popup
  $("#yes").click(function () {
    var audio = new Audio("sound/mp3.mp3");
    audio.play();
    window.open("https://www.facebook.com/long.kieu.771");
    alert("Trời ơi vậy là tui đã có người yêu rùi nè! Yêu My quá đi thuiiii <3")
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
    if(index > 9) index = 0;
    document.getElementById("img").src = imageConfig[index]
    // $("#next").attr('src','https://scontent.fhan5-8.fna.fbcdn.net/v/t39.30808-6/306834128_201831088932568_29213235053674702_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=174925&_nc_ohc=IInDuFVUkTsAX8PsmJE&_nc_ht=scontent.fhan5-8.fna&oh=00_AT_p-vPTpoz5wRBgHZXuv2RSqS7PHTJ6QvK9_ITC31otag&oe=635047B6');
  });

  $("#back").click(function () {
    index--;
    if(index < 0) index = 9;
    document.getElementById("img").src = imageConfig[index]
    // $("#next").attr('src','https://scontent.fhan5-8.fna.fbcdn.net/v/t39.30808-6/306834128_201831088932568_29213235053674702_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=174925&_nc_ohc=IInDuFVUkTsAX8PsmJE&_nc_ht=scontent.fhan5-8.fna&oh=00_AT_p-vPTpoz5wRBgHZXuv2RSqS7PHTJ6QvK9_ITC31otag&oe=635047B6');
  });
  
  $("#status").click(function () {
   if(iStatus == 0){
    $("#text13").html(text);
    $("#text133").html(text133);
    var audio = new Audio("sound/mp3.mp3");
    audio.play();
    audio.loop = true;
    iStatus++;
    $("#status").html('')
    return
   }
   if(iStatus == 1){
    text = text + ' <br>Sau khi tìm hiểu về em thì suy nghĩ đầu tiên trong đầu anh là \'Sao em ấy đỉnh vậy? 0% thành công rùi!\'. Nhưng em nhắn tin rất là hấp dẫn ấy - Kiểu khiến anh bị mê luôn ấy! Đúng\'s gu! Rất Đúng\'s luôn! Xinh xắn - Đáng yêu - Giỏi! Nên phải làm quen vội ấy chứ! Không thể để cờ rút\'s của mình thích người khác trước được vì môi trường quá nhiều a zai! '
    $("#text13").html(text);
    iStatus++;
    $("#status").html('Nhanh lên cái coi!')
    return
   }
   if(iStatus == 2){
    text = text + ' <br>Em là một người đặc biệt! Nên cái suy nghĩ của em nó cũng rất đặc biệt! Thực sự phải cảm ơn các roommate của e rất nhiều vì đã thay đổi đc cái suy nghĩ ấy xíu nữa là anh ra đảo rùi - quá tuyệt vời! Và rất thankiu e vì đã Đồng ý cho a được tìm hiểu một cô gái rất Ká tính và Thú vị ạ!'
    $("#text13").html(text);
    iStatus++;
    $("#status").html('Đoạn này nhạt nha a zai!')
    return
   }
   if(iStatus == 3){
    text = text + ' <br>Anh nhắn tin nhạt lắm đúng không ạ?'
    $("#text13").html(text);
    iStatus++;
    $("#status").html('nó nhạt nma nhạt 1 cách rất thú vị ạ =)))')
    $("#no-status").html('Làm gì nhạt đâu')
    return
   }

   if(iStatus == 4){
    text = text + ' <br>Hỏi cho vui vậy thôi chứ a tự công nhận là nhạt thật! Nhạt nhưng bù lại được cái yêu em thật lòng! Nhạt nhưng được cái muốn làm cho em vui cười mỗi khi nhắn tin, mỗi lúc bên anh nếu may mắn hơn thì có thể sẽ là mãi về sau này nữa! Sau thời gian tìm hiểu vừa xong ấy, anh đã chắc chắn được tình cảm của mình và đã đến lúc để thật nghiêm túc nói với em rùi(Trả lời bằng cách click vào button phía trên kia ha - <span style="color:pink"></span>)'
    $("#text13").html(text);
    iStatus++;
    $("#status").html('')
    $("#no-status").html('')
    $("#options").show()
    return
   }
  });
  $("#no-status").click(function () {
    alert('Đáp án sai rùi! Chọn lại chị ơi! nó nhạt nma nhạt 1 cách rất thú vị ạ =))) Mới đúng nha!')

    $("#no-status").html('')
    // $("#next").attr('src','https://scontent.fhan5-8.fna.fbcdn.net/v/t39.30808-6/306834128_201831088932568_29213235053674702_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=174925&_nc_ohc=IInDuFVUkTsAX8PsmJE&_nc_ht=scontent.fhan5-8.fna&oh=00_AT_p-vPTpoz5wRBgHZXuv2RSqS7PHTJ6QvK9_ITC31otag&oe=635047B6');
  });

});
