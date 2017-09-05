window.addEventListener('load', function() {
const elem = document.getElementById("saucer");
  if (elem == null){
  	console.log("false");
  }
  else{
  	UFO();
  }
});

const UFO = function(){
    var elem = document.getElementById("saucer"),
        speed = 1,
        currentPos = 0;
    elem.style.left = 0+"px";
    elem.style.right = "auto";
    var motionInterval = setInterval(function() {
        currentPos += speed;
        if (currentPos >= 800 && speed > 0) {
           currentPos = 800;
           speed = -1 * speed;
           elem.style.width = parseInt(elem.style.width)*2+"px";
           elem.style.height = parseInt(elem.style.height)*2+"px";
        }
        if (currentPos <= 0 && speed < 0) {
           clearInterval(motionInterval);
           UFO();
        }
        elem.style.left = currentPos+"px";
    },20);
}

export default UFO