//// DATA BASE DE CURSE //////////


const cursosTrolbisAcademy = [
    {
        categoria: "Marketing y Diseño",
        color: "#2563eb",
        icono: "ri-megaphone-line",
        tituloCorto: "Marketing & Diseño",
        titulo: "Diseño y Marketing para Agencias de Viajes",
        subtitulo: "Branding, redes sociales y publicidad",
        duracion: "2 meses",
        precio: 160,
        moneda: "USD",
        modalidad: "Online",
        descripcion:
            "Curso enfocado en branding, redes sociales, embudos de venta, contenido turístico y publicidad digital aplicado específicamente a agencias de viajes."
    },
    {
        categoria: "Marketing y Diseño",
        color: "#2563eb",
        icono: "ri-instagram-line",
        tituloCorto: "Reels Turísticos",
        titulo: "Edición de Reels para Agencias de Viajes",
        subtitulo: "Contenido viral para Instagram y TikTok",
        duracion: "1 mes",
        precio: 85,
        moneda: "USD",
        modalidad: "Online",
        descripcion:
            "Aprende a crear reels virales usando celular o PC, storytelling turístico, hooks, tendencias y edición optimizada."
    },
    {
        categoria: "Marketing y Diseño",
        color: "#2563eb",
        icono: "ri-html5-line",
        tituloCorto: "Landing Pages",
        titulo: "Desarrollo de Landing Page para Agencias de Viajes",
        subtitulo: "Páginas de venta enfocadas en conversión",
        duracion: "1.5 meses",
        precio: 130,
        moneda: "USD",
        modalidad: "Online",
        descripcion:
            "Creación de páginas de venta para tours y servicios turísticos con enfoque en conversión, formularios, WhatsApp y pagos."
    },

    {
        categoria: "Inteligencia Artificial",
        color: "#7c3aed",
        icono: "ri-bard-line",
        tituloCorto: "IA para Turismo",
        titulo: "IA para Agencias de Viajes",
        subtitulo: "ChatGPT, Gemini y automatización",
        duracion: "1.5 meses",
        precio: 140,
        moneda: "USD",
        modalidad: "Online",
        descripcion:
            "Uso práctico de inteligencia artificial para ventas, atención al cliente, creación de contenido, automatización y productividad."
    },

    {
        categoria: "Idiomas",
        color: "#059669",
        icono: "ri-translate-2",
        tituloCorto: "Inglés Turístico",
        titulo: "Inglés para Agentes de Viajes (B1–B2)",
        subtitulo: "Comunicación profesional en turismo",
        duracion: "8 meses",
        precio: 480,
        moneda: "USD",
        modalidad: "Online",
        descripcion:
            "Programa completo de inglés turístico enfocado en aerolíneas, clientes internacionales, reservas, soporte y comunicación profesional."
    },
    {
        categoria: "Idiomas",
        color: "#059669",
        icono: "ri-translate-2",
        tituloCorto: "Inglés Técnico",
        titulo: "Inglés Técnico para Ticketing & Aerolíneas",
        subtitulo: "Vocabulario técnico para emisión aérea",
        duracion: "2 meses",
        precio: 120,
        moneda: "USD",
        modalidad: "Online",
        descripcion:
            "Vocabulario técnico aplicado a emisiones, tarifas, cambios, cancelaciones y comunicación con aerolíneas."
    },

    {
        categoria: "IATA & GDS",
        color: "#dc2626",
        icono: "ri-global-line",
        tituloCorto: "IATA Básico",
        titulo: "IATA – Primeros Pasos",
        subtitulo: "Introducción a la acreditación IATA",
        duracion: "1 mes",
        precio: 110,
        moneda: "USD",
        modalidad: "Online",
        descripcion:
            "Introducción al sistema IATA, requisitos, procesos de acreditación y operación básica para agencias de viajes."
    },
    {
        categoria: "IATA & GDS",
        color: "#dc2626",
        icono: "ri-dashboard-line",
        tituloCorto: "IATA Avanzado",
        titulo: "IATA Platform – Nivel Avanzado",
        subtitulo: "BSP, reportes y conciliaciones",
        duracion: "2 meses",
        precio: 190,
        moneda: "USD",
        modalidad: "Online",
        descripcion:
            "Uso avanzado de la plataforma IATA, reportes, BSP, conciliaciones y cumplimiento."
    },
    {
        categoria: "IATA & GDS",
        color: "#dc2626",
        icono: "ri-tv-2-line",
        tituloCorto: "SABRE Básico",
        titulo: "Primeros Pasos GDS SABRE",
        subtitulo: "Fundamentos del sistema SABRE",
        duracion: "1.5 meses",
        precio: 150,
        moneda: "USD",
        modalidad: "Online",
        descripcion:
            "Introducción al GDS SABRE: comandos básicos, disponibilidad, tarifas y reservas."
    },
    {
        categoria: "IATA & GDS",
        color: "#dc2626",
        icono: "ri-coupon-3-line",
        tituloCorto: "Ticketing SABRE",
        titulo: "Ticketing y Emisiones SABRE",
        subtitulo: "Emisión, cambios y reembolsos",
        duracion: "2 meses",
        precio: 230,
        moneda: "USD",
        modalidad: "Online",
        descripcion:
            "Emisión de boletos, reglas tarifarias, reemisiones, cambios, reembolsos y casos reales."
    },
    {
        categoria: "IATA & GDS",
        color: "#dc2626",
        icono: "ri-exchange-line",
        tituloCorto: "NDCs",
        titulo: "Domina los NDCs",
        subtitulo: "El futuro de la distribución aérea",
        duracion: "1 mes",
        precio: 130,
        moneda: "USD",
        modalidad: "Online",
        descripcion:
            "Comprensión de los NDCs, diferencias con GDS tradicional y nuevas oportunidades comerciales."
    },

    {
        categoria: "Gestión & Legal",
        color: "#ea580c",
        icono: "ri-chat-smile-3-line",
        tituloCorto: "Consultoría Migratoria",
        titulo: "Consultoría Migratoria para Agencias",
        subtitulo: "Servicios migratorios sin riesgos legales",
        duracion: "1 mes",
        precio: 110,
        moneda: "USD",
        modalidad: "Online",
        descripcion:
            "Conceptos legales y comerciales para vender servicios migratorios sin infringir regulaciones."
    },
    {
        categoria: "Gestión & Legal",
        color: "#ea580c",
        icono: "ri-file-text-line",
        tituloCorto: "Licencia MITUR",
        titulo: "Consigue la Licencia de MITUR",
        subtitulo: "Guía oficial para República Dominicana",
        duracion: "3 semanas",
        precio: 90,
        moneda: "USD",
        modalidad: "Online",
        descripcion:
            "Guía paso a paso para obtener la licencia turística ante MITUR en República Dominicana."
    },

    {
        categoria: "Gestión & Operaciones",
        color: "#0f172a",
        icono: "ri-community-line",
        tituloCorto: "Crear Agencia",
        titulo: "Creación y Gestión de Agencia de Viajes",
        subtitulo: "De la idea a la operación real",
        duracion: "1.5 meses",
        precio: 130,
        moneda: "USD",
        modalidad: "Online",
        descripcion:
            "Desde la idea hasta la operación: estructura legal, proveedores, ventas y escalabilidad."
    },
    {
        categoria: "Ventas",
        color: "#16a34a",
        icono: "ri-hand-coin-line",
        tituloCorto: "Ventas Turísticas",
        titulo: "Ventas y Cierre de Paquetes Turísticos",
        subtitulo: "Convierte cotizaciones en ventas",
        duracion: "1 mes",
        precio: 95,
        moneda: "USD",
        modalidad: "Online",
        descripcion:
            "Técnicas de venta consultiva, manejo de objeciones y cierre efectivo de paquetes turísticos."
    }
];

