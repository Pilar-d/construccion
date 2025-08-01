const platos = [
  { nombre: "Paella Valenciana", descripcion: "Arroz con mariscos, pollo y verduras.", imagen: "https://res.cloudinary.com/tienda-com/image/upload/f_auto/q_auto/c_fill,w_752/dpr_2.0/v1/recipes/mixed-seafood-paella", precio: 5000 },
  { nombre: "Tacos al Pastor", descripcion: "Tortillas con cerdo adobado y piña.", imagen: "https://img.freepik.com/free-photo/close-up-delicious-tacos_23-2150831025.jpg", precio: 3500 },
  { nombre: "Sushi Variado", descripcion: "Sushi con salmón, atún y aguacate.", imagen: "https://img.freepik.com/free-photo/sushi-set-hot-rolls-avocado-california-salmon-rolls_141793-1279.jpg", precio: 4800 },
  { nombre: "Pizza Margarita", descripcion: "Pizza con tomate, mozzarella y albahaca.", imagen: "https://img.freepik.com/free-photo/freshly-baked-margherita-pizza-with-mozzarella-cheese-basil-leaves_9975-124847.jpg", precio: 4000 },
  { nombre: "Hamburguesa Clásica", descripcion: "Carne de res con queso y vegetales.", imagen: "https://img.freepik.com/free-photo/front-view-burger-stand_141793-15542.jpg", precio: 3700 },
  { nombre: "Pollo Asado", descripcion: "Pollo al horno con papas y especias.", imagen: "https://img.freepik.com/free-photo/baked-appetizing-whole-chicken-with-oranges-cranberries-oven-form-closeup_1220-6581.jpg", precio: 4200 },
  { nombre: "Ensalada César", descripcion: "Lechuga romana, pollo y aderezo césar.", imagen: "https://img.freepik.com/free-photo/caesar-salad-with-fried-shrimps_140725-3718.jpg", precio: 3100 },
  { nombre: "Ramen Japonés", descripcion: "Sopa oriental con fideos y huevo.", imagen: "https://img.freepik.com/free-photo/delicious-ramen-dark-surface_1150-41973.jpg", precio: 3900 },
  { nombre: "Ceviche Peruano", descripcion: "Pescado marinado con limón y ají.", imagen: "https://img.freepik.com/free-photo/closeup-delicious-salad-with-seafood-vegetables-bowl-table_181624-39561.jpg", precio: 4500 },
  { nombre: "Bife a lo Pobre", descripcion: "Carne con papas, cebolla y huevo.", imagen: "https://img.freepik.com/free-photo/grilled-pork-steak_1339-4486.jpg", precio: 4800 },
  { nombre: "Lasaña", descripcion: "Capas de pasta, carne y bechamel.", imagen: "https://img.freepik.com/free-photo/classic-lasagna-with-bolognese-sauce_2829-14066.jpg", precio: 3600 },
  { nombre: "Falafel", descripcion: "Croquetas de garbanzos con tahini.", imagen: "https://img.freepik.com/free-photo/tortilla-wrap-with-falafel-fresh-salad-vegan-tacos-vegetarian-healthy-food_2829-14389.jpg", precio: 2800 },
  { nombre: "Empanadas", descripcion: "Masa rellena de carne, horno o fritas.", imagen: "https://img.freepik.com/free-photo/view-delicious-food-dish_23-2150777845.jpg", precio: 2500 },
  { nombre: "Pad Thai", descripcion: "Fideos salteados con salsa y maní.", imagen: "https://img.freepik.com/free-photo/grilled-seafood-meal-with-prawn-scampi-generated-by-ai_188544-24697.jpg", precio: 4400 },
  { nombre: "Churrasco Italiano", descripcion: "Sándwich con palta, tomate y mayo.", imagen: "https://img.freepik.com/free-photo/grilled-beef-sandwich-ciabatta-with-salad-generated-by-ai_188544-21369.jpg", precio: 3300 },
  { nombre: "Arroz Chaufa", descripcion: "Arroz frito peruano con vegetales.", imagen: "https://img.freepik.com/free-photo/fried-rice-served-with-hot-syrup_157027-4061.jpg", precio: 2900 },
  { nombre: "Arepas", descripcion: "Pan de maíz relleno de queso o carne.", imagen: "https://img.freepik.com/free-photo/assortment-arepas-with-filling-plate_23-2148742392.jpg", precio: 2700 },
  { nombre: "Croissant de Jamón", descripcion: "Croissant relleno de jamón y queso.", imagen: "https://img.freepik.com/free-photo/croissant-sandwich-ham_1339-7779.jpg", precio: 2400 },
  { nombre: "Tallarines Verdes", descripcion: "Fideos con salsa de albahaca y queso.", imagen: "https://img.freepik.com/free-photo/top-view-delicious-pasta-table_23-2150857992.jpg", precio: 3200 },
  { nombre: "Sopaipillas", descripcion: "Masa frita típica chilena.", imagen: "https://img.freepik.com/free-photo/flat-lay-delicious-food-assortment_23-2148708215.jpg", precio: 2000 }
];

