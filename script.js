const firebaseConfig = { databaseURL: "https://sarahtv-19938-default-rtdb.firebaseio.com/" };
firebase.initializeApp(firebaseConfig);
const db = firebase.database();

db.ref('comando').on('value', (snapshot) => {
    const cmd = snapshot.val();
    const tela = document.getElementById('root');
    
    if (cmd && cmd.startsWith('PLAY:')) {
        let url = cmd.split('PLAY:')[1];
        // Extrai o ID do vídeo (funciona com links normais e curtos)
        let videoId = url.split('v=')[1] || url.split('/').pop();
        if (videoId.indexOf('&') !== -1) videoId = videoId.split('&')[0];
        
        tela.innerHTML = `<iframe width="100%" height="400" src="https://www.youtube.com/embed/${videoId}?autoplay=1" frameborder="0" allow="autoplay; fullscreen"></iframe>`;
    } else {
        tela.innerHTML = "<h1>SISTEMA ONLINE</h1><p>Aguardando operação...</p>";
    }
});

setInterval(() => {
    document.getElementById('relogio').innerText = new Date().toLocaleTimeString();
}, 1000);
