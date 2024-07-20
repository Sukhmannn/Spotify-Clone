console.log("Welcome to spotify");
let audioElement = new Audio('./song/1.mp3');
let songIndex = 0;
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif= document.getElementById('gif');
let songs = [
    {songName : "Mauja-hi-Mauja" , filePath:"./song/1.mp3"}
]
//handle play pause click
masterPlay.addEventListener('click',()=> {
    if(audioElement.paused || audioElement <=0) {
        audioElement.play();
        gif.style.opacity=1;
        
    } else {
        audioElement.pause();
        gif.style.opacity = 0;
    }
})
audioElement.addEventListener('timeupdate', ()=> {
   
    //update seek bar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    
    myProgressBar.value = progress;
   
})
myProgressBar.addEventListener('change' , () => {
    audioElement.currentTime = (myProgressBar.value * audioElement.duration) / 100;

}) 