document.addEventListener("DOMContentLoaded", () => {
    const grid = document.getElementById("coursesGrid");
    const dropdown = document.getElementById("categoryDropdown");
    const btnCategory = document.getElementById("btnCategory");
    const btnAll = document.getElementById("btnAll");
    const btnLoadMore = document.getElementById("btnLoadMore");
    const searchInput = document.getElementById("searchInput");

    /* =======================
       ESTADO GLOBAL
    ======================= */
    let activeCategoria = null;
    let currentCursos = [];
    let currentIndex = 0;
    const cursosToShow = 8;
    const WHATSAPP_NUMBER = "18097564122";


    window.openWhatsApp = function (curso) {
        const message = `
        Hola!!
        Estoy interesado en el curso:

        📘 *${curso.titulo}*
        🏷️ Categoría: ${curso.categoria}
        💰 Precio: ${curso.moneda} ${curso.precio}
        ⏱️ Duración: ${curso.duracion}

        ¿Podrían darme más información?
            `.trim();

        const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
        window.open(url, "_blank");
    };

    /* =======================
       UTILIDADES
    ======================= */
    function getBgColor(color) {
        return document.documentElement.classList.contains("dark")
            ? color + "66"
            : color;
    }

    /* =======================
       FILTRO UNIFICADO
    ======================= */
    function getFilteredCursos() {
        const search = searchInput.value.toLowerCase().trim();

        return cursosTrolbisAcademy.filter(curso => {
            const matchCategoria = activeCategoria
                ? curso.categoria === activeCategoria
                : true;

            const matchSearch =
                curso.titulo.toLowerCase().includes(search) ||
                curso.descripcion.toLowerCase().includes(search) ||
                curso.categoria.toLowerCase().includes(search);

            return matchCategoria && matchSearch;
        });
    }


    /* =======================
       RENDER CURSOS (PAGINADO)
    ======================= */
    function renderCursosPaginated(listaCursos, reset = false) {
        if (!grid) return;

        if (reset) currentIndex = 0;
        currentCursos = listaCursos;
        window.currentCursos = currentCursos;

        const slice = currentCursos.slice(0, currentIndex + cursosToShow);

        grid.innerHTML = slice.map(curso => `
            <div class="group bg-white dark:bg-zinc-800 rounded-lg border border-gray-200 dark:border-white/20 overflow-hidden hover:shadow-lg transition flex flex-col">
                <div class="h-40 p-4 relative flex flex-col justify-center "
                     style="background: ${getBgColor(curso.color)};">
                    <h3 class="text-lg font-bold text-white uppercase">
                        ${curso.tituloCorto}
                    </h3>
                    <p class="text-white/80 text-xs ">${curso.subtitulo} </p>
                    <div class="absolute right-3 top-3">
                        <i class="${curso.icono} text-white/60 bg-white/20 p-1.5 rounded-full text-2xl"></i>
                    </div>
                </div>

                <div class="p-4 flex flex-col flex-grow">
                    <span class="text-xs flex items-center justify-center py-0.5  rounded-full font-medium text-azul-trolbis bg-azul-trolbis/20 max-w-14 mb-4 ">
                         ${curso.modalidad}
                    </span>
                    <h3 class="text-[13px] font-bold text-gray-700 dark:text-white mb-2 line-clamp-3 leading-tight uppercase ">
                        ${curso.titulo}
                    </h3>

                    <p class="text-xs text-gray-500 dark:text-gray-400 mb-4 line-clamp-3 leading-relaxed">
                        ${curso.descripcion}
                    </p>

                    <div class="mt-auto pt-3 border-t border-gray-100 dark:border-white/10">
                        <div class="flex justify-between items-center mb-3">
                            <span class="text-lg font-bold">
                                ${curso.moneda} ${curso.precio}
                            </span>
                            <span class="text-xs text-gray-600 flex items-center gap-1 uppercase dark:text-azul-trolbis">
                                <i class="ri-calendar-todo-line"></i>
                                ${curso.duracion}
                            </span>
                        </div>

                        <button
                            onclick='openWhatsApp(${JSON.stringify(curso)})'
                            class="w-full py-3 rounded-lg border border-gray-800 dark:border-white/40 text-sm hover:text-azul-trolbis hover:border-azul-trolbis transition">
                            Solicitar
                        </button>
                    </div>
                </div>
            </div>
        `).join("");

        if (currentIndex + cursosToShow >= currentCursos.length) {
            btnLoadMore.style.display = "none";
        } else {
            btnLoadMore.style.display = "inline-flex";
        }

        currentIndex += cursosToShow;
    }

    /* =======================
       CATEGORÍAS
    ======================= */
    function renderCategorias() {
        const categorias = [...new Set(cursosTrolbisAcademy.map(c => c.categoria))];

        dropdown.innerHTML = categorias.map(cat => `
            <button
                data-categoria="${cat}"
                class="w-full text-left px-4 py-2 text-sm hover:bg-azul-trolbis/10 dark:hover:bg-white/10 transition">
                ${cat}
            </button>
        `).join("");
    }

    /* =======================
       ESTILOS BOTONES
    ======================= */
    function setButtonStates(active) {
        btnAll.className =
            "px-5 py-2 rounded-full text-sm font-medium transition flex items-center gap-2";
        btnCategory.className =
            "px-5 py-2 rounded-full text-sm font-medium transition flex items-center gap-2";

        if (active === "all") {
            btnAll.classList.add("bg-azul-trolbis", "text-white", "shadow-sm");
            btnCategory.classList.add(
                "bg-white",
                "text-gray-600",
                "border",
                "border-gray-300",
                "dark:bg-zinc-800",
                "dark:text-gray-300",
                "dark:border-white/20"
            );
            btnCategory.innerHTML = `Categoría <i class="ri-arrow-down-s-line"></i>`;
        }

        if (active === "categoria") {
            btnCategory.classList.add("bg-azul-trolbis", "text-white");
            btnAll.classList.add(
                "bg-white",
                "text-azul-trolbis",
                "border",
                "border-azul-trolbis",
                "dark:bg-zinc-800"
            );
        }
    }

    /* =======================
       EVENTOS
    ======================= */
    btnCategory.addEventListener("click", () => {
        dropdown.classList.toggle("hidden");
    });

    dropdown.addEventListener("click", e => {
        const categoria = e.target.dataset.categoria;
        if (!categoria) return;

        activeCategoria = categoria;
        btnCategory.innerHTML = `${categoria} <i class="ri-arrow-down-s-line"></i>`;

        renderCursosPaginated(getFilteredCursos(), true);
        setButtonStates("categoria");
        dropdown.classList.add("hidden");
    });

    btnAll.addEventListener("click", () => {
        activeCategoria = null;
        searchInput.value = "";
        renderCursosPaginated(cursosTrolbisAcademy, true);
        setButtonStates("all");
    });

    searchInput.addEventListener("input", () => {
        renderCursosPaginated(getFilteredCursos(), true);
    });

    btnLoadMore.addEventListener("click", () => {
        renderCursosPaginated(currentCursos);
    });

    // 👇 EXPONER FUNCIONES / ESTADO PARA HTML (dark toggle)
    window.renderCursosPaginated = renderCursosPaginated;

    // INIT
    renderCategorias();
    renderCursosPaginated(cursosTrolbisAcademy, true);
    setButtonStates("all");
});



