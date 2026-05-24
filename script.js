// Adicione o Firebase aqui e use esta lógica simples:
const database = firebase.database();
database.ref('comando').on('value', (snapshot) => {
    const comando = snapshot.val();
    document.getElementById('root').innerHTML = "<h1>Comando recebido: " + comando + "</h1>";
});
