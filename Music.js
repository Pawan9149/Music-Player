let songname= document.querySelector("#song-name");
let songSinger=document.querySelector("#song-singer");
let songImage=document.querySelector(".song-image")
let playPauseImg=document.querySelector("#play-pause");
let volumeRange=document.querySelector("#volume-range");
let songrange=document.querySelector("#song-duration")
let volsvg=document.querySelector("#vol-svg");
let musicanim=document.querySelector("#musican")
let playlistImg=document.querySelector("#playlist-img")
let playlist=document.querySelector(".playlist")
let playlistsong=document.querySelectorAll(".playlist-song");

let index=0;
let playingSongs=false;
let track=document.createElement("audio");
let songs=[
    {
        name:"Dekha Tenu",
        path:"first.mp3",
        image:"firstphoto.jpg",
        singer:"Udit Narayan"
    },
    {
    name:"Mann Bharya",
    path:"Second.mp3",
    image: "second1.jpg",
    singer :"B Praak"
    },
    {
        name:"Mannat",
        path:"third.mp3",
        image:"thirdphoto.jpg",
        singer:"Darshan Raval"
    },
    {
        name:"Tu hi Yaar Mera",
        path:"Fourth.mp3",
        image:"second.jpg",
        singer:"Neha Kakkar"
    }

]
function loadTrack(index){
    track.src=songs[index].path;
    songname.innerHTML=songs[index].name;
    songSinger.innerHTML=songs[index].singer;
    songImage.style=`background-image: url("${songs[index].image}");`
    volume();
    Duration();
    setInterval(()=>{
        songrange.max=track.duration;
        songrange.value=track.currentTime
    },1000)
    track.loop=true;
    track.load();
}
loadTrack(index);
function playpause(){
    if(playingSongs==false){
        playSongs();
       
    }else{
        pauseSong();
       

    }
}
function playSongs(){
    track.play();
    playingSongs=true;
    playPauseImg.src="pause.svg";
    musicanim.style.display="block"

}
function pauseSong(){
    track.pause();
    playingSongs=false;
    playPauseImg.src="play.svg";
    musicanim.style.display="none"
}
function nextSong(){
    if(index<songs.length-1){
        index++;
        loadTrack(index);
        playSongs();

    }else{
        index=0;
        loadTrack(index);
        playSongs();
    }
}
function previousSong(){
    if(index>0){
        index--;
        loadTrack(index);
        playSongs();
    }
    else{
        index=songs.length-1;
        loadTrack(index);
        playSongs();
    }
}
function volume(){
    track.volume=volumeRange.value/100;
     if(volumeRange.value==0){
        volsvg.src="mute.svg";
     }
    else{
         volsvg.src="volume.svg";
     }
}
function Duration(){
track.currentTime=songrange.value;
}
playlistImg.addEventListener("click",()=>{
        playlist.classList.toggle("playlist-active")
        if(playlist.classList.contains("playlist-active")){
            playlistImg.src="cross.svg";
        }
        else{
            playlistImg.src="musicplaylist.svg";
        }
    })
    playlistsong.forEach((songs,index) =>{
        songs.addEventListener("click",()=>{
            loadTrack(index);
            playSongs();
            playlist.classList.toggle("playlist-active");
            playlistImg.src="musicplaylist.svg";
        })
        
    });