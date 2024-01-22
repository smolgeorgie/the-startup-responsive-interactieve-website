var readmore = document.querySelectorAll(".readmore-link a");

for (var i = 0; i < readmore.length; i++) {
  readmore[i].onclick = function() {
    
    let readmoreContainer = this.closest("article");
    readmoreContainer.classList.toggle("open");
    
    if (readmoreContainer.classList.contains("open")) {
      this.innerHTML = "+ Voor meer informatie";
    } else {
      this.innerHTML = "- Voor minder informatie";
    }
    
    return false;
  };
}