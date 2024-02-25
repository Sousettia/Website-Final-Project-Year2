const scrollUp = () =>{
  const scrollUp = document.getElementById('scroll-up')
  this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                      : scrollUp.classList.remove('show-scroll')

}
window.addEventListener('scroll',scrollUp)


const hamMenu = document.querySelector('.hamburger-menu');
const offScreenMenu = document.querySelector('.off-screen-menu');
hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
    offScreenMenu.classList.toggle('active');
});



function scrollToSection(sectionId) {
  var section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}
/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2000,
  delay: 200,
//     reset: true
});

sr.reveal('.content-box-gray',{}); 
sr.reveal('.an_first,.about-title > h2,.language-title,.hobby-title,.text-area .title-text,.content-box-gray .container #w1',{delay: 500}); 
sr.reveal('.content-box-gray .container #w2,.text-area #cbgm1,.music-area',{delay: 700}); 
sr.reveal('.banner-image,.about-image,.content-box-gray .container #w3,.text-area #cbgm1 img',{delay: 900}); 
sr.reveal('.button',{delay: 1000}); 
sr.reveal('.content-box-gray .container #w4,.text-area #cbgm1 p',{delay: 1100}); 
sr.reveal('.an_second,.about-title .paragraph,.language-title .para',{ delay: 1200}); 
sr.reveal('.an_third,.content-box-gray .container #w2,.text-area #accordion,.music-area',{delay: 1300}); 
sr.reveal('#lang-img',{delay: 1800}); 

const songData = [
  {
    name: "プロミスザスター",
    artist: "BiSH",
    src: "BiSH - プロミスザスター",
  },
  {
    name: "beautifulさ",
    artist: "BiSH",
    src: "BiSH - beautifulさ",
  },
  {
    name: "オーケストラ",
    artist: "BiSH",
    src: "BiSH - オーケストラ",
  },
  {
    name: "星が瞬く夜に",
    artist: "BiSH",
    src: "BiSH - 星が瞬く夜に",
  },
  {
    name: "My Landscape",
    artist: "BiSH",
    src: "BiSH - My Landscape",
  },
  {
    name: "Hands Up!",
    artist: "iLiFE!",
    src: "iLiFE! - Hands Up!",
  },
  {
    name: "HUNGRY!!!",
    artist: "iLiFE!",
    src: "iLiFE! - HUNGRY!!!",
  },
  {
    name: "KiSEK!",
    artist: "iLiFE!",
    src: "iLiFE! - KiSEK!",
  },
  {
    name: "ヒラリラリア",
    artist: "iLiFE!",
    src: "iLiFE! - ヒラリラリア",
  },
  {
    name: "黄昏サイクル",
    artist: "iLiFE!",
    src: "iLiFE! - 黄昏サイクル",
  },
  {
    name: "Mani",
    artist: "GILTY X GILTY",
    src: "GILTY X GILTY - Mani",
  },
  {
    name: "TARANTULA",
    artist: "GILTY X GILTY",
    src: "GILTY X GILTY - TARANTULA",
  },
  {
    name: "UNIVERSE",
    artist: "GILTY X GILTY",
    src: "GILTY X GILTY - UNIVERSE",
  },
  {
    name: "秘密の箱",
    artist: "GILTY X GILTY",
    src: "GILTY X GILTY - 秘密の箱",
  },
  {
    name: "スニーカーシンデレラ",
    artist: "GILTY X GILTY",
    src: "GILTY X GILTY - スニーカーシンデレラ",
  },
  {
    name: "19 summer note",
    artist: "SILENT SIREN",
    src: "SILENT SIREN - 19 summer note",
  },
  {
    name: "Merry-go-round",
    artist: "SILENT SIREN",
    src: "SILENT SIREN - Merry-go-round",
  },
  {
    name: "Routine",
    artist: "SILENT SIREN",
    src: "SILENT SIREN - Routine",
  },
  {
    name: "Soukai Rock",
    artist: "SILENT SIREN",
    src: "SILENT SIREN - Soukai Rock",
  },
  {
    name: "八月の夜",
    artist: "SILENT SIREN",
    src: "SILENT SIREN - 八月の夜",
  },
  {
    name: "N.P.C",
    artist: "夜光性アミューズ",
    src: "夜光性アミューズ - N.P.C",
  },
  {
    name: "AISola",
    artist: "AIBECK",
    src: "AIBECK - AISola",
  },
  {
    name: "NEW ERA PUNCH!!",
    artist: "JamsCollection",
    src: "JamsCollection - NEW ERA PUNCH!!",
  },
  {
    name: "SUKIkirai",
    artist: "LEIWAN",
    src: "LEIWAN - SUKIkirai",
  },
  {
    name: "眠罪",
    artist: "MAD MEDiCiNE",
    src: "MAD MEDiCiNE - 眠罪",
  },
];

