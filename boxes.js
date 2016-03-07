console.log("hello world");


//callback style 1 $ Excerise 1
// $(document).ready(function(){
//   alert('Ready for DOM manipulation');
// });


//callback style 2  & Excercise 2
// $(function(){
//       //$('#secretBox').css('background', 'white').append(<h1>'secret box!'</h1>);
//       //the difference between solutions is that the 1st only appends text it doesn't make it h1
// $('#secretBox').css('background','white').html('<h1>secret box!</h1>');

// $('#row1 > div').addClass('boxType3');

// $('#row4 > div:last-child').css('display', 'none');

// $('.boxType1').css('background', 'white');

// $('#row2 > div:lt(2)').removeClass(); //this removes the first 2 divs
    //lt refers to less than, grabs the divs less than 2

// $('.box').not('#secretBox').width('2px');

// });



//Excercise 3


//event.preventDefault()
$(document).ready(function(){

$('#container').on('click', function(event){
  console.log("pageX: " + event.pageX);
  console.log("pageY: " +event.pageY);
});


$('.boxType1').html('<a href="http://www.galvanize.com/">Galvanize</a>');
$('a').click(function(event){
  event.preventDefault();
  alert('YOU CAN\'T LEAVE!');
});


$('.box').click(function(event){
  $(this).toggleClass('puppy');  
});


$('#container').click(function(event){
  // var target = event.target;
  // if(target.classList.contains('box')){
  //     this.style.backgroundColor = 'black';
  //     target.style.backgroundColor='white';
  // }else{
  //   this.style.backgroundColor='limegreen';
  // }

  var $tgt = $(event.target);
  if($tgt.hasClass('box')){
    $(this).css('background-color', 'black');
    $tgt.css('background-color', 'white');
  }else{
    $(this).css('background-color', 'limegreen');
  }


});





});