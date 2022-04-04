const modal = document.getElementById("modal");
const contact = document.getElementById("contact");
const modalClose = document.getElementById("modalClose");

contactModal.addEventListener("click", ()=>{
    modal.style.display = 'block';
})

modalClose.addEventListener("click", ()=>{
    modal.style.display = "none";
})

window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
}