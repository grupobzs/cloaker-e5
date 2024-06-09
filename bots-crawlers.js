// Função para verificar se o navegador suporta JavaScript
function checkJavaScriptSupport() {
    if (!navigator || !navigator.userAgent) {
        // Redirecionar se o navegador não suportar JavaScript
        window.location.href = 'https://google.com'; // URL para redirecionar quando JavaScript não é suportado
    }
}

// Executar a verificação ao carregar a página
window.onload = checkJavaScriptSupport;