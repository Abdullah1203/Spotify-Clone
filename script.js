console.log("Welcome to spotify clone built by ABD NIMIT");

//Initialize the variables

let songIndex = 0;
let audioElement = new Audio('song/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songItem'));


let songs = [
    {songName: "Iraaday - Abdul Hannan & Rovalio" , filePath: "song/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "The Weeknd - Call Out My Name" , filePath: "song/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "Twenty one pilots- Stressed Out" , filePath: "song/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "The Chainsmokers - Young (Lyric)" , filePath: "song/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "Gotye - Somebody That I Used To Know" , filePath: "song/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "song6" , filePath: "song/6.mp3", coverPath: "covers/6.jpg"},
    {songName: "song7" , filePath: "song/7.mp3", coverPath: "covers/7.jpg"},
    {songName: "song8" , filePath: "song/8.mp3", coverPath: "covers/8.jpg"},
    {songName: "song9" , filePath: "song/9.mp3", coverPath: "covers/9.jpg"},
    {songName: "song10" , filePath: "song/10.mp3", coverPath: "covers/10.jpg"},
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
        audioElement.currenTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');

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
    audioElement.currenTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
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
    audioElement.currenTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})