const textConfig = {
  text1: "Chào Em(Đúng's gu)",
  text2: "Happy Birthday nhó! Cái web đầu tiên anh làm gấp vậy hơi bất ổn thông kảm nha! Gét gô!",
  text3: "Web page này là dành cho em. Người con gái Đúng's gu ._.",
  text4: "Hi vọng mọi điều tốt đẹp và tuyệt vời nhất sẽ đến với em - Cô bé ",
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
  'https://scontent.fhan5-2.fna.fbcdn.net/v/t39.30808-6/307848221_202239822225028_5962759610457268602_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=CsrBjjcnAysAX8RYJ3I&tn=cg8HkFnB7FPP64vZ&_nc_ht=scontent.fhan5-2.fna&oh=00_AT9CxCv2jrc-fEXJB4G5Tl1InyCykNBShFeg11iq2dXySw&oe=634FA438',
  'https://scontent.fhan5-8.fna.fbcdn.net/v/t39.30808-6/306834128_201831088932568_29213235053674702_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=174925&_nc_ohc=IInDuFVUkTsAX8PsmJE&_nc_ht=scontent.fhan5-8.fna&oh=00_AT_p-vPTpoz5wRBgHZXuv2RSqS7PHTJ6QvK9_ITC31otag&oe=635047B6',
  'https://scontent.fhan5-2.fna.fbcdn.net/v/t39.30808-6/305571564_200283055754038_581949479096944282_n.jpg?stp=cp6_dst-jpg&_nc_cat=104&ccb=1-7&_nc_sid=174925&_nc_ohc=p9ZU0X3nXHEAX_p62EQ&tn=cg8HkFnB7FPP64vZ&_nc_ht=scontent.fhan5-2.fna&oh=00_AT-ZnGw9yn_2kWH0Pr8RD_6ScgDqrEN6ge2YTW1homJ-Kg&oe=63507B9B',
  'https://scontent.fhan5-11.fna.fbcdn.net/v/t39.30808-6/299147901_194002643048746_2170957377312600884_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=174925&_nc_ohc=tkqanHjDmBIAX8db4Um&tn=cg8HkFnB7FPP64vZ&_nc_ht=scontent.fhan5-11.fna&oh=00_AT8DVe1W5_6YfIBDOjtef4JyANzBBosf1erSVqVPMeUreA&oe=6350EDB1',
  'https://scontent.fhan5-11.fna.fbcdn.net/v/t39.30808-6/297881189_191696953279315_2185894982705182956_n.jpg?stp=cp6_dst-jpg&_nc_cat=100&ccb=1-7&_nc_sid=174925&_nc_ohc=EUDwZeQeReMAX9ehtoW&_nc_ht=scontent.fhan5-11.fna&oh=00_AT8LL9G1Pa7SsaXG-kZ9vMjQmDg9LpC-jmjaFb8D0s10jg&oe=634FF833',
  '../img/img5.bmp',
  '../img/img6.bmp',
  '../img/img7.bmp',
  '../img/img8.bmp',
  '../img/img9.bmp',
  ]
