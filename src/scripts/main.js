document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.header-global');
    const linksMenu = document.querySelectorAll('.nav-link');

    // 1. Efeito de Scroll na Navbar
    const handleScroll = () => {
        if (window.scrollY > 50) {
            header.classList.add('scroll-active');
        } else {
            header.classList.remove('scroll-active');
        }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    // 2. Gerenciamento do Risco Ativo nos Links
    linksMenu.forEach(link => {
        link.addEventListener('click', function () {
            linksMenu.forEach(item => item.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // 3. EFEITO DE DIGITAÇÃO AUTOMÁTICA (MÁQUINA DE ESCREVER)
    const elementoTexto = document.getElementById("text-to-type");

    if (elementoTexto) {
        const palavras = [
            "Desenvolvedor Full Stack Premium.",
            "Especialista em Automações com IA.",
            "Arquiteto de Sistemas de Alta Escala."
        ];

        let indexPalavra = 0;
        let indexLetra = 0;
        let apagando = false;
        let velocidade = 100;

        function renderizarDigitacao() {
            const palavraAtual = palavras[indexPalavra];

            if (!apagando) {
                elementoTexto.textContent = palavraAtual.substring(0, indexLetra + 1);
                indexLetra++;
                velocidade = 70; // Velocidade a escrever
            } else {
                elementoTexto.textContent = palavraAtual.substring(0, indexLetra - 1);
                indexLetra--;
                velocidade = 35; // Velocidade a apagar (mais rápido)
            }

            // Inversão de estados
            if (!apagando && indexLetra === palavraAtual.length) {
                apagando = true;
                velocidade = 2200; // Tempo parado na palavra cheia antes de apagar
            } else if (apagando && indexLetra === 0) {
                apagando = false;
                indexPalavra = (indexPalavra + 1) % palavras.length;
                velocidade = 400; // Pausa rápida antes de começar a próxima
            }

            setTimeout(renderizarDigitacao, velocidade);
        }

        // Inicia o loop de digitação
        renderizarDigitacao();
    }
});