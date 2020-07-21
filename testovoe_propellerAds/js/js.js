document.querySelector('#play').onclick = playOn;
document.querySelector('#pause').onclick = pauseOn;
document.querySelector('#soundOn').onclick = soundOn;
document.querySelector('#soundOff').onclick = soundOff;
document.querySelector('#fullScreen').onclick = fullScreenOn;

const video = document.querySelector('#videoPlayer'),
    progress = document.querySelector('#progress'),
    popUpContent = document.querySelector('.popup'),
    textFullTime = document.querySelector('#fullTime'),
    textOutTime = document.querySelector('#outTime');

video.onloadedmetadata = function () {
    textFullTime.innerHTML = '0:' + Math.floor(video.duration);
    textOutTime.innerHTML = '0:' + Math.floor(video.currentTime);
};


video.ontimeupdate = progressUpdate;
progress.onclick = videoRewind;

function popUpActive() {
    document.querySelector('.popup-btn').onclick = validate;
    pauseOn();
    popUpContent.classList.add("active");
}

function validate() {
    popUpActive();
    let re = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i,
        myMail = document.getElementById('email').value,
        valid = re.test(myMail);
    if (valid) {
        playOn();
        popUpContent.classList.remove("active");
    }
    else {
        pauseOn();
    }
}

function playOn() {
    video.play();
    document.querySelector('#play').style.display = 'none';
    document.querySelector('#pause').style.display = 'block';
    let i = video.currentTime;
    if (i <= 2) {
        setTimeout(validate,2000);
        videoRewind();
    }
}

function pauseOn() {
    video.pause();
    document.querySelector('#play').style.display = 'block';
    document.querySelector('#pause').style.display = 'none';

}

function soundOn() {
    video.muted = false;
    document.querySelector('#soundOn').style.display = 'none';
    document.querySelector('#soundOff').style.display = 'block';
}

function soundOff() {
    video.muted = true;
    document.querySelector('#soundOn').style.display = 'block';
    document.querySelector('#soundOff').style.display = 'none';
}

function fullScreenOn() {
    video.requestFullscreen();
}

function progressUpdate() {
    let fullTimeVariables = video.duration;
    let outTimeVariables = video.currentTime;
    progress.value = (100 * outTimeVariables) / fullTimeVariables;
    textFullTime.innerHTML = '0:' + Math.floor(video.duration);
    textOutTime.innerHTML = '0:' + Math.floor(video.currentTime);
}

function videoRewind() {
    let w = this.offsetWidth;
    let o = event.offsetX;
    this.value = 100 * o / w;
    pauseOn();
    video.currentTime = video.duration * (o / w);
    playOn();
}

