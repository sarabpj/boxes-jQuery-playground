console.log("hello world");


//callback style 1 $ Excerise 1
$(document).ready(function(){
  alert('Ready for DOM manipulation');
});

//callback style 2  & Excercise 2
$(function(){
//$('#secretBox').css('background', 'white').add('h1').append('secret box!');
//the difference between solutions is that the 1st only appends text it doesn't make it h1
$('#secretBox').css('background','white').html('<h1>secret box!</h1>');

$('#row1 > div').addClass('boxType3');

$('#row4 > div:last-child').css('display', 'none');

$('.boxType1').css('background', 'white');

$('#row2 > div:lt(2)').removeClass(); //this removes the first 2 divs

$('.box').not('#secretBox').width('2px');

//event.preventDefault()
});



//Excercise 3

