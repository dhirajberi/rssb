const musicContainer = document.getElementById('music-container');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

const audio = document.getElementById('audio');
const progress = document.getElementById('progress');
const progressContainer = document.getElementById('progress-container');
const title = document.getElementById('title');
const cover = document.getElementById('cover');
const currTime = document.querySelector('#currTime');
const durTime = document.querySelector('#durTime');

// Song titles
const songs = ['Aaj Divas Leoon Balihaara', 'Aaj So Belo Suhaavano', 'Ab Meri Raakho Laaj Hari', 'Aisi Deekhiya Jan Syon Manga', 'Alaf Allah Chambe Di Booti', 'Allah Parrhiya Parrh Haafiz Hoya', 'Are Ai Taqi', 'Bhaaven Jaan Na Jaan Ve', 'Bhajo Gobind Bhool Mat Jaao', 'Bin Satgur Seve Ji Ke Bandhana', 'Bulleh Nu Samjhaavan Aaiyaan', 'Charan Kamal Tere Dhoye Dhoye Peevaan', 'Dhanvante Dukhiye Sabhi', 'Gun Gobind Gaayo Nahi', 'Gur Parmesar Karnaihaar', 'Guru Ke Darshan Kaarne Ham Aaye', 'Guru Ki Mauj Raho Tum Dhaar', 'Guru Main Gunaahgaar Ati Bhaari', 'Guru Mere Jaan Praan', 'Guru Mohe Deeje Apna Dhaam', 'Ham Maile Tum Oojal Karte', 'Har Ju Raakh Leho Pat Meri', 'He Ri Main To Prem Deevaani', 'Jagat Gaafil Para Sota', 'Je Bhuli Je Chuki Saaeen', 'Jorro Ri Koi Surat Naam Se', 'Karoon Benati Dou Kar Jori', 'Kyon Peevai Tu Paani Hansani', 'Lakh Khushiyaan Paatshaaiyaan', 'Maadho Mohe Ek Sahaaro Tora', 'Maan Karoon Tudh Oopare Mere Preetam Pyaare', 'Main Andhale Ki Tek Tera Naam Khundkaara', 'Main Kyon Kar Jaavaan Kaabe Nu', 'Main Udeekaan Kar Rahi', 'Man Chit Chaatrik Jyon Rahe', 'Meharbaan Hai Saahib Mera', 'Mere Saahib Tu Main Maan Nimaani', 'Mere Satguru Pakri Baah', 'Meri Nazar Mein Moti Aaya Hai', 'Nar Ka Janam Milta Nahi', 'Patit Udhaaran Birad Tumhaaro', 'Prabhu Ji Sangat Saran Tihaari', 'Premi Suno Prem Ki Baat', 'Raakh Leho Ham Te Bigri', 'Raakh Pita Prabh Mere', 'Raakh Sada Prabh Apne Saath', 'Raam Simar Pachhtaahega', 'Saahib Main Gulaam Haun Tera', 'Sant Sanehi Naam Hai', 'Satguru Deen Dayaal Bin', 'Satsang Karat Bahut Din Beete', 'Shabad Bina Saara Jag Andha', 'Soee Dhyaaiye Jeeyare', 'Sunta Nahi Dhun Ki Khabar', 'Surat Karo Mere Saaeeyaan', 'Surat Tu Kaun Kahaan Se Aayi', 'Thir Ghar Baiso Har Jan Pyaare', 'Tis Gur Ko Simaro Saas Saas', 'Tujh Bin Kavan Hamaara', 'Tujh Oopar Mera Hai Maana', 'Tum Gunvant Main Augun Bhaari', 'Tum Karho Daya Mere Saaeen'];

// Keep track of song
let songIndex = 0;

// Initially load song details into DOM
loadSong(songs[songIndex]);

// Update song details
function loadSong(song) {
  title.innerText = song;
  audio.src = `music/${song}.mp3`;
  cover.src = `images/star.jpg`;
}

// Play song
function playSong() {
  musicContainer.classList.add('play');
  playBtn.querySelector('i.fas').classList.remove('fa-play');
  playBtn.querySelector('i.fas').classList.add('fa-pause');

  audio.play();
}

// Pause song
function pauseSong() {
  musicContainer.classList.remove('play');
  playBtn.querySelector('i.fas').classList.add('fa-play');
  playBtn.querySelector('i.fas').classList.remove('fa-pause');

  audio.pause();
}

// Previous song
function prevSong() {
  songIndex--;

  if (songIndex < 0) {
    songIndex = songs.length - 1;
  }

  loadSong(songs[songIndex]);

  playSong();
}

// Next song
function nextSong() {
  songIndex++;

  if (songIndex > songs.length - 1) {
    songIndex = 0;
  }

  loadSong(songs[songIndex]);

  playSong();
}

// Update progress bar
function updateProgress(e) {
  const { duration, currentTime } = e.srcElement;
  const progressPercent = (currentTime / duration) * 100;
  progress.style.width = `${progressPercent}%`;
}

// Set progress bar
function setProgress(e) {
  const width = this.clientWidth;
  const clickX = e.offsetX;
  const duration = audio.duration;

  audio.currentTime = (clickX / width) * duration;
}

//get duration & currentTime for Time of song
function DurTime (e) {
	const {duration,currentTime} = e.srcElement;
	var sec;
	var sec_d;

	// define minutes currentTime
	let min = (currentTime==null)? 0:
	 Math.floor(currentTime/60);
	 min = min <10 ? '0'+min:min;

	// define seconds currentTime
	function get_sec (x) {
		if(Math.floor(x) >= 60){
			
			for (var i = 1; i<=60; i++){
				if(Math.floor(x)>=(60*i) && Math.floor(x)<(60*(i+1))) {
					sec = Math.floor(x) - (60*i);
					sec = sec <10 ? '0'+sec:sec;
				}
			}
		}else{
		 	sec = Math.floor(x);
		 	sec = sec <10 ? '0'+sec:sec;
		 }
	} 

	get_sec (currentTime,sec);

	// change currentTime DOM
	currTime.innerHTML = min +':'+ sec;

	// define minutes duration
	let min_d = (isNaN(duration) === true)? '0':
		Math.floor(duration/60);
	 min_d = min_d <10 ? '0'+min_d:min_d;


	 function get_sec_d (x) {
		if(Math.floor(x) >= 60){
			
			for (var i = 1; i<=60; i++){
				if(Math.floor(x)>=(60*i) && Math.floor(x)<(60*(i+1))) {
					sec_d = Math.floor(x) - (60*i);
					sec_d = sec_d <10 ? '0'+sec_d:sec_d;
				}
			}
		}else{
		 	sec_d = (isNaN(duration) === true)? '0':
		 	Math.floor(x);
		 	sec_d = sec_d <10 ? '0'+sec_d:sec_d;
		 }
	} 

	// define seconds duration
	
	get_sec_d (duration);

	// change duration DOM
	durTime.innerHTML = min_d +':'+ sec_d;
		
};

// Event listeners
playBtn.addEventListener('click', () => {
  const isPlaying = musicContainer.classList.contains('play');

  if (isPlaying) {
    pauseSong();
  } else {
    playSong();
  }
});

// Change song
prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);

// Time/song update
audio.addEventListener('timeupdate', updateProgress);

// Click on progress bar
progressContainer.addEventListener('click', setProgress);

// Song ends
audio.addEventListener('ended', nextSong);

// Time of song
audio.addEventListener('timeupdate',DurTime);
