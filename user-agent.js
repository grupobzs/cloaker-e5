// Lista de User-Agents suspeitos
const suspiciousUserAgents = [
    // Google
    'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)',
    'Googlebot/2.1 (+http://www.googlebot.com/bot.html)',
    
    // Bing
    'Mozilla/5.0 (compatible; Bingbot/2.0; +http://www.bing.com/bingbot.htm)',
    'Mozilla/5.0 (compatible; adidxbot/2.0; +http://www.bing.com/bingbot.htm)',

    // Yahoo
    'Mozilla/5.0 (compatible; Yahoo! Slurp; http://help.yahoo.com/help/us/ysearch/slurp)',
    
    // DuckDuckGo
    'DuckDuckBot/1.0; (+http://duckduckgo.com/duckduckbot.html)',

    // Baidu
    'Mozilla/5.0 (compatible; Baiduspider/2.0; +http://www.baidu.com/search/spider.html)',
    
    // Yandex
    'Mozilla/5.0 (compatible; YandexBot/3.0; +http://yandex.com/bots)',

    // Sogou
    'Sogou web spider/4.0(+http://www.sogou.com/docs/help/webmasters.htm#07)',

    // Exabot
    'Mozilla/5.0 (compatible; Exabot/3.0; +http://www.exabot.com/go/robot)',

    // Facebook
    'facebookexternalhit/1.1 (+http://www.facebook.com/externalhit_uatext.php)',
    'facebookexternalhit/1.1',

    // Twitter
    'Twitterbot/1.0',

    // LinkedIn
    'Mozilla/5.0 (compatible; LinkedInBot/1.0; +http://www.linkedin.com)',
    
    // Pinterest
    'Pinterest/0.2 (+http://www.pinterest.com/bot.html)',

    // Other known bots
    'Mozilla/5.0 (compatible; archive.org_bot/1.13.0 +http://www.archive.org/details/archive.org_bot)',
    'Mozilla/5.0 (compatible; PetalBot; +http://aspiegel.com/petalbot)',
    'Mozilla/5.0 (compatible; MJ12bot/v1.4.8; http://mj12bot.com/)',
    'Mozilla/5.0 (compatible; SemrushBot/7~bl; +http://www.semrush.com/bot.html)',
    'Mozilla/5.0 (compatible; AhrefsBot/7.0; +http://ahrefs.com/robot/)',
    'Mozilla/5.0 (compatible; DotBot/1.1; http://www.opensiteexplorer.org/dotbot,)',
    'Mozilla/5.0 (compatible; BLEXBot/1.0; +http://webmeup-crawler.com/)',
    'Mozilla/5.0 (compatible; CCBot/2.0; +http://commoncrawl.org/faq/)',
    'Mozilla/5.0 (compatible; Wget/1.17.1 (linux-gnu))',
    'Mozilla/5.0 (compatible; rogerbot/1.0; +http://www.seomoz.org/dp/rogerbot)',
    'Mozilla/5.0 (compatible; sitebot/1.0; +http://www.sitebot.com/)',
    'Mozilla/5.0 (compatible; spbot/3.0; +http://www.seoprofiler.com/bot/)'
];


// Função para verificar o User-Agent
function checkUserAgent() {
    const userAgent = navigator.userAgent;
    console.log('User-Agent do usuário:', userAgent); // Log para depuração

    if (suspiciousUserAgents.includes(userAgent)) {
        // Redirecionar se o User-Agent for suspeito
        window.location.href = 'https://google.com'; // URL para redirecionar bots
    }
}

// Executar a verificação ao carregar a página
window.onload = checkUserAgent;