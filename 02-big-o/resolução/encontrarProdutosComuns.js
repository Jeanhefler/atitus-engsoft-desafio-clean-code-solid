/**
 * ✅ RESOLUÇÃO: BIG-O (O(n))
 */
function encontrarProdutosComuns(listaA, listaB) {
  // O(n) para criar o Set
  const setA = new Set(listaA);
  
  // O(m) para filtrar, com busca O(1) no Set
  // Total: O(n + m)
  return listaB.filter(item => setA.has(item));
}

module.exports = encontrarProdutosComuns;
