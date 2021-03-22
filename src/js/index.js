particlesJS.load('particles-js', './src/json/particlesjs-config.json', function() {
    console.log('particles.js config loaded')
});

const splashOptions = ["Quality content!","It's lit!","WH OMEGALUL","Home of quality content.","Just a dude being dude.","He makes videos.","He writes code.","He does things.","He makes content, I think.","Does he make videos?","Last seen: 2 years ago.","Home of a straight man.","He'll be good at something.","A streamer? I think?","YouTuber, I guess. Idk.","Professional unprofessional.","The REAL deal.","A dude.","A guy.","He's that Unus Annus guy!","The guy who made the video.","He edits sometimes.","Is not gay.","Probably depressed somewhere.","lol","Straight white guy.","ROFL","xD","uwu x3 *nuzzles u*","ex dee","He watches a lot of YouTube.","He watches a lot of Twitch.","You know Joe?","Who's Joe?","TriHard 7","Hates himself greatly!","Has a cat, I'm pretty sure."]

document.getElementById('splash-text').innerText = splashOptions[Math.floor(Math.random()*splashOptions.length)];

function widthResize() {
    var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
    if (width < 700) {
        if (document.getElementById("watch") !== null) {
            document.getElementById("watch").innerHTML = `<i class="fas fa-satellite-dish"></i>`;
        }
        document.getElementById("twitter").innerHTML = `<i class="fab fa-twitter"></i>`;
        document.getElementById("instagram").innerHTML = `<i class="fab fa-instagram"></i>`;
        document.getElementById("youtube").innerHTML = `<i class="fab fa-youtube"></i>`;
        document.getElementById("twitch").innerHTML = `<i class="fab fa-twitch"></i>`;
        document.getElementById("specs").innerHTML = `<i class="fas fa-desktop"></i>`;
        document.getElementById("stuff").innerHTML = `<i class="fas fa-keyboard"></i>`;
    } else if (width > 700) {
        if (document.getElementById("watch") !== null) {
            document.getElementById("watch").innerHTML = `<i class="fas fa-satellite-dish"></i>&nbsp;Watch Mode`;
        }
        document.getElementById("twitter").innerHTML = `<i class="fab fa-twitter"></i>&nbsp;Twitter`;
        document.getElementById("instagram").innerHTML = `<i class="fab fa-instagram"></i>&nbsp;Instagram`;
        document.getElementById("youtube").innerHTML = `<i class="fab fa-youtube"></i>&nbsp;YouTube`;
        document.getElementById("twitch").innerHTML = `<i class="fab fa-twitch"></i>&nbsp;Twitch`;
        document.getElementById("specs").innerHTML = `<i class="fas fa-desktop"></i>&nbsp;Specifications`;
        document.getElementById("stuff").innerHTML = `<i class="fas fa-keyboard"></i>&nbsp;Peripherals`;
    };
};

if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    document.getElementById("watch").remove()
}

widthResize();

var modal = new tingle.modal({
    footer: false,
    closeMethods: ['overlay','button','escape'],
    closeLabel: "Understood",
});

modal.setContent("<h1>Important update!</h1><p>All previous Watch Mode features such as polls, currently watching, and more are currently being redesigned and reworked. In the meantime, enjoy this sleek new redesign.</p>");

function openModal() {
    modal.open();
};

function newSession() {
    if (sessionStorage.getItem('seen-home') == undefined) {
        sessionStorage.setItem('seen-home',true);
        document.getElementsByClassName('topbar')[0].style.animation = 'slideInDown 1s ease-in-out forwards';
        document.getElementsByClassName('footer')[0].style.animation = 'slideInUp 1s ease-in-out forwards';
        document.getElementsByClassName('box')[0].style.animation = 'scale-in-center 1s ease-in-out forwards';
        if (document.getElementById('notice') !== null) {
            document.getElementById('notice').style.animation = 'scale-in-center 1s ease-in-out forwards';
        }
    } else {
        document.getElementsByClassName('box')[0].style.animation = 'fadeIn 0.5s forwards';
        if (document.getElementById('notice') !== null) {
            document.getElementById('notice').style.animation = 'fadeIn 0.5s forwards';
        }
    }
}

newSession();

