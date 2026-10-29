# FRATELLI 21 / FDC21 — Sitio oficial

Sitio web institucional de **Fratelli Di Cuore 21 (FDC21)**, equipo de la promoción 2021 del colegio Manuel Antonio Ramírez Barinaga («Maristas»). **Fundado en 2023.** Lema: **«Unidos por el mismo objetivo»**.

## Qué incluye

- Portada con **fotografía real del plantel 2026** y el **escudo oficial exacto** enviado por el club.
- Plantilla **actual de 12 jugadores** y cuerpo técnico (Max Santa Cruz y Fernando Pérez).
- Fichas individuales accesibles desde la plantilla, incluyendo exjugadores.
- Partidos, goles y resultados aportados por el club desde **2023 hasta 2026**.
- Goleadores históricos, estadísticas calculadas por temporada y comparaciones.
- Historia institucional y evolución de las camisetas (2023, 2024, 2025, 2026).
- Noticias, previas, crónicas y galería con fotografías auténticas.
- Optimización básica móvil, metadatos SEO, etiquetas Open Graph, favicon y navegación accesible.
- Funcionamiento **100 % estático** (HTML, CSS y JavaScript), sin backend ni base de datos.

## 1. Publicar GRATIS en GitHub Pages

1. **Descomprime** el archivo ZIP de entrega en tu computadora.
2. Abre GitHub e inicia sesión.
3. Crea un repositorio público llamado `fdc21` (o el nombre que prefieras).
4. Sube **todos los archivos y carpetas contenidos en la raíz del ZIP** (`index.html`, `css/`, `js/`, `assets/`, etc.) a la **raíz del repositorio**. No subas solo el ZIP ni metas todo dentro de otra carpeta adicional.
5. Confirma los cambios con **Commit changes**.
6. En el repositorio, abre **Settings → Pages**.
7. En **Build and deployment → Source**, escoge **Deploy from a branch**.
8. En **Branch**, selecciona `main` y `/(root)`; presiona **Save**.
9. GitHub mostrará la dirección publicada en la sección Pages cuando termine el despliegue.

Si tu usuario en GitHub es `waldirmaker` y el repositorio se llama `fdc21`, la dirección *esperada* será:

`https://waldirmaker.github.io/fdc21/`

Esto es un **ejemplo de ruta**, no un sitio ya publicado. Si eliges otro usuario o nombre de repositorio, cambiará el enlace.

> El sitio usa rutas relativas, por lo que funciona también dentro de `/fdc21/` sin cambiar los enlaces internos.

## 2. Actualizar un resultado

Abre `js/data/matches.js`, busca el partido por su `id` y cambia sus valores. Por ejemplo, cuando tengas el resultado confirmado de `2026-qf`, sustituye:

```javascript
{id:'2026-qf',year:2026,phase:'Cuartos de final',opponent:'Promoción 2012',gf:null,ga:null,goals:[],date:'2026-11-01T12:30:00-05:00',dateLabel:'Domingo 1 de noviembre de 2026',timeLabel:'12:30 p. m.',venue:'Cancha La 10, San Juan de Miraflores'}
```

por el mismo objeto con `gf` (goles de FDC21), `ga` (goles del rival), `goals` (goleadores reales) y, si corresponde, `penalties`. No es necesario editar la página de partidos ni la de estadísticas: se actualizan automáticamente con los datos.

Si añades un nuevo partido, agrega otro objeto en el array siguiendo el mismo formato y asignándole un `id` único.

**Próximo partido automático:** la portada selecciona el próximo encuentro pendiente con fecha desde `matches.js`. Si todos los encuentros pendientes tienen fechas pasadas, mantiene el último como «resultado sin confirmar». Al confirmar un marcador y agregar el siguiente partido con su fecha, la tarjeta se actualiza sin editar el HTML ni `main.js`.

## 3. Actualizar plantilla o retratos

Archivo: `js/data/players.js`.

Campos principales:

```javascript
{
  id:'enzo-carrero',
  name:'Enzo Carrero',
  number:11,
  position:'Delantero / volante ofensivo',
  category:'delanteros',
  active:true,
  captain:true,
  image:null,
  historyGoals:6
}
```

- `active:true`: jugador vigente, aparece en la plantilla.
- `active:false`: exjugador; aparece en Historia y conserva su perfil.
- `image:null`: retrato no recibido. Para añadirlo, sube la fotografía individual correcta a `assets/jugadores/` (puedes crear esa carpeta) y coloca `image:'assets/jugadores/enzo-carrero.webp'`.
- No mezclar las fotografías individuales de jugadores ni asignar caras basadas en suposiciones.
- `historyGoals`: tabla histórica reportada por el club; revisarla cuando haya un dato validado.

