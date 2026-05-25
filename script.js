const db = firebase.database();
const monitorID = "Monitor_" + Math.floor(Math.random() * 1000);
document.getElementById('id-monitor').innerText = monitorID;

let playlist = [];
let index = 0;

// Ouve a lista de vídeos
db.ref('monitores/' + monitorID + '/playlist').on('value', (snap) => {
    playlist = [];
    snap.forEach(child => playlist.push(child.val()));
    if (playlist.length > 0 && index === 0) tocarProximo();
});

function tocarProximo() {
    if (index >= playlist.length) index = 0; // Reinicia a playlist
    const url = playlist[index];
    const videoId = url.split('v=')[1]?.split('&')[0] || url.split('/').pop();
    
    document.getElementById('root').innerHTML = `
        <iframe src="https://www.youtube.com/embed/${videoId}?autoplay=1&controls=0&enablejsapi=1" 
        style="width:100%;height:100%;border:none;" 
        onload="setTimeout(tocarProximo, 60000)"></iframe>`; // O 60000 é um exemplo (em milissegundos)
    
    index++;
}
