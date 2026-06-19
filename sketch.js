// Configuração do p5.js para Dashboard Mercado Financeiro
let chartData = [];
let currentTimeframe = 'day';
let p5Instance;
let canvasWidth, canvasHeight;

function initP5() {
    const container = document.getElementById('p5-container');
    canvasWidth = container.offsetWidth - 40;
    canvasHeight = 350;
    
    p5Instance = new p5((p) => {
        p.setup = function() {
            const w = canvasWidth;
            const h = canvasHeight;
            const canvas = p.createCanvas(w, h);
            canvas.parent('p5-container');
            p.noLoop();
        };

        p.draw = function() {
            p.background(30, 41, 59);
            drawGrid(p);
            drawChart(p);
            drawAxisLabels(p);
        };

        p.windowResized = function() {
            const container = document.getElementById('p5-container');
            if (container) {
                canvasWidth = container.offsetWidth - 40;
                p.resizeCanvas(canvasWidth, canvasHeight);
                p.redraw();
            }
        };
    }, 'p5-container');
}

function drawGrid(p) {
    p.stroke(51, 65, 85);
    p.strokeWeight(1);
    const gridSpacing = 40;
    
    // Linhas horizontais
    for (let y = 50; y < p.height - 40; y += gridSpacing) {
        p.line(50, y, p.width - 30, y);
    }
    
    // Linhas verticais
    for (let x = 50; x < p.width - 30; x += gridSpacing) {
        p.line(x, 50, x, p.height - 40);
    }
}

function drawChart(p) {
    if (chartData.length < 2) return;
    
    const padding = 50;
    const chartWidth = p.width - padding - 30;
    const chartHeight = p.height - padding - 40;
    
    const maxVal = Math.max(...chartData);
    const minVal = Math.min(...chartData);
    const range = maxVal - minVal || 1;
    
    // Desenhar linha do gráfico
    p.stroke(30, 144, 255);
    p.strokeWeight(3);
    p.noFill();
    p.beginShape();
    
    for (let i = 0; i < chartData.length; i++) {
        const x = padding + (i / (chartData.length - 1)) * chartWidth;
        const normalizedY = (chartData[i] - minVal) / range;
        const y = p.height - padding + 10 - (normalizedY * chartHeight);
        p.vertex(x, y);
    }
    p.endShape();
    
    // Desenhar pontos
    p.fill(16, 185, 129);
    p.noStroke();
    for (let i = 0; i < chartData.length; i += Math.floor(chartData.length / 8)) {
        const x = padding + (i / (chartData.length - 1)) * chartWidth;
        const normalizedY = (chartData[i] - minVal) / range;
        const y = p.height - padding + 10 - (normalizedY * chartHeight);
        p.ellipse(x, y, 6);
    }
    
    // Desenhar área sob a linha (gradiente)
    p.stroke(30, 144, 255, 50);
    p.strokeWeight(1);
    p.fill(30, 144, 255, 30);
    p.beginShape();
    for (let i = 0; i < chartData.length; i++) {
        const x = padding + (i / (chartData.length - 1)) * chartWidth;
        const normalizedY = (chartData[i] - minVal) / range;
        const y = p.height - padding + 10 - (normalizedY * chartHeight);
        p.vertex(x, y);
    }
    p.vertex(p.width - 30, p.height - padding + 10);
    p.vertex(padding, p.height - padding + 10);
    p.endShape(p.CLOSE);
}

function drawAxisLabels(p) {
    p.fill(226, 232, 240);
    p.textSize(12);
    p.textAlign(p.CENTER);
    
    // Labels do eixo X
    const xLabels = ['00h', '6h', '12h', '18h', '24h'];
    const xSpacing = (p.width - 80) / 4;
    
    for (let i = 0; i < xLabels.length; i++) {
        const x = 50 + (i * xSpacing);
        p.text(xLabels[i], x, p.height - 15);
    }
    
    // Labels do eixo Y
    p.textAlign(p.RIGHT);
    for (let i = 0; i < 5; i++) {
        const y = 50 + (i * (p.height - 90) / 4);
        const value = (100 - (i * 25)).toFixed(0);
        p.text(value, 35, y + 4);
    }
}

function generateChartData(timeframe) {
    const baseValue = 100;
    const dataPoints = timeframe === 'day' ? 24 : (timeframe === 'week' ? 7 : 30);
    const data = [];
    
    for (let i = 0; i < dataPoints; i++) {
        const noise = (Math.random() - 0.5) * 20;
        const trend = (i / dataPoints) * 15;
        const value = baseValue + trend + noise;
        data.push(Math.max(value, 80));
    }
    
    return data;
}

function updateChart(timeframe) {
    currentTimeframe = timeframe;
    chartData = generateChartData(timeframe);
    if (p5Instance) {
        p5Instance.redraw();
    }
}

// Inicializar quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', () => {
    initP5();
    chartData = generateChartData('day');
    
    // Botões de controle
    document.getElementById('btn-day').addEventListener('click', () => {
        updateChart('day');
        updateActiveButton('day');
    });
    
    document.getElementById('btn-week').addEventListener('click', () => {
        updateChart('week');
        updateActiveButton('week');
    });
    
    document.getElementById('btn-month').addEventListener('click', () => {
        updateChart('month');
        updateActiveButton('month');
    });
});

function updateActiveButton(timeframe) {
    document.querySelectorAll('.chart-controls .btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    const mapTimeframe = { day: 'btn-day', week: 'btn-week', month: 'btn-month' };
    document.getElementById(mapTimeframe[timeframe]).classList.add('active');
}