**Plantilla 2026:** 12 jugadores activos. **Exjugadores:** Fabricio Buenaño, Fabricio Morote y Fabrizio Quispe.

## 4. Actualizar los goleadores históricos

Archivo: `js/data/statistics.js`. Cambia únicamente los nombres y las cifras confirmadas del array `topScorers`. El ranking de la página se generará con esos datos.

**Advertencia de integridad de datos:** la tabla histórica suministrada tiene pequeñas diferencias respecto a la suma de goles detallados en algunos partidos. El sitio **no modifica silenciosamente** los valores originales: los presenta como «históricos reportados / pendientes de conciliación». Verifica actas y resultados antes de actualizar la tabla.

## 5. Añadir noticias

Archivo: `js/data/news.js`. Copia un objeto existente y modifica:

- `id`: identificador único, sin espacios (por ejemplo `partido-2026-semifinal`).
- `title`: título periodístico real.
- `category`: por ejemplo `Previa`, `Historia`, `Club` o `Análisis` (estos son los filtros ya existentes; agrega categorías nuevas en `js/main.js` si las necesitas).
- `date`: fecha ISO (`AAAA-MM-DD`).
- `image`: ruta relativa a una imagen propia del club.
- `excerpt`: descripción breve.
- `paragraphs`: array de párrafos completos.

**No inventar citas, declaraciones, entrevistas, resultados ni contenidos oficiales de jugadores.** Publicar solo después de verificar la información.

## 6. Añadir fotografías a la galería

1. Guarda la foto en `assets/galeria/`, preferiblemente como WebP para reducir peso.
2. Edita el array `gallery` dentro de `js/main.js`, con una línea como:

```javascript
['assets/galeria/foto-2026-03.webp',2026,'Equipo de Fratelli 21 en 2026']
```

Usa `0` como año cuando no se haya confirmado su fecha. Cada foto puede abrirse en grande y navegarse con las flechas del teclado.

## 7. Archivos importantes

```text
index.html                 Inicio
plantilla.html             Plantilla y cuerpo técnico
jugador.html               Ficha individual (query ?id=...)
partidos.html              Resultados por año
estadisticas.html          Goleadores y métricas
historia.html              Historia, camisetas y exjugadores
noticias.html              Noticias y artículos (?id=...)
galeria.html               Fotos con visor ampliable
404.html                   Página de error
css/styles.css             Diseño responsive
js/main.js                 Componentes y comportamiento
js/data/players.js         Plantilla
js/data/matches.js         Partidos y goles por encuentro
js/data/statistics.js      Ranking histórico
js/data/news.js            Noticias
assets/escudo/             Escudo original, escudo recortado y favicon
assets/temporadas/         Camisetas históricas
assets/galeria/            Fotos grupales originales, optimizadas en WebP
assets/og-cover.jpg        Imagen de vista previa para redes
```

## 8. Información que queda por completar

- Fotografías individuales verificadas de los jugadores y el staff.
- Vicecapitán (no confirmado).
- Asistencias y partidos jugados individuales (no proporcionados).
- Desglose y conciliación final de los goleadores históricos.
- Resultados posteriores a la fase de grupos de 2026.
- Declaraciones auténticas, entrevistas y materiales audiovisuales nuevos.
- Contacto institucional público, si el club decide mostrarlo.

## 9. Compartir la web en redes (Open Graph)

Todos los HTML traen etiquetas `og:title`, `og:description` y `og:image`. Para mejorar la compatibilidad con WhatsApp, Facebook e Instagram, **una vez publicada la web** cambia el valor relativo:

```html
<meta property="og:image" content="assets/og-cover.jpg">
```

por la **URL pública absoluta** de la imagen, por ejemplo `https://TU_USUARIO.github.io/fdc21/assets/og-cover.jpg`. Haz lo mismo para `twitter:image`.

No se incluye un dominio inventado ni un enlace activo de publicación.

## 10. Ejecutar localmente

Puedes abrir `index.html` haciendo doble clic. También puedes abrir una terminal dentro de la carpeta y ejecutar:

```bash
python -m http.server 8000
```

Entonces visita `http://localhost:8000/`. No se requiere `npm install` ni configuración de servidor.

---

**Identidad:** usar siempre el escudo oficial suministrado por Fratelli 21. La imagen `escudo-recortado.png` es el **escudo original con el fondo externo transparente**, no una versión redibujada. El archivo completo es `assets/escudo/escudo-oficial.png`.
