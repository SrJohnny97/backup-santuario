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
- **Fase 3: Rediseño Premium de la Página de Inicio:** Reconstruir la página de selección de rituales para una experiencia de usuario superior. **(EN CURSO)**
- **Fase 4: Expansión:** Expandir la aplicación con características adicionales.

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

---

---

## 7. Fase 2.5: Feedback y Puntos de Mejora (Post-Lanzamiento)

Tras el despliegue en `santuario.trascendit.com`, se ha realizado una primera revisión en dispositivos móviles y se han detectado los siguientes puntos a mejorar. Esta sección servirá como bitácora para la corrección de errores y optimización de la experiencia móvil.

### A. Problemas Críticos y de Experiencia de Usuario

1.  **Rendimiento de Carga Inicial:** La página presenta una demora notable al cargar por primera vez en el navegador del móvil.
2.  **Carga y Reproducción de Audio:** La música de fondo es intermitente. Aparece y desaparece, sugiriendo problemas con el búfer o la estrategia de carga en redes móviles.
3.  **Carga y Rendimiento del Video:** El video de fondo tarda en cargar (problema también observado en PC) y presenta "stuttering" o trabas ocasionales durante la reproducción.
4.  **Layout de Pasos del Ritual:** En la vista móvil, la descripción de cada paso del ritual pierde su formato, mostrándose desordenada y afectando la legibilidad.
5.  **Error de Centrado en Pantalla Final:** Al completar un ritual, la esfera con el texto "Ritual Completado" no está centrada horizontalmente, apareciendo desplazada hacia la derecha.

### B. Feedback y Observaciones Adicionales

*   **Glitch Visual en Scroll (Prioridad Baja):** Al hacer scroll en el móvil, el video de fondo parece moverse o reajustarse con el gesto, causando un pequeño "salto" o corte visual. **(SOLUCIONADO)**
*   **Observación de Layout Móvil:** Se confirma que el layout actual en móviles es vertical: primero se muestra la lista completa de pasos del ritual y, al final de la página, se encuentra el Orbe y los controles.

### C. Implementación de Correcciones y Mejoras (Fase 2.5)

Se ha iniciado el trabajo sobre los puntos de mejora detectados en la Fase 2.5, con los siguientes avances:

1.  **Corrección del Layout de Pasos del Ritual (Móvil):**
    *   **Incidente:** Se solucionó el problema (Punto A.4) donde la descripción de los pasos del ritual se mostraba desordenada en dispositivos móviles.
    *   **Resolución Técnica:** Se aplicaron estilos responsivos (`@media (max-width: 600px)`) en `RitualStepsList.css`. La nueva regla permite que los elementos del encabezado (`step-header`) se reorganicen verticalmente (`flex-wrap: wrap`) y elimina el `padding-left` fijo de la instrucción, asegurando una visualización clara y apilada en pantallas estrechas.

2.  **Mejora de UX: Auto-Scroll al Paso Activo (Móvil):**
    *   **Implementación:** Se añadió una nueva funcionalidad en `RitualStepsList.tsx` que mejora la experiencia en móviles.
    *   **Resolución Técnica:** Utilizando los hooks `useEffect` y `useRef` de React, la aplicación ahora desplaza automáticamente la vista (`scrollIntoView`) para centrar en la pantalla el paso del ritual que se encuentra activo. Esto evita que el usuario tenga que buscarlo manualmente.

3.  **Corrección de Centrado en Pantalla Final (Móvil):**
    *   **Incidente:** Se corrigió el error de centrado (Punto A.5) donde el orbe de "Ritual Completado" aparecía desplazado horizontalmente en móviles.
    *   **Resolución Técnica:** Se refactorizó el código eliminando una clase (`ritual-finished`) redundante en el componente `RitualPage.tsx`. Adicionalmente, se simplificó el CSS en `RitualPage.css`, eliminando reglas conflictivas y consolidando la lógica de centrado en la clase principal (`.santuario-container.ritual-finished`), lo que garantiza un centrado perfecto en todas las resoluciones.

