const firebaseConfig = { 
    databaseURL: "https://sarahtv-19938-default-rtdb.firebaseio.com" 
};

// Adicionamos um pequeno atraso para garantir que a biblioteca do Firebase carregue primeiro
window.addEventListener('load', () => {
    if (typeof firebase !== 'undefined') {
        firebase.initializeApp(firebaseConfig);
        const db = firebase.database();

        db.ref('comando').on('value', (snapshot) => {
            const cmd = snapshot.val();
            const tela = document.getElementById('root');
            const monitor = document.getElementById('monitor');

            if (!cmd) return;

            if (cmd === 'ROTATE') {
                const estaVirado = monitor.style.transform === 'rotate(90deg)';
                monitor.style.transform = estaVirado ? 'rotate(0deg)' : 'rotate(90deg)';
                monitor.style.width = estaVirado ? '85%' : '40%';
            } 
            else if (cmd === 'RESET') {
                location.reload();
            }
            else if (cmd.startsWith('PLAY:')) {
                let url = cmd.split('PLAY:')[1];
                let videoId = url.includes("v=") ? url.split('v=')[1].split('&')[0] : url.split('/').pop();
                tela.innerHTML = `<iframe src="https://www.youtube.com/embed/${videoId}?autoplay=1&controls=0&modestbranding=1" allow="autoplay; fullscreen"></iframe>`;
            } 
            else {
                tela.innerHTML = "SINAL RECEBIDO: " + cmd;
            }
        });
    } else {
        console.error("Firebase não carregou! Verifique o index.html");
    }
});

setInterval(() => {
    const relogio = document.getElementById('relogio');
    if(relogio) relogio.innerText = new Date().toLocaleTimeString();
}, 1000);
