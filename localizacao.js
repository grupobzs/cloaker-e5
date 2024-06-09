// Função para verificar a localização do usuário
function checkUserLocation(ip) {
    fetch(`https://ipinfo.io/${ip}/json?token=2310881f40c3b6`) // Use um token da API do ipinfo.io
        .then(response => response.json())
        .then(data => {
            const country = data.country;
            if (country !== 'BR') {
                // Redirecionar se não estiver no Brasil
                window.location.href = 'https://google.com'; // URL para redirecionar usuários de fora do Brasil
            }
        })
        .catch(error => {
            console.error('Erro ao obter a localização:', error);
        });
}

// Obter o IP do usuário e verificar a localização
getUserIP(checkUserLocation);