4.  **Optimización de Rendimiento: Migración de Media a Cloudflare R2:**
    *   **Incidente:** Se abordaron los problemas de rendimiento más críticos de la aplicación (Puntos A.1, A.2, A.3), cuya causa raíz era servir archivos multimedia pesados (video y audio) directamente desde el repositorio de código, una práctica no optimizada para la entrega de contenido.
    *   **Resolución Arquitectónica:** Se tomó la decisión estratégica de migrar todos los archivos multimedia a una solución de almacenamiento en la nube profesional, Cloudflare R2, que utiliza una CDN para una entrega de contenido global y de alta velocidad.
    *   **Pasos Técnicos:**
        *   Se estableció una nueva convención de nombres para los archivos multimedia, eliminando guiones para mayor consistencia (ej: `anclaje-de-poder.mp4` -> `anclajedepoder.mp4`).
        *   Se actualizaron los `slugs` en `public/rituales.json` para que coincidieran con la nueva convención de nombres.
        *   Se reemplazaron todas las rutas locales de video y audio en `public/rituales.json` con las URLs absolutas del nuevo bucket de Cloudflare R2.
        *   Se refactorizó el componente `src/pages/RitualPage.tsx` para eliminar las rutas de audio fijas, cargando ahora dinámicamente tanto el audio de ambiente como el de notificación desde las URLs especificadas, haciendo el sistema completamente escalable.
    *   **Resultado:** Esta migración soluciona los problemas de carga lenta y reproducción entrecortada, y establece una base robusta y profesional para añadir futuros rituales de forma eficiente.

5.  **Solución de Glitch Visual en Scroll (Móvil):**
    *   **Incidente:** Se corrigió el "salto" visual (Punto B) que ocurría en móviles al hacer scroll, un bug que rompía la inmersión de la experiencia.
    *   **Análisis de Causa:** El problema era doble: 1) El componente de video estaba anidado dentro de un contenedor con propiedades CSS (`transform`) que anulaban su `position: fixed`. 2) El `body` de la página tenía un color de fondo que ocultaba el video en la capa inferior.
    *   **Resolución Arquitectónica (3 Pasos):**
        *   **`global.css`:** Se hizo transparente el fondo del `body` para permitir que el video de fondo fuera visible.
        *   **`RitualPage.css`:** Se aseguró que el contenedor principal del ritual (`santuario-container`) tuviera `position: relative` para apilarse correctamente sobre el video.
        *   **`RitualPage.tsx`:** Se reestructuró el componente para que `VideoBackground` sea un hermano del contenido principal, no un hijo, permitiendo que `position: fixed` funcione correctamente anclado a la ventana del navegador.
    *   **Resultado:** Se eliminó por completo el glitch, logrando un scroll perfectamente fluido en todos los dispositivos sin afectar la estética visual (incluyendo la capa de oscuridad del video).

---

## 8. Guía para Desarrolladores: Flujo de Trabajo con Git y Despliegue

Esta sección documenta el flujo de trabajo técnico para gestionar el código fuente, guardar versiones y desplegar cambios en la aplicación.

### A. Configuración del Proyecto

*   **Tecnologías:** El proyecto está construido con **Vite, React y TypeScript**.
*   **Control de Versiones:** El código fuente se gestiona con **Git** y está alojado en un repositorio de GitHub.
*   **Repositorio Remoto:** `https://github.com/SrJohnny97/backup-santuario.git`
*   **Despliegue Automático:** El proyecto está conectado a **Cloudflare Pages**. Cualquier cambio subido a la rama `main` del repositorio de GitHub iniciará un nuevo despliegue automáticamente.

### B. Flujo de Trabajo Diario: Guardar y Subir Cambios

Este es el proceso estándar para guardar tu trabajo y publicarlo.

1.  **Revisar el estado de tus cambios:**
    Antes de nada, es buena práctica ver qué archivos has modificado. Este comando es seguro y no cambia nada.
    ```bash
    git status
    ```

2.  **Preparar todos los cambios para ser guardados:**
    Este comando añade todos los archivos modificados (excepto los ignorados por `.gitignore`, como `node_modules`) a la "zona de preparación".
    ```bash
    git add .
    ```

