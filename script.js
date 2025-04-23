// Classe representando um usuário
class Usuario {
  constructor(nome, dataNascimento, email, cpf, telefone) {
    this.nome = nome;
    this.dataNascimento = dataNascimento;
    this.email = email;
    this.cpf = cpf;
    this.telefone = telefone;
  }

  exibirDados() {
    console.log("Usuário:", this);
  }
}

// Classe com métodos estáticos de validação
class Validador {
  static validarCPF(cpf) {
    cpf = cpf.replace(/[^\d]+/g, "");
    if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) return false;

    let soma = 0;
    for (let i = 0; i < 9; i++) {
      soma += parseInt(cpf.charAt(i)) * (10 - i);
    }
    let dig1 = 11 - (soma % 11);
    if (dig1 > 9) dig1 = 0;
    if (dig1 !== parseInt(cpf.charAt(9))) return false;

    soma = 0;
    for (let i = 0; i < 10; i++) {
      soma += parseInt(cpf.charAt(i)) * (11 - i);
    }
    let dig2 = 11 - (soma % 11);
    if (dig2 > 9) dig2 = 0;

    return dig2 === parseInt(cpf.charAt(10));
  }

  static validarTelefone(telefone) {
    const regex = /^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/;
    return regex.test(telefone);
  }

  static validarDataNascimento(data) {
    const hoje = new Date();
    const nascimento = new Date(data);
    return nascimento <= hoje && data !== "";
  }
}

// Exibe mensagens de erro ou sucesso
function mostrarMensagem(msg, tipo = "sucesso") {
  const div = document.getElementById("mensagem");
  div.textContent = msg;
  div.style.color = tipo === "erro" ? "red" : "green";
}

// Recupera valores do formulário
function getCampo(formData, nome) {
  return formData.get(nome).trim();
}

// Trata o envio do formulário
function handleSubmit(e) {
  e.preventDefault();
  const formData = new FormData(e.target);

  const nome = getCampo(formData, "nome");
  const dataNascimento = getCampo(formData, "dataNascimento");
  const email = getCampo(formData, "email");
  const cpf = getCampo(formData, "cpf");
  const telefone = getCampo(formData, "telefone");

  // Validações
  if (!Validador.validarDataNascimento(dataNascimento)) {
    mostrarMensagem("Data de nascimento inválida ou futura.", "erro");
    return;
  }

  if (!Validador.validarCPF(cpf)) {
    mostrarMensagem("CPF inválido.", "erro");
    return;
  }

  if (!Validador.validarTelefone(telefone)) {
    mostrarMensagem("Telefone inválido. Ex: (41)91234-5678", "erro");
    return;
  }

  // Switch para nome curto (apenas didático)
  switch (true) {
    case nome.length < 3:
      mostrarMensagem("Nome muito curto.", "erro");
      return;
  }

  // Cadastro bem-sucedido
  const usuario = new Usuario(nome, dataNascimento, email, cpf, telefone);
  usuario.exibirDados();
  mostrarMensagem("Cadastro realizado com sucesso!", "sucesso");

  // Loop apenas ilustrativo
  const campos = ["nome", "dataNascimento", "email", "cpf", "telefone"];
  for (let campo of campos) {
    console.log(`Campo validado: ${campo}`);
  }

  e.target.reset();
}

// Inicializa o formulário
function inicializarFormulario() {
  document
    .getElementById("cadastroForm")
    .addEventListener("submit", handleSubmit);
}

document.addEventListener("DOMContentLoaded", inicializarFormulario);
