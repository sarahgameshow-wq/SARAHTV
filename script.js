const firebaseConfig = { databaseURL: "https://sarahtv-19938-default-rtdb.firebaseio.com/" };
firebase.initializeApp(firebaseConfig);
const db = firebase.database();

db.ref('comando').on('value', (snapshot) => {
    const cmd = snapshot.val();
    const tela = document.getElementById('root');
    
    if (cmd && cmd.startsWith('PLAY:')) {
        const idVideo = cmd.split(':')[1];
        tela.innerHTML = `<iframe width="100%" height="400" src="https://www.youtube.com/embed/${idVideo}?autoplay=1" frameborder="0"></iframe>`;
    } else {
        tela.innerHTML = "<h1>SISTEMA ONLINE</h1><p>Aguardando operação...</p>";
    }
});
