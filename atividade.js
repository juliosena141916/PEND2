// JavaScript

const sensoresIniciais = [
{ id: 1, nome: "Sensor Galpão A", tipo: "Temperatura", valor:
24.5, unidade: "°C", status: "normal" },

{ id: 2, nome: "Sensor Estufa 02", "tipo": "Umidade", valor: 88.0,
unidade: "%", status: "critico" },

{ id: 3, nome: "Sensor Compressor", tipo: "Pressão", valor: 6.2,
unidade: "bar", status: "normal" },

{ id: 4, nome: "Sensor Câmara Fria", tipo: "Temperatura", valor: -
2.1, unidade: "°C", status: "normal" },

{ id: 5, nome: "Sensor Almoxarifado", tipo: "Umidade", valor:
45.5, unidade: "%", status: "normal" },

{ id: 6, nome: "Sensor Caldeira", tipo: "Temperatura", valor: 98.4,
unidade: "°C", status: "critico" }
];


const gridSensores = document.getElementById("grid-sensores");

function renderizarSensores(listaSensores) {
    gridSensores.innerHTML = "";

    listaSensores.forEach(sensor => {
        const card = document.createElement("div");
        card.classList.add("card-sensor", sensor.status);

        card.innerHTML = `
            <h4>${sensor.nome}</h4>
            <p><strong>Tipo:</strong> ${sensor.tipo}</p>
            <p class="valor">${sensor.valor} ${sensor.unidade}</p>
            <span class="status-tag ${sensor.status}">${sensor.status}</span>
        `;

        gridSensores.appendChild(card);
    });
}

// Renderiza a lista na inicialização do script
renderizarSensores(sensoresIniciais);