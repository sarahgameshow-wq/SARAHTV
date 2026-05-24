// Importa o Firebase (adicione estas linhas no topo do index.html se precisar)
// <script src="https://www.gstatic.com/firebasejs/9.6.1/firebase-app-compat.js"></script>
// <script src="https://www.gstatic.com/firebasejs/9.6.1/firebase-database-compat.js"></script>

const firebaseConfig = { databaseURL: "SUA_URL_DO_FIREBASE_AQUI" };
firebase.initializeApp(firebaseConfig);

const db = firebase.database();

// Fica monitorando o comando
db.ref('comando').on('value', (snapshot) => {
    const cmd = snapshot.val();
    document.getElementById('root').innerHTML = "<h1>Comando: " + cmd + "</h1>";
    console.log("TV recebeu: " + cmd);
});