const bebestibles = [
{ nombre: "Limonada Casera", descripcion: "Refrescante bebida de limón natural.", imagen: "https://img.freepik.com/free-photo/tasty-cold-fresh-drink-lemonade-with-lemon-mint-ice-lime-glass-wooden-table-closeup_1220-1340.jpg?ga=GA1.1.238327207.1749616152&semt=ais_hybrid&w=740", precio: 1400 },
{ nombre: "Smoothie de Fresa", descripcion: "Batido cremoso de fresas frescas.", imagen: "https://img.freepik.com/free-photo/front-view-strawberry-milkshake-with-straw_23-2148707795.jpg?ga=GA1.1.238327207.1749616152&semt=ais_hybrid&w=740", precio: 1800 },
{ nombre: "Agua Mineral", descripcion: "Agua con gas para hidratarte.", imagen: "https://img.freepik.com/free-photo/transparent-water-bottle-studio_23-2151049092.jpg?ga=GA1.1.238327207.1749616152&semt=ais_hybrid&w=740", precio: 900 },
{ nombre: "Chocolate Caliente", descripcion: "Bebida caliente y dulce de chocolate.", imagen: "https://img.freepik.com/free-photo/close-up-view-delicious-hot-chocolate_23-2148799124.jpg?ga=GA1.1.238327207.1749616152&semt=ais_hybrid&w=740", precio: 1600 },
{ nombre: "Té Chai", descripcion: "Mezcla especiada de té y leche.", imagen: "https://img.freepik.com/free-photo/steaming-cup-chai-tea-with-star-anise-cinnamon-sticks-cloves-black-surface_9975-124486.jpg?ga=GA1.1.238327207.1749616152&semt=ais_hybrid&w=740", precio: 1500 },
{ nombre: "Mate Tradicional", descripcion: "Bebida típica de Sudamérica.", imagen: "https://img.freepik.com/free-photo/high-angle-hand-holding-tea-cup_23-2149720785.jpg?ga=GA1.1.238327207.1749616152&semt=ais_hybrid&w=740", precio: 1300 },
{ nombre: "Batido de Mango", descripcion: "Delicioso batido tropical de mango.", imagen: "https://img.freepik.com/free-photo/mango-juice-glass-dark-surface_1150-41957.jpg?ga=GA1.1.238327207.1749616152&semt=ais_hybrid&w=740", precio: 1700 },
{ nombre: "Agua de Coco", descripcion: "Natural y refrescante agua de coco.", imagen: "https://img.freepik.com/free-photo/side-view-brown-coconuts-with-glass-water-leaf-tablecloth-grey-surface_141793-13738.jpg?ga=GA1.1.238327207.1749616152&semt=ais_hybrid&w=740", precio: 1600 },
{ nombre: "Té de Manzanilla", descripcion: "Infusión calmante y aromática.", imagen: "https://img.freepik.com/free-photo/front-view-woman-holding-tea-glass_23-2148567593.jpg?ga=GA1.1.238327207.1749616152&semt=ais_hybrid&w=740", precio: 1000 },
{ nombre: "Jugo de Naranja", descripcion: "Jugo fresco y cítrico de naranja.", imagen: "https://img.freepik.com/free-photo/closeup-shot-glass-orange-juice-fresh-oranges-wooden-crate-with-blurry_181624-17275.jpg?ga=GA1.1.238327207.1749616152&semt=ais_hybrid&w=740", precio: 1500 },
{ nombre: "Café Latte", descripcion: "Café suave con leche espumosa.", imagen: "https://img.freepik.com/free-photo/delicious-quality-coffee-cup_23-2150691369.jpg?ga=GA1.1.238327207.1749616152&semt=ais_hybrid&w=740", precio: 1700 },
{ nombre: "Té de Menta", descripcion: "Infusión fresca y digestiva.", imagen: "https://img.freepik.com/free-photo/peppermint-tea-glass-ready-drink_1150-38038.jpg?ga=GA1.1.238327207.1749616152&semt=ais_hybrid&w=740", precio: 1000 },
{ nombre: "Refresco de Manzana", descripcion: "Bebida dulce y refrescante.", imagen: "https://img.freepik.com/free-photo/front-view-fresh-apple-juice-with-fresh-apples-brown-wooden-desk-photo-cocktail-fruit-drink-color_140725-92833.jpg?ga=GA1.1.238327207.1749616152&semt=ais_hybrid&w=740", precio: 1300 },
{ nombre: "Café Americano", descripcion: "Café ligero y caliente.", imagen: "https://img.freepik.com/free-photo/black-coffee-glass-slices-bread-with-seeds_23-2148623234.jpg?ga=GA1.1.238327207.1749616152&semt=ais_hybrid&w=740", precio: 1200 },
{ nombre: "Jugo de Piña", descripcion: "Jugo tropical de piña natural.", imagen: "https://img.freepik.com/free-photo/pineapple-juice-white-wooden-surface_1150-42307.jpg?ga=GA1.1.238327207.1749616152&semt=ais_hybrid&w=740", precio: 1500 },
{ nombre: "Té de Hibisco", descripcion: "Infusión roja y refrescante.", imagen: "https://img.freepik.com/free-photo/hot-rose-tea-table_1150-28275.jpg?ga=GA1.1.238327207.1749616152&semt=ais_hybrid&w=740", precio: 1100 },
{ nombre: "Batido de Plátano", descripcion: "Batido cremoso de plátano y leche.", imagen: "https://img.freepik.com/free-photo/fresh-banana-smoothie-white-wooden-table_123827-35748.jpg?ga=GA1.1.238327207.1749616152&semt=ais_hybrid&w=740", precio: 1700 },
{ nombre: "Agua Saborizada", descripcion: "Agua con sabor a frutas naturales.", imagen: "https://img.freepik.com/free-photo/fresh-lime-strawberry-mint-infused-water-cocktail-detox-drink-lemonade-summer-drinks-health-care-concept_114579-4762.jpg?ga=GA1.1.238327207.1749616152&semt=ais_hybrid&w=740", precio: 900 },
{ nombre: "Café Mocha", descripcion: "Café con chocolate y leche.", imagen: "https://img.freepik.com/free-photo/delicious-quality-coffee-cup_23-2150691369.jpg?ga=GA1.1.238327207.1749616152&semt=ais_hybrid&w=740", precio: 1800 },
{ nombre: "Té Negro", descripcion: "Té clásico con sabor intenso.", imagen: "https://img.freepik.com/free-photo/black-tea-with-dry-tea-teapot-wooden-surface-side-view_176474-6302.jpg?ga=GA1.1.238327207.1749616152&semt=ais_hybrid&w=740", precio: 1000 },

];

