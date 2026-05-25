// Configuração do Firebase (use a sua que já deve estar aí)
const firebaseConfig = {
    databaseURL: "https://sarahtv-19938-default-rtdb.firebaseio.com"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.database();

// Escuta os comandos enviados pelo celular
db.ref('comando').on('value', (snapshot) => {
    const comando = snapshot.val();
    if (comando && comando.startsWith('PLAY:')) {
        const url = comando.replace('PLAY:', '');
        const root = document.getElementById('root');
        
        // Verifica se é YouTube ou link direto
        if (url.includes('youtube.com') || url.includes('youtu.be')) {
            const videoId = url.split('v=')[1] || url.split('/').pop();
            root.innerHTML = `<iframe src="https://www.youtube.com/embed/${videoId}?autoplay=1&controls=0&modestbranding=1" allow="autoplay"></iframe>`;
        } else {
            root.innerHTML = `<video src="${url}" autoplay loop muted></video>`;
        }
    }
});
