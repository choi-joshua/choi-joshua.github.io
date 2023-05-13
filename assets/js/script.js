var sites = [
    'assets/pages/music.html',
    'assets/pages/words.html',
    'assets/pages/works.html'
];

function randomSite() {
    var i = parseInt(Math.random () * sites.length);
    location.href = sites[i]
}

