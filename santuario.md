## 1. Nuestro Enfoque

El objetivo es crear una experiencia web premium e inmersiva para que los usuarios de Trascendit puedan realizar rituales guiados. La aplicación debe ser:

- **Escalable:** Construida sobre una base de código moderna (React, Vite, TypeScript).
- **Inmersiva:** Diseñada para ser usada con los ojos cerrados, con un fuerte énfasis en el audio.
- **Estéticamente Alineada:** Debe reflejar la identidad visual "Noche Cósmica Dorada".
- **Funcional:** El núcleo es un temporizador interactivo que guía al usuario a través de las fases del ritual.

## 2. Lo que Hicimos (Fase 1 - MVP)

1.  **Análisis Inicial:** Se estudiaron los documentos `GEMINI.md` y `diario.md` para entender la visión del proyecto y los requerimientos del ritual.
2.  **Setup del Proyecto:** Se inicializó un nuevo proyecto web en la carpeta `santuario-app` utilizando Vite, React y TypeScript.
3.  **Estructura de Archivos:** Se creó una arquitectura de carpetas profesional para separar componentes, páginas, hooks (lógica), assets (datos) y estilos.
4.  **Migración de Datos:** El archivo `rituales.json` se movió al proyecto.
5.  **Desarrollo de Componentes y Lógica:**
    - Se crearon todos los componentes de la interfaz (`HomePage`, `RitualPage`, `Orbe`, `TimerControls`).
    - Se implementó toda la lógica del temporizador en un hook reutilizable (`useRitualTimer`).
    - Se configuró el enrutamiento con `react-router-dom` para manejar las URLs de cada ritual.
6.  **Resolución de Incidente Crítico:** Se depuró y solucionó un error complejo de "pantalla en blanco".
7.  **Implementación de Audio:** Se integró la lógica para la música de fondo, los sonidos de transición entre fases y un control de volumen.

## 3. Hoja de Ruta (Roadmap)

- **Fase 1: MVP Funcional:** **(COMPLETADO)**
- **Fase 2: Refinamiento Premium:** Elevar la experiencia de usuario a un nivel profesional y memorable. **(COMPLETADO)**
- **Fase 3: Expansión:** Expandir la aplicación con características adicionales.

## 4. Bitácora de Incidentes Clave

- **Incidente #1: Pantalla en Blanco**
    - *Síntoma:* La aplicación mostraba una página en blanco a pesar de tener el título correcto.
    - *Causa Raíz:* Error de transpilación de TypeScript debido al uso de `import` en lugar de `import type` para las interfaces, lo que impedía la carga de módulos.
    - *Resolución:* Se corrigieron todas las importaciones de tipos a `import type`. **(SOLUCIONADO)**

---

## 5. Siguientes Pasos: Plan de Acción para la Fase 2 (Refinamiento Premium)

A continuación se detalla el plan de implementación para llevar la aplicación al siguiente nivel.

### A. Mejoras Visuales y de Ambiente
- **Fondo de Video:** Reemplazar el fondo estático por un video en bucle, sutil y oscurecido, específico para cada ritual.
- **Jerarquía Visual:** Refinar la tipografía, tamaños y espaciados para un aspecto más profesional.

### B. Claridad y Anticipación del Ritual
- **Lista de Pasos:** Implementar un componente que muestre desde el inicio todos los pasos del ritual y su duración.
- **Resaltado del Paso Actual:** El paso en curso se resaltará visualmente en la lista.

### C. Micro-interacciones y "Premium Feel"
- **Interactividad Táctil:** Añadir efectos de `hover` a todos los elementos interactivos.
- **Transiciones Suaves:** Animar los cambios de texto y estado con fundidos (`fade`).

### D. Funcionalidad y Experiencia Superior
- **Modo Enfoque (Opcional):** Añadir un botón para ocultar los textos descriptivos, dejando solo el Orbe.
- **Animación de Finalización:** Crear una animación especial al completar el ritual como recompensa.
- **Precarga de Audio:** Implementar la precarga de los audios para una reproducción instantánea.

---

## 6. Bitácora de Implementación (Fase 2)

En esta sección se documentan las implementaciones técnicas realizadas durante la Fase 2 de Refinamiento Premium.