let index = 0, text = 'Lần đầu anh gặp Em là 6 giờ 20p(độ lệch chuẩn 5p) ngày 10/10/2022 Xinh thực sự! Nhưng anh nghĩ là xinh như vậy kiểu gì cũng có người iêu ròi. Sau khi nghe quả giới thiệu song thì! thực sự để mà nói là không biết đây có phải là bước đầu của sự tuyệt vời mà ô trời gửi tặng tui không!(Vui hết sức).';
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
  let yearOld = new Date().getFullYear() - new Date(2003,1,1).getFullYear();
  $("#text4").html(textConfig.text4 + yearOld + ' tủi!');
  $("#no").html(textConfig.text5);
  $("#yes").html(textConfig.text6);

  function firstQuestion() {
    $(".content").hide();
    Swal.fire({
      title: textConfig.text1,
      text: textConfig.text2,
      imageUrl: "https://scontent.fhan5-8.fna.fbcdn.net/v/t39.30808-6/307848221_202239822225028_5962759610457268602_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=CsrBjjcnAysAX8RYJ3I&tn=cg8HkFnB7FPP64vZ&_nc_ht=scontent.fhan5-8.fna&oh=00_AT9ojg45TNbmRIqwycl9U_m5f5Tbcp8VlCmoSHNFj0NKdg&oe=634FA438",
      imageWidth: 300,
      imageHeight: 300,
      background: '#fff url("img/iput-bg.jpg")',
      imageAlt: "Custom image",
    }).then(function () {
      $(".content").show(200);
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
  function textGenerate() {
    var n = "";
    var text = " " + textConfig.text9;
    var a = Array.from(text);
    var textVal = $("#txtReason").val() ? $("#txtReason").val() : "";
    var count = textVal.length;
    if (count > 0) {
      for (let i = 1; i <= count; i++) {
        n = n + a[i];
        if (i == text.length + 1) {
          $("#txtReason").val("");
          n = "";
          break;
        }
      }
    }
    $("#txtReason").val(n);
  }

  // show popup
  $("#yes").click(function () {
    var audio = new Audio("sound/mp3.mp3");
    audio.play();
    window.open("https://www.facebook.com/long.kieu.771");
    alert("19 Tủi ròi! Chúc e ngày càng xinh đẹp, mạnh khoẻ, hạnh phúc và thành công nha! Chairoooo!(Có nhạc nha)")
    $("#options").hide()
    let about = document.getElementById("text13");
    about.style.color = 'pink';
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
    iStatus++;
    $("#status").html('Tiếp này')
    return
   }
   if(iStatus == 1){
    text = text + ' <br>Từ lúc đấy đến cuối buổi gần như a không rời mắt khỏi e luôn(Xinh thế nhờ). Đúng\'s gu! Rất Đúng\'s luôn! Nên về cái phải add vội ấy chứ! Không thể để cờ rút\'s của mình thích người khác trước được! '
    $("#text13").html(text);
    iStatus++;
    $("#status").html('Nhanh lên cái coi!')
    return
   }
   if(iStatus == 2){
    text = text + ' <br>Nhưng mới gặp lần đầu nên chẳng biết lấy lý do gì để bắt chuyện nên mới phải lôi thằng e ra. Giờ thì thôi e quên tên thằng e đó đi cũng được!'
    $("#text13").html(text);
    iStatus++;
    $("#status").html('Đoạn này nhạt nha cha nội!')
    return
   }
   if(iStatus == 3){
    text = text + ' <br>Anh nhắn tin nhạt lắm đúng không ạ?'
    $("#text13").html(text);
    iStatus++;
    $("#status").html('Đúng! Nhạt vãi! Hỏi thừa')
    $("#no-status").html('Làm gì nhạt đâu')
    return
   }

   if(iStatus == 4){
    text = text + ' <br>Hỏi cho vui vậy thôi chứ a tự công nhận là nhạt thật! Nhạt nhưng bù lại được cái anh học nhanh lắm nha, a biết Search Google này:<br>"Yêu, nhất định phải gặp đúng người thì hạnh phúc mới trọn vẹn. Giống như cây cối, phải đợi đến mùa xuân mới có thể nảy lộc đâm chồi." <br>Câu này là Google nó bảo vậy, nhưng nó phải ở giai đoạn sau. Còn bây giờ a chỉ có ước mơ muốn mời đc e đi ăn thuiiii.<br>Nay hoặc mai hoặc ngày kia cho a được mời e đi ăn nhó!(Trả lời bằng cách click vào button phía trên kia ha!)'
    $("#text13").html(text);
    iStatus++;
    $("#status").html('')
    $("#no-status").html('')
    $("#options").show()
    return
   }
  });
  $("#no-status").click(function () {
    alert('Đáp án sai rùi! Chọn lại chị ơi! Nhạt-quá nhạt!')
    $("#no-status").html('')
    // $("#next").attr('src','https://scontent.fhan5-8.fna.fbcdn.net/v/t39.30808-6/306834128_201831088932568_29213235053674702_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=174925&_nc_ohc=IInDuFVUkTsAX8PsmJE&_nc_ht=scontent.fhan5-8.fna&oh=00_AT_p-vPTpoz5wRBgHZXuv2RSqS7PHTJ6QvK9_ITC31otag&oe=635047B6');
  });
});
