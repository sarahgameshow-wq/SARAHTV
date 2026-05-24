const firebaseConfig = { databaseURL: "https://sarahtv-19938-default-rtdb.firebaseio.com/" };
firebase.initializeApp(firebaseConfig);
const db = firebase.database();

db.ref('comando').on('value', (snapshot) => {
    const cmd = snapshot.val();
    const tela = document.getElementById('root');
    const monitor = document.getElementById('monitor');

    if (!cmd) return;

    if (cmd.startsWith('PLAY:')) {
        let url = cmd.split('PLAY:')[1];
        let videoId = "";
        // Tenta pegar o ID do vídeo de formas diferentes
        if(url.includes("v=")) videoId = url.split('v=')[1].split('&')[0];
        else if(url.includes("youtu.be/")) videoId = url.split('youtu.be/')[1];
        else videoId = url;

        tela.innerHTML = `<iframe src="https://www.youtube.com/embed/${videoId}?autoplay=1" frameborder="0" allow="autoplay; fullscreen"></iframe>`;
    } 
  // Dentro do seu db.ref('comando').on...
    else if (cmd.startsWith('ROTATE:')) {
        let angulo = cmd.split('ROTATE:')[1]; // Exemplo: ROTATE:90 ou ROTATE:0
        monitor.style.transform = `rotate(${angulo}deg)`;
        
        // Ajusta a largura dependendo do ângulo
        if (angulo === '0') {
            monitor.style.width = '70%';
        } else {
            monitor.style.width = '40%';
        }
    }
});

setInterval(() => {
    document.getElementById('relogio').innerText = new Date().toLocaleTimeString();
}, 1000);
