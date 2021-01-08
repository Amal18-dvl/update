
/* var valeur = i;
var i = [10,100];
const slider = document.querySelector(".slider").addEventListener("click", function() {
   for (i=10; i=100; i++) {
       slider.innerHTML 
       slider.style.padding = this.value;
       console.log(slider);
       
   }

})
*/

const inputs = document.querySelectorAll(".container input");
console.log(inputs);
function handleUpdate() {
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}
inputs.forEach(input => input.addEventListener("change", handleUpdate));
inputs.forEach(input => input.addEventListener("mousemove", handleUpdate));

