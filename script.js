const firebaseConfig = {
  databaseURL: "AQUI_VAI_A_SUA_URL_DO_BANCO_QUE_TERMINA_EM_firebaseio.com"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.database();

// Tenta ler o banco e mostra na tela
db.ref('comando').on('value', (snapshot) => {
    const comando = snapshot.val();
    const root = document.getElementById('root');
    if (root) {
        root.innerHTML = "<h1>Comando atual: " + (comando || "Nenhum") + "</h1>";
    }
}, (error) => {
    console.error("Erro ao conectar no Firebase: ", error);
    document.getElementById('root').innerHTML = "<h1>Erro de conexão! Verifique o console (F12)</h1>";
});
