const db = firebase.database();
const monitorID = "Monitor_" + Math.floor(Math.random() * 1000);
document.getElementById('id-monitor').innerText = monitorID;

// Registra a tela no banco
db.ref('monitores/' + monitorID).set({ status: 'online' });

// Loop de Playlist
db.ref('monitores/' + monitorID + '/playlist').on('value', (snap) => {
    const playlist = [];
    snap.forEach(child => playlist.push(child.val()));
    if (playlist.length > 0) tocarPlaylist(playlist);
});

function tocarPlaylist(lista) {
    let index = 0;
    function proximo() {
        if (index >= lista.length) index = 0; // Loop infinito
        const videoId = lista[index].split('v=')[1]?.split('&')[0] || lista[index].split('/').pop();
        
        document.getElementById('root').innerHTML = `
            <iframe src="https://www.youtube.com/embed/${videoId}?autoplay=1&controls=0&modestbranding=1" 
            style="width:100%;height:100%;border:none;"
            onended="setTimeout(proximo, 1000)"></iframe>`;
        
        // Pula para o próximo após o tempo do vídeo (simplificado)
        setTimeout(proximo, 60000); // Ajuste este tempo ou use a API do YouTube
        index++;
    }
    proximo();
}

// Comandos de Manutenção
db.ref('monitores/' + monitorID + '/comando').on('value', (snap) => {
    if (snap.val() === 'REINICIAR') window.location.reload(true);
    if (snap.val() === 'GIRAR') {
        document.body.style.transform = "rotate(0deg)";
    }
});
