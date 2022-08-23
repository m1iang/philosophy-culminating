
const scenes = [
  { // scene 1
    "isImageOrText": "image",
    "image": `<img src="images/doorway.png" width="40%" alt="">`,
    "caption": `<h1 id="scene-1-title" class="pt-12 pb-2 text-6xl italic" style="font-family: 'Times New Roman';">Odyssey</h1>
    <h2 id="scene-1-subtitle" class="text-lg pt-2">A personal philosophical microcosm <i><small>by mike</small></i></h2>`,
    "button": `<button id="begin-button" onclick="beginButton()" class="hover:text-sky-800"
    style="font-size: 24px; font-family: 'Times New Roman', Times, serif;">Begin</button>`,
    "text": "",
  },
  { // scene 2
    "isImageOrText": "image",
    "image": `<img src="images/freewill.png" width="40%" alt="">`,
    "button": `<div class="flex flex-row"><button id="direction-button" onclick="directionButton()" class="hover:text-sky-800 px-3" style="font-size: 24px; font-family: 'Times New Roman', Times, serif;">left</button><button id="direction-button" onclick="directionButton()" class="hover:text-sky-800 px-3" style="font-size: 24px; font-family: 'Times New Roman', Times, serif;">right</button></div>`,
    "caption": `<h1 class="pt-12">you arrive at an outcropping. the door slams shut behind you. the choice is left or right, you have the <i>will</i> to choose, but not the will to <i>create the choice</i>.</h1>`,
    "text": "",
  },
  { // scene 3
    "isImageOrText": "text",
    "image": ``,
    "button": `<button id="scene-3-button" onclick="scene3Button()" class="hover:text-sky-800"
    style="font-size: 24px; font-family: 'Times New Roman', Times, serif;">interesting...but how?</button>`,
    "caption": ``,
    "text": `
    <div class="prose text-left pt-24 pb-6">
   
    <h1 id="was-that-free-will-">Was that Free Will?</h1>
<p>Most likely not...</p>
<p>I think most people would believe that they chose it because they <em>created</em> the choice of clicking left or right, but I would argue the circumstance provided you the choice to click left or right.</p>
<p>Since you clicked the &#39;Begin&#39; button, the next action arose from the consequences of that action there. <em>if that makes sense</em></p>
<h4 id="so-what-influenced-my-belief-in-determinism-">So, what influenced my belief in determinism?</h4>
<p>(culture, for one)</p>


    </div>
    `,
  },
  { // scene 4
    "isImageOrText": "image",
    "image": `<img src="images/tuan yuan fan.png" width="40%" alt="">`,
    "button": `<button id="scene-4-button" onclick="scene4Button()" class="hover:text-sky-800 pt-6"
    style="font-size: 24px; font-family: 'Times New Roman', Times, serif;">well... what does 天 and 命運 have to do with free will and determinism?</button>`,
    "caption": `<h1 class="pt-12">growing up, I would often hear the words 天 and 命運 used whenever something surprising but joyous occur. also when something really lucky and coincidental happens</h1>`,
    "text": ``,
  },
  { // scene 5
    "isImageOrText": "text",
    "image": ``,
    "button": `<button id="scene-5-button" onclick="scene5Button()" class="hover:text-sky-800"
    style="font-size: 24px; font-family: 'Times New Roman', Times, serif;">that's pretty interesting actually...</button>`,
    "caption": ``,
    "text": `
    <div class="prose text-left pt-24 pb-6">
    talk about east asian determinism
    </div>
    `,
  },
  { // scene 6
    "isImageOrText": "image",
    "image": `<img src="images/hack the north.jpeg" width="40%" alt="">`,
    "button": `<button id="scene-6-button" onclick="scene6Button()" class="hover:text-sky-800 pt-6"
    style="font-size: 24px; font-family: 'Times New Roman', Times, serif;">next</button>`,
    "caption": `<h1 class="pt-12 pb-2">👀 upcoming hackathon @ UW, very excited</h1>`,
    "text": ``,
  },
  { // scene 7
    "isImageOrText": "text",
    "image": ``,
    "button": `<button id="scene-7-button" onclick="scene7Button()" class="hover:text-sky-800"
    style="font-size: 24px; font-family: 'Times New Roman', Times, serif;">awesome! 🤟</button>`,
    "caption": ``,
    "text": `
    <div class="prose text-left pt-24 pb-6">
    talk about authentic self
    </div>
    `,
  },
  { // scene 8
    "isImageOrText": "image",
    "image": `<img src="images/thinker.jpg" width="40%" alt="">`,
    "button": `<button id="scene-8-button" onclick="scene8Button()" class="hover:text-sky-800 pt-6"
    style="font-size: 24px; font-family: 'Times New Roman', Times, serif;">next</button>`,
    "caption": `<h1 class="pt-12 pb-2 text-2xl"><i>cogito, ergo sum</i></h1>`,
    "text": ``,
  },
  { // scene 9
    "isImageOrText": "text",
    "image": ``,
    "button": `<button id="scene-9-button" onclick="scene9Button()" class="hover:text-sky-800"
    style="font-size: 24px; font-family: 'Times New Roman', Times, serif;">next</button>`,
    "caption": ``,
    "text": `
    <div class="prose text-left pt-24 pb-6">
    talk about the privilege of inquiry
    </div>
    `,
  },
  { // scene 10
    "isImageOrText": "image",
    "image": `<img src="images/reality.png" width="40%" alt="">`,
    "button": `<button id="scene-10-button" onclick="scene10Button()" class="hover:text-sky-800 pt-6"
    style="font-size: 24px; font-family: 'Times New Roman', Times, serif;">next</button>`,
    "caption": `<h1 class="pt-12 pb-2 text-2xl"><i>Reality and the Divine</i></h1>`,
    "text": ``,
  },
  { // scene 11
    "isImageOrText": "text",
    "image": ``,
    "button": `<button id="scene-11-button" onclick="scene11Button()" class="hover:text-sky-800"
    style="font-size: 24px; font-family: 'Times New Roman', Times, serif;">next</button>`,
    "caption": ``,
    "text": `
    <div class="prose text-left pt-24 pb-6">
    talk about the divine, examples about it and reality
    </div>
    `,
  },
  { // scene 12
    "isImageOrText": "image",
    "image": `<img src="images/philosophy.png" width="40%" alt="">`,
    "button": `<button id="scene-12-button" onclick="scene12Button()" class="hover:text-sky-800 pt-6"
    style="font-size: 24px; font-family: 'Times New Roman', Times, serif;">see the world.</button>`,
    "caption": `<h1 class="pt-12 pb-2 text-2xl"><i></i></h1>`,
    "text": ``,
  },
]

