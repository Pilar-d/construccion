// Formularios de contacto con WhatsApp y Correo

// --- WhatsApp Formulario ---
const whatsappForm = document.createElement("form");
whatsappForm.className = "p-4 border rounded bg-light";
whatsappForm.innerHTML = `
  <h4 class="mb-3">Contacto por WhatsApp</h4>
  <div class="mb-3">
    <label for="waNombre" class="form-label">Nombre</label>
    <input type="text" class="form-control" id="waNombre" required>
  </div>
  <div class="mb-3">
    <label for="waMensaje" class="form-label">Mensaje</label>
    <textarea class="form-control" id="waMensaje" rows="3" required></textarea>
  </div>
  <button type="submit" class="btn btn-success w-100">Enviar por WhatsApp</button>
`;

whatsappForm.onsubmit = function(e) {
  e.preventDefault();
  const nombre = document.getElementById("waNombre").value.trim();
  const mensaje = document.getElementById("waMensaje").value.trim();
  const telefono = "56972646462"; // Cambia por tu número de WhatsApp sin el +
  const texto = encodeURIComponent(`Hola, soy ${nombre}. ${mensaje}`);
  window.open(`https://wa.me/${telefono}?text=${texto}`, "_blank");
};

// --- Correo Formulario ---
const correoForm = document.createElement("form");
correoForm.className = "p-4 border rounded bg-light";
correoForm.innerHTML = `
  <h4 class="mb-3">Contacto por Correo</h4>
  <div class="mb-3">
    <label for="correoNombre" class="form-label">Nombre</label>
    <input type="text" class="form-control" id="correoNombre" required>
  </div>
  <div class="mb-3">
    <label for="correoEmail" class="form-label">Correo electrónico</label>
    <input type="email" class="form-control" id="correoEmail" required>
  </div>
  <div class="mb-3">
    <label for="correoMensaje" class="form-label">Mensaje</label>
    <textarea class="form-control" id="correoMensaje" rows="3" required></textarea>
  </div>
  <button type="submit" class="btn btn-primary w-100">Enviar por Correo</button>
`;

correoForm.onsubmit = function(e) {
  e.preventDefault();
  const nombre = document.getElementById("correoNombre").value.trim();
  const email = document.getElementById("correoEmail").value.trim();
  const mensaje = document.getElementById("correoMensaje").value.trim();
  const destinatario = "pilar.a2a0@gmail.com"; // Cambia por tu correo real
  const asunto = encodeURIComponent("Contacto desde el sitio web");
  const cuerpo = encodeURIComponent(`Nombre: ${nombre}\nCorreo: ${email}\nMensaje: ${mensaje}`);
  window.location.href = `mailto:${destinatario}?subject=${asunto}&body=${cuerpo}`;
};

// --- Renderizado en los tabs ---
document.addEventListener("DOMContentLoaded", function() {
  // WhatsApp en el tab "platos"
  const waTab = document.getElementById("menuContainer");
  if (waTab) {
    waTab.innerHTML = "";
    waTab.appendChild(whatsappForm);
  }
  // Correo en el tab "bebestibles"
  const correoTab = document.getElementById("bebestiblesContainer");
  if (correoTab) {
    correoTab.innerHTML = "";
    correoTab.appendChild(correoForm);
  }
  // Oculta el tab de postres
  const postresTab = document.getElementById("postresContainer");
  if (postresTab) {
    postresTab.innerHTML = "";
  }
});
