const firebaseConfig = { databaseURL: "https://sarahtv-19938-default-rtdb.firebaseio.com/" };
firebase.initializeApp(firebaseConfig);
const db = firebase.database();

db.ref('comando').on('value', (snapshot) => {
    const cmd = snapshot.val();
    const tela = document.getElementById('root');
    // Aqui você controla o que aparece baseado no botão
    tela.innerHTML = "SINAL RECEBIDO: <br><span style='color:white'>" + cmd + "</span>";
});

// Atualiza o relógio
setInterval(() => {
    document.getElementById('relogio').innerText = new Date().toLocaleTimeString();
}, 1000);
