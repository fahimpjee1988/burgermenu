const openMobileMenuBtn = document.querySelector(".device-menu");
const headerMenu = document.querySelector(".header-nav");

openMobileMenuBtn.addEventListener("click", () => {
  if(openMobileMenuBtn.classList.contains("open")) {
    openMobileMenuBtn.classList.remove("open");
    headerMenu.classList.remove("active");
  } else {
    headerMenu.classList.add("active");
    openMobileMenuBtn.classList.add("open");
  }
})


document.getElementById("showHide").onclick = function() {
    var theDiv = document.getElementById("foo");
    if(theDiv.style.display == 'none') {
        theDiv.style.display = 'block';
        this.innerHTML = 'Hide';
    } else {
        theDiv.style.display = 'none';
        this.innerHTML = 'Show';
    }
}

document.getElementById("showHide2").onclick = function() {
    var theDiv = document.getElementById("foo2");
    if(theDiv.style.display == 'none') {
        theDiv.style.display = 'block';
        this.innerHTML = 'Hide';
    } else {
        theDiv.style.display = 'none';
        this.innerHTML = 'Show';
    }
}

function but1(){
    console.log('test')

    document.getElementById("sectwo").classList.add("first")
    document.getElementById("sectwo").classList.remove("second")
    document.getElementById("sectwo").classList.remove("third")

}

function but2(){
    console.log('test')
    document.getElementById("sectwo").classList.remove("third")

    document.getElementById("sectwo").classList.remove("first")
    document.getElementById("sectwo").classList.add("second")
}
function but3(){
    console.log('test')

    document.getElementById("sectwo").classList.remove("first")
    document.getElementById("sectwo").classList.remove("second")
    document.getElementById("sectwo").classList.add("third")
}


