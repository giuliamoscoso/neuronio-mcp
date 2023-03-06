const fs = require("fs");

const and = [
    { entradas: [0, 0, 0, 0], saida: 0 },
    { entradas: [0, 0, 0, 1], saida: 0 },
    { entradas: [0, 0, 1, 0], saida: 0 },
    { entradas: [0, 0, 1, 1], saida: 0 },
    { entradas: [0, 1, 0, 0], saida: 0 },
    { entradas: [0, 1, 0, 1], saida: 0 },
    { entradas: [0, 1, 1, 0], saida: 0 },
    { entradas: [0, 1, 1, 1], saida: 0 },
    { entradas: [1, 0, 0, 0], saida: 0 },
    { entradas: [1, 0, 0, 1], saida: 0 },
    { entradas: [1, 0, 1, 0], saida: 0 },
    { entradas: [1, 0, 1, 1], saida: 0 },
    { entradas: [1, 1, 0, 0], saida: 0 },
    { entradas: [1, 1, 0, 1], saida: 0 },
    { entradas: [1, 1, 1, 0], saida: 0 },
    { entradas: [1, 1, 1, 1], saida: 1 },
];

let andTreinado = { w1: 1.5, w2: 6, w3: 5, w4: 0, w0: -12.5 };

const or = [
    { entradas: [0, 0, 0, 0], saida: 0 },
    { entradas: [0, 0, 0, 1], saida: 1 },
    { entradas: [0, 0, 1, 0], saida: 1 },
    { entradas: [0, 0, 1, 1], saida: 1 },
    { entradas: [0, 1, 0, 0], saida: 1 },
    { entradas: [0, 1, 0, 1], saida: 1 },
    { entradas: [0, 1, 1, 0], saida: 1 },
    { entradas: [0, 1, 1, 1], saida: 1 },
    { entradas: [1, 0, 0, 0], saida: 1 },
    { entradas: [1, 0, 0, 1], saida: 1 },
    { entradas: [1, 0, 1, 0], saida: 1 },
    { entradas: [1, 0, 1, 1], saida: 1 },
    { entradas: [1, 1, 0, 0], saida: 1 },
    { entradas: [1, 1, 0, 1], saida: 1 },
    { entradas: [1, 1, 1, 0], saida: 1 },
    { entradas: [1, 1, 1, 1], saida: 1 },
];

let orTreinado = { w1: 6, w2: 9, w3: 1, w4: 8, w0: -0.5 };

const nand = [
    { entradas: [0, 0, 0, 0], saida: 1 },
    { entradas: [0, 0, 0, 1], saida: 1 },
    { entradas: [0, 0, 1, 0], saida: 1 },
    { entradas: [0, 0, 1, 1], saida: 1 },
    { entradas: [0, 1, 0, 0], saida: 1 },
    { entradas: [0, 1, 0, 1], saida: 1 },
    { entradas: [0, 1, 1, 0], saida: 1 },
    { entradas: [0, 1, 1, 1], saida: 1 },
    { entradas: [1, 0, 0, 0], saida: 1 },
    { entradas: [1, 0, 0, 1], saida: 1 },
    { entradas: [1, 0, 1, 0], saida: 1 },
    { entradas: [1, 0, 1, 1], saida: 1 },
    { entradas: [1, 1, 0, 0], saida: 1 },
    { entradas: [1, 1, 0, 1], saida: 1 },
    { entradas: [1, 1, 1, 0], saida: 1 },
    { entradas: [1, 1, 1, 1], saida: 0 },
];

let nandTreinado = { w1: -0.5, w2: -0.5, w3: -0.5, w4: -1, w0: 2 };

const nor = [
    { entradas: [0, 0, 0, 0], saida: 1 },
    { entradas: [0, 0, 0, 1], saida: 0 },
    { entradas: [0, 0, 1, 0], saida: 0 },
    { entradas: [0, 0, 1, 1], saida: 0 },
    { entradas: [0, 1, 0, 0], saida: 0 },
    { entradas: [0, 1, 0, 1], saida: 0 },
    { entradas: [0, 1, 1, 0], saida: 0 },
    { entradas: [0, 1, 1, 1], saida: 0 },
    { entradas: [1, 0, 0, 0], saida: 0 },
    { entradas: [1, 0, 0, 1], saida: 0 },
    { entradas: [1, 0, 1, 0], saida: 0 },
    { entradas: [1, 0, 1, 1], saida: 0 },
    { entradas: [1, 1, 0, 0], saida: 0 },
    { entradas: [1, 1, 0, 1], saida: 0 },
    { entradas: [1, 1, 1, 0], saida: 0 },
    { entradas: [1, 1, 1, 1], saida: 0 },
];

let norTreinado = { w1: 2, w2: -3, w3: -1, w4: -0.5, w0: -3 };

