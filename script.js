// Importa o Firebase (adicione estas linhas no topo do index.html se precisar)
// <script src="https://www.gstatic.com/firebasejs/9.6.1/firebase-app-compat.js"></script>
// <script src="https://www.gstatic.com/firebasejs/9.6.1/firebase-database-compat.js"></script>

const firebaseConfig = { databaseURL: https://console.firebase.google.com/u/0/project/sarahtv-19938/database/sarahtv-19938-default-rtdb/data/~2F?hl=pt-br&fb_gclid=Cj0KCQjww8rQBhDjARIsAE43KPP6VkYahOwq02ElofT3R2FNVHgskw1TXRUgDiMKUdvJ89dYYGZGN3saAurOEALw_wcB&fb_utm_campaign=Cloud-SS-DR-Firebase-FY26-global-pmax-1713590&fb_utm_content=pmax&fb_utm_medium=display&fb_utm_source=PMAX};
firebase.initializeApp(firebaseConfig);

const db = firebase.database();

// Fica monitorando o comando
db.ref('comando').on('value', (snapshot) => {
    const cmd = snapshot.val();
    document.getElementById('root').innerHTML = "<h1>Comando: " + cmd + "</h1>";
    console.log("TV recebeu: " + cmd);
});
