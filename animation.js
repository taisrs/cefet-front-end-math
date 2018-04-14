function refresh() {
    document.getElementById('up').classList.add('oculto');
    document.getElementById('down').classList.add('oculto');
    let inputs = document.getElementsByTagName('input');
    for (i = 0; i < inputs.length; i++) {
        inputs[i].value = '';
    }
}

// limpa todos os campos de input com a atualização da página
window.onload = refresh;

// define uma função para tratar evento de 'click' do botão 'Resolver!'
function resolve() {
    // recupera o valor de cada coeficiente e coloca-os em variáveis
    let a = document.querySelector('#coeficiente-a').value;
    let b = document.querySelector('#coeficiente-b').value;
    let c = document.querySelector('#coeficiente-c').value;

    // verifica se a função de entrada é do segundo grau
    if (a == 0) {
        window.alert("A função apresentada não é de 2º grau!");
        refresh();
        return;
    }

    // recupera do DOM o id referente a inputs diversos
    let delta = document.querySelector('#resultado-delta');
    let x1 = document.querySelector('#resultado-x1');
    let x2 = document.querySelector('#resultado-x2');

    let aspecto = document.querySelector('#delta-aspecto');
    let raizes = document.querySelector('#raizes-reais-diferentes');
    let vertice = document.querySelector('#vertice');

    let xv = document.querySelector('#resultado-xv');
    let yv = document.querySelector('#resultado-yv');

    delta.value = Math.pow(b, 2) - (4 * a * c); // Δ = b² - 4ac

    if (delta.value < 0) {
        x1.value = '';
        x2.value = '';
        raizes.value = 0; // não possui raizes reais
        aspecto.value = "Δ < 0";
    } else {
        x1.value = (-b + Math.pow(delta.value, 0.5)) / (2 * a); // (-b + √Δ)/2a
        x2.value = (-b - Math.pow(delta.value, 0.5)) / (2 * a); // (-b - √Δ)/2a

        if(delta.value > 0) {
            raizes.value = 2; // possui duas raizes reais distintas
            aspecto.value = "Δ > 0";
        } else {
            raizes.value = 1; // possui uma raiz real distinta
            aspecto.value = "Δ = 0";
        }
    }

    // verifica a concavidade da parábola
    if(a > 0) { // concavidade para cima
        document.getElementById('up').classList.remove('oculto');
        document.getElementById('down').classList.add('oculto');
        vertice.value = "mínimo";
    } else { // concavidade para baixo
        document.getElementById('down').classList.remove('oculto');
        document.getElementById('up').classList.add('oculto');
        vertice.value = "máximo";
    }

    // calcula a coordenada do ponto de mínimo ou de máximo da parábola
    xv.value = -b / (2 * a); // -b/2a
    yv.value = -delta.value / (4 * a); // -Δ/4a
}

// recupera do DOM o id referente ao botão 'Resolver!'
let botaoResolverEl = document.querySelector('#botao-resolver');
// atrela uma função ao evento de 'click' do botão (callback)
botaoResolverEl.addEventListener('click', resolve);
