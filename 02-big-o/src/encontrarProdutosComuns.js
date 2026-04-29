/**
 * ❌ OTIMIZAÇÃO O(n²) para O(n)
 */
function encontrarProdutosComuns(listaA, listaB) {
  const setListA = new Set(listaA);
  return listaB.filter(i => setListA.has(i));
}

module.exports = encontrarProdutosComuns;