const drawScene = (scene) => {
  if (scene.isImageOrText === "image") {
    let gameCanvas = document.getElementById("game-canvas");
    gameCanvas.innerHTML += `${scene.caption}` + `${scene.image}` + `${scene.button}`;
  }
  else if (scene.isImageOrText === "text") {
    let gameCanvas = document.getElementById("game-canvas");
    gameCanvas.innerHTML += `${scene.text}` + `${scene.button}`;
  }
}

const clearCanvas = () => {
  let gameCanvas = document.getElementById("game-canvas");
  gameCanvas.innerHTML = "";
}

const clearCanvasBackground = () => {
  let gameCanvas = document.getElementById("game-canvas");
  gameCanvas.style.backgroundColor = "black";
}

const displayTitle = () => {
  let gameCanvas = document.getElementById("game-canvas");
  gameCanvas.innerHTML += `
  <h1 class="pt-24 pb-2 text-white text-6xl" style="font-family: 'Times New Roman', serif;"><i>a personal odyssey into philosophy</i></h1>
  <br>
  <br>
  <a href="" class="text-white pt-6 transition ease-in-out delay-150 hover:scale-110 duration-300">re-enter the microcosm</a>
  `;
}

let sceneNumber = 0;

const beginButton = () => {
  clearCanvas();
  drawScene(scenes[1]);
}

const directionButton = () => {
  clearCanvas();
  drawScene(scenes[2]);
}

const scene3Button = () => {
  clearCanvas();
  drawScene(scenes[3]);
}

const scene4Button = () => {
  clearCanvas();
  drawScene(scenes[4]);
}

const scene5Button = () => {
  clearCanvas();
  drawScene(scenes[5]);
}

const scene6Button = () => {
  clearCanvas();
  drawScene(scenes[6]);
}

const scene7Button = () => {
  clearCanvas();
  drawScene(scenes[7]);
}

const scene8Button = () => {
  clearCanvas();
  drawScene(scenes[8]);
}

const scene9Button = () => {
  clearCanvas();
  drawScene(scenes[9]);
}

const scene10Button = () => {
  clearCanvas();
  drawScene(scenes[10]);
}

const scene11Button = () => {
  clearCanvas();
  drawScene(scenes[11]);
}

const scene12Button = () => {
  clearCanvas();
  clearCanvasBackground();
  displayTitle();
}

$(document).ready(function () {
  drawScene(scenes[0]);
});

