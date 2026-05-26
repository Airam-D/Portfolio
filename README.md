# 🚀 Airam D' Avilla | Full Stack Developer en Evolución

<div align="center">
  <p><b>Desenvolvedor Full Stack focado em alta performance, interfaces imersivas e automações inteligentes.</b></p>
  <p><i>Construindo soluções robustas com design premium, alinhando a base sólida do SENAI às demandas reais do ecossistema de software.</i></p>
</div>

---

## 📱 Engenharia de Interface & Otimização Mobile

Este portfólio foi arquitetado sob os conceitos de **UI/UX Premium** e **Mobile-First Real**. Diferente de layouts genéricos que quebram ou sufocam o usuário em telas menores, cada seção foi otimizada para dispositivos físicos e emuladores Android/iOS:

* **Glassmorphism Controlado:** Uso estratégico de `backdrop-filter: blur(12px)` e fundos translúcidos em camadas (`rgba`), gerando profundidade sem sacrificar a legibilidade ou a taxa de atualização (FPS) em telas mobile.
* **Controle de Viewport e Margens:** Implementação cirúrgica de `@media queries` globais blindando o `body` com `overflow-x: hidden` e larguras percentuais precisas. O resultado? Um espaçamento lateral milimétrico e confortável que impede o texto de encostar nas bordas físicas do celular, sem vazamentos de layout.
* **Navbar Adaptável:** Sistema de cabeçalho inteligente fixo no topo que preserva o contraste de cor e reorganiza fluxos de link intuitivamente quando renderizado no mobile.

---

## ✨ Recursos de Destaque (Engenharia de Software)

### ⌨️ Efeito Máquina de Escrever Assíncrona
Desenvolvimento de um motor de digitação e deleção dinâmico em JavaScript puro para retenção de usuários (*engagement*). 
* **Isolamento de Escopo:** O script foi blindado com blocos estruturados de `try/catch`. Isso garante que, quando o usuário navega para páginas internas (como `contato.html`), o JavaScript ignora elegantemente a ausência do contêiner de texto da Home e continua executando os demais fluxos do sistema sem travar o console do navegador.

### ✉️ Pipeline de Captura de Propostas (AJAX/Fetch API)
A engrenagem de contato foi totalmente desvinculada dos redirecionamentos brutos tradicionais da web antiga. A aplicação intercepta o submit do formulário nativo (`e.preventDefault()`) e assume o controle do fluxo:
* **Feedback em Tempo Real:** O botão de ação altera instantaneamente o DOM, renderizando um estado visual de carregamento (*"Enviando Proposta..."* acompanhado de uma animação de ampulheta em loop) e desabilita cliques repetidos.
* **Processamento Assíncrono:** Os dados textuais e estruturais são empacotados dinamicamente via objeto `FormData()` e transmitidos em segundo plano via `fetch()` para os endpoints do Formspree.
* **Resiliência a Erros:** Fluxo integrado com tratamentos de exceção via `.catch()`, emitindo alertas amigáveis e precisos em caso de instabilidades de rede do usuário ou rejeições de servidores externos.

### 👁️ Intersection Observer API
Monitoramento de rolagem de página de alta performance para revelar elementos da linha do tempo exatamente no momento em que entram na zona visível da tela (*viewport*), reduzindo drasticamente o consumo de CPU em comparação com ouvintes de scroll tradicionais.

---

## 🛠️ Stack Tecnológica

* **Front-End:** HTML5 Semântico (Foco em SEO e Acessibilidade) e CSS3 Avançado (Estruturado estritamente através de variáveis nativas `--var` para fácil manutenção).
* **Lógica de Negócios:** JavaScript Moderno (ES6+) assíncrono e orientado a eventos.
* **Infraestrutura de Envio:** Integração via API REST com Formspree (Endpoint `/mailme/` dinâmico).

---

## 📂 Arquitetura Limpa do Repositório

```bash
├── index.html                  # Core da aplicação (Hero, Sobre, Skills, Seções Principais)
└── src/
    ├── pages/
    │   ├── projetos.html       # Catálogo de engenharia e projetos práticos
    │   ├── blogs.html          # Artigos técnicos e histórico de experiências
    │   └── contato.html        # Hub de captação comercial e propostas diretas
    ├── styles/
    │   └── global.css          # Reset CSS, variáveis de design system e Media Queries corporativas
    ├── scripts/
    │   └── main.js             # Core Engine (Máquina de Escrever, Fetch API, Scroll Observer)
    └── assets/
        └── ícone_portfolio.png # Ativos visuais e branding do projeto
```

## ⚙️ Arquitetura do Script de Envio

Aqui está o padrão de engenharia utilizado para interceptar as requisições e garantir imersão total do cliente na página de destino:

```javascript
// Manipulação avançada do DOM e requisições assíncronas assinaladas no main.js
fetch(formulario.action, {
    method: formulario.method,
    body: new FormData(formulario),
    headers: {
        'Accept': 'application/json'
    }
})
.then(resposta => {
    if (resposta.ok) {
        alert("Sucesso! Sua proposta foi enviada com sucesso.");
        formulario.reset();
    } else {
        alert("Ops! Houve um problema ao enviar. Verifique os dados.");
    }
})
.catch(erro => {
    alert("Erro de conexão detectado. Verifique sua internet e tente novamente.");
});
```

## 🚀 Como Testar Este Ecossistema Localmente

1. Realize o clone deste repositório para o seu ambiente local:
   ```bash
   git clone [https://github.com/Airam-D/portfolio.git](https://github.com/Airam-D/portfolio.git)

2. Acesse o diretório raiz do projeto:
   ```bash
   cd portfolio

3. Execute o ecossistema utilizando a extensão **Live Server** do VS Code ou abra o arquivo `index.html` diretamente no seu navegador homologado preferido.

## 🎓 Formação & Mindset

Atualmente lapidando habilidades técnicas e teóricas de engenharia de software através do **SENAI**, focando no desenvolvimento de códigos limpos (*Clean Code*), arquiteturas de sistemas eficientes e na resolução de problemas reais de performance e responsividade através do uso inteligente de tecnologia.

---
<div align="center">
  <sub>Desenvolvido com foco obstinado em performance, responsividade e código limpo por <b>Airam D' Avilla</b>.</sub>
</div>