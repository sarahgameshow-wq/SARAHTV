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
    const monitor = document.getElementById('monitor');
    // Alterna entre modo normal e modo vertical (90 graus)
    if (monitor.style.transform === 'rotate(90deg)') {
        monitor.style.transform = 'rotate(0deg)';
        monitor.style.width = '80%';
    } else {
        monitor.style.transform = 'rotate(90deg)';
        monitor.style.width = '40%'; // Fica mais estreito para parecer vertical
    }
}
    } else if (cmd && cmd.startsWith('PLAY:')) {
        // ... (seu código de carregar vídeo que já está funcionando)
    }
});

setInterval(() => {
    document.getElementById('relogio').innerText = new Date().toLocaleTimeString();
}, 1000);
