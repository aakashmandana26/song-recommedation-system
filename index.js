console.log("Welcome to Spotify");

// var audioElement = new Audio('../songs/1.mp3');
var masterPlay = document.getElementById('main-play-btn');
var myProgressBar = document.getElementById('progress-bar');
var gif = document.getElementById('gif');
var songbtn = Array.from(document.getElementsByClassName('fa-regular'));
var forwardBtn = document.getElementById('main-forward-btn');
var backwardBtn = document.getElementById('main-backward-btn');

var fileData = document.getElementById('myFile');
var commentData = document.getElementById('comment');

fileData.addEventListener('change', (e) => {
    const [file] = e.target.files;
    console.log(file.name);
    audioElement = file.name;
    var audio = new Audio("./dataBE/Actor_01/"+audioElement);
    audio.play();
  })




  function playSong(){
    var audio = new Audio("./dataBE/Actor_01/"+audioElement);
    audio.play();
    // masterPlay.classList.remove('fa-play');
    // masterPlay.classList.add('fa-pause');
    // gif.classList.remove('invisible-gif');
    // gif.classList.add('visible-gif');

    audioElement.addEventListener('timeupdate', function(){
         var progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
         myProgressBar.value = progress;
    })
    
}

function pauseSong(){
    // makeAllPlays();
    var audio = new Audio("./dataBE/Actor_01/"+audioElement);
    audio.pause();
    // masterPlay.classList.remove('fa-pause');
    // masterPlay.classList.add('fa-play');
    // gif.classList.remove('visible-gif');
    // gif.classList.add('invisible-gif');
}

const form = document.getElementById('myForm');

//   form.addEventListener('submit', (e) => {
//     e.preventDefault(); // Prevent the default form submission

//     // Retrieve form data
//     const fileInput = document.getElementById('myFile');
//     const commentInput = document.getElementById('comment');

//     const formData = new FormData();
//     formData.append('filename', fileInput.files[0]);
//     formData.append('comment', commentInput.value);

//     // Perform further actions with the form data, e.g., send it to a server

//     // Example: Submit the form data via AJAX
//     const xhr = new XMLHttpRequest();
//     xhr.open('POST', '/save-data-endpoint');
//     xhr.send(formData);
//   });


  masterPlay.addEventListener('click', function(){
    console.log("masterPlay pressed")
    if(audioElement.paused || audioElement.currentTime<=0){
         playSong();
    }
    else{
         pauseSong();
    }
})