const container = document.querySelector(".container");
const songName = document.querySelector(".song-name");
const songArtist = document.querySelector(".song-artist");
const cover = document.querySelector(".cover");
const playPauseBtn = document.querySelector(".play-pause");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const audio = document.querySelector(".audio");
const songTime = document.querySelector(".song-time");
const songProgress = document.querySelector(".song-progress");
const coverArtist = document.querySelector(".cover span:nth-child(1)");
const coverName = document.querySelector(".cover span:nth-child(2)");

let songIndex = 0;

window.addEventListener("load", () => {
  loadSong(songIndex);
});

const loadSong = (index) => {
  coverName.textContent = songData[index].name;
  coverArtist.textContent = songData[index].artist;
  songName.textContent = songData[index].name;
  songArtist.textContent = songData[index].artist;
  audio.src = `music/${songData[index].src}.mp3`;
};

const playSong = () => {
  container.classList.add("pause");
  cover.classList.add("rotate");
  playPauseBtn.firstElementChild.className = "fa-solid fa-pause";
  audio.play();
};

const pauseSong = () => {
  container.classList.remove("pause");
  cover.classList.remove("rotate");
  playPauseBtn.firstElementChild.className = "fa-solid fa-play";
  audio.pause();
};

playPauseBtn.addEventListener("click", () => {
  if (container.classList.contains("pause")) {
    pauseSong();
  } else {
    playSong();
  }
});

const prevSongPlay = () => {
  songIndex--;
  if (songIndex < 0) {
    songIndex = songData.length - 1;
  }

  loadSong(songIndex);
  playSong();
};

const nextSongPlay = () => {
  songIndex++;
  if (songIndex > songData.length - 1) {
    songIndex = 0;
  }

  loadSong(songIndex);
  playSong();
};

const selectPlay = (index) => {
  songIndex = index;
  loadSong(songIndex);
  playSong();
};

prevBtn.addEventListener("click", prevSongPlay);
nextBtn.addEventListener("click", nextSongPlay);


audio.addEventListener("timeupdate", (e) => {
  const currentTime = e.target.currentTime;
  const duration = e.target.duration;
  let currentTimeWidth = (currentTime / duration) * 100;
  songProgress.style.width = `${currentTimeWidth}%`;

  let songCurrentTime = document.querySelector(".time span:nth-child(1)");
  let songDuration = document.querySelector(".time span:nth-child(2)");

  audio.addEventListener("loadeddata", () => {
    let audioDuration = audio.duration;
    let totalMinutes = Math.floor(audioDuration / 60);
    let totalSeconds = Math.floor(audioDuration % 60);

    if (totalSeconds < 10) {
      totalSeconds = `0${totalSeconds}`;
    }

    songDuration.textContent = `${totalMinutes}:${totalSeconds}`;
  });

  let currentMinutes = Math.floor(currentTime / 60);
  let currentSeconds = Math.floor(currentTime % 60);

  if (currentSeconds < 10) {
    currentSeconds = `0${currentSeconds}`;
  }

  songCurrentTime.textContent = `${currentMinutes}:${currentSeconds}`;
});

songTime.addEventListener("click", (e) => {
  let progressWidth = songTime.clientWidth;
  let clickedOffsetX = e.offsetX;
  let songDuration = audio.duration;
  audio.currentTime = (clickedOffsetX / progressWidth) * songDuration;

  playSong();
});

audio.addEventListener("ended", nextSongPlay);

function toggleDropdown() {
  var dropdownMenu = document.getElementById("hobbyDropdown");
  if (dropdownMenu.classList.contains("hidden")) {
      dropdownMenu.classList.remove("hidden");
      dropdownMenu.classList.add("visible");
  } else {
      dropdownMenu.classList.remove("visible");
      dropdownMenu.classList.add("hidden");
  }
}