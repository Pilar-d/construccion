// Formulario de contacto con WhatsApp

// --- WhatsApp Formulario ---
const whatsappForm = document.createElement("form");
whatsappForm.className = "p-4 border rounded bg-light";
whatsappForm.innerHTML = `
  <h4 class="mb-3">Contacto por WhatsApp</h4>
  <div class="mb-3">
    <div class="alert alert-success" role="alert">
  Ingrese su nombre y sus respectivas consultas en los siguientes apartados, de esta manera podra enviar un mensaje automático por WhatsApp.
  </div>
    <label for="waNombre" class="form-label"><b>Nombre</b></label>
    <input type="text" class="form-control" id="waNombre" placeholder="Escriba su nombre aqui" required>
  </div>
  <div class="mb-3">
    <label for="waMensaje" class="form-label text-start"><b>Mensaje</b></label>
    <textarea class="form-control" id="waMensaje" rows="3"  placeholder="Escriba sus consultas aqui" required></textarea>
  </div>
  <button type="submit" class="btn btn-success w-20">Enviar por WhatsApp</button>
`;

whatsappForm.onsubmit = function(e) {
  e.preventDefault();
  const nombre = document.getElementById("waNombre").value.trim();
  const mensaje = document.getElementById("waMensaje").value.trim();
  const telefono = "56975683915"; // Cambia por tu número de WhatsApp sin el +
  const texto = encodeURIComponent(`Hola, soy ${nombre}. ${mensaje}`);
  window.open(`https://wa.me/${telefono}?text=${texto}`, "_blank");
};

// --- Renderizado en los tabs ---
document.addEventListener("DOMContentLoaded", function() {
  // WhatsApp en el tab "platos"
  const waTab = document.getElementById("menuContainer");
  if (waTab) {
    waTab.innerHTML = "";
    waTab.appendChild(whatsappForm);
  }
  // Oculta el tab de bebestibles
  const correoTab = document.getElementById("bebestiblesContainer");
  if (correoTab) {
    correoTab.innerHTML = "";
  }
  // Oculta el tab de postres
  const postresTab = document.getElementById("postresContainer");
  if (postresTab) {
    postresTab.innerHTML = "";
  }
});
