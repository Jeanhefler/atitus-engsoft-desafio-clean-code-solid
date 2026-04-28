/**
 * ✅ RESOLUÇÃO: COMPLEXIDADE CICLOMÁTICA (TABLE-DRIVEN)
 */
function calcularDesconto(cliente, valor) {
  const regrasPremium = [
    { condicao: (v, anos) => v > 1000 && anos > 5, taxa: 0.20 },
    { condicao: (v, anos) => v > 1000, taxa: 0.15 },
    { condicao: (v) => v > 500, taxa: 0.10 },
    { condicao: () => true, taxa: 0.05 }
  ];

  const regrasGold = [
    { condicao: (v) => v > 1000, taxa: 0.10 },
    { condicao: () => true, taxa: 0.02 }
  ];

  const politica = {
    'premium': regrasPremium,
    'gold': regrasGold
  };

  const regras = politica[cliente.tipo];
  if (!regras) return 0;

  const regraAplicavel = regras.find(r => r.condicao(valor, cliente.anosCadastro));
  return valor * regraAplicavel.taxa;
}

module.exports = calcularDesconto;
