var readmore = document.querySelectorAll(".readmore-link a");

for (var i = 0; i < readmore.length; i++) {
  readmore[i].onclick = function() {
    
    let readmoreContainer = this.closest("article");
    readmoreContainer.classList.toggle("open");
    
    let lable = (this.innerHTML === "+ Lees de volledige beschrijving") ? "Lees minder beschrijving" : " + Lees meer beschrijving";
    this.innerHTML = lable;
    
    return false;
  };
}