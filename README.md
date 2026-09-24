# 🐱 Juego del Gato (Tic-Tac-Toe) · React + Vite

Aplicación interactiva del clásico juego del Gato (Tic-Tac-Toe) desarrollada con React y Vite. Incluye personalización de nombres, alternancia automática de turnos, marcador de victorias acumuladas entre rondas y resaltado visual de la combinación ganadora.

---

## 🚀 Características

* **Registro de jugadores:** Formulario inicial para ingresar los nombres de ambos participantes y asignación de fichas (`X` y `O`).
* **Turno dinámico:** Indicador visual que resalta en tiempo real al jugador activo.
* **Contador de victorias persistente:** Marcador acumulativo que conserva los puntos obtenidos entre rondas consecutivas.
* **Resaltado de victoria:** Las tres casillas que conforman la línea ganadora (horizontal, vertical o diagonal) se iluminan en color verde.
* **Control de partida:** Botón *Nueva partida* para reiniciar el tablero manteniendo el marcador acumulado.
* **Arquitectura modular:** Desacoplamiento de componentes (`Board`, `Square`) y gestión inmutable del estado con `useState`.

---

## 🛠️ Tecnologías utilizadas

* **React** (Componentes funcionales, Props, Hooks de estado)
* **Vite** (Herramienta de desarrollo y empaquetado rápido)
* **JavaScript (ES6+)** (Métodos funcionales inmutables: `.map()`, `.filter()`, `.slice()`)
* **CSS3** (Flexbox, transiciones y diseño responsivo)

---

## 📋 Requisitos previos

* [Node.js](https://nodejs.org/) (versión 18.0 o superior)
* [Git](https://git-scm.com/)
* Navegador web moderno

---

## ⚙️ Instalación y ejecución

1. **Clonar el repositorio:**
   ```bash
   git clone [https://github.com/TU-USUARIO/gato-react.git](https://github.com/TU-USUARIO/gato-react.git)
