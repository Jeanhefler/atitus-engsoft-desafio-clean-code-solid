function calcularDesconto(cliente, valor) {

  const regrasClientePremium = [
    { regra: (v, anos) => v > 1000 && anos > 5, taxa: 0.20 },
    { regra: (v, anos) => v > 1000, taxa: 0.15 },
    { regra: (v) => v > 500, taxa: 0.10 },
    { regra: () => true, taxa: 0.05 }
  ];

  const regrasClienteGold = [
    { regra: (v) => v > 1000, taxa: 0.10 },
    { regra: () => true, taxa: 0.02 }
  ]

  const politica = {
    'premium': regrasClientePremium,
    'gold': regrasClienteGold
  };

  const regras = politica[cliente.tipo];
  if (!regras) return 0;

  const regraAplicavel = regras.find(r => r.regra(valor, cliente.anosCadastro));
  return valor * regraAplicavel.taxa;
}

module.exports = calcularDesconto;