3.  **Crear un "Punto de Guardado" (Commit):**
    Esto crea una instantánea de tus cambios con un mensaje descriptivo. **Es crucial que el mensaje sea claro** y explique qué hiciste (ej: "Se añadió el botón de pausa", "Corregido error en el temporizador").
    ```bash
    git commit -m "Un mensaje descriptivo de tus cambios aquí"
    ```

4.  **Subir tus cambios a GitHub:**
    Esto envía tus "puntos de guardado" al repositorio en la nube. Este es el paso que activa el despliegue en Cloudflare.
    ```bash
    git push
    ```

### C. La Máquina del Tiempo: Gestionar y Recuperar Versiones

Git es tu red de seguridad. Te permite volver a versiones anteriores si cometes un error.

1.  **Ver el Historial de Puntos de Guardado:**
    Para ver toda la historia de commits, usa este comando. Verás una lista de todos los cambios, quién los hizo y cuándo.
    ```bash
    git log --oneline
    ```

2.  **Inspeccionar una Versión Antigua (Modo Seguro):**
    Si quieres ver cómo estaba el código en un punto anterior sin borrar nada, copia el ID del commit del `git log` y usa:
    ```bash
    # Reemplaza 'abcdef1' con el ID del commit que quieres ver
    git checkout abcdef1
    ```
    Tus archivos cambiarán a como estaban en esa versión. Para volver al presente, ejecuta:
    ```bash
    git checkout main
    ```

3.  **Volver a una Versión Antigua (Borrando Cambios Recientes):**
    **¡CUIDADO!** Este comando es poderoso. Borrará permanentemente todos los commits y cambios que hayas hecho *después* del commit que especifiques. Úsalo si estás seguro de que quieres descartar todo el trabajo reciente.
    ```bash
    # Reemplaza 'abcdef1' con el ID del commit al que quieres regresar
    git reset --hard abcdef1
    ```

4.  **Revertir un Cambio Específico (Método Recomendado):**
    Una forma más segura de deshacer un cambio es con `revert`. En lugar de borrar el historial, crea un **nuevo commit** que es el inverso del commit que quieres deshacer. Es ideal para corregir errores sin reescribir la historia.
    ```bash
    # Reemplaza 'abcdef1' con el ID del commit que quieres deshacer
    git revert abcdef1
    ```
    Después de ejecutarlo, se abrirá un editor para que escribas un mensaje para el nuevo commit de reversión.

### D. Gestión de Dependencias

*   **Instalación Inicial:** Si clonas el proyecto en una nueva máquina, el primer paso es instalar todas las dependencias necesarias con:
    ```bash
    npm install
    ```
*   **Añadir una Nueva Librería:** Para añadir un nuevo paquete al proyecto, usa:
    ```bash
    npm install nombre-del-paquete
    ```

---

## 9. Post-Mortem de Incidente Crítico: Errores de Layout en Cascada

Tras la implementación de la Fase 2.5, se intentó corregir un bug menor de layout que desencadenó una serie de errores en cascada debido a un acoplamiento de estilos no detectado entre componentes. Esta sección sirve como bitácora de dicho incidente para aprendizaje futuro.

*   **Incidente Original:** El orbe de "Ritual Completado" no se centraba correctamente en móviles.
*   **Primer Intento de Arreglo:** Se modificaron los estilos de la clase `.ritual-finished` para forzar el centrado con `display: flex`.
*   **Efecto Secundario #1 (Bug Descubierto):** El arreglo anterior expuso un bug latente: el "salto" del video de fondo al hacer scroll en móviles.
    *   *Causa Raíz:* El componente `VideoBackground` usaba `position: fixed`, pero estaba anidado dentro de un contenedor que usaba `transform`, lo que rompía su anclaje al viewport y lo anclaba al contenedor padre.
*   **Segundo Intento de Arreglo (Arquitectónico):** Para solucionar el "salto" del video, se aplicó una re-arquitectura:
    1.  Se movió `VideoBackground` fuera de su contenedor en `RitualPage.tsx`.
    2.  Se hizo transparente el fondo del `body` en `global.css` para que el video (ahora en la capa inferior) fuera visible.
