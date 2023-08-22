// Navbar click

const btn = $('#bars');
const nav = $('.nav')

btn.click(function(){
    nav.toggleClass('clicked');
});
