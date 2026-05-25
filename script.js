const db = firebase.database();
const monitorID = "Monitor_" + Math.floor(Math.random() * 1000);
document.getElementById('id-monitor').innerText = monitorID;

db.ref('monitores/' + monitorID).set({ status: 'online' });

db.ref('monitores/' + monitorID + '/comando').on('value', (snap) => {
    const cmd = snap.val();
    if (cmd && cmd.startsWith('PLAY:')) {
        const url = cmd.replace('PLAY:', '');
        const root = document.getElementById('root');
        if (url.includes('youtube')) {
            const id = url.split('v=')[1]?.split('&')[0] || url.split('/').pop();
            root.innerHTML = `<iframe src="https://www.youtube.com/embed/${id}?autoplay=1&controls=0" style="width:100%;height:100%;border:none;"></iframe>`;
        } else {
            root.innerHTML = `<video src="${url}" autoplay loop muted style="width:100%;height:100%;"></video>`;
        }
    }
});
