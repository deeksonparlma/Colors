$(document).ready(function(){
  $("form.form").submit(function(event){
     event.preventDefault();
     var color = document.getElementById("color").value;
     $(".display").css("background",color);
     $(".colorCode").html(color.toUpperCase());
     $(".colorCode").click(function(){
       // alert("This is color has  code :"+color);
     });
   });
});
