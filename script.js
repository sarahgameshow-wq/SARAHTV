const firebaseConfig = { databaseURL: "https://sarahtv-19938-default-rtdb.firebaseio.com/" };
firebase.initializeApp(firebaseConfig);
const db = firebase.database();

db.ref('comando').on('value', (snapshot) => {
    const cmd = snapshot.val();
    const tela = document.getElementById('root');
    
    if (cmd === 'PLAY') {
        tela.innerHTML = '<iframe width="80%" height="300" src="https://www.youtube.com/embed/SUA_ID_DO_VIDEO?autoplay=1" frameborder="0" allow="autoplay; fullscreen"></iframe>';
    } else {
        tela.innerHTML = '<div class="sinal">SINAL RECEBIDO: ' + cmd + '</div>';
    }
});

setInterval(() => {
    document.getElementById('relogio').innerText = new Date().toLocaleTimeString();
}, 1000);
