var readmore = document.querySelectorAll(".readmore-link a");

for (var i = 0; i < readmore.length; i++) {
  var el = readmore[i];
  el.onclick = function() {
    
    let readmoreContainer = el.closest("article");
    readmoreContainer.classList.toggle("open");
    
    let lable = (el.innerHTML === "More") ? "Less" : "More";
    el.innerHTML = lable;
    
    return false;
  };
}

