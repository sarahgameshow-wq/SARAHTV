const firebaseConfig = { databaseURL: "SUA_URL_DO_FIREBASE_AQUI" };
firebase.initializeApp(firebaseConfig);
const db = firebase.database();

db.ref('comando').on('value', (snapshot) => {
    const cmd = snapshot.val();
    const tela = document.getElementById('root');
    const monitor = document.getElementById('monitor');

    if (!cmd) return;

    // 1. Comando ROTATE (Virar Tela)
    if (cmd === 'ROTATE') {
        const estaVirado = monitor.style.transform === 'rotate(90deg)';
        monitor.style.transform = estaVirado ? 'rotate(0deg)' : 'rotate(90deg)';
        monitor.style.width = estaVirado ? '70%' : '40%';
        tela.innerHTML = "SISTEMA ONLINE"; // Limpa o texto da tela
    } 
    // 2. Comando RESET
    else if (cmd === 'RESET') {
        location.reload(); // Recarrega a página inteira
    }
    // 3. Comando PLAY (Vídeo)
    else if (cmd.startsWith('PLAY:')) {
        let url = cmd.split('PLAY:')[1];
        let videoId = url.includes("v=") ? url.split('v=')[1].split('&')[0] : url.split('/').pop();
        tela.innerHTML = `<iframe src="https://www.youtube.com/embed/${videoId}?autoplay=1" frameborder="0" allow="autoplay; fullscreen"></iframe>`;
    } 
    // 4. Se não for comando, escreve o texto
    else {
        tela.innerHTML = "SINAL RECEBIDO: " + cmd;
    }
});

setInterval(() => {
    document.getElementById('relogio').innerText = new Date().toLocaleTimeString();
}, 1000);
