document.addEventListener("DOMContentLoaded", () => {
    // Seleciona todas as pílulas de filtro e todos os cards de pets
    const pills = document.querySelectorAll(".pill");
    const cards = document.querySelectorAll(".pet-card");

    pills.forEach(pill => {
        pill.addEventListener("click", () => {
            // 1. Remove a classe 'active' de todos os botões para limpar a cor azul
            pills.forEach(p => p.classList.remove("active"));
            
            // 2. Adiciona a classe 'active' apenas na pílula que foi clicada
            pill.classList.add("active");

            // 3. Pega o texto do botão clicado e transforma em minúsculo para comparar
            const filterValue = pill.textContent.trim().toLowerCase();

            // 4. Varre cada card na tela para decidir se mostra ou esconde
            cards.forEach(card => {
                const badge = card.querySelector(".badge");
                const infoText = card.querySelector(".pet-info-content").textContent.toLowerCase();
                
                // Pega o status atual do pet no badge (perdido, encontrado, abandonado, etc.)
                const petStatus = badge ? badge.textContent.trim().toLowerCase() : "";

                // Verifica se o texto do bloco do card possui a palavra correspondente
                const isCachorro = infoText.includes("cachorro");
                const isGato = infoText.includes("gato");

                // Regras de filtragem baseadas no clique
                if (filterValue === "todos") {
                    card.style.display = "grid"; // Mantém o layout em CSS Grid ativo
                } else if (filterValue === "cachorro" && isCachorro) {
                    card.style.display = "grid";
                } else if (filterValue === "gatos" && isGato) {
                    card.style.display = "grid";
                } else if (filterValue === petStatus) {
                    card.style.display = "grid"; // Filtra dinamicamente pelos badges de status
                } else {
                    card.style.display = "none"; // Esconde os cards que não correspondem
                }
            });
        });
    });
});