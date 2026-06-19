# 📊 Dashboard Mercado Financeiro

Website responsivo e otimizado para visualização de cotações, tendências e indicadores de mercado financeiro, desenvolvido com **HTML**, **CSS**, **JavaScript** e **p5.js**.

## 🎯 Características

✅ **Layout Otimizado** - Design moderno e responsivo  
✅ **Cotações em Tempo Real** - Atualização automática de preços  
✅ **Gráficos Interativos** - Visualização com p5.js  
✅ **Navegação Suave** - Scroll animado entre seções  
✅ **Mobile First** - Totalmente responsivo  
✅ **Dark Theme** - Interface moderna com tema escuro  
✅ **Performance** - Código otimizado e leve  

## 📁 Estrutura de Arquivos

```
.
├── index.html      # Arquivo principal HTML
├── styles.css      # Estilos CSS (responsivo)
├── app.js          # Lógica principal da aplicação
├── sketch.js       # Configuração do p5.js para gráficos
└── README.md       # Este arquivo
```

## 🚀 Como Usar

### 1. Clonar o repositório
```bash
git clone https://github.com/pedrooliveirasilva26-cmyk/alura2.git
cd alura2
git checkout website-mercado-financeiro
```

### 2. Abrir em um navegador
```bash
# Opção 1: Abrir diretamente
open index.html

# Opção 2: Usar um servidor local (Python)
python3 -m http.server 8000
# Então acesse: http://localhost:8000

# Opção 3: Usar Live Server (VS Code)
# Instale a extensão Live Server e clique em "Go Live"
```

## 📊 Seções do Dashboard

### 1. **Cabeçalho (Header)**
- Logo com ícone de gráfico
- Menu de navegação com links para as seções
- Sticky header para fácil acesso

### 2. **Hero Section**
- Apresentação principal do dashboard
- Descrição clara da funcionalidade

### 3. **Cotações**
- Cards com cotações principais:
  - Dólar (USD)
  - Euro (EUR)
  - Bitcoin (BTC)
  - Ibovespa
- Indicadores de variação (positiva/negativa)
- Atualização automática a cada 5 segundos

### 4. **Gráficos com p5.js**
- Visualização interativa de tendências
- Três períodos: Dia, Semana, Mês
- Grid personalizado
- Linha com preenchimento degradado
- Pontos de dados destacados

### 5. **Sobre**
- Descrição do dashboard
- Três features principais
- Benefícios da plataforma

### 6. **Rodapé (Footer)**
- Informações de copyright
- Crédito às tecnologias utilizadas

## 🎨 Paleta de Cores

```css
Cor Primária:     #1e40af (Azul)
Cor Secundária:   #10b981 (Verde)
Cor de Perigo:    #ef4444 (Vermelho)
Fundo Escuro:     #0f172a
Superfície:       #1e293b
```

## ⚙️ Tecnologias Utilizadas

- **HTML5** - Estrutura semântica
- **CSS3** - Estilos modernos com variáveis CSS
- **JavaScript ES6** - Lógica interativa
- **p5.js** - Biblioteca para gráficos e visualização

## 📱 Responsividade

O dashboard é totalmente responsivo para:
- 📱 Mobile (< 480px)
- 📱 Tablet (480px - 768px)
- 💻 Desktop (> 768px)

## 🔧 Customização

### Alterar Cores
Edite as variáveis CSS em `styles.css`:
```css
:root {
    --primary-color: #1e40af; /* Altere aqui */
    --secondary-color: #10b981;
    /* ... */
}
```

### Modificar Dados de Cotações
Edite o objeto `quotesData` em `app.js`:
```javascript
const quotesData = {
    usd: {
        price: 5.12,        // Preço
        variation: 0.50,    // Variação %
        element: { ... }
    }
};
```

### Ajustar Período do Gráfico
Modifique a função `generateChartData()` em `sketch.js`:
```javascript
const dataPoints = timeframe === 'day' ? 24 : ...
```

## 🔄 Atualizações em Tempo Real

O dashboard simula atualizações automáticas:
- Cotações: atualizam a cada **5 segundos**
- Variações: calculadas aleatoriamente
- Gráficos: podem ser regenerados por timeframe

## 📈 Performance

✅ Código otimizado e minificado  
✅ Sem dependências externas (exceto p5.js)  
✅ Carregamento rápido  
✅ Animações suaves com CSS transitions  
✅ Lazy loading de seções  

## 🐛 Debugging

Abra o console do navegador (F12) para ver:
- Logs de inicialização
- Atualizações de preços
- Status do p5.js

## 📄 Licença

Este projeto é de uso livre para fins educacionais.

## 👨‍💻 Autor

Desenvolvido por: **Pedro Oliveira Silva**  
Data: Junho de 2026  
Plataforma: p5.os

---

**⭐ Se gostar, deixe uma estrela no repositório!**