//initilasition of variable
let songIndex=0;
let audioElement=new Audio("songs/10.mp3");
let masterPlay =document.getElementById("masterPlay");
let myProgressBar=document.getElementById("myProgressBar");
let gif=document.getElementById("gif");
let masterForward=document.getElementById("masterForward");
let masterBackward=document.getElementById("masterBackward");
let songItems=Array.from(document.getElementsByClassName("songItem"));
let songItemPlay=Array.from(document.getElementsByClassName("songItemPlay"));

let songs =[
    {songName:"salam-e-ishq-10", filePath:"songs/10.mp3",coverPath:"covers/10.jpg"},
    {songName:"salam-e-ishq-9", filePath:"songs/9.mp3",coverPath:"covers/9.jpg"},
    {songName:"salam-e-ishq-8", filePath:"songs/8.mp3",coverPath:"covers/8.jpg"},
    {songName:"salam-e-ishq-7", filePath:"songs/7.mp3",coverPath:"covers/7.jpg"},
    {songName:"salam-e-ishq-6", filePath:"songs/6.mp3",coverPath:"covers/6.jpg"},
    {songName:"salam-e-ishq-5", filePath:"songs/5.mp3",coverPath:"covers/5.jpg"}
]

songItems.forEach((Element,i)=>{
    Element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    Element.getElementsByClassName("songName")[0].innerHTML=songs[i].songName;
    

})
masterPlay.addEventListener('click', ()=>{
        if(audioElement.paused || audioElement.currentTime<=0)
        {
            audioElement.play();
            masterPlay.classList.remove('fa-play');
            masterPlay.classList.add('fa-pause');
            gif.style.opacity=1;
        }
        else
        {
            audioElement.pause();
            masterPlay.classList.remove('fa-pause');
            masterPlay.classList.add('fa-play');
            gif.style.opacity=0;

        }
       
})

audioElement.addEventListener('timeupdate', ()=>{
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value=progress;

})
myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime =myProgressBar.value * audioElement.duration/100;

})

const makeAllPlays = ()=>{
    songItemPlay.forEach((Element) =>{
        Element.classList.remove('fa-pause');
        Element.classList.add('fa-play');
        
    })
}
songItemPlay.forEach((Element)=>{
    Element.addEventListener('click',(e) =>{
        makeAllPlays();
        songIndex =parseInt(e.target.id);
        e.target.classList.remove('fa-play');
        e.target.classList.add('fa-pause');
        audioElement.src = "songs/9.mp3";
        audioElement.currentTime= 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');

    })
})
masterForward.addEventListener('click',() =>{
        if(songIndex>=5)
        {
            songIndex=0;
        }
        else{
            songIndex+=1;
        }
        audioElement.src = 'songs/8.mp3';
        audioElement.currentTime= 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
})
masterBackward.addEventListener('click',() =>{
    if(songIndex<=0)
    {
        songIndex=0; 
    }
    else{
        songIndex-=1;
    }
    audioElement.src = 'songs/7.mp3';
        audioElement.currentTime= 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
})