*   **Efecto Secundario #2 (Bug Introducido):** La `HomePage` (que no tiene video) apareció con un fondo blanco, ya que ahora el `body` era transparente.
*   **Tercer Intento de Arreglo (Parche):** Se intentó arreglar la `HomePage` añadiéndole el fondo oscuro directamente a su contenedor.
*   **Efecto Secundario #3 (Bugs Introducidos):** Este parche causó dos nuevos problemas:
    1.  El fondo de la `HomePage` se mostraba como una "franja vertical" porque el `display: flex` del `body` limitaba su ancho.
    2.  El contenido de la `HomePage` se desalineó verticalmente.
*   **Efecto Secundario #4 (Bug Catastrófico):** Al intentar arreglar la "franja vertical" eliminando el `display: flex` del `body`, se rompió por completo la maquetación de la `RitualPage`, que dependía de esos estilos globales para centrarse.

### Resolución Arquitectónica Definitiva

Se determinó que la causa raíz de toda la cascada de errores era la **violación del principio de independencia de componentes**, específicamente, el uso de estilos de maquetación (`display: flex`) en una etiqueta global como `body`.

La solución final y correcta fue:

1.  **Limpieza de `global.css`:** Se eliminó por completo `display: flex` y cualquier otra regla de maquetación del `body`. Se restauró el fondo oscuro como el estilo por defecto de la aplicación.
2.  **Layouts Encapsulados:** Se refactorizaron **ambas** páginas (`HomePage` y `RitualPage`) para que cada una gestionara su propia maquetación de centrado y altura, sin depender del `body`.
3.  **Override Controlado:** Para el caso especial de la `RitualPage` (que necesita un fondo transparente), se implementó un hook `useEffect` que añade una clase `ritual-page-active` al `body` al montarse, y la retira al desmontarse. Una regla específica en `global.css` (`body.ritual-page-active`) aplica la transparencia únicamente cuando es necesario.

*   **Lección Aprendida:** Los estilos de maquetación (posicionamiento, flexbox, grid) deben ser responsabilidad de los componentes o contenedores de página, no de etiquetas globales como `body` o `html`. El scope global debe reservarse para estilos base (tipografía, colores, etc.), y las excepciones deben manejarse con clases específicas y controladas.

---

## 10. Post-Mortem de Incidente Crítico: Errores de Layout en Cascada

Tras la implementación de la Fase 2.5, se intentó corregir un bug menor de layout que desencadenó una serie de errores en cascada debido a un acoplamiento de estilos no detectado entre componentes. Esta sección sirve como bitácora de dicho incidente para aprendizaje futuro.

*   **Incidente Original:** El orbe de "Ritual Completado" no se centraba correctamente en móviles.
*   **Primer Intento de Arreglo:** Se modificaron los estilos de la clase `.ritual-finished` para forzar el centrado con `display: flex`.
*   **Efecto Secundario #1 (Bug Descubierto):** El arreglo anterior expuso un bug latente: el "salto" del video de fondo al hacer scroll en móviles.
    *   *Causa Raíz:* El componente `VideoBackground` usaba `position: fixed`, pero estaba anidado dentro de un contenedor que usaba `transform`, lo que rompía su anclaje al viewport y lo anclaba al contenedor padre.
*   **Segundo Intento de Arreglo (Arquitectónico):** Para solucionar el "salto" del video, se aplicó una re-arquitectura:
    1.  Se movió `VideoBackground` fuera de su contenedor en `RitualPage.tsx`.
    2.  Se hizo transparente el fondo del `body` en `global.css` para que el video (ahora en la capa inferior) fuera visible.
*   **Efecto Secundario #2 (Bug Introducido):** La `HomePage` (que no tiene video) apareció con un fondo blanco, ya que ahora el `body` era transparente.
*   **Tercer Intento de Arreglo (Parche):** Se intentó arreglar la `HomePage` añadiéndole el fondo oscuro directamente a su contenedor.
*   **Efecto Secundario #3 (Bugs Introducidos):** Este parche causó dos nuevos problemas:
    1.  El fondo de la `HomePage` se mostraba como una "franja vertical" porque el `display: flex` del `body` limitaba su ancho.
    2.  El contenido de la `HomePage` se desalineó verticalmente.
