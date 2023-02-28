console.log("Welcome to Spotify (Simple Music Player) clone built by ABD NIMIT");

//Initialize the variables

let songIndex = 0;
let audioElement = new Audio('song/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let mute = document.getElementById('mute');
let volume = document.getElementById("volume-slider");
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let cover = document.getElementById('cover');
let currentSongName = document.getElementById('currentSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));


let songs = [
    {songName: "Iraaday - Abdul Hannan & Rovalio" , filePath: "song/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "The Weeknd - Blinding Lights" , filePath: "song/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "Twenty one pilots- Stressed Out" , filePath: "song/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "The Chainsmokers - Young (Lyric)" , filePath: "song/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "Gotye - Somebody I Used To Know" , filePath: "song/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "LEVEL FIVE - 60's LOVE" , filePath: "song/6.mp3", coverPath: "covers/6.jpg"},
    {songName: "真夜中のドア (Stay With Me) Cover" , filePath: "song/7.mp3", coverPath: "covers/7.jpg"},
    {songName: "(브라더수) - You don`t know me" , filePath: "song/8.mp3", coverPath: "covers/8.jpg"},
    {songName: "Jung Kook- Dreamers مترجمة" , filePath: "song/9.mp3", coverPath: "covers/9.jpg"},
    {songName: "Stephen - Until I Found You" , filePath: "song/10.mp3", coverPath: "covers/10.jpg"},
]

songItems.forEach((element, i)=> {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});

// audioElement.play();

//Handle Play/Pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
        makeAllPlays();
    }
})


//Listen to events
audioElement.addEventListener('timeupdate', ()=>{
    //update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove("fa-pause-circle");
        element.classList.add("fa-play-circle");
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove("fa-play-circle");
        e.target.classList.add("fa-pause-circle");
        audioElement.src = `song/${songIndex+1}.mp3`;
        currentSongName.innerText = songs[songIndex].songName;
        cover.src = songs[songIndex].coverPath;
        gif.style.opacity = 1;
        audioElement.currenTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        
        //Play pause button
        
    })
})



document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9)
    {
        songIndex = 0;
    }
    else
    {
        songIndex += 1;
    }
    audioElement.src = `song/${songIndex+1}.mp3`;
    currentSongName.innerText = songs[songIndex].songName;
    cover.src = songs[songIndex].coverPath;
    audioElement.currenTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    makeAllPlays();
    
})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0)
    {
        songIndex = 0;
    }
    else
    {
        songIndex -= 1;
    }
    audioElement.src = `song/${songIndex+1}.mp3`;
    currentSongName.innerText = songs[songIndex].songName;
    cover.src = songs[songIndex].coverPath;
    audioElement.currenTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    makeAllPlays();
})

//  ----------Volume slider-----------


volume.addEventListener("change", function(e) {
audioElement.volume = e.currentTarget.value / 100;
})

// ------------Volume Mute/Unmute------------------------


mute.addEventListener('click', ()=>{
    if(audioElement.muted == false){
        audioElement.muted = true;
        mute.classList.remove('fa-volume-high');
        mute.classList.add('fa-volume-xmark');
    }
    else{
        audioElement.muted = false;
        mute.classList.remove('fa-volume-xmark');
        mute.classList.add('fa-volume-high'); 
    }
})
// -------------------Transition-------------------
function toogleLove(x) {
    x.classList.toggle("fa-solid");
  }
// ------------Audio durations--------------

  
  audioElement.addEventListener('timeupdate', ()=>{
    var minutes = parseInt(audioElement.duration / 60, 10);
    var seconds = parseInt(audioElement.duration % 60);

    if (minutes < 10) {
        minutes = '0' + String(minutes);
      }
      if (seconds < 10) {
        seconds = '0' + String(seconds);
      }
    document.getElementById('Audio_durationTime').innerText = minutes + ':' + seconds;
    // console.log(minutes + ':' + seconds);

    /////Passed time////
    var mins = Math.floor(audioElement.currentTime / 60);
    if (mins < 10) {
      mins = '0' + String(mins);
    }
    var secs = Math.floor(audioElement.currentTime % 60);
    if (secs < 10) {
      secs = '0' + String(secs);
    }
    document.getElementById('Audio_passedTime').innerText = mins + ':' + secs;

	
})
