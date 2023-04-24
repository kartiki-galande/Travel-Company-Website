var myNav = document.getElementById('nav');
window.onscroll = function() { colorFunc() };
function colorFunc () { 
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            myNav.classList.add("nav-colored");
            myNav.classList.remove("nav-transparent");
    } 
    else {
        myNav.classList.add("nav-transparent");
        myNav.classList.remove("nav-colored");
    }
};