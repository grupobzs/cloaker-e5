// Função para obter o IP do usuário
function getUserIP(callback) {
    fetch('https://api.ipify.org?format=json')
        .then(response => response.json())
        .then(data => {
            callback(data.ip);
        })
        .catch(error => {
            console.error('Erro ao obter o IP:', error);
            callback(null);
        });
}