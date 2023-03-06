const fs = require("fs");

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
            fs.writeFile("nor.json", JSON.stringify(json), function (err) {
                if (err) throw err;
                console.log("JSON de pesos atualizado!");
            });
        }
    }
}

function testarRede(entrada) {
    let bias = 1;
    let pesos = [];
    // Lê o JSON com os pesos
    fs.readFile("or.json", function (err, data) {
        if (err) throw err;

        // Transforma o JSON em objeto
        const json = JSON.parse(data);

        // Atribui os pesos do JSON aos pesos da rede
        pesos.push(json.w1);
        pesos.push(json.w2);
        pesos.push(json.w3);
        pesos.push(json.w4);
        w0 = json.w0;

        // Fórmula -> somatorio = (w0 * x0) + (w1 * x1) + (w2 * x2) + (w3 * x3) + bias * w0
        const somatorio = entrada[0] * pesos[0] + entrada[1] * pesos[1] + entrada[2] * pesos[2] + entrada[3] * pesos[3] + bias * w0;

        // Função de ativação
        const y = somatorio >= 0 ? 1 : 0;

        // Imprime o resultado
        console.log(`Entradas: ${entrada} | Saída obtida: ${y}`);
    });
}

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

const dataset = nor;
let pesos = [0, 0, 0, 0];
const bias = 1;
let w0 = 0;
const epocas = 100;
const taxaAprendizado = 0.5;

// treinarRede(dataset, pesos, bias, w0, epocas, taxaAprendizado);
testarRede([1, 0, 0, 1]);
