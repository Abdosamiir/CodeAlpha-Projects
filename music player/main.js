document.addEventListener("DOMContentLoaded", function () {
  const audio = document.getElementById("audio");
  const playPauseBtn = document.getElementById("playPauseBtn");
  const seekBar = document.getElementById("seekBar");
  const currentTimeSpan = document.getElementById("currentTime");
  const durationSpan = document.getElementById("duration");
  const audioFileInput = document.getElementById("audioFile");
  const imageFileInput = document.getElementById("imageFile");
  const cover = document.getElementById("cover");

  // Play or Pause the audio
  playPauseBtn.addEventListener("click", function () {
    if (audio.paused) {
      audio.play();
      playPauseBtn.textContent = "Pause";
    } else {
      audio.pause();
      playPauseBtn.textContent = "Play";
    }
  });

  // Update seek bar as audio plays
  audio.addEventListener("timeupdate", function () {
    const value = (100 / audio.duration) * audio.currentTime;
    seekBar.value = value;
    currentTimeSpan.textContent = formatTime(audio.currentTime);
    durationSpan.textContent = formatTime(audio.duration);
  });

  // Seek audio
  seekBar.addEventListener("input", function () {
    const time = (seekBar.value / 100) * audio.duration;
    audio.currentTime = time;
  });

  // Format time in minutes and seconds
  function formatTime(seconds) {
    const min = Math.floor(seconds / 60);
    const sec = Math.floor(seconds % 60);
    return min + ":" + (sec < 10 ? "0" : "") + sec;
  }

  // Handle audio file selection
  audioFileInput.addEventListener("change", function () {
    const file = this.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        audio.src = e.target.result;
        audio.load();
        playPauseBtn.textContent = "Play";
      };
      reader.readAsDataURL(file);
    }
  });

  // Handle image file selection
  imageFileInput.addEventListener("change", function () {
    const file = this.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        cover.src = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  });
});
