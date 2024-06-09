// Função para verificar se o usuário está usando um dispositivo móvel
function isMobileDevice() {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    return /android/i.test(userAgent) || /iPad|iPhone|iPod/.test(userAgent) && !window.MSStream;
}

// Função para verificar o dispositivo ao carregar a página
function checkDevice() {
    if (!isMobileDevice()) {
        // Redirecionar se não for um dispositivo móvel
        window.location.href = 'https://google.com'; // URL para redirecionar quando não é um dispositivo móvel
    }
}

// Executar a verificação ao carregar a página
window.onload = checkDevice;