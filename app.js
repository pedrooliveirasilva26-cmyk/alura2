// Aplicação principal - Dashboard Mercado Financeiro

// Dados simulados de cotações
const quotesData = {
    usd: {
        price: 5.12,
        variation: 0.50,
        element: {
            price: 'usd-price',
            variation: 'usd-var'
        }
    },
    eur: {
        price: 5.58,
        variation: -0.25,
        element: {
            price: 'eur-price',
            variation: 'eur-var'
        }
    },
    btc: {
        price: 182500,
        variation: 2.10,
        element: {
            price: 'btc-price',
            variation: 'btc-var'
        }
    },
    ibov: {
        price: 121800,
        variation: 1.20,
        element: {
            price: 'ibov-price',
            variation: 'ibov-var'
        }
    }
};

// Função para formatar valores em moeda
function formatCurrency(value) {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }).format(value);
}

// Função para formatar variação percentual
function formatVariation(variation) {
    const sign = variation > 0 ? '+' : '';
    return `${sign}${variation.toFixed(2)}%`;
}

// Atualizar cotações na tela
function updateQuotes() {
    Object.values(quotesData).forEach(quote => {
        const priceElement = document.getElementById(quote.element.price);
        const variationElement = document.getElementById(quote.element.variation);
        
        if (priceElement) {
            priceElement.textContent = formatCurrency(quote.price);
        }
        
        if (variationElement) {
            variationElement.textContent = formatVariation(quote.variation);
            variationElement.className = `variation ${quote.variation > 0 ? 'positive' : 'negative'}`;
        }
    });
}

// Simular atualização de preços
function simulatePriceUpdate() {
    setInterval(() => {
        Object.keys(quotesData).forEach(key => {
            const quote = quotesData[key];
            const changePercent = (Math.random() - 0.5) * 2;
            quote.variation += changePercent;
            quote.price *= (1 + changePercent / 100);
        });
        updateQuotes();
    }, 5000);
}

// Navegação suave entre seções
function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Adicionar animação ao scroll
function setupScrollAnimation() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });

    document.querySelectorAll('.section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'all 0.6s ease';
        observer.observe(section);
    });
}

// Atualizar horário e data em tempo real
function updateDateTime() {
    setInterval(() => {
        const now = new Date();
        const timeString = now.toLocaleTimeString('pt-BR');
        const dateString = now.toLocaleDateString('pt-BR', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
        console.log(`Atualização: ${timeString} - ${dateString}`);
    }, 1000);
}

// Função para adicionar classe ativa ao nav ao scroll
function updateActiveNav() {
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('.nav a');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === current) {
                link.classList.add('active');
            }
        });
    });
}

// Inicializar aplicação
function initApp() {
    updateQuotes();
    simulatePriceUpdate();
    setupSmoothScroll();
    setupScrollAnimation();
    updateDateTime();
    updateActiveNav();
    
    console.log('✅ Dashboard Mercado Financeiro iniciado com sucesso!');
    console.log('📊 Utilizando p5.js para renderização de gráficos');
}

// Executar quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', initApp);