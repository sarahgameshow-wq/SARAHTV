const db = firebase.database();
// Defina aqui o nome deste monitor (ex: "Padaria", "Mercado")
const nomeMonitor = "Padaria"; 

// Registra a tela no sistema
db.ref('monitores/' + PRINCIPAL).update({ status: 'online', ultimoAcesso: new Date().toLocaleTimeString() });

// Escuta comandos apenas para este monitor
db.ref('monitores/' + nomeMonitor + '/comando').on('value', (snapshot) => {
    const comando = snapshot.val();
    if (comando && comando.startsWith('PLAY:')) {
        const url = comando.replace('PLAY:', '');
        const root = document.getElementById('root');
        if (url.includes('youtube.com')) {
            const id = url.split('v=')[1];
            root.innerHTML = `<iframe src="https://www.youtube.com/embed/${id}?autoplay=1&controls=0" allow="autoplay"></iframe>`;
        } else {
            root.innerHTML = `<video src="${url}" autoplay loop muted></video>`;
        }
    }
});
