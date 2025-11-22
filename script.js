var piano = document.getElementById("piano");

var keys = [
  "KeyA","KeyS","KeyD","KeyF","KeyG","KeyH","KeyJ","KeyK","KeyL",
  "KeyZ","KeyX","KeyC","KeyV","KeyB","KeyN","KeyM",
  "KeyQ","KeyW","KeyE","KeyR","KeyT","KeyY","KeyU","KeyI","KeyO","KeyP",
  "Digit1","Digit2","Digit3","Digit4","Digit5","Digit6","Digit7","Digit8","Digit9","Digit0"
];

var start = 28;
var sounds = {};

function getLabel(code) {
  if (code.startsWith("Key")) return code.replace("Key", "");
  if (code.startsWith("Digit")) return code.replace("Digit", "");
  return code;
}

keys.forEach((code, i) => {
  let num = start + i;
  let file = `./audio/${num}.mp3`;
  sounds[code] = file;

  let div = document.createElement("div");
  div.className = "key";
  div.dataset.code = code;
  div.dataset.file = file;
  
  let label = getLabel(code); 
  div.innerHTML = `<span>${label}</span>`;
  
  div.addEventListener("click", function () {
    playSound(code);
  });

  piano.appendChild(div);
});

function playSound(code) {
  let file = sounds[code];
  if (!file) return;

  let audio = new Audio(file);
  audio.currentTime = 0;
  audio.play();

  let key = document.querySelector(`.key[data-code="${code}"]`);
  if (key) {
    key.classList.add("active");
    setTimeout(() => key.classList.remove("active"), 120);
  }
}

document.addEventListener("keydown", function (e) {
  playSound(e.code);
});