const postres = [
{ nombre: "Panqueques", descripcion: "Deliciosos panqueques con miel y frutas.", imagen: "https://img.freepik.com/free-photo/pancakes-with-chocolate-jam-berries-tasty-breakfast-flat-lay-top-view_2829-14510.jpg?ga=GA1.1.238327207.1749616152&semt=ais_hybrid&w=740", precio: 2100 },
{ nombre: "Flan Casero", descripcion: "Postre suave de caramelo y huevo.", imagen: "https://img.freepik.com/free-photo/delicious-dessert-table_23-2151901923.jpg?ga=GA1.1.238327207.1749616152&semt=ais_hybrid&w=740", precio: 2000 },
{ nombre: "Mousse de Chocolate", descripcion: "Postre ligero y cremoso de chocolate.", imagen: "https://img.freepik.com/free-photo/healthy-avocado-chocolate-pudding_661915-590.jpg?ga=GA1.1.238327207.1749616152&semt=ais_hybrid&w=740", precio: 2300 },
{ nombre: "Macarons", descripcion: "Dulces franceses de colores variados.", imagen: "https://img.freepik.com/free-photo/delicious-macarons-arrangement_23-2150714612.jpg?ga=GA1.1.238327207.1749616152&semt=ais_hybrid&w=740", precio: 1800 },
{ nombre: "Crème Brûlée", descripcion: "Postre francés con costra caramelizada.", imagen: "https://img.freepik.com/free-photo/high-angle-tasty-mexican-dessert_23-2149517095.jpg?ga=GA1.1.238327207.1749616152&semt=ais_hybrid&w=740", precio: 2600 },
{ nombre: "Cupcake", descripcion: "Pequeño pastel decorado y esponjoso.", imagen: "https://img.freepik.com/free-photo/delicious-cupcakes-with-strawberries_23-2150798030.jpg?ga=GA1.1.238327207.1749616152&semt=ais_hybrid&w=740", precio: 1900 },
{ nombre: "Churros con Chocolate", descripcion: "Frituras dulces con salsa de chocolate.", imagen: "https://img.freepik.com/free-photo/hand-dipping-fried-churros-chocolate_23-2148379636.jpg?ga=GA1.1.238327207.1749616152&semt=ais_hybrid&w=740", precio: 2100 },
{ nombre: "Panna Cotta", descripcion: "Postre italiano cremoso con frutas.", imagen: "https://img.freepik.com/free-photo/close-up-fancy-dessert_23-2150527626.jpg?ga=GA1.1.238327207.1749616152&semt=ais_hybrid&w=740", precio: 2400 },
{ nombre: "Tarta de Manzana", descripcion: "Tarta casera con relleno de manzana.", imagen: "https://img.freepik.com/free-photo/top-view-apple-pie-plate_23-2148695556.jpg?ga=GA1.1.238327207.1749616152&semt=ais_hybrid&w=740", precio: 2300 },
{ nombre: "Galletas de Mantequilla", descripcion: "Galletas caseras con sabor tradicional.", imagen: "https://img.freepik.com/free-photo/high-angle-delicious-alfajores-arrangement_23-2148890739.jpg?ga=GA1.1.238327207.1749616152&semt=ais_hybrid&w=740", precio: 1700 },
{ nombre: "Eclair de Chocolate", descripcion: "Pastelito relleno con crema y chocolate.", imagen: "https://img.freepik.com/free-photo/side-view-eclair-choux-dough-filled-with-custard-topped-with-chocolate-icing_141793-4888.jpg?ga=GA1.1.238327207.1749616152&semt=ais_hybrid&w=740", precio: 2200 },
{ nombre: "Brownie con Helado", descripcion: "Brownie tibio acompañado de helado.", imagen: "https://img.freepik.com/free-photo/brownie-sundae-with-scoop-vanilla-ice-cream_1339-4767.jpg?ga=GA1.1.238327207.1749616152&semt=ais_hybrid&w=740", precio: 2600 },
{ nombre: "Trufas de Chocolate", descripcion: "Bocaditos de chocolate intensos.", imagen: "https://img.freepik.com/free-photo/pyramid-chocolate-truffles-with-biscuit-crumbs_23-2148180797.jpg?ga=GA1.1.238327207.1749616152&semt=ais_hybrid&w=740", precio: 2000 },
{ nombre: "Tarta Red Velvet", descripcion: "Tarta roja con crema de queso.", imagen: "https://img.freepik.com/free-photo/front-view-red-cake-slice-fruit-cake-piece-inside-plate-with-fresh-strawberries-grey_140725-20811.jpg?ga=GA1.1.238327207.1749616152&semt=ais_hybrid&w=740", precio: 2500 },
{ nombre: "Muffins de Arándanos", descripcion: "Muffins suaves con frutas frescas.", imagen: "https://img.freepik.com/free-photo/high-view-tasty-cupcake-with-blueberry-forest-fruit_23-2148718778.jpg?ga=GA1.1.238327207.1749616152&semt=ais_hybrid&w=740", precio: 1900 },
{ nombre: "Gelatina de Frutas", descripcion: "Postre fresco con trozos de frutas.", imagen: "https://img.freepik.com/free-photo/protein-gummy-snacks-healthy-lifestyle_23-2151119222.jpg?ga=GA1.1.238327207.1749616152&semt=ais_hybrid&w=740", precio: 1500 },

];

