// Basit etkileşimler
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

function handleSubmit(e){
  e.preventDefault();
  const form = e.target;
  const data = Object.fromEntries(new FormData(form).entries());
  // Ücretsiz taraf için sadece mailto fallback’i simüle ediyoruz
  const status = document.getElementById('form-status');
  status.textContent = 'Teşekkürler! Mesajın yerel olarak alındı (demo). Gerçek gönderim için Google Form veya Formspree ekleyebilirsin.';
  form.reset();
  return false;
}
