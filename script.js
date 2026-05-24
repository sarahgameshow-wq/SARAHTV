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
