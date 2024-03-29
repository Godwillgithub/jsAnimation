function myMove() {
    let id = null;
    const elem = document.getElementById("animate");
    let pos = 0;
    clearInterval(id);
    id = setInterval(frame, 5);
    function frame() {
      if (pos == 400) {
        clearInterval(id);
      } else {
        pos++;
        elem.style.top = pos + "px";
        //elem.style.left = pos + "px";
        //elem.style.right = pos + "px";
        elem.style.down = pos + "px";
      }
    }
  }