//song list
let All_song = [
   {
     name: "Starman",
     path: "music/starman.mp3",
     img: "images/david-bowie-1.png",
     singer: "David Bowie"
   },
   {
     name: "Are We The Waiting?",
     path: "music/are-we-the-waiting.mp3",
     img: "images/green-day.png",
     singer: "Green Day"
   },
   {
     name: "Nails For Breakfast, Tacks For Snacks",
     path: "music/nails-for-breakfast-tacks-for-snacks.mp3",
     img: "images/panic-at-the-disco.png",
     singer: "Panic! At The Disco"
   },
   {
     name: "Bohemian Rhapsody",
     path: "music/bohemian-rhapsody.mp3",
     img: "images/queen.png",
     singer: "Queen"
   },
   {
     name: "Party Poison",
     path: "music/party-poison.mp3",
     img: "images/mcr.png",
     singer: "My Chemical Romance"
   },
   {
    name: "Let's Dance!",
    path: "music/lets-dance.mp3",
    img: "images/david-bowie-2.png",
    singer: "David Bowie"
   },
   {
    name: "Northern Downpour",
    path: "music/Northern-Downpour.mp3",
    img: "images/panic-at-the-disco-2.png",
    singer: "Panic! At The Disco"
   }
];
/*you can add more song & images from you computer*/


/*tracks*/
let tracks = document.querySelector('.tracks');

//creating a list or generating Html
for (let i = 0; i < All_song.length; i++) {

  let Html = ` <div class="song">
      <div class="img">
      <img src="${All_song[i].img}"/>
      </div>
      <div class="more">
      <audio src="${All_song[i].path}" id="music"></audio>
      <div class="song_info">
         <p id="title">${All_song[i].name}</p>
         <p>${All_song[i].singer}</p>
      </div>
      <button id="play_btn"><i class="fa fa-angle-right" aria-hidden="true"></i></button>
      </div>
    </div>`;

  tracks.insertAdjacentHTML("beforeend", Html);
};
