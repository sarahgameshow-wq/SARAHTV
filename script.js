const db = firebase.database();
// ID automático baseado no tempo de conexão
const monitorID = "Monitor_" + Math.floor(Math.random() * 1000); 

// Avisa ao controle que estou online
db.ref('monitores/' + monitorID).set({ status: 'online', ultimoAcesso: new Date().toLocaleTimeString() });

// Fica esperando comando
db.ref('monitores/' + monitorID + '/comando').on('value', (snap) => {
    const cmd = snap.val();
    if (cmd && cmd.startsWith('PLAY:')) {
        const url = cmd.replace('PLAY:', '');
        document.getElementById('root').innerHTML = url.includes('youtube') 
            ? `<iframe src="https://www.youtube.com/embed/${url.split('v=')[1]}?autoplay=1&controls=0" allow="autoplay"></iframe>`
            : `<video src="${url}" autoplay loop muted></video>`;
    }
});
