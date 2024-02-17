function desconto(valor, desconto){
    return (valor - (valor * (desconto / 100)));
}
function juros(valor, desconto){
    return (valor + (valor * (desconto / 100)));
}

function pagar(formaPagamento, precoEtiqueta){
if (formaPagamento === 1) {
 return (desconto(precoEtiqueta, 10));
} else if (formaPagamento === 2) {
    return (desconto(precoEtiqueta, 15));
} else if (formaPagamento === 3) {
    return (precoEtiqueta);
} else if (formaPagamento === 4) {
    return (juros(precoEtiqueta, 10));
} else {
    return ("Forma de pagamento inválida/Cancelar pedido");
}
}

(function main() {
let formaPagamento = 2;
let precoEtiqueta = 100;
let totalPagar = pagar (formaPagamento, precoEtiqueta);
console.log("Valor a ser pago: " + totalPagar);
})();