const textConfig = {
  text1: "Hello NTMy1",
  text2: "Lần đầu anh áp dụng cái này! Web làm nhanh nên hơi bất ổn thông kảm nha! Gét gô!",
  text3: "Web page này là dành cho em. Người con gái Đúng's gu ._.",
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
  'https://scontent.fhan5-11.fna.fbcdn.net/v/t39.30808-6/309834556_3171169749879909_5566148389734582374_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=pXev21eu7eMAX_sOzx6&_nc_ht=scontent.fhan5-11.fna&oh=00_AfBqdfqwLX9zEUm7FgFXiUXs8EWWHvzxfN6b30O9_Qx_bQ&oe=636E10B5',
  'https://scontent.fhan5-8.fna.fbcdn.net/v/t1.6435-9/121665566_2633071817023041_1259856502831211079_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=174925&_nc_ohc=igC9xJjxDocAX85PW04&_nc_ht=scontent.fhan5-8.fna&oh=00_AfDY-gZV0FHGz0ImA3qM0fImHS1XaI9-zuWVeKpGJnG8IA&oe=6390D412',
  'https://scontent.fhan5-2.fna.fbcdn.net/v/t1.6435-9/122494005_2643549495975273_2110174463026514322_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=174925&_nc_ohc=UKgQlp4B0d8AX-LsVvz&_nc_ht=scontent.fhan5-2.fna&oh=00_AfCdvxkIxgD2_5vXMP0HFccB60xr-R_VrtIlZKYgf6b0mw&oe=6390BFED',
  'https://scontent.fhan5-8.fna.fbcdn.net/v/t1.6435-9/169758736_2771382376525317_4051087190529829763_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=174925&_nc_ohc=CX2FBLH8IS0AX92Ze5y&_nc_ht=scontent.fhan5-8.fna&oh=00_AfB7rT-_HaXCDwmlV8Q5Z3rl92I6XU_rdwtNX1KpLKVqyg&oe=6390A344',
  'https://scontent.fhan5-8.fna.fbcdn.net/v/t39.30808-6/271879313_2970830823247137_4225948491757987663_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=174925&_nc_ohc=B_y3wmb36I8AX97-QY_&_nc_ht=scontent.fhan5-8.fna&oh=00_AfADCNoyywJ_gakObv_SqkQsCZ1OB7tBdR6qhmQgP-vNwA&oe=636F219A',
  'https://scontent.fhan5-8.fna.fbcdn.net/v/t39.30808-6/280483923_3056178228045729_8272129598389950866_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=174925&_nc_ohc=I2NiB3Qa4PYAX9UGQI9&_nc_oc=AQmnDr4p7i0LTZKY0G7vO6lWS1pYRQxRpQ2YHywQXFvR0BFaYuwpswmxsxMcHQZWfYs&_nc_ht=scontent.fhan5-8.fna&oh=00_AfCqQhFy_5PUpj3_aivRkjE1fW3e6po6jl3rpmxBsRKg0Q&oe=636E2325',
  'https://scontent.fhan5-8.fna.fbcdn.net/v/t39.30808-6/283711482_3069161106747441_7879071787437631072_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=174925&_nc_ohc=KykNaGlQW6wAX87em2t&_nc_ht=scontent.fhan5-8.fna&oh=00_AfCyBmUkFtBbwwVYl3YOs4kka63yLdUKq6xrKvXq2APAFQ&oe=636E0172',
  'https://scontent.fhan5-2.fna.fbcdn.net/v/t39.30808-6/287997410_3083425868654298_5455988160810743296_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=174925&_nc_ohc=blCcCLPGsBAAX9OmlFI&_nc_ht=scontent.fhan5-2.fna&oh=00_AfA52UUlyIBevJzFd6iiCuL8wt2Yg06FXhSw_w6ymFyqQw&oe=636F2EDD',
  'https://scontent.fhan5-8.fna.fbcdn.net/v/t39.30808-6/302200911_3140880289575522_7397034184281682250_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=174925&_nc_ohc=8dhkd8P1mRYAX-OhjOD&tn=cg8HkFnB7FPP64vZ&_nc_ht=scontent.fhan5-8.fna&oh=00_AfBE053ZAb_BjYenn28t2P8soUFkk8LvjXGHN6GHZiHIcQ&oe=636DCA92',
  'https://scontent.fhan5-8.fna.fbcdn.net/v/t39.30808-6/307327959_3147631135567104_4817136633695905969_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=174925&_nc_ohc=_wsOxQSm9C4AX99xrfU&_nc_ht=scontent.fhan5-8.fna&oh=00_AfCSG0nsIhDt-HJwJZvrunutkY9VmcrsDTC-P4BGi4jFOA&oe=636D5978',
  ]
