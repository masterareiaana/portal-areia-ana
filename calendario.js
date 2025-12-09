async function carregarEventos() {
    const resposta = await fetch("eventos.json");
    return await resposta.json();
}

function gerarCalendario(eventos) {
    const hoje = new Date();
    const ano = hoje.getFullYear();
    const meses = ["Jan","Fev","Mar","Abr","Mai","Jun","Jul","Ago","Set","Out","Nov","Dez"];

    let html = "";

    for (let mes = 0; mes < 12; mes++){
        const primeiroDia = new Date(ano, mes, 1).getDay();
        const totalDias = new Date(ano, mes + 1, 0).getDate();

        html += `<div class="mes"><h2>${meses[mes]} ${ano}</h2><div class="dias">`;

        for(let i = 0; i < primeiroDia; i++){
            html += `<div class="dia vazio"></div>`;
        }

        for(let dia = 1; dia <= totalDias; dia++){
            const dataStr = `${ano}-${String(mes + 1).padStart(2,"0")}-${String(dia).padStart(2,"0")}`;
            const evento = eventos.find(e => e.data === dataStr);

            html += `
                <div class="dia">
                    <span>${dia}</span>
                    ${evento ? `<div class="evento" style="background:${evento.cor}">${evento.titulo}</div>` : ""}
                </div>
            `;
        }

        html += `</div></div>`;
    }

    document.getElementById("calendario").innerHTML = html;
}

carregarEventos().then(gerarCalendario);

