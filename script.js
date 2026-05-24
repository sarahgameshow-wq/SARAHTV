const firebaseConfig = { databaseURL: "https://sarahtv-19938-default-rtdb.firebaseio.com/" };
firebase.initializeApp(firebaseConfig);
const db = firebase.database();

db.ref('comando').on('value', (snapshot) => {
    const cmd = snapshot.val();
    const monitor = document.getElementById('monitor');
    const tela = document.getElementById('root');
    
    if (cmd === 'MUTE') {
        // Logica para mutar (se for iframe, recarrega com mute)
        console.log("Comando: Mute");
    } else if (cmd === 'FLIP') {
        // Aplica o efeito de virar a tela
        monitor.style.transform = monitor.style.transform === 'rotate(180deg)' ? 'rotate(0deg)' : 'rotate(180deg)';
    } else if (cmd === 'RESET') {
        location.reload();
    } else if (cmd && cmd.startsWith('PLAY:')) {
        // ... (seu código de carregar vídeo que já está funcionando)
    }
});

setInterval(() => {
    document.getElementById('relogio').innerText = new Date().toLocaleTimeString();
}, 1000);