let index = 0, text = 'Vào chiều ngày 29/10/2022, chẳng hiểu đi lạc kiểu gì anh lại lạc ngay vào sân bóng. Chẳng hiểu có một cơn nắng nào đó lỡ va vào mắt làm anh say mất tiêu luôn. Xinh thực sự! Nhưng anh nghĩ là xinh như vậy kiểu gì cũng có người iêu ròi. Sau khi nhờ quân sư Thuỷ hỏi giúp thìiii! thực sự để mà nói là không biết đây có phải là bước đầu của sự tuyệt vời mà ô trời gửi tặng anh không!(Vui hết sức).';
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
    $(".cover-login").hide();
    Swal.fire({
      title: textConfig.text1,
      text: textConfig.text2,
      imageUrl: "https://scontent.fhan5-11.fna.fbcdn.net/v/t39.30808-6/309834556_3171169749879909_5566148389734582374_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=pXev21eu7eMAX_sOzx6&_nc_ht=scontent.fhan5-11.fna&oh=00_AfBqdfqwLX9zEUm7FgFXiUXs8EWWHvzxfN6b30O9_Qx_bQ&oe=636E10B5",
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
    setInterval(() => {
      loopImage()
    }, 2000);
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
    text = text + ' <br>Hỏi cho vui vậy thôi chứ a tự công nhận là nhạt thật! Nhạt nhưng bù lại được cái yêu em thật lòng! Nhạt nhưng được cái muốn làm cho em vui cười mỗi khi nhắn tin, mỗi lúc bên anh nếu may mắn hơn thì có thể sẽ là mãi về sau này nữa! Sau thời gian tìm hiểu vừa xong ấy, anh đã chắc chắn được tình cảm của mình và đã đến lúc để thật nghiêm túc nói với em rùi(Trả lời bằng cách click vào button phía trên kia ha - <span style="color:pink">Em chỉ yêu anh - Còn cả thế giới cứ để anh lo - Làm người yêu anh nha?</span>)'
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

  $(document).on('input', '.username', function(e){
    
    if(e.target.value.toLowerCase() == 'my crush'){
      $("#title-login").html('Hello ' + e.target.value+'<br>You are so Beautiful <3');
      let about9 = document.getElementById("title-login");
      about9.style.color = 'pink';
      about9.style.fontSize = '35px'

      let lbuser = document.getElementById("lbuser");
      let lbpass = document.getElementById("lbpass");
      lbuser.style.color = 'pink';
      lbpass.style.color = 'pink';
    }else{
      let about9 = document.getElementById("title-login");
      about9.style.color = 'black';
      about9.style.fontSize = '25px'
      $("#title-login").html('Hello ' + e.target.value);

      let lbuser = document.getElementById("lbuser");
      let lbpass = document.getElementById("lbpass");
      lbuser.style.color = 'black';
      lbpass.style.color = 'black';
    }
  });
  $("#submit").click(function () {
   let username = document.getElementById('username').value;
   let password = document.getElementById('password').value; 
   if(username.toLowerCase() == 'my crush' && password.toLowerCase() == 'ntmy1'){
    $(".content").show();
    $(".cover-login").hide();
   }else{
    alert('Điền đúng mới vào được bạn ưiiii :v')
   }
  });
});