### A. Implementación: Fondo de Video Dinámico (COMPLETADO)

Se ha implementado la funcionalidad de fondos de video dinámicos y específicos para cada ritual, completando el primer punto de las "Mejoras Visuales y de Ambiente".

**Pasos Técnicos Realizados:**
1.  **Análisis de Código:** Se confirmó que la estructura de datos en `src/types/index.ts` y `public/rituales.json` ya incluía una propiedad `videoFondo`, anticipando esta necesidad.
2.  **Creación de Directorio:** Se creó el directorio `public/video/` para almacenar los recursos de video.
3.  **Desarrollo de Componente:** Se creó un nuevo componente reutilizable en `src/components/VideoBackground.tsx` para manejar la lógica de renderizado del video.
4.  **Estilos CSS:** Se añadieron los estilos correspondientes en `src/styles/VideoBackground.css` para asegurar que el video funcione como un fondo a pantalla completa, oscurecido y no intrusivo.
5.  **Integración:** Se modificó `src/pages/RitualPage.tsx` para importar e integrar el nuevo componente, conectándolo con la propiedad `videoFondo` del ritual activo.

**Guía de Uso y Gestión de Videos:**

*   **Ubicación:** Todos los archivos de video para los rituales deben subirse a la carpeta `santuario-app/public/video/`.
*   **Nomenclatura:** El nombre de cada archivo de video debe ser **exactamente igual** al valor especificado en el campo `"videoFondo"` dentro del archivo `public/rituales.json`.
*   **Funcionamiento:** El sistema funciona leyendo la ruta del campo `"videoFondo"` para cada ritual y pasándola como una propiedad al componente `VideoBackground`, que luego renderiza el video correcto.
*   **Formato Recomendado:** Para un rendimiento óptimo y alta calidad, se recomienda usar videos con las siguientes especificaciones:
    *   **Resolución:** 1280x720 (720p)
    *   **Formato:** MP4 (códec H.264)
    *   **Tamaño de Archivo:** Comprimido para pesar menos de 5 MB.
    *   **Duración:** Cortos (15-30 segundos) y diseñados para un bucle suave.

### B. Implementación: Lista de Pasos Detallada (COMPLETADO)

Atendiendo al feedback del usuario para una mayor claridad, se ha rediseñado la lista de pasos del ritual para cumplir con el objetivo de "Claridad y Anticipación".

**Pasos Técnicos Realizados:**
1.  **Rediseño de Componente:** Se reescribió `src/components/RitualStepsList.tsx` para mostrar una vista de "carta" para cada paso, incluyendo el número de fase, el nombre, la instrucción completa y la duración con un icono de reloj (`lucide-react`).
2.  **Mejora de Estilos:** Se actualizaron los estilos en `src/styles/RitualStepsList.css` para reflejar el nuevo diseño premium, mejorando la jerarquía visual y añadiendo animaciones más suaves para el resaltado del paso activo.
3.  **Limpieza de Código:** Se eliminó el contenedor redundante de "Paso actual" de `src/pages/RitualPage.tsx`, ya que la nueva lista de pasos centraliza toda la información necesaria.

### C. Implementación: Micro-interacciones y "Premium Feel" (COMPLETADO)

Se han añadido micro-interacciones a la interfaz para mejorar la sensación de calidad y la respuesta táctil de la aplicación.

**Pasos Técnicos Realizados:**
1.  **Efectos `Hover` en Controles:** Se mejoraron los estilos en `RitualPage.css` para los botones de control (`.main-controls button`). Ahora, al pasar el ratón, los botones presentan un sutil efecto de "levantamiento" (`transform: translateY`) y un resplandor (`box-shadow`), proporcionando una mejor retroalimentación visual.
2.  **Transición de Texto Suave:** Se implementó una animación de fundido (`fadeIn`) para el nombre del paso en el Orbe. Utilizando una `key` de React en el componente `Orbe.tsx` y una animación de `keyframes` en `RitualPage.css`, el texto ahora aparece suavemente cada vez que cambia, evitando cambios bruscos y mejorando la estética.

### D. Implementación: Funcionalidad y Experiencia Superior (EN CURSO)

Se han comenzado a implementar las mejoras finales de la Fase 2 para llevar la aplicación a un nivel superior de funcionalidad y rendimiento.