// Función para renderizar cualquier sección
function renderizarSeccion(productos, contenedorId) {
  const contenedor = document.getElementById(contenedorId);
  productos.forEach(plato => {
    const col = document.createElement("div");
    col.className = "col-md-4 mb-4";
    col.innerHTML = `
      <div class="card h-100 shadow-sm">
        <img src="${plato.imagen}" class="card-img-top" alt="${plato.nombre}" style="height: 200px; object-fit: cover;">
        <div class="card-body d-flex flex-column">
          <h5 class="card-title">${plato.nombre}</h5>
          <p class="card-text">${plato.descripcion}</p>
          <p class="card-text fw-bold text-success">$${plato.precio.toLocaleString()}</p>
          <button class="btn btn-success mt-auto" onclick="añadirAlCarrito('${plato.nombre}')">Añadir al carrito</button>
        </div>
      </div>
    `;
    contenedor.appendChild(col);
  });
}

// Inicializa secciones
renderizarSeccion(platos, "menuContainer");
renderizarSeccion(bebestibles, "bebestiblesContainer");
renderizarSeccion(postres, "postresContainer");

const dropdownLista = document.getElementById("dropdownLista");
const contadorCarrito = document.getElementById("contadorCarrito");
let carrito = [];

function añadirAlCarrito(nombre) {
  const plato = platos.find(p => p.nombre === nombre)
    || bebestibles.find(p => p.nombre === nombre)
    || postres.find(p => p.nombre === nombre);

  const existente = carrito.find(p => p.nombre === nombre);
  if (existente) {
    existente.cantidad += 1;
  } else {
    carrito.push({ ...plato, cantidad: 1 });
  }
    mostrarPopup(`"${nombre}" añadido al carrito`);

  actualizarDropdown();
}

