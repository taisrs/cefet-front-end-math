
let botaoResolverEl = document.querySelector('#botao-resolver');

dbotaoResolverEl.addEventListener('click', function(e) {
  let a = document.querySelector('#coeficiente-a').value;
  let b = document.querySelector('#coeficiente-b').value;
  let c = document.querySelector('#coeficiente-c').value;

  if (a === '0') {
    window.alert('O valor de "a" não pode ser 0 para se ter uma equação de segundo grau.');
    return;
  }

  let deltaEl = document.querySelector('#resultado-delta');
  let x1El = document.querySelector('#resultado-x1');
  let x2El = document.querySelector('#resultado-x2');

  let delta = b*b - 4*a*c;
  deltaEl.value = delta;

  if (delta >= 0) {
    let x1 = (-b + Math.sqrt(delta))/2*a;
    let x2 = (-b - Math.sqrt(delta))/2*a;

    x1El.value = x1;
    x2El.value = x2;
  } else {
    x1El.value = '';
    x2El.value = '';
  }
});
