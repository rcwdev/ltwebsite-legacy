// Custom Style for Console Logs

var styles = [
    'font-family: "Roboto"',
    'padding: 10px',
    'color: white', 
    'display: block',
    'text-align: center',
].join(';');

var warnStyles = [
    'background: linear-gradient(#ff1616, #ff6363)',
    'font-family: "Roboto"',
    'padding: 5px',
    'color: white', 
    'display: block',
    'text-align: center',
].join(';');

var environment;
var twitchPlayer;

if (location.hostname !== 'ltwilson.live') {
    environment = 'production';
    twitchPlayer = new Twitch.Player("twitch", {width: '100%', height: '100%;', channel: 'ltwilsonyt', parent: "ltwilson.gq"});
    createChat();
} else {
    environment = 'development';
    twitchPlayer = new Twitch.Player("twitch", {width: '100%', height: '100%;', channel: 'ltwilsonyt', parent: location.hostname});
    createChat();
}

// Creates the chat element

function createChat() {
    let x = document.createElement('iframe');
    if (environment == 'development') {
        x.src = `https://www.twitch.tv/embed/ltwilsonyt/chat?darkpopout&parent=${location.hostname}`
    } else {
        x.src = `https://www.twitch.tv/embed/ltwilsonyt/chat?darkpopout&parent=${location.hostname}`
    };
    x.id = 'twitch-chat'
    x.width = '100%';
    x.height = '100%';
    x.allowFullscreen = true;
    x.frameBorder = false;
    document.getElementById('chat').appendChild(x);
};

// Destroys the chat element

function destroyChat() {
    document.getElementById('twitch-chat').remove();
};

// Creates the chat element if it does not exist, destroys it if it does.

function chatButtonClick() {
    if (document.getElementById('twitch-chat') !== null) {
        destroyChat();
        document.getElementById('wm-chat-control-icon').className = 'far fa-comment-alt';
    } else {
        createChat();
        document.getElementById('wm-chat-control-icon').className = 'fas fa-comment-alt';
    }
};

// Navigate to error screen if device is mobile.
// !!! SUBJECT TO CHANGE TO MOBILE VERSION OF PAGE !!!

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    location.href = './error/'
} else {
    console.log(`%c Developer note: in the future mobile clients will be supported.`, styles)
};

// Attach tooltips to various elements

function attachTooltips() {
    tippy('#wm-home-button', {
        content: 'Go back...'
    });
    
    tippy('#wm-donate-button', {
        content: 'Donate'
    });
    
    tippy('#wm-privacy-button', {
        content: 'Privacy Policy'
    });

    tippy('#wm-chat-control', {
        content: 'Toggle Chat'
    });

    tippy('#wm-menu-button', {
        content: 'Toggle WM Menu'
    });

    tippy('#wm-cmds-button', {
        content: 'Bot Commands'
    });
};

attachTooltips();