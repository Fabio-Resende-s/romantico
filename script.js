let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
let total = carrinho.reduce((soma, item) => soma + item.preco, 0);

function adicionarAoCarrinho(produto, preco) {
  carrinho.push({ produto, preco });
  total += preco;
  salvarCarrinho();
  atualizarCarrinho();
}

function salvarCarrinho() {
  localStorage.setItem("carrinho", JSON.stringify(carrinho));
}

function atualizarCarrinho() {
  const lista = document.getElementById("lista-carrinho");
  lista.innerHTML = "";
  carrinho.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.produto} - R$ ${item.preco}`;
    lista.appendChild(li);
  });
  document.getElementById("total").textContent = total.toFixed(2);
}

function finalizarPedido() {
  alert("Pedido finalizado!");
  carrinho = [];
  total = 0;
  salvarCarrinho();
  atualizarCarrinho();
}

window.onload = atualizarCarrinho;

// Exibir login e esconder conteúdo até logar
window.onload = function() {
  document.querySelector("main").style.display = "none";
  atualizarCarrinho();
};

// Cadastro
function fazerCadastro() {
  const usuario = document.getElementById("cad-usuario").value;
  const senha = document.getElementById("cad-senha").value;

  if (!usuario || !senha) {
    alert("Preencha todos os campos.");
    return;
  }

  // Verifica se já existe
  const usuarios = JSON.parse(localStorage.getItem("usuarios") || "[]");
  const existe = usuarios.find(u => u.usuario === usuario);

  if (existe) {
    alert("Usuário já cadastrado!");
  } else {
    usuarios.push({ usuario, senha });
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
    alert("Cadastro feito com sucesso!");
    mostrarLogin();
  }
}

// Login
function fazerLogin() {
  const usuario = document.getElementById("login-usuario").value;
  const senha = document.getElementById("login-senha").value;

  const usuarios = JSON.parse(localStorage.getItem("usuarios") || "[]");
  const encontrado = usuarios.find(u => u.usuario === usuario && u.senha === senha);

  if (encontrado) {
    alert("Login bem-sucedido!");
    document.getElementById("tela-login").style.display = "none";
    document.querySelector("main").style.display = "block";
  } else {
    alert("Usuário ou senha incorretos.");
  }
}

// Alternar telas
function mostrarCadastro() {
  document.getElementById("tela-login").style.display = "none";
  document.getElementById("tela-cadastro").style.display = "flex";
}

function mostrarLogin() {
  document.getElementById("tela-login").style.display = "flex";
  document.getElementById("tela-cadastro").style.display = "none";
}
