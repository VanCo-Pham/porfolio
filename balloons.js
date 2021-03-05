const keywords = [
    'GIMP', 'FLASK', 'DJANGO', 'SASS', 'JQUERY', 'SQLITE', 'REACT', 'TILTJS',
    'HTML5', 'ES6', 'CSS3', 'JAVASCRIPT', 'GIT', 'NPM', 'MATERIAL UI', 'ANT DESIGN',
    'BLENDER', 'PYSIDE'
]
const createBubble = (e) => {
    var body = document.querySelector(".balloons");
    var bubbles = document.createElement("span");
    // var x = e.offsetX;
    // var y = e.offsetY;
    var size = Math.random() * 100;

    // bubbles.style.bottom = Math.random() * window.innerHeight + "px";
    bubbles.style.bottom = "0px";

    bubbles.style.left = Math.random() * window.innerWidth * 0.8 + "px";

    // bubbles.style.width = size + "px";
    // bubbles.style.height = size + "px";
    bubbles.innerHTML = keywords[Math.floor((Math.random()) * (keywords.length - 1))];
    body.appendChild(bubbles);
    setTimeout( () => {
        bubbles.remove()
    }, 3000)
};
setInterval(createBubble, 150);