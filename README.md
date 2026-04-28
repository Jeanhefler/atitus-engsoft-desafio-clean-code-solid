# 🧪 Laboratório: Clean Code, Big-O e SOLID

Bem-vindo ao laboratório prático de Engenharia de Software. Aqui você aplicará os conceitos aprendidos em aula para transformar códigos frágeis em soluções profissionais.

---

## 🚀 Desafios Disponíveis

Cada pasta contém um cenário real de refatoração:

*   **[01 — Complexidade Ciclomática](./01-complexidade-ciclomatica)**
    *   **Foco:** Reduzir o excesso de condicionais (`ifs`) utilizando *Table-Driven Design*.
*   **[02 — Otimização Big-O](./02-big-o)**
    *   **Foco:** Melhorar a performance de um algoritmo de `O(n²)` para `O(n)` usando estruturas de dados adequadas.
*   **[03 — Princípios SOLID](./03-solid)**
    *   **Foco:** Desacoplar um "Script Monolítico" aplicando *Single Responsibility* (SRP) e *Dependency Inversion* (DIP).

---

## 📋 Instruções de Entrega

Siga rigorosamente o fluxo abaixo para garantir que sua atividade seja avaliada:

### 1. Preparação do Ambiente
1.  **Faça um Fork:** Clique no botão **Fork** (topo superior direito) para criar uma cópia deste repositório na sua conta GitHub.
2.  **Clone Localmente:** Copie a URL do **seu fork** e execute no seu terminal:
    ```bash
    git clone https://github.com/SEU_USUARIO/atitus-engsoft-desafio-clean-code-solid.git
    ```

### 2. Desenvolvimento
1.  Navegue até a pasta do desafio desejado.
2.  Instale as dependências e rode os testes para entender o comportamento atual:
    ```bash
    cd 01-complexidade-ciclomatica # Exemplo
    npm install
    npm test
    ```
3.  Refatore o código até que ele esteja limpo, mantendo os testes passando.

### 3. Envio e Submissão
1.  Faça o **Commit** e **Push** das suas alterações para o seu repositório pessoal (o fork).
2.  **Link de Entrega:** O URL que você deve enviar no portal é o do **seu repositório pessoal** no GitHub.

> [!IMPORTANT]
> A avaliação será baseada na qualidade da refatoração e na manutenção da integridade dos testes.

---

## 🛠️ Comandos Úteis

| Comando | Descrição |
| :--- | :--- |
| `npm install` | Instala as dependências (Jest, etc). |
| `npm test` | Executa a bateria de testes automatizados. |
| `npm test -- --watch` | Executa os testes em modo de observação (ideal para refatoração). |
