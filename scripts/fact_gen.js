var text=[
  'One wasted coffe mug in the sea kills 20 Nemo fishes',
  'lore ipsum sdflksdjflksdgandf',
  'beer saves the rainforest' ,
  'in the sea kills 2 whales',
  'One wasted coffe mug in the sea kills 20 Nemo fishs'
]
var counter = 0;
var elem = document.getElementById("changeText");
var inst = setInterval(change, 1000);

function change() {
  elem.innerHTML = text[counter];
  counter++;
  if (counter >= text.length) {
    counter = 0;
    // clearInterval(inst); // uncomment this if you want to stop refreshing after one cycle
  }
}
//
// var randomNumber = Math.floor(Math.random());
