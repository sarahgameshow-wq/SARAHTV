const db = firebase.database();
const monitorID = "Monitor_" + Math.floor(Math.random() * 1000);
document.getElementById('id-monitor').innerText = monitorID;

db.ref('monitores/' + monitorID).set({ status: 'online' });

db.ref('monitores/' + monitorID + '/comando').on('value', (snap) => {
    const cmd = snap.val();
    if (cmd && cmd.startsWith('PLAY:')) {
        const url = cmd.replace('PLAY:', '');
        const root = document.getElementById('root');
        // Extrai o ID do YouTube de qualquer formato de link
        const videoId = url.split('v=')[1]?.split('&')[0] || url.split('/').pop();
        root.innerHTML = `<iframe src="https://www.youtube.com/embed/${videoId}?autoplay=1&controls=0&modestbranding=1" style="width:100%;height:100%;border:none;"></iframe>`;
    }
});
