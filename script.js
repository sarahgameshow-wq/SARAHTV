const db = firebase.database();
const monitorID = "Monitor_" + Math.floor(Math.random() * 1000);
document.getElementById('id-monitor').innerText = monitorID;

db.ref('monitores/' + monitorID).set({ status: 'online' });

// Comando de Sistema (Reiniciar ou Girar)
db.ref('monitores/' + monitorID + '/comando').on('value', (snap) => {
    const cmd = snap.val();
    if (cmd === 'REINICIAR') window.location.reload(true);
    if (cmd === 'GIRAR') {
        document.body.style.transform = "rotate(0deg)";
        document.body.style.width = "100vw";
        document.body.style.height = "100vh";
    }
});

// Playlist
db.ref('monitores/' + monitorID + '/playlist').on('value', (snap) => {
    const playlist = [];
    snap.forEach(child => playlist.push(child.val()));
    if (playlist.length > 0) tocarPlaylist(playlist);
});

function tocarPlaylist(lista) {
    let index = 0;
    function proximo() {
        if (index >= lista.length) index = 0;
        const videoId = lista[index].split('v=')[1]?.split('&')[0] || lista[index].split('/').pop();
        document.getElementById('root').innerHTML = `<iframe src="https://www.youtube.com/embed/${videoId}?autoplay=1&controls=0&modestbranding=1" style="width:100%;height:100%;border:none;"></iframe>`;
        index++;
    }
    proximo();
}
