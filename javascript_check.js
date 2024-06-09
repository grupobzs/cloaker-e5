// Função para verificar se o JavaScript está habilitado
function isJavaScriptEnabled() {
    return typeof window !== 'undefined' && typeof window.onload === 'function';
}

// Função para verificar se o JavaScript está habilitado ao carregar a página
function checkJavaScriptEnabled() {
    if (!isJavaScriptEnabled()) {
        // Redirecionar se o JavaScript estiver desativado
        window.location.href = 'https://google.com'; // URL para redirecionar quando o JavaScript não é suportado
    }
}

// Executar a verificação ao carregar a página
window.onload = checkJavaScriptEnabled;
