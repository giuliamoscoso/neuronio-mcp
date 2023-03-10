let andTreinado = { w1: 1.5, w2: 1, w3: 1.5, w4: 6, w0: -10 };
let orTreinado = { w1: 4.5, w2: 3, w3: 0.5, w4: 0.5, w0: -0.5 };
let nandTreinado = { w1: -7.5, w2: -0.5, w3: -1, w4: -2, w0: 10.5 };
let norTreinado = { w1: -15.5, w2: -0.5, w3: -0.5, w4: -7.5, w0: 0 };

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

function salvaPesos() {
    // Gera JSON com os pesos
    let pesos = {
        and: andTreinado,
        or: orTreinado,
        nand: nandTreinado,
        nor: norTreinado,
    };
    // Exporta JSON
    let dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(pesos));
    let downloadAnchorNode = document.createElement("a");
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", "pesos.json");
    document.body.appendChild(downloadAnchorNode); // required for firefox
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
}

function atualizarPesos(currentPeso) {
    document.getElementById("pesos").innerHTML = "";
    document.getElementById("pesos").innerHTML += `Pesos: `;
    Object.keys(currentPeso).forEach((key) => {
        document.getElementById("pesos").innerHTML += `${key}: ${currentPeso[key]} `;
    });
}

function getPorta() {
    let porta = document.getElementById("porta").value;
    let currentPeso;

    switch (porta) {
        case "and":
            currentPeso = andTreinado;
            break;
        case "or":
            currentPeso = orTreinado;
            break;
        case "nand":
            currentPeso = nandTreinado;
            break;
        case "nor":
            currentPeso = norTreinado;
            break;
    }

    atualizarPesos(currentPeso);

    return porta;
}

function setValoresAleatorios() {
    let pesos = document.getElementsByClassName("pesos");
    let pesosFinais = [];
    for (let i = 0; i < pesos.length; i++) {
        pesos[i].value = Math.floor(Math.random() * (5 - -5)) + -5;
    }
}

function getValoresAleatorios() {
    let pesos = document.getElementsByClassName("pesos");
    let pesosFinais = [];
    for (let i = 0; i < pesos.length; i++) {
        pesosFinais.push(pesos[i].value);
    }
    return pesosFinais;
}

function getEpocas() {
    return document.getElementById("epocas").value;
}

function getCoeficiente() {
    return document.getElementById("coeficiente").value;
}

function setResultado(saida) {
    document.getElementById("saida").innerHTML = "";
    document.getElementById("saida").innerHTML += "Saída: ";
    document.getElementById("saida").innerHTML += saida;
}

function getEntradas() {
    let entradas = document.getElementsByClassName("entradas");
    let entradasFinais = [];
    for (let i = 0; i < entradas.length; i++) {
        entradasFinais.push(entradas[i].value);
    }
    return entradasFinais;
}

function treinarRede() {
    let porta = getPorta();
    switch (porta) {
        case "and":
            dataset = and;
            break;
        case "or":
            dataset = or;
            break;
        case "nand":
            dataset = nand;
            break;
        case "nor":
            dataset = nor;
            break;
    }
    let pesos = getValoresAleatorios();
    let w0 = pesos[pesos.length - 1];
    // Retira w0 do array de pesos
    pesos.pop(pesos.length - 1);
    let epocas = getEpocas();
    let taxaAprendizado = getCoeficiente();
    let bias = 1;

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
            // Atualiza pesos
            switch (porta) {
                case "and":
                    andTreinado.w1 = pesos[0];
                    andTreinado.w2 = pesos[1];
                    andTreinado.w3 = pesos[2];
                    andTreinado.w4 = pesos[3];
                    andTreinado.w0 = w0;
                    break;
                case "or":
                    orTreinado.w1 = pesos[0];
                    orTreinado.w2 = pesos[1];
                    orTreinado.w3 = pesos[2];
                    orTreinado.w4 = pesos[3];
                    orTreinado.w0 = w0;
                    break;
                case "nand":
                    nandTreinado.w1 = pesos[0];
                    nandTreinado.w2 = pesos[1];
                    nandTreinado.w3 = pesos[2];
                    nandTreinado.w4 = pesos[3];
                    nandTreinado.w0 = w0;
                    break;
                case "nor":
                    norTreinado.w1 = pesos[0];
                    norTreinado.w2 = pesos[1];
                    norTreinado.w3 = pesos[2];
                    norTreinado.w4 = pesos[3];
                    norTreinado.w0 = w0;
                    break;
            }
            pesos.push(w0);
            atualizarPesos(pesos);
            document.getElementById("treinado").innerHTML = "Rede treinada!";
        }
    }
}

function validarRede() {
    let entrada = getEntradas();
    let bias = 1;
    let pesos = [];

    // Seleciona a porta lógica
    let porta = getPorta();
    let currentData;

    switch (porta) {
        case "and":
            currentData = andTreinado;
            break;
        case "or":
            currentData = orTreinado;
            break;
        case "nand":
            currentData = nandTreinado;
            break;
        case "nor":
            currentData = norTreinado;
            break;
    }
    // Atribui os pesos da rede
    pesos.push(currentData.w1);
    pesos.push(currentData.w2);
    pesos.push(currentData.w3);
    pesos.push(currentData.w4);
    w0 = currentData.w0;

    // Fórmula -> somatorio = (w0 * x0) + (w1 * x1) + (w2 * x2) + (w3 * x3) + bias * w0
    const somatorio = entrada[0] * pesos[0] + entrada[1] * pesos[1] + entrada[2] * pesos[2] + entrada[3] * pesos[3] + bias * w0;

    // Função de ativação
    const y = somatorio >= 0 ? 1 : 0;

    // Imprime o resultado
    setResultado(y);
    // Imprime os pesos utilizados
    setPesos(pesos);
}
