
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
var list = document.getElementsByClassName("nav")[0];
console.log(list);
list.addEventListener('click', function() {
  return alert("You clicked!");
});









} // end of window.onload




function component(domElement) {
  this.domElement = domElement;
  this.initialize = function() {
    this.domElement = document.createElement('div');
  };
  this.render = function() {
    this.domElement.innerHTML = "More to Come";
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
