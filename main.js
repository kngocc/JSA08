function first() {
    console.log("Hello there!")
  }
  

  function second () {
    console.log("How are you doing?")
  }
  

  function last ()  {
    console.log("I'm fine, thanks")
  }
  

  setTimeout(first, 1000)
  setTimeout(second, 2000)
  setTimeout(last, 3000)



// bai 2


function toggleSidebar() {
    if (document.getElementById('mySidebar').style.display === "block") {
        document.getElementById('mySidebar').style.display = "none";
    }
    else {
        document.getElementById('mySidebar').style.display = "block";
    }
}
