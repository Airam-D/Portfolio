document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.header-global');
    const linksMenu = document.querySelectorAll('.nav-link');

    // 1. Efeito de Scroll na Navbar
    const handleScroll = () => {
        if (header) {
            if (window.scrollY > 50) {
                header.classList.add('scroll-active');
            } else {
                header.classList.remove('scroll-active');
            }
        }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    // 2. Gerenciamento do Risco Ativo nos Links
    if (linksMenu) {
        linksMenu.forEach(link => {
            link.addEventListener('click', function () {
                linksMenu.forEach(item => item.classList.remove('active'));
                this.classList.add('active');
            });
        });
    }

    // 3. EFEITO DE DIGITAÇÃO AUTOMÁTICA (MÁQUINA DE ESCREVER COM PROTEÇÃO)
    try {
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

                    if (indexLetra === palavraAtual.length) {
                        apagando = true;
                        velocidade = 2000;
                    } else {
                        velocidade = 100;
                    }
                } else {
                    elementoTexto.textContent = palavraAtual.substring(0, indexLetra - 1);
                    indexLetra--;

                    if (indexLetra === 0) {
                        apagando = false;
                        indexPalavra = (indexPalavra + 1) % palavras.length;
                        velocidade = 500;
                    } else {
                        velocidade = 50;
                    }
                }

                setTimeout(renderizarDigitacao, velocidade);
            }

            renderizarDigitacao();
        }
    } catch (e) {
        console.log("Máquina de escrever contornada nesta página.");
    }

    // 4. VALIDAÇÃO E ENVIO REAL DO FORMULÁRIO VIA FORMSPREE
    const formulario = document.querySelector(".formulario-premium");

    if (formulario) {
        formulario.addEventListener("submit", function (e) {
            // ESSA LINHA É O SEGREDO: Impede o Formspree de abrir a página cinzenta nativa!
            e.preventDefault();

            const btnEnviar = formulario.querySelector(".btn-form-enviar");
            if (!btnEnviar) return;

            // Salva o texto/conteúdo original do botão
            const conteudoOriginal = btnEnviar.innerHTML;

            // Altera o estado visual para feedback de carregamento premium
            btnEnviar.innerHTML = `<span>Enviando Proposta...</span> <span style="display: inline-block; animation: spin 1s linear infinite;">⏳</span>`;
            btnEnviar.style.opacity = "0.6";
            btnEnviar.style.pointerEvents = "none";

            // Captura os dados digitados no formulário de forma automatizada
            const dadosFormulario = new FormData(formulario);

            // Envia os dados para o Formspree via API em segundo plano (AJAX)
            fetch(formulario.action, {
                method: formulario.method,
                body: dadosFormulario,
                headers: {
                    'Accept': 'application/json'
                }
            })
                .then(resposta => {
                    if (resposta.ok) {
                        alert("Sucesso! Sua proposta foi enviada com sucesso e chegará no e-mail do Airam.");
                        formulario.reset(); // Limpa os campos digitados
                    } else {
                        alert("Ops! Houve um problema ao enviar. Por favor, tente novamente.");
                    }
                })
                .catch(erro => {
                    alert("Erro de conexão. Verifique sua internet e tente novamente.");
                })
                .finally(() => {
                    // Restaura o botão ao design original
                    btnEnviar.innerHTML = conteudoOriginal;
                    btnEnviar.style.opacity = "1";
                    btnEnviar.style.pointerEvents = "auto";
                });
        });
    }

    // 5. EFEITO DE REVELAÇÃO DA TIMELINE AO ROLAR
    const itensTimeline = document.querySelectorAll('.timeline-item');

    if (itensTimeline.length > 0) {
        const opcoesObserver = {
            root: null,
            rootMargin: '0px 0px -10% 0px',
            threshold: 0.1
        };

        const timelineObserver = new IntersectionObserver((entradas) => {
            entradas.forEach(entrada => {
                if (entrada.isIntersecting) {
                    entrada.target.classList.add('visible');
                } else {
                    if (entrada.boundingClientRect.top > 0) {
                        entrada.target.classList.remove('visible');
                    }
                }
            });
        }, opcoesObserver);

        itensTimeline.forEach(item => timelineObserver.observe(item));
    }
});