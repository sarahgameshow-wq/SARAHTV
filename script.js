const db = firebase.database();
const monitorID = "Monitor_" + Math.floor(Math.random() * 1000);
document.getElementById('id-monitor').innerText = monitorID;

db.ref('monitores/' + monitorID).set({ status: 'online' });

// Ouve a lista de vídeos (Playlist)
db.ref('monitores/' + monitorID + '/playlist').on('value', (snap) => {
    const playlist = [];
    snap.forEach(child => playlist.push(child.val()));
    
    if (playlist.length > 0) {
        tocarPlaylist(playlist);
    }
});

function tocarPlaylist(lista) {
    let index = 0;
    function proximo() {
        if (index >= lista.length) index = 0;
        const url = lista[index];
        const videoId = url.split('v=')[1]?.split('&')[0] || url.split('/').pop();
        
        document.getElementById('root').innerHTML = `
            <iframe src="https://www.youtube.com/embed/${videoId}?autoplay=1&controls=0&modestbranding=1" 
            style="width:100%;height:100%;border:none;" 
            onended="setTimeout(proximo, 1000)"></iframe>`;
        
        index++;
    }
    proximo();
}