**Pasos Técnicos Realizados:**
1.  **Modo Enfoque:** Se ha implementado con éxito la funcionalidad de "Modo Enfoque".
    *   **Componente:** Se creó un nuevo componente de botón `FocusModeToggle.tsx` con iconos que cambian según el estado.
    *   **Lógica:** Se añadió un estado `isFocusMode` en `RitualPage.tsx` para controlar la visibilidad de los elementos.
    *   **Estilos:** Se implementaron clases condicionales y transiciones en `RitualPage.css` para animar suavemente la ocultación del panel de instrucciones y el centrado del Orbe.
2.  **Precarga de Audio:** Se ha mejorado el rendimiento de la carga de audio.
    *   **Optimización:** Se añadió el atributo `preload="auto"` a las etiquetas `<audio>` en `RitualPage.tsx`. Esto indica al navegador que descargue los archivos de audio en segundo plano, asegurando una reproducción instantánea al iniciar el ritual.

### E. Corrección de Errores y Refinamiento de Interfaz (COMPLETADO)
Durante el desarrollo de la Fase 2, se identificaron y solucionaron varios problemas críticos que afectaban la experiencia de usuario, al mismo tiempo que se implementaron mejoras significativas en la interfaz.

1. **Implementación y Depuración de la Funcionalidad "Saltar Paso"**

*   **Incidente**: La aplicación fallaba al intentar usar una función skipStep que no estaba correctamente implementada, resultando en un error de skipStep is not defined que bloqueaba la página del ritual.
*   **Análisis de Causa**: Se detectó que la lógica para saltar un paso se había añadido al hook useRitualTimer.ts pero no se estaba exportando ni conectando correctamente con los componentes de la interfaz.
*   **Resolución Técnica:**
Corrección del Hook: Se modificó src/hooks/useRitualTimer.ts para añadir la función skipStep al objeto de retorno, haciéndola disponible para otros componentes.
Integración en la Página: Se actualizó src/pages/RitualPage.tsx para recibir y pasar la función skipStep al componente de controles.
Rediseño de Controles: El componente src/components/TimerControls.tsx se rediseñó para incluir un nuevo botón de icono (⏭) para la función "Saltar Paso", mejorando la usabilidad y la estética de la interfaz.
2. **Solución de Problemas de Maquetación en la Pantalla Final**

*   **Incidente**: Al completar un ritual, la pantalla se desconfiguraba: el panel de texto se desplazaba y el orbe con el mensaje "Ritual Completado" se posicionaba incorrectamente en la parte inferior de la página, requiriendo scroll para ser visible.
*   **Análisis de Causa:** La clase .ritual-finished aplicada al finalizar el ritual no gestionaba correctamente el layout de grid, causando un conflicto visual.
*   **Resolución Técnica:**
          **Clase CSS Global:** Se aplicó la clase .ritual-finished al contenedor principal (.santuario-container) en RitualPage.tsx para tener un control total sobre el layout final.
            **Centrado con Flexbox:** Se modificó src/styles/RitualPage.css para que, al finalizar el ritual, el contenedor principal use display: flex para centrar vertical y horizontalmente el .altar-container, asegurando que el orbe quede perfectamente visible sin scroll.
            **Ocultación de Texto:** Se ocultó el panel de texto (.guion-container) en la pantalla final para evitar interferencias y crear una vista de finalización limpia.
3. **Mejora de la Animación en "Modo Enfoque"**
*   **Feedback de Usuario:** La transición al "Modo Enfoque" era un cambio brusco e instantáneo, lo que rompía la sensación de inmersión.
*   **Análisis de Causa:** El panel de texto se ocultaba usando display: none, una propiedad que no es animable y causa saltos visuales.
*   **Resolución Técnica:**
            **Transición Suave:** En src/styles/RitualPage.css, se reemplazó display: none por una transición basada en opacity y transform. Esto permite que el panel de texto se desvanezca y se deslice suavemente hacia afuera.
            **Animación Cohesiva:** Se ajustaron las curvas de aceleración (cubic-bezier) y la duración de las transiciones de todos los elementos involucrados (.santuario-container, .guion-container, .altar-container) para crear una animación armónica, fluida y visualmente atractiva, alineada con la estética premium del proyecto.