 

let riverSound;
let metalSound
let userHasClicked = false;

function preload() {
    riverSound = loadSound('assets/river.wav');
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  background(200);

  // Style the text.
  textAlign(CENTER);
  textSize(20);
  riverSound.setVolume(1)

  // Display a message.
  text('Click to play', 50, 50);

  // Create a p5.MediaElement using createAudio().
  beat = createAudio('assets/beat.mp3');

  describe('The text "Click to play" written in black on a gray background. A beat plays when the user clicks the square.');
}

// // Play the beat when the user presses the mouse.
// function mousePressed() {
//   beat.play();
// }

function draw() {

  background('hotpink');
  if( userHasClicked == false){
    text( 'click to start', windowWidth/2, windowHeight/2)
  }
  else{

  }

    // put all the code after the user has clicked

   if(riverSound.isPlaying() == false){
    riverSound.play();
   }

  }

  let targetValumeRiver = map (
    mouseX,
    0,
    whidth,
    0,
    1
  )

  let targetValumeMetal = map (
    mouseX,
    0,
    whidth,
    1,
    0
  )
  riverSound.setVolume(targetVolume)


function mouseClicked(){
  userHasClicked = true;
}
