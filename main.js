const tilted = document.getElementById("tilted");

fetch('https://is-msushi-live.herokuapp.com/')
    .then(res => {
        return res.json();      
    })
    .then(res => {
        tilted.innerText = res.isLive ? "Yep! He's live" : "Nope, he's not live";;
    });