*   **Efecto Secundario #4 (Bug Catastrófico):** Al intentar arreglar la "franja vertical" eliminando el `display: flex` del `body`, se rompió por completo la maquetación de la `RitualPage`, que dependía de esos estilos globales para centrarse.

### Resolución Arquitectónica Definitiva

Se determinó que la causa raíz de toda la cascada de errores era la **violación del principio de independencia de componentes**, específicamente, el uso de estilos de maquetación (`display: flex`) en una etiqueta global como `body`.

La solución final y correcta fue:

1.  **Limpieza de `global.css`:** Se eliminó por completo `display: flex` y cualquier otra regla de maquetación del `body`. Se restauró el fondo oscuro como el estilo por defecto de la aplicación.
2.  **Layouts Encapsulados:** Se refactorizaron **ambas** páginas (`HomePage` y `RitualPage`) para que cada una gestionara su propia maquetación de centrado y altura, sin depender del `body`.
3.  **Override Controlado:** Para el caso especial de la `RitualPage` (que necesita un fondo transparente), se implementó un hook `useEffect` que añade una clase `ritual-page-active` al `body` al montarse, y la retira al desmontarse. Una regla específica en `global.css` (`body.ritual-page-active`) aplica la transparencia únicamente cuando es necesario.

*   **Lección Aprendida:** Los estilos de maquetación (posicionamiento, flexbox, grid) deben ser responsabilidad de los componentes o contenedores de página, no de etiquetas globales como `body` o `html`. El scope global debe reservarse para estilos base (tipografía, colores, etc.), y las excepciones deben manejarse con clases específicas y controladas.

---

## 11. Fase 3: Rediseño Premium de la Página de Inicio (El Altar del Iniciado)

*   **Estado:** EN CURSO
*   **Objetivo:** Transformar la página de inicio de una simple lista a una experiencia de usuario premium, atractiva y que comunique el valor del santuario.

### Principio Clave de Arquitectura

*   **INDEPENDENCIA TOTAL DE COMPONENTES:** Esta es la regla fundamental para esta fase. Los estilos y la estructura de la `HomePage` deben ser completamente autónomos y no deben, bajo ninguna circunstancia, afectar o ser afectados por los estilos de la `RitualPage` o los estilos globales de maquetación.

### Implementación (Iteración 1): El Cosmos Viviente

*   **Objetivo:** Añadir una atmósfera más "mágica" y "viva" a la página de inicio.
*   **Pasos Técnicos:**
    1.  **Fondo Cósmico Animado:** Se reemplazó el fondo estático del `body` por un gradiente CSS animado de gran tamaño para simular una nebulosa en lento movimiento.
    2.  **Tarjetas de Cristal Esmerilado:** Se rediseñaron las tarjetas de los rituales con un fondo semi-transparente y un filtro `backdrop-filter: blur(10px)` para crear un efecto de profundidad, permitiendo que el fondo animado se vea a través de ellas.
    3.  **Jerarquía Visual:** Se ajustó la maquetación para destacar el ritual más reciente y presentar los demás en una cuadrícula responsiva.

### Feedback (Iteración 1) y Siguientes Pasos

*   **Feedback del Usuario:** La mejora es notable, pero el resultado aún no tiene el "alma" o el factor "wow" deseado. El fondo animado, aunque es una mejora, puede desentonar con la paleta de colores oscura de los rituales y no se percibe suficientemente "premium" o "mágico".
*   **Siguiente Objetivo:** Investigar e implementar una solución más avanzada, posiblemente utilizando JavaScript, para crear un fondo que sea verdaderamente impresionante, interactivo y que se sienta como un santuario digital. La meta es lograr un impacto visual inmediato que invite al usuario a quedarse y explorar.

### Implementación (Iteración 2): El Santuario Interactivo

