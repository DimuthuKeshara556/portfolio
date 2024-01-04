
var currentYear = new Date().getFullYear();
document.getElementById("currentYear").textContent = currentYear;

function toggleMenu(){
    var checkbox = document.getElementById('menu-icon');
    if (checkbox.checked) {
      checkbox.checked = false;
    } else {
      console.log('Checkbox is not checked');
    }
}