function actualizarDropdown() {
  dropdownLista.innerHTML = "";

  if (carrito.length === 0) {
    dropdownLista.innerHTML = '<li class="text-muted px-3 py-2">Tu carrito está vacío</li>';
    contadorCarrito.textContent = 0;
    return;
  }

  carrito.forEach(plato => {
    const item = document.createElement("li");
    item.className = "dropdown-item d-flex justify-content-between align-items-center";
    item.innerHTML = `
      <div class="d-flex align-items-center gap-2 w-100 justify-content-between">
        <div class="d-flex align-items-center gap-2">
          <img src="${plato.imagen}" alt="${plato.nombre}" style="width: 40px; height: 40px; object-fit: cover;" class="rounded">
          <div>
            <div>${plato.nombre}</div>
            <div class="text-muted small">$${(plato.precio * plato.cantidad).toLocaleString()}</div>
          </div>
        </div>
        <div class="d-flex align-items-center gap-2">
          <input type="number" min="0" value="${plato.cantidad}" class="form-control form-control-sm" style="width: 60px;" />
          <button class="btn btn-sm btn-outline-danger">✖</button>
        </div>
      </div>
    `;

    const inputCantidad = item.querySelector("input");
    inputCantidad.addEventListener("change", () => {
      const nuevaCantidad = parseInt(inputCantidad.value);
      if (nuevaCantidad <= 0) {
        eliminarDelCarrito(plato.nombre);
      } else {
        const itemCarrito = carrito.find(p => p.nombre === plato.nombre);
        if (itemCarrito) {
          itemCarrito.cantidad = nuevaCantidad;
          actualizarDropdown();
        }
      }
    });

    const btn = item.querySelector("button");
    btn.onclick = () => eliminarDelCarrito(plato.nombre);

    dropdownLista.appendChild(item);
  });

  const total = carrito.reduce((acc, item) => acc + item.precio * item.cantidad, 0);
  const totalItem = document.createElement("li");
  totalItem.className = "dropdown-item text-end fw-bold border-top pt-2";
  totalItem.textContent = `Total: $${total.toLocaleString()}`;
  dropdownLista.appendChild(totalItem);

  const botonPedido = document.createElement("li");
  botonPedido.className = "dropdown-item text-center";
  botonPedido.innerHTML = `
    <a href="pago.html" class="btn btn-primary w-100 mt-2" onclick="guardarCarrito()">Realizar pedido</a>
  `;
  dropdownLista.appendChild(botonPedido);

  contadorCarrito.textContent = carrito.reduce((total, p) => total + p.cantidad, 0);
}

function eliminarDelCarrito(nombre) {
  carrito = carrito.filter(p => p.nombre !== nombre);
  actualizarDropdown();
}

function guardarCarrito() {
  localStorage.setItem("carrito", JSON.stringify(carrito));
  const total = carrito.reduce((acc, item) => acc + item.precio * item.cantidad, 0);
  localStorage.setItem("totalCarrito", total);
}

function mostrarPopup(mensaje) {
  const contenedor = document.getElementById("popupNotificacion");
  const alerta = document.createElement("div");

  alerta.className = "popup-alerta";
  alerta.textContent = mensaje;

  contenedor.appendChild(alerta);

  // Eliminar el popup después de 3 segundos
  setTimeout(() => {
    alerta.remove();
  }, 3000);
}


