const firebaseConfig = { databaseURL: "https://sarahtv-19938-default-rtdb.firebaseio.com" };
firebase.initializeApp(firebaseConfig);
const db = firebase.database();

db.ref('comando').on('value', (snapshot) => {
    const cmd = snapshot.val();
    const tela = document.getElementById('root');
    if (!cmd) return;

    if (cmd.startsWith('PLAY:')) {
        let url = cmd.split('PLAY:')[1];
        let videoId = url.includes("v=") ? url.split('v=')[1].split('&')[0] : url.split('/').pop();
        tela.innerHTML = `<iframe src="https://www.youtube.com/embed/${videoId}?autoplay=1&controls=0&modestbranding=1&rel=0" allow="autoplay; fullscreen"></iframe>`;
    }
});
