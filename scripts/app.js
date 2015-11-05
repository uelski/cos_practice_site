
window.onload = function() {
console.log("this is working")
var brand = document.getElementById('brand');
console.log(brand);
var brandImg = "http://i.imgur.com/WmKiodO.png";
var body = document.getElementsByTagName('body')[0];
var brandCounter = 0;
body.addEventListener('click', function() {
  if (brandCounter == 0){
  comp.initialize(brand);
  comp.render(brandImg);
  console.log("you clicked");
  return brandCounter = 1;
}
});
hello();
var message = "More to come."
var navlist = document.getElementsByClassName('nav');
var list = document.getElementsByClassName("nav")[0];
console.log(list);
var listCounter = 0
list.addEventListener('click', function() {
  if (listCounter < 3){
  clickmsg.initialize(list);
  clickmsg.render(message);
  return listCounter += 1;
}
});









} // end of window.onload


var hello = function(){
  console.log("im still here");
}

function component(domElement) {
  this.domElement = domElement;
  this.initialize = function(selector) {
    this.domElement = document.createElement('div');
    selector.appendChild(this.domElement);
  };
  this.render = function(message) {
    this.domElement.innerHTML = message;
  }
}
var navlist = document.getElementsByClassName('nav');
var clickmsg = new component(navlist);

var comp = {
  domElement: null,
  initialize: function(selector) {
    console.log("initializing")
    this.domElement = document.createElement('img');
    selector.appendChild(this.domElement);
  },
  render: function(imgSrc) {
    this.domElement.src = imgSrc;
  }
};
