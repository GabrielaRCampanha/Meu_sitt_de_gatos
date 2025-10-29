// ====== script.js ======
// ONG Patinhas Amigas — Entrega III (Interatividade e Funcionalidades)
// Desenvolvido por Gabriela Rodrigues Campanha

// MENU HAMBÚRGUER
const menuBtn = document.querySelector('.menu-btn');
const navMenu = document.querySelector('.nav-menu');

menuBtn.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

// FORMULÁRIO — VALIDAÇÃO BÁSICA
const form = document.querySelector('form');
if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const nome = form.querySelector('input[name="nome"]').value.trim();
    const email = form.querySelector('input[name="email"]').value.trim();
    const telefone = form.querySelector('input[name="telefone"]').value.trim();

    if (nome === '' || email === '' || telefone === '') {
      alert('⚠️ Por favor, preencha todos os campos obrigatórios!');
      return;
    }

    if (!email.includes('@') || !email.includes('.')) {
      alert('❌ E-mail inválido. Verifique o formato.');
      return;
    }

    alert('✅ Formulário enviado com sucesso! Obrigada por entrar em contato 💖');
    form.reset();
  });
}

// ALERTA AUTOMÁTICO DE BOAS-VINDAS
window.addEventListener('load', () => {
  const bemVindo = document.createElement('div');
  bemVindo.classList.add('toast');
  bemVindo.textContent = '🐾 Bem-vindo à ONG Patinhas Amigas!';
  document.body.appendChild(bemVindo);

  setTimeout(() => bemVindo.remove(), 4000);
});


// ====== CSS SUGERIDO ======
// Adicione no seu style.css:
 /*
.toast {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #f9c6d2;
  color: #6b184e;
  padding: 12px 20px;
  border-radius: 20px;
  box-shadow: 0 3px 8px rgba(0,0,0,0.2);
  font-weight: 500;
  animation: fadeIn 0.5s ease;
}
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
*/
