var bunnyVideo = document.getElementById("banner-video");

function playPause() {
  var el = document.getElementById("playButton");
  if (bunnyVideo.paused) {
    bunnyVideo.play();
    el.className ="";
  } else {
  
    bunnyVideo.pause();
    el.className = "playButton";
  }
}

bunnyVideo.addEventListener("click", playPause, false);
