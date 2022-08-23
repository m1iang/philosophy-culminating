
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
    "button": `<button id="scene-3-button" onclick="scene3Button()" class="hover:text-sky-800 pb-12"
    style="font-size: 24px; font-family: 'Times New Roman', Times, serif;">interesting...but how?</button>`,
    "caption": ``,
    "text": `
    <div class="prose text-left pt-24 pb-6">
    
    <h1 id="was-that-free-will-">Was that Free Will?</h1>
    <p>Most likely not...</p>
    <p>I think most people would believe that they chose it because they <em>created</em> the choice of clicking left or right, but I would argue the circumstance provided you the choice to click left or right.</p>
    <p>My belief is that all actions are a part of an unbreakable chain of consequences, whether good or bad. How did I come to this belief? In part because of culture and also through the ideas of Humes, that liberty is defined as the will to act or not act. From this I argue my point that circumstances give us the choices within the boundaries of the consequences from our previous actions, and so we only have the agency to act upon the choices, not create new choices -- which ultimately would be free will.</p>
    <p><strong>tl;dr</strong></p>
    <ul>
    <li>choices arise from the circumstance</li>
    <li>these choices lie within the boundaries of the consequences from our previous choice</li>
    <li>thus, we have the will to choose, but not create the choice, which Hobbes defines as free will</li>
    </ul>
    <h3 id="storytime-">Storytime!</h3>
    <p>Because of this worldview, combined with a sprinkle of other beliefs, I generally view actions that aren&#39;t favourable to my goals as a bad choice on my part. Likewise, I can choose better choices by putting myself in more favourable circumstances that give rise to better choices.</p>
    <p>So when I decided to enroll in both HSP (intro to anthro, psych, and sociology) and Philosophy, I thought I made a bad choice. Why? Well, </p>
    <ol>
    <li>Less time in the summer to do other things</li>
    <li>Are these 2 credits even worth that much?</li>
    <li>Writing isn&#39;t my favourite thing to do</li>
    </ol>
    <p>But, because I believed that I can put myself in better circumstances by choosing to improve my writing and put out good quality work, I stuck with it. Now, I&#39;m pretty confident and love learning more about philosophy! :D</p>
    <h4 id="so-what-influenced-my-belief-in-determinism-and-to-some-extent-compatibilism-">So, what influenced my belief in determinism, and to some extent, compatibilism?</h4>
    <p>(culture, for one)</p>



    </div>
    `,
  },
  { // scene 4
    "isImageOrText": "image",
    "image": `<img src="images/tuan yuan fan.png" width="40%" alt=""><p>Image from (卡通家庭图片, n.d.)</p>`,
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

    <h1 id="-the-divine-determinism-cultural-examples">天, 命運, The Divine, Determinism - Cultural Examples</h1>
<h3 id="storytime-">Storytime!</h3>
<p>Growing up, I heard the terms 天 &#39;sky&#39;, 命運 &#39;personal destiny&#39; a lot. Usually, when some surprising but lucky circumstance happens and these terms would be used to describe how it was truly the <em>right</em> moment.</p>
<p> 天 &#39;sky/ heavens&#39; - not exactly a Divine being, but the will of the natural world, i.e circumstances</p >
<p>命運 &#39;personal destiny&#39; - the agency to act upon choices that are given within the current circumstances</p>
<p>Both of these concepts are incredibly akin to Determinism, and so having those concepts reinforced through cultural activities and throughout my childhood has led to my belief of Determinism.</p>


    </div >
  `,
  },
  { // scene 6
    "isImageOrText": "image",
    "image": `<img src = "images/hack the north.jpeg" width = "40%" alt = ""><p>Image from (Tu, 2019)</p>`,
    "button": `<button button id = "scene-6-button" onclick = "scene6Button()" class="hover:text-sky-800 pt-6"
style = "font-size: 24px; font-family: 'Times New Roman', Times, serif;" > next</button > `,
    "caption": `<h1 h1 class="pt-12 pb-2" >👀 upcoming hackathon @UW, very excited</h1 > `,
    "text": ``,
  },
  { // scene 7
    "isImageOrText": "text",
    "image": ``,
    "button": `<button button id = "scene-7-button" onclick = "scene7Button()" class="pb-12 hover:text-sky-800"
style = "font-size: 24px; font-family: 'Times New Roman', Times, serif;" > awesome! 🤟</button > `,
    "caption": ``,
    "text": `
  <div div class="prose text-left pt-24 pb-6" >
    
  <h1 id="hackthons-extracurriculars-things-i-love-to-do-">Hackthons, Extracurriculars, Things I love to do!</h1>
  <h2 id="authenticity-and-its-importance">Authenticity and its importance</h2>
  <p>I firmly believe that everyone should strive towards authenticity, and also that there are multiple ways of achieving authenticity. Not just through doing actions that align with your goals. However, I believe that this way is the more clear approach. This makes me more of an existentialist, aligned with Friedrich Nietzsche&#39;s thinking.</p>
  <p>From being authentic, other parts of my philosophical view builds on top of authentic actions. For example, how I consider my purpose is through my actions, and if my actions are authentic, then my purpose is justified. Otherwise, I would be living a life of falsehood and the purpose of my life, is not aligned with my goals.</p>
  <h2 id="storytime-">Storytime!</h2>
  <p>Some of my involvements with extracurriculars include teaching/giving lectures. Before, I joined other clubs like DECA and FBLA, but I realized that if I did those clubs just to pad out my university application, there was no justified purpose. Also, I wouldn&#39;t put as much effort in there, than if I was involved with something I cared about like sharing knowledge and software development -- which is why the Hack the North image was there. </p>
  <p>Since my actions are aligned with my values and goals, regardless of societal pressures and influences, I am striving for authenticity. Whether that comes across in my university application is another story, but currently, I am truly experiencing the most of what being a high school student has to offer, because of my odyssey towards a more authentic self — philosophically speaking. Instead of conforming, i.e doing things that I think other people want to see; I will do my best in what I want to do, then show them my accomplishments.</p>  


    </div >
  `,
  },
  { // scene 8
    "isImageOrText": "image",
    "image": `<img src = "images/thinker.png" width = "40%" alt = ""><p>Image from (The Thinker Art Print n.d.)</p>`,
    "button": `<button button id = "scene-8-button" onclick = "scene8Button()" class="hover:text-sky-800 pt-6"
style = "font-size: 24px; font-family: 'Times New Roman', Times, serif;" > next</button > `,
    "caption": `<h1 h1 class="pt-12 pb-2 text-2xl" > <i>cogito, ergo sum</i></h1 > `,
    "text": ``,
  },
  { // scene 9
    "isImageOrText": "text",
    "image": ``,
    "button": `<button button id = "scene-9-button" onclick = "scene9Button()" class="hover:text-sky-800"
style = "font-size: 24px; font-family: 'Times New Roman', Times, serif;" > next</button > `,
    "caption": ``,
    "text": `
  <div div class="prose text-left pt-24 pb-6" >

  <h1 id="privilege-of-inquiry">Privilege of Inquiry</h1>
<h2 id="i-think-therefore-i-am">I think, Therefore I am</h2>
<p>My place in this world is to ask these questions and I am someone who has the privilege to inquire. This thought actually only came up recently while I learned about metaphysics and epistemology. </p>
<p>I realized that my actions as a student, towards doing work, getting good grades, and carrying out club activities; are all distinctly separate from the needs of society to some extent. There is no societal pressure for me to find a job, raise children etc. Thus, my purpose is to develop intellectually, to think critically and inquire. It is because of this occupation, this specific role in society, that I have the privilege to think. </p>
<p>This metaphysical inquiry into purpose I believe, is deeply tied to the actions we perform. The actions we perform are in accordance with how we choose to show our ’self’ to the world. </p>
<blockquote>
<p>To find a truthful purpose, requires finding the authentic self.</p>
</blockquote>
~ me probably

    </div >
  `,
  },
  { // scene 10
    "isImageOrText": "image",
    "image": `<img src = "images/reality.png" width = "40%" alt = "">`,
    "button": `<button button id = "scene-10-button" onclick = "scene10Button()" class="hover:text-sky-800 pt-6"
style = "font-size: 24px; font-family: 'Times New Roman', Times, serif;" > next</button > `,
    "caption": `<h1 h1 class="pt-12 pb-2 text-2xl" > <i>Reality and the Divine</i></h1 > `,
    "text": ``,
  },
  { // scene 11
    "isImageOrText": "text",
    "image": ``,
    "button": `<button button id = "scene-11-button" onclick = "scene11Button()" class="hover:text-sky-800"
style = "font-size: 24px; font-family: 'Times New Roman', Times, serif;" > next</button > `,
    "caption": ``,
    "text": `
  <div div class="prose text-left pt-24 pb-6" >

  <h1 id="supreme-beings-and-my-world">Supreme Beings and <em>My</em> World</h1>
<h2 id="what-is-reality-">What is Reality?</h2>
<p>I’d like to make the distinction between reality and world. Reality are indisputable truths that can be observed and evaluated through naturalized epistemology, while the world we live in is our metaphysical interpretation of reality, influenced by our morals and other belief systems.</p>
<p>So, if we can conduct empirical observation to verify these truths, &#39;knowledge through observing&#39;, then it is a fact of reality. Otherwise, when combined through &#39;knowledge through observing plus thinking&#39;, it is the <em>truth of our own world</em> and our interpretation of the fact of reality.</p>
<h2 id="divinity">Divinity</h2>
<p>I mentioned how in East-Asian philosophy there&#39;s often this concept of a transcendent force that acts as the will of nature i.e something to explain how some circumstances come to be (Woolley, n.d.). </p>
<p><img src="images/bai shen.jpeg" alt=""></p>
<p>Image from (拜神烧香的"礼仪"和"禁忌"......_焚香, 2020)</p>
<p>When I was little, we would sometimes go to temples and offer incense not towards a specific Divine being, but rather to the concept of 天. So, this is really something that I grew up with, and has become part of my beliefs, but since it&#39;s such an abstract concept, it can only really be considered as part of nature itself, and the natural course of actions -- cause and consequence. </p>
<p>Therefore, I don&#39;t hold any belief towards a Supreme being.</p>


    </div >
  `,
  },
  { // scene 12
    "isImageOrText": "image",
    "image": `<img src = "images/philosophy.png" width = "40%" alt = ""><p>Image from (S, n.d.)</p>`,
    "button": `<button button id = "scene-12-button" onclick = "scene12Button()" class="hover:text-sky-800 pt-6"
style = "font-size: 24px; font-family: 'Times New Roman', Times, serif;" > see the world.</button > `,
    "caption": `<h1 h1 class="pt-12 pb-2 text-2xl" > <i></i></h1 > `,
    "text": ``,
  },
]

const drawScene = (scene) => {
  if (scene.isImageOrText === "image") {
    let gameCanvas = document.getElementById("game-canvas");
    gameCanvas.innerHTML += `${scene.caption} ` + `${scene.image} ` + `${scene.button} `;
  }
  else if (scene.isImageOrText === "text") {
    let gameCanvas = document.getElementById("game-canvas");
    gameCanvas.innerHTML += `${scene.text} ` + `${scene.button} `;
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
  <h1 h1 class="pt-24 pb-2 text-white text-6xl" style = "font-family: 'Times New Roman', serif;" > <i>a personal odyssey into philosophy</i></h1 >
    <br>
      <br>
        <a href="" class="text-white pt-6 transition ease-in-out delay-150 hover:scale-110 duration-300">re-enter the microcosm</a>
        <br>
          <br>
            <a href="https://github.com/yak-fumblepack/philosophy-culminating" class="text-white pt-24 transition ease-in-out delay-150 hover:scale-110 duration-300">view source code</a>
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

