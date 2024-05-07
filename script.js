
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita o envio do formulário

    // Verifica a senha
    var senha = document.getElementById("senha").value;
    if (senha === "123") {
        // Se a senha estiver correta, exibe o conteúdo e oculta o formulário de login
        document.getElementById("login").style.display = "none";
        document.getElementById("conteudo").style.display = "block";
    } else {
        // Se a senha estiver incorreta, mostra uma mensagem de erro
        alert("Senha incorreta. Tente novamente.");
    }
});