
// Appear questions section

const btnAppear =  $('.appear');
const btnAppear1 = $('.appear1');
const btnAppear2 = $('.appear2');
const btnAppear3 = $('.appear3');

btnAppear.click(function(){
    if(btnAppear.text() == '+'){
        btnAppear.text('-');
    }else {
        btnAppear.text('+');
    }
    $('.main-text-questions').toggleClass('app');
});
btnAppear1.click(function(){
    if(btnAppear1.text() == '+'){
        btnAppear1.text('-');
    }else {
        btnAppear1.text('+');
    }
    $('.main-text-questions1').toggleClass('app');
});

btnAppear2.click(function(){
    if(btnAppear2.text() == '+'){
        btnAppear2.text('-');
    }else {
        btnAppear2.text('+');
    }
    $('.main-text-questions2').toggleClass('app');
});

btnAppear3.click(function(){
    if(btnAppear3.text() == '+'){
        btnAppear3.text('-');
    }else {
        btnAppear3.text('+');
    }
    $('.main-text-questions3').toggleClass('app');
});
