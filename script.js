// Este é o cérebro do seu site
console.log("Script carregado com sucesso!");

// Vamos testar se o HTML está chamando o arquivo certo
window.onload = function() {
    const root = document.getElementById('root');
    if (root) {
        root.innerHTML = "<h1>SARAHTV ESTÁ FUNCIONANDO!</h1>";
        root.style.color = "white";
        document.body.style.backgroundColor = "black";
    } else {
        alert("Erro: Não encontrei a div 'root' no seu HTML!");
    }
};
// O script na TV fica verificando mudanças
setInterval(() => {
    const comando = localStorage.getItem('comando_sarah');
    if (comando) {
        console.log("A TV recebeu: " + comando);
        // Aqui você coloca a lógica do jogo
        document.getElementById('root').innerHTML = "<h1>Executando: " + comando + "</h1>";
        
        // Limpa o comando para não repetir
        localStorage.removeItem('comando_sarah');
    }
}, 1000); // Verifica a cada 1 segundo
