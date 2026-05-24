// --- CONFIGURAÇÃO E INICIALIZAÇÃO ---
const firebaseConfig = { 
    databaseURL: "https://sarahtv-19938-default-rtdb.firebaseio.com" 
};

window.addEventListener('load', () => {
    if (typeof firebase !== 'undefined') {
        firebase.initializeApp(firebaseConfig);
        const db = firebase.database();

        // --- ESCUTA DE COMANDOS DO FIREBASE ---
        db.ref('comando').on('value', (snapshot) => {
            const cmd = snapshot.val();
            const tela = document.getElementById('root');
            const container = document.getElementById('container-principal');

            if (!cmd) return;

            // 1. Comando ROTATE (Toggle Paisagem/Retrato)
            if (cmd === 'ROTATE') {
                const estaVirado = container.style.transform === 'rotate(90deg)';
                container.style.transform = estaVirado ? 'rotate(0deg)' : 'rotate(90deg)';
                container.style.width = estaVirado ? '90%' : '40%';
            } 
            // 2. Comando RESET
            else if (cmd === 'RESET') {
                location.reload();
            }
            // 3. Comando PLAY (Vídeo)
            else if (cmd.startsWith('PLAY:')) {
                let url = cmd.split('PLAY:')[1];
                let videoId = "";
                if(url.includes("v=")) videoId = url.split('v=')[1].split('&')[0];
                else if(url.includes("youtu.be/")) videoId = url.split('youtu.be/')[1];
                else videoId = url;
                
                // Carrega o vídeo com controles ocultos
                tela.innerHTML = `<iframe src="https://www.youtube.com/embed/${videoId}?autoplay=1&controls=0&modestbranding=1&rel=0" allow="autoplay; fullscreen"></iframe>`;
            }
        });
    }
});

// --- RELÓGIO EM TEMPO REAL ---
setInterval(() => {
    const relogio = document.getElementById('relogio');
    if(relogio) relogio.innerText = new Date().toLocaleTimeString();
}, 1000);