*   **Objetivo:** Dar vida a la página de inicio, convirtiendo las tarjetas de rituales en objetos 3D interactivos que responden al movimiento del usuario, mejorando la sensación "premium" y el factor "wow".
*   **Estado:** **(COMPLETADO)**

**Pasos Técnicos:**

1.  **Lienzo Cósmico Mejorado:** Se reemplazó el fondo animado por un componente de canvas (`CosmicCanvas.tsx`) que renderiza un campo de estrellas titilantes con un efecto de nebulosa CSS, creando una atmósfera más sutil y mágica.
2.  **Abstracción de Componente:** La lógica y estructura de cada tarjeta se encapsuló en su propio componente, `RitualCard.tsx`, para mejorar la reutilización y mantenibilidad del código.
3.  **Implementación de Lógica 3D (JavaScript):**
    *   Se añadió un manejador de eventos `onMouseMove` directamente en el componente `RitualCard.tsx`.
    *   Este script calcula la posición del cursor del usuario relativa a la tarjeta y la traduce a valores de rotación en los ejes X e Y.
    *   Los valores de rotación se aplican dinámicamente al estilo de la tarjeta a través de variables CSS (`--rotateX`, `--rotateY`), pasando la información del estado de React al CSS.
    *   Se implementó un manejador `onMouseLeave` para resetear la rotación cuando el cursor abandona la tarjeta, asegurando una transición de vuelta suave.
4.  **Activación del Efecto 3D (CSS):**
    *   Se estableció un espacio 3D en el contenedor de la cuadrícula (`.ritual-grid`) usando la propiedad `perspective`.
    *   En la hoja de estilos `HomePage.css`, se añadió `transform-style: preserve-3d` a la clase `.ritual-card` para permitir que sea manipulada en un entorno 3D.
    *   Se actualizó el estado `:hover` de la tarjeta para que utilice las variables `--rotateX` y `--rotateY` y aplique la rotación 3D, combinándola con los efectos de "levantamiento" y escala ya existentes.
    *   Se ajustó la propiedad `transition` para una respuesta de rotación más rápida y fluida (`transform 0.2s ease-out`).

*   **Resultado:** Las tarjetas ahora se inclinan y giran siguiendo el movimiento del ratón, creando una experiencia táctil y visualmente atractiva que eleva la calidad percibida de la interfaz.### Implementación (Iteración 3): Ajuste de Visibilidad y Claridad

*   **Objetivo:** Mejorar la legibilidad y el impacto visual de las tarjetas de rituales en la biblioteca, especialmente en dispositivos móviles donde el borde era poco visible.
*   **Estado:** **(Parcialmente Completado)**

**Pasos Técnicos:**

1.  **Análisis y Diagnóstico:** Se detectó que el borde de las tarjetas de la biblioteca (`ritual-card`) era demasiado sutil (`1px` y muy transparente), causando que se confundiera con el fondo de la página. Múltiples intentos de implementar un borde animado con técnicas avanzadas de CSS (`@property`, `conic-gradient`) fallaron, indicando posibles problemas de compatibilidad o especificidad.
2.  **Resolución (Punto 1 - Borde):** Tras un proceso de depuración, se optó por la solución más robusta y directa:
    *   Se modificó la regla de CSS para `.ritual-card` en `src/styles/HomePage.css`.
    *   Se aumentó el grosor del borde a `2px` y su opacidad a `0.5` (`rgba(255, 195, 113, 0.5)`).
    *   Este cambio simple y efectivo asegura que el borde sea claramente visible en todos los dispositivos sin introducir animaciones complejas. **(COMPLETADO)**

**Siguiente Paso Pendiente (Punto 2):**

*   **Tarea:** Implementar el **"Efecto de Brillo Deslizante" (Shimmer Effect)**.
*   **Descripción:** Añadir una animación de CSS que haga que un haz de luz diagonal recorra periódicamente la superficie de las tarjetas de la biblioteca. El objetivo es darles un "pulso" de vida y un toque dinámico que sea visible a primera vista, sin necesidad de interacción por parte del usuario. Esta tarea completaría el "wow factor" para las tarjetas. **(PENDIENTE)**
