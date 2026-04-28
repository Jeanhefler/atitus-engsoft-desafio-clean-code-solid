/**
 * ✅ RESOLUÇÃO: SOLID (SRP & DIP)
 */

// 1. Entidade / Lógica de Domínio (SRP)
class Pedido {
  constructor(dados) {
    this.id = dados.id;
    this.itens = dados.itens || [];
    this.clienteEmail = dados.clienteEmail;
  }

  validar() {
    if (this.itens.length === 0) throw new Error("Pedido sem itens");
  }

  calcularTotal() {
    let total = this.itens.reduce((acc, i) => acc + (i.preco * i.quantidade), 0);
    return total > 1000 ? total * 0.9 : total;
  }
}

// 2. Abstração de Notificação (DIP)
class NotificadorEmail {
  enviar(email, mensagem) {
    console.log(`[SMTP] Enviando para ${email}: ${mensagem}`);
  }
}

// 3. Persistência (SRP)
class VendasRepository {
  salvar(pedido) {
    console.log(`[DB] Pedido ${pedido.id} salvo com sucesso.`);
  }
}

// 4. Orquestrador (DIP - Recebe dependências)
class ProcessadorDeVendas {
  constructor(repository, notificador) {
    this.repository = repository;
    this.notificador = notificador;
  }

  async processar(dadosPedido) {
    const pedido = new Pedido(dadosPedido);
    pedido.validar();
    
    const total = pedido.calcularTotal();
    this.repository.salvar(pedido);
    this.notificador.enviar(pedido.clienteEmail, `Total: R$ ${total}`);
    
    return { ...dadosPedido, total, status: "pago" };
  }
}

module.exports = { Pedido, ProcessadorDeVendas, NotificadorEmail, VendasRepository };
