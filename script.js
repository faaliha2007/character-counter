 var textbox = document.getElementById("textbox")
    var count = document.getElementById("count")
    var warning = document.getElementById("warning")
    var progress = document.getElementById("progress")
    var postbtn = document.getElementById("postbtn")
    var likebtn = document.getElementById("likebtn")
    var darkbtn = document.getElementById("darkbtn")
    var card = document.getElementById("card")
    var msg = document.getElementById("msg")

    let like = false
    let dark = false

    textbox.addEventListener("input", function () {
      let typed = textbox.value.length
      let max = 200
      let remaining = max - typed

      if (typed > max) {
        textbox.value = textbox.value.substring(0, max)
        warning.textContent = "Caption too long"
        typed = max
        remaining = 0

      }
      else {
        warning.textContent = ""
      }

      count.textContent = typed + " / " + max
      progress.style.width = (typed / max) * 100 + "%"

      if (typed < 150) {
        progress.className = "h-full bg-pink-500 transition-all"
      }
      else if (typed < 190) {
        progress.className = "h-full bg-orange-400 transition-all"
      }
      else {
        progress.className = "h-full bg-red-500 transition-all"
      }
      //button
      if (typed > 0) {
        postbtn.classList.remove("cursor-not-allowed", "opacity-50")
      }
      else {
        postbtn.classList.add("cursor-not-allowed", "opacity-50")
      }


    })

    //likebtn

    likebtn.addEventListener("click", function () {
      like = !like

      if (like) {
        likebtn.textContent = "♥"
        likebtn.classList.remove("text-gray-400")
        likebtn.classList.add("text-red-500")
      }

      else {
        likebtn.textContent = "♡"
        likebtn.classList.add("text-gray-400")
        likebtn.classList.remove("text-red-500")
      }
    })

    //darkbtn
    darkbtn.addEventListener("click", function () {
      dark = !dark


      textbox.classList.toggle("bg-gray-700")
      textbox.classList.toggle("text-white")
      card.classList.toggle("text-white")
      card.classList.toggle("bg-gray-700")
      darkbtn.textContent = dark ? "☀️" : "🌙"
    })

    //post alert
    postbtn.addEventListener("click", function () {

      msg.classList.remove("hidden")

      setTimeout(function () {
        msg.classList.add("hidden")
      }, 2000)
      textbox.value = ""
    })