function treinarRede(dataset, pesos, bias, w0, epocas, taxaAprendizado) {
    let historico = [];

    // Inicializa os pesos com valores aleatórios
    for (let i = 0; i < pesos.length; i++) {
        pesos[i] = Math.floor(Math.random() * (15 - -15)) + -15;
    }

    // Inicializa o bias com valor aleatório
    w0 = Math.floor(Math.random() * (15 - -15)) + -15;

    // Gera primeira posição aleatória do dataset
    let index = Math.floor(Math.random() * dataset.length);

    // Realiza o treinamento
    for (let k = 0; k < epocas; k++) {
        while (true) {
            if (historico.length !== dataset.length) {
                while (true) {
                    if (historico.includes(index)) {
                        index = Math.floor(Math.random() * dataset.length);
                    } else {
                        break;
                    }
                }
                const input = dataset[index].entradas;
                const output = dataset[index].saida;
                historico.push(index);
                // Fórmula -> somatorio = (w0 * x0) + (w1 * x1) + (w2 * x2) + (w3 * x3) + bias * w0
                const somatorio = input[0] * pesos[0] + input[1] * pesos[1] + input[2] * pesos[2] + input[3] * pesos[3] + bias * w0;

                // Função de ativação
                const y = somatorio >= 0 ? 1 : 0;

                // Calcula o erro
                const erro = output - y;

                // Atualiza os pesos
                if (erro !== 0) {
                    for (let j = 0; j < pesos.length; j++) {
                        // Fórmula -> w = w + taxaAprendizado * erro * x
                        pesos[j] = pesos[j] + taxaAprendizado * erro * input[j];
                    }
                    w0 = w0 + taxaAprendizado * erro * bias;
                }
            } else {
                historico = [];
                break;
            }
        }
        if (k === epocas - 1) {
            // Cria JSON com os pesos
            const json = {
                w1: pesos[0],
                w2: pesos[1],
                w3: pesos[2],
                w4: pesos[3],
                w0: w0,
            };

            // Salva o JSON em um arquivo
            fs.writeFile("json.json", JSON.stringify(json), function (err) {
                if (err) throw err;
                console.log("JSON de pesos atualizado!");
            });
        }
    }
}

function validarRede() {
    let bias = 1;

    let dataset = document.getElementById("porta").value;
    dataset = dataset.toLowerCase();
    console.log(dataset);

    const entradasUser = [];
    for (let i = 0; i < 5; i++) {
        let valor = document.getElementById(`peso${i + 1}`).value;
        entradasUser.push(valor);
    }
    let pesos = entradasUser;
    let somatorio;

    switch (dataset) {
        case "and":
            somatorio = and.entradas[0] * pesos[0] + and.entradas[1] * pesos[1] + and.entradas[2] * pesos[2] + and.entradas[3] * pesos[3] + bias * pesos[4];
            break;
        case "or":
            somatorio = or.entradas[0] * pesos[0] + or.entradas[1] * pesos[1] + or.entradas[2] * pesos[2] + or.entradas[3] * pesos[3] + bias * pesos[4];
            break;
        case "nand":
            somatorio = nand.entradas[0] * pesos[0] + nand.entradas[1] * pesos[1] + nand.entradas[2] * pesos[2] + nand.entradas[3] * pesos[3] + bias * pesos[4];
            break;
        case "nor":
            somatorio = nor.entradas[0] * pesos[0] + nor.entradas[1] * pesos[1] + nor.entradas[2] * pesos[2] + nor.entradas[3] * pesos[3] + bias * pesos[4];
            break;
    }

    // Função de ativação
    const y = somatorio >= 0 ? 1 : 0;
    // Imprime resultado obtido com entradas informadas
    console.log(`Entradas: ${entradasUser} | Saída obtida: ${y}`);
}

function treinamentoDoUsuario() {
    const epocas = 30;

    let dataset = document.getElementById("porta").value;
    dataset = dataset.toLowerCase();

    let taxaAprendizado = document.getElementById("coeficiente").value;

    const entradas = [];
    for (let i = 0; i < 5; i++) {
        let valor = document.getElementById(`peso${i + 1}`).value;
        entradas.push(valor);
    }
    let pesos = entradas;

    const bias = 1;

    switch (dataset) {
        case "and":
            andTreinado.w1 = entradas[0];
            andTreinado.w2 = entradas[1];
            andTreinado.w3 = entradas[2];
            andTreinado.w4 = entradas[3];
            andTreinado.w0 = entradas[4];
            treinarRede(andTreinado, pesos, bias, w0, epocas, taxaAprendizado);
            break;
        case "or":
            orTreinado.w1 = entradas[0];
            orTreinado.w2 = entradas[1];
            orTreinado.w3 = entradas[2];
            orTreinado.w4 = entradas[3];
            orTreinado.w0 = entradas[4];
            treinarRede(orTreinado, pesos, bias, w0, epocas, taxaAprendizado);
            break;
        case "nand":
            nandTreinado.w1 = entradas[0];
            nandTreinado.w2 = entradas[1];
            nandTreinado.w3 = entradas[2];
            nandTreinado.w4 = entradas[3];
            nandTreinado.w0 = entradas[4];
            treinarRede(nandTreinado, pesos, bias, w0, epocas, taxaAprendizado);
            break;
        case "nor":
            norTreinado.w1 = entradas[0];
            norTreinado.w2 = entradas[1];
            norTreinado.w3 = entradas[2];
            norTreinado.w4 = entradas[3];
            norTreinado.w0 = entradas[4];
            treinarRede(norTreinado, pesos, bias, w0, epocas, taxaAprendizado);
            break;
    }
}
