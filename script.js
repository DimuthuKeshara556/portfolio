function toggleMenu(){
    var menu =document.getElementById('navBar');
    menu.style.left= menu.style.right = menu.style.right === '0px' ? '-500px' : '0';
}
var currentYear = new Date().getFullYear();
document.getElementById("currentYear").textContent = currentYear;

