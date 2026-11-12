
import { useState } from "react";
import {
  Crown,
  Ticket,
  Copy,
  Check,
  Link2,
  MessageCircle,
  Sparkles,
  Send,
  UserRound,
  AlertCircle,
  ExternalLink,
} from "lucide-react";

// ==========================================
// CONFIGURACIÓN - WEDLY
// ==========================================

const CONFIG = {
  quinceanera: "Sheila",
  evento: "Mis XV Años",
  fecha: "16 de enero de 2027",
  rutaInvitacion: "/",
};

// ==========================================
// PALETA DE COLORES
// ==========================================

const colores = {
  cafe: "#42291E",
  cafeProfundo: "#24150F",
  cafeClaro: "#75533D",
  champagne: "#F1E2C8",
  beige: "#E8D9C6",
  dorado: "#C9A15F",
  doradoClaro: "#E7C991",
  marfil: "#FFF8ED",
};

// ==========================================
// CREAR IDENTIFICADOR CODIFICADO
//
// Compatible con ConfirmacionAsistencia.jsx
//
// n = nombre del invitado
// p = número de pases
// r = identificador aleatorio
// ==========================================

function crearId(nombreInvitado, numeroPases) {
  const datos = {
    n: nombreInvitado,
    p: numeroPases,
    r: crypto.randomUUID(),
  };

  const texto = JSON.stringify(datos);

  const bytes = new TextEncoder().encode(texto);

  let binario = "";

  bytes.forEach((byte) => {
    binario += String.fromCharCode(byte);
  });

  return btoa(binario)
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/g, "");
}

// ==========================================
// COMPONENTE PRINCIPAL
// ==========================================

export default function Generador() {
  // ==========================================
  // ESTADOS
  // ==========================================

  const [nombre, setNombre] = useState("");
  const [pases, setPases] = useState("1");

  const [link, setLink] = useState("");
  const [mensaje, setMensaje] = useState("");

  const [linkCopiado, setLinkCopiado] =
    useState(false);

  const [mensajeCopiado, setMensajeCopiado] =
    useState(false);

  const [error, setError] = useState("");

  // ==========================================
  // LIMPIAR RESULTADOS
  // ==========================================

  const limpiarResultados = () => {
    setLink("");
    setMensaje("");
    setLinkCopiado(false);
    setMensajeCopiado(false);
    setError("");
  };

  // ==========================================
  // CAMBIAR NOMBRE
  // ==========================================

  const cambiarNombre = (valor) => {
    setNombre(valor);
    limpiarResultados();
  };

  // ==========================================
  // CAMBIAR PASES
  // ==========================================

  const cambiarPases = (valor) => {
    setPases(valor);
    limpiarResultados();
  };

  // ==========================================
  // GENERAR ENLACE
  // ==========================================

  const generarLink = () => {
    const nombreLimpio = nombre.trim();
    const numeroPases = Number(pases);

    // Validar nombre
    if (!nombreLimpio) {
      setError(
        "Por favor, escribe el nombre del invitado o familia."
      );
      return;
    }

    // Validar pases
    if (
      !Number.isInteger(numeroPases) ||
      numeroPases < 1 ||
      numeroPases > 100
    ) {
      setError(
        "Ingresa un número válido de pases entre 1 y 100."
      );
      return;
    }

    setError("");

    // Crear identificador
    let id;

    try {
      id = crearId(
        nombreLimpio,
        numeroPases
      );
    } catch (err) {
      console.error(
        "Error al generar identificador:",
        err
      );

      setError(
        "No fue posible generar la invitación. Inténtalo nuevamente."
      );

      return;
    }

    // Crear URL
    const url = new URL(
      CONFIG.rutaInvitacion,
      window.location.origin
    );

    url.searchParams.set("id", id);

    const enlaceGenerado = url.toString();

    setLink(enlaceGenerado);

    // Texto de pases
    const textoPases =
      numeroPases === 1
        ? "1 pase"
        : `${numeroPases} pases`;

    // ==========================================
    // MENSAJE PARA WHATSAPP
    // ==========================================

    const mensajeWhatsApp = `✨ *MIS XV AÑOS* ✨
👑 *${CONFIG.quinceanera}*

Hola, *${nombreLimpio}* 🤎

Con mucha alegría quiero invitarte a celebrar conmigo uno de los días más especiales de mi vida.

He reservado especialmente para ti:

🎟️ *${textoPases}*

📅 *${CONFIG.fecha}*

En el siguiente enlace encontrarás todos los detalles de mi celebración:

${enlaceGenerado}

Tu presencia hará que esta noche sea aún más especial.

Con cariño,
*${CONFIG.quinceanera}* ✨`;

    setMensaje(mensajeWhatsApp);

    setLinkCopiado(false);
    setMensajeCopiado(false);
  };

  // ==========================================
  // COPIAR TEXTO
  // ==========================================

  const copiarTexto = async (texto, tipo) => {
    if (!texto) return;

    try {
      await navigator.clipboard.writeText(texto);

      if (tipo === "link") {
        setLinkCopiado(true);
      } else {
        setMensajeCopiado(true);
      }

      setError("");
    } catch (err) {
      console.error(
        "No se pudo copiar:",
        err
      );

      setError(
        "No se pudo copiar automáticamente. Selecciona el texto y cópialo manualmente."
      );
    }
  };

  // ==========================================
  // COMPARTIR POR WHATSAPP
  // ==========================================

  const compartirWhatsApp = () => {
    if (!mensaje) return;

    const urlWhatsApp =
      "https://api.whatsapp.com/send?text=" +
      encodeURIComponent(mensaje);

    window.open(
      urlWhatsApp,
      "_blank",
      "noopener,noreferrer"
    );
  };

  // ==========================================
  // ESTILOS REUTILIZABLES
  // ==========================================

  const estiloCampo = {
    backgroundColor: colores.marfil,
    borderColor: "rgba(201,161,95,0.5)",
    color: colores.cafe,
  };

  const fuenteElegante =
    '"Playfair Display", Georgia, serif';

  // ==========================================
  // RENDER PRINCIPAL
  // ==========================================

  return (
    <main
      className="
        min-h-screen w-full
        overflow-hidden
        px-4 py-12
        sm:px-8 sm:py-16
      "
      style={{
        backgroundColor: colores.beige,
        color: colores.cafe,
      }}
    >
      {/* ======================================
          ENCABEZADO
      ====================================== */}

      <div
        className="
          mx-auto mb-12
          max-w-5xl text-center
        "
      >
        {/* CORONA */}

        <div className="mb-5 flex justify-center">
          <Crown
            size={38}
            strokeWidth={1.1}
            color={colores.dorado}
          />
        </div>

        {/* MARCA */}

        <p
          className="
            text-[10px] font-semibold
            uppercase tracking-[0.35em]
          "
          style={{
            color: colores.cafeClaro,
          }}
        >
          Wedly · Panel de invitaciones
        </p>

        {/* TÍTULO */}

        <h1
          className="
            mt-5 font-serif
            text-[clamp(2.5rem,6vw,4.5rem)]
            leading-tight
          "
          style={{
            fontFamily: fuenteElegante,
            color: colores.cafe,
          }}
        >
          Generador de
          <br />

          <span
            className="italic"
            style={{
              color: colores.dorado,
            }}
          >
            invitaciones
          </span>
        </h1>

        {/* ORNAMENTO */}

        <div
          className="
            my-7 flex items-center
            justify-center gap-4
          "
        >
          <span
            className="h-px w-12"
            style={{
              backgroundColor: colores.dorado,
            }}
          />

          <Sparkles
            size={19}
            color={colores.dorado}
          />

          <span
            className="h-px w-12"
            style={{
              backgroundColor: colores.dorado,
            }}
          />
        </div>

        {/* EVENTO */}

        <p
          className="
            font-serif text-lg
            sm:text-xl
          "
          style={{
            color: colores.cafeClaro,
            fontFamily: fuenteElegante,
          }}
        >
          XV Años de {CONFIG.quinceanera}
        </p>
      </div>

      {/* ======================================
          GRID PRINCIPAL
      ====================================== */}

      <div
        className="
          mx-auto grid
          max-w-6xl gap-8
          lg:grid-cols-[0.95fr_1.05fr]
          lg:gap-10
        "
      >
        {/* ======================================
            PANEL DEL GENERADOR
        ====================================== */}

        <section
          className="
            relative overflow-hidden
            border px-6 py-10
            sm:px-9 sm:py-12
          "
          style={{
            backgroundColor: colores.marfil,
            borderColor:
              "rgba(201,161,95,0.55)",
            boxShadow:
              "0 15px 40px rgba(66,41,30,0.09)",
          }}
        >
          {/* MARCO INTERIOR */}

          <div
            className="
              pointer-events-none
              absolute inset-3 border
            "
            style={{
              borderColor:
                "rgba(201,161,95,0.2)",
            }}
          />

          <div className="relative z-10">
            {/* SUBTÍTULO */}

            <p
              className="
                text-[10px] uppercase
                tracking-[0.3em]
              "
              style={{
                color: colores.dorado,
              }}
            >
              Administración de invitados
            </p>

            {/* TÍTULO */}

            <h2
              className="
                mt-3 font-serif
                text-3xl
              "
              style={{
                fontFamily: fuenteElegante,
              }}
            >
              Crear invitación
            </h2>

            {/* DESCRIPCIÓN */}

            <p
              className="
                mt-4 text-sm
                leading-relaxed
              "
              style={{
                color: colores.cafeClaro,
              }}
            >
              Personaliza el nombre del invitado
              o familia, asigna sus pases
              autorizados y genera un enlace
              individual.
            </p>

            {/* ======================================
                NOMBRE DEL INVITADO
            ====================================== */}

            <div className="mt-9">
              <label
                htmlFor="nombre-invitado"
                className="
                  mb-3 flex items-center
                  gap-2 text-xs
                  font-semibold uppercase
                  tracking-[0.15em]
                "
                style={{
                  color: colores.cafe,
                }}
              >
                <UserRound
                  size={19}
                  strokeWidth={1.5}
                  color={colores.dorado}
                />

                Nombre del invitado o familia
              </label>

              <input
                id="nombre-invitado"
                type="text"
                placeholder="Ej. Familia Hernández"
                value={nombre}
                maxLength={100}
                onChange={(e) =>
                  cambiarNombre(e.target.value)
                }
                className="
                  w-full border
                  px-5 py-4
                  text-base outline-none
                  transition-colors
                  focus:border-[#C9A15F]
                "
                style={estiloCampo}
              />

              <p
                className="
                  mt-2 text-xs
                  leading-relaxed
                "
                style={{
                  color: colores.cafeClaro,
                }}
              >
                Este nombre se incluirá en el
                enlace personalizado y en el
                mensaje de WhatsApp.
              </p>
            </div>

            {/* ======================================
                NÚMERO DE PASES
            ====================================== */}

            <div className="mt-7">
              <label
                htmlFor="numero-pases"
                className="
                  mb-3 flex items-center
                  gap-2 text-xs
                  font-semibold uppercase
                  tracking-[0.15em]
                "
                style={{
                  color: colores.cafe,
                }}
              >
                <Ticket
                  size={19}
                  strokeWidth={1.5}
                  color={colores.dorado}
                />

                Número de pases
              </label>

              <input
                id="numero-pases"
                type="number"
                min="1"
                max="100"
                step="1"
                inputMode="numeric"
                value={pases}
                onChange={(e) =>
                  cambiarPases(e.target.value)
                }
                className="
                  w-full border
                  px-5 py-4
                  text-lg outline-none
                  transition-colors
                  focus:border-[#C9A15F]
                "
                style={estiloCampo}
              />
            </div>

            {/* ======================================
                RESUMEN DE INVITACIÓN
            ====================================== */}

            <div
              className="
                mt-7 border
                px-5 py-6
              "
              style={{
                backgroundColor: colores.beige,
                borderColor:
                  "rgba(201,161,95,0.35)",
              }}
            >
              <p
                className="
                  text-center text-[10px]
                  font-semibold uppercase
                  tracking-[0.2em]
                "
                style={{
                  color: colores.cafeClaro,
                }}
              >
                Vista de la asignación
              </p>

              {/* NOMBRE */}

              <div
                className="
                  mt-5 text-center
                "
              >
                <UserRound
                  size={23}
                  strokeWidth={1.3}
                  color={colores.dorado}
                  className="mx-auto"
                />

                <p
                  className="
                    mt-3 font-serif
                    text-xl
                    break-words
                  "
                  style={{
                    fontFamily: fuenteElegante,
                    color: colores.cafe,
                  }}
                >
                  {nombre.trim() ||
                    "Nombre del invitado"}
                </p>
              </div>

              {/* DIVISOR */}

              <div
                className="
                  mx-auto my-5
                  h-px w-24
                "
                style={{
                  backgroundColor:
                    "rgba(201,161,95,0.6)",
                }}
              />

              {/* PASES */}

              <div
                className="
                  flex items-center
                  justify-center gap-4
                "
              >
                <Ticket
                  size={30}
                  strokeWidth={1.2}
                  color={colores.dorado}
                />

                <div>
                  <p
                    className="
                      text-[10px] uppercase
                      tracking-[0.2em]
                    "
                    style={{
                      color: colores.cafeClaro,
                    }}
                  >
                    Pases autorizados
                  </p>

                  <p
                    className="
                      mt-1 font-serif
                      text-3xl
                    "
                    style={{
                      fontFamily: fuenteElegante,
                    }}
                  >
                    {pases || "0"}
                  </p>
                </div>
              </div>
            </div>

            {/* ======================================
                BOTÓN GENERAR
            ====================================== */}

            <button
              type="button"
              onClick={generarLink}
              className="
                mt-7 flex w-full
                items-center justify-center
                gap-3 rounded-full
                px-6 py-4
                text-sm font-semibold
                transition
                hover:opacity-90
                active:scale-[0.98]
              "
              style={{
                backgroundColor: colores.cafe,
                color: colores.marfil,
              }}
            >
              <Link2 size={19} />

              Generar invitación
            </button>

            {/* ======================================
                ERROR
            ====================================== */}

            {error && (
              <div
                role="alert"
                className="
                  mt-5 flex items-start
                  gap-3 border p-4
                "
                style={{
                  backgroundColor: "#F5E6DF",
                  borderColor: "#C58E7D",
                  color: "#9B382F",
                }}
              >
                <AlertCircle
                  size={19}
                  className="mt-0.5 shrink-0"
                />

                <p className="text-sm leading-relaxed">
                  {error}
                </p>
              </div>
            )}

            {/* ======================================
                ENLACE GENERADO
            ====================================== */}

            {link && (
              <div className="mt-9">
                <p
                  className="
                    mb-3 text-[10px]
                    font-semibold uppercase
                    tracking-[0.2em]
                  "
                  style={{
                    color: colores.cafeClaro,
                  }}
                >
                  Enlace personalizado
                </p>

                {/* URL */}

                <div
                  className="
                    break-all border
                    p-4 text-xs
                    leading-relaxed
                  "
                  style={estiloCampo}
                >
                  {link}
                </div>

                {/* COPIAR ENLACE */}

                <button
                  type="button"
                  onClick={() =>
                    copiarTexto(link, "link")
                  }
                  className="
                    mt-3 flex w-full
                    items-center justify-center
                    gap-2 border
                    px-5 py-3
                    text-sm font-medium
                    transition
                    hover:opacity-80
                  "
                  style={{
                    borderColor: colores.dorado,
                  }}
                >
                  {linkCopiado ? (
                    <Check size={17} />
                  ) : (
                    <Copy size={17} />
                  )}

                  {linkCopiado
                    ? "Enlace copiado"
                    : "Copiar enlace"}
                </button>

                {/* ABRIR INVITACIÓN */}

                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    mt-3 flex w-full
                    items-center justify-center
                    gap-2 border
                    px-5 py-3
                    text-sm font-medium
                    transition
                    hover:opacity-80
                  "
                  style={{
                    borderColor:
                      "rgba(201,161,95,0.4)",
                    color: colores.cafeClaro,
                  }}
                >
                  <ExternalLink size={17} />

                  Abrir invitación
                </a>
              </div>
            )}

            {/* ======================================
                MENSAJE WHATSAPP
            ====================================== */}

            {link && (
              <div
                className="
                  mt-9 border-t pt-8
                "
                style={{
                  borderColor:
                    "rgba(201,161,95,0.35)",
                }}
              >
                <div className="flex items-center gap-3">
                  <MessageCircle
                    size={22}
                    color={colores.dorado}
                  />

                  <h3
                    className="
                      font-serif text-2xl
                    "
                    style={{
                      fontFamily: fuenteElegante,
                    }}
                  >
                    Mensaje para WhatsApp
                  </h3>
                </div>

                <p
                  className="
                    mt-3 text-sm
                    leading-relaxed
                  "
                  style={{
                    color: colores.cafeClaro,
                  }}
                >
                  Puedes editar el mensaje antes
                  de copiarlo o compartirlo.
                </p>

                {/* MENSAJE EDITABLE */}

                <textarea
                  value={mensaje}
                  onChange={(e) => {
                    setMensaje(e.target.value);
                    setMensajeCopiado(false);
                  }}
                  rows={14}
                  className="
                    mt-5 w-full
                    resize-y border
                    p-4 text-sm
                    leading-relaxed
                    outline-none
                    focus:border-[#C9A15F]
                  "
                  style={estiloCampo}
                />

                {/* COPIAR MENSAJE */}

                <button
                  type="button"
                  onClick={() =>
                    copiarTexto(
                      mensaje,
                      "mensaje"
                    )
                  }
                  className="
                    mt-3 flex w-full
                    items-center justify-center
                    gap-2 rounded-full
                    px-6 py-4
                    text-sm font-semibold
                    transition hover:opacity-90
                  "
                  style={{
                    backgroundColor:
                      colores.cafeClaro,
                    color: colores.marfil,
                  }}
                >
                  {mensajeCopiado ? (
                    <Check size={18} />
                  ) : (
                    <Copy size={18} />
                  )}

                  {mensajeCopiado
                    ? "Mensaje copiado"
                    : "Copiar mensaje"}
                </button>

                {/* COMPARTIR WHATSAPP */}

                <button
                  type="button"
                  onClick={compartirWhatsApp}
                  className="
                    mt-3 flex w-full
                    items-center justify-center
                    gap-2 border
                    px-6 py-4
                    text-sm font-semibold
                    transition hover:opacity-80
                  "
                  style={{
                    borderColor: colores.dorado,
                    color: colores.cafe,
                  }}
                >
                  <Send size={18} />

                  Compartir por WhatsApp
                </button>
              </div>
            )}
          </div>
        </section>

        {/* ======================================
            VISTA PREVIA
        ====================================== */}

        <section
          className="
            flex flex-col items-center
          "
        >
          {/* TÍTULO */}

          <div className="mb-6 text-center">
            <p
              className="
                text-[10px] uppercase
                tracking-[0.3em]
              "
              style={{
                color: colores.cafeClaro,
              }}
            >
              Vista previa
            </p>

            <h2
              className="
                mt-3 font-serif
                text-3xl
              "
              style={{
                fontFamily: fuenteElegante,
              }}
            >
              {CONFIG.quinceanera}
            </h2>
          </div>

          {/* ======================================
              PORTADA ESTILIZADA
          ====================================== */}

          <div
            className="
              relative w-full
              max-w-[430px]
              overflow-hidden
              border p-3
            "
            style={{
              backgroundColor: colores.cafeProfundo,
              borderColor: colores.dorado,
              boxShadow:
                "0 20px 55px rgba(66,41,30,0.2)",
            }}
          >
            <div
              className="
                relative flex
                min-h-[540px]
                flex-col items-center
                justify-center
                overflow-hidden
                border px-6
                text-center
              "
              style={{
                borderColor:
                  "rgba(231,201,145,0.5)",
                backgroundColor: colores.cafe,
              }}
            >
              {/* ARCO EXTERIOR */}

              <div
                className="
                  pointer-events-none
                  absolute left-1/2
                  top-10 h-[390px]
                  w-[80%]
                  -translate-x-1/2
                  rounded-t-[220px]
                  border
                "
                style={{
                  borderColor:
                    "rgba(231,201,145,0.45)",
                }}
              />

              {/* ARCO INTERIOR */}

              <div
                className="
                  pointer-events-none
                  absolute left-1/2
                  top-14 h-[370px]
                  w-[72%]
                  -translate-x-1/2
                  rounded-t-[220px]
                  border
                "
                style={{
                  borderColor:
                    "rgba(231,201,145,0.22)",
                }}
              />

              {/* CONTENIDO */}

              <div className="relative z-10">
                <Crown
                  size={42}
                  strokeWidth={1}
                  color={colores.doradoClaro}
                  className="mx-auto"
                />

                <p
                  className="
                    mt-8 text-xs uppercase
                    tracking-[0.35em]
                  "
                  style={{
                    color: colores.champagne,
                  }}
                >
                  {CONFIG.evento}
                </p>

                {/* NOMBRE QUINCEAÑERA */}

                <h3
                  className="
                    mt-6 font-serif
                    text-[clamp(2.8rem,7vw,4rem)]
                    leading-tight
                  "
                  style={{
                    fontFamily: fuenteElegante,
                    color: colores.marfil,
                  }}
                >
                  {CONFIG.quinceanera}
                </h3>

                {/* ORNAMENTO */}

                <div
                  className="
                    my-8 flex items-center
                    justify-center gap-4
                  "
                >
                  <span
                    className="h-px w-10"
                    style={{
                      backgroundColor: colores.dorado,
                    }}
                  />

                  <Sparkles
                    size={18}
                    color={colores.doradoClaro}
                  />

                  <span
                    className="h-px w-10"
                    style={{
                      backgroundColor: colores.dorado,
                    }}
                  />
                </div>

                {/* FECHA */}

                <p
                  className="
                    font-serif text-lg
                  "
                  style={{
                    fontFamily: fuenteElegante,
                    color: colores.champagne,
                  }}
                >
                  {CONFIG.fecha}
                </p>

                {/* ======================================
                    INVITADO PERSONALIZADO
                ====================================== */}

                <div
                  className="
                    mx-auto mt-8
                    max-w-[290px]
                    border px-5 py-5
                  "
                  style={{
                    borderColor:
                      "rgba(231,201,145,0.6)",
                  }}
                >
                  <p
                    className="
                      text-[10px] uppercase
                      tracking-[0.2em]
                    "
                    style={{
                      color: colores.champagne,
                    }}
                  >
                    Invitación especial para
                  </p>

                  <p
                    className="
                      mt-3 break-words
                      font-serif text-xl
                      italic
                    "
                    style={{
                      fontFamily: fuenteElegante,
                      color: colores.doradoClaro,
                    }}
                  >
                    {nombre.trim() ||
                      "Tu invitado"}
                  </p>

                  <div
                    className="
                      mx-auto my-4
                      h-px w-16
                    "
                    style={{
                      backgroundColor:
                        "rgba(231,201,145,0.5)",
                    }}
                  />

                  <div
                    className="
                      flex items-center
                      justify-center gap-2
                    "
                  >
                    <Ticket
                      size={17}
                      color={colores.doradoClaro}
                    />

                    <p
                      className="
                        text-xs uppercase
                        tracking-[0.15em]
                      "
                      style={{
                        color: colores.marfil,
                      }}
                    >
                      {pases || "0"}{" "}
                      {Number(pases) === 1
                        ? "pase"
                        : "pases"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* NOTA */}

          <p
            className="
              mt-6 max-w-sm
              text-center text-xs
              leading-relaxed
            "
            style={{
              color: colores.cafeClaro,
            }}
          >
            El nombre y los pases se incluyen
            en el identificador del enlace.
            La confirmación de asistencia
            podrá recuperar los pases
            automáticamente.
          </p>

          {/* ======================================
              PREVIEW DEL MENSAJE
          ====================================== */}

          {link && (
            <div
              className="
                mt-10 w-full
                max-w-[430px]
              "
            >
              <p
                className="
                  mb-4 text-center
                  text-[10px] uppercase
                  tracking-[0.25em]
                "
                style={{
                  color: colores.cafeClaro,
                }}
              >
                Vista previa de WhatsApp
              </p>

              <div
                className="
                  rounded-2xl p-4
                "
                style={{
                  backgroundColor: "#EFEAE2",
                  boxShadow:
                    "0 12px 30px rgba(66,41,30,0.1)",
                }}
              >
                <div
                  className="
                    ml-auto max-w-[95%]
                    rounded-xl
                    rounded-tr-sm
                    px-4 py-4
                  "
                  style={{
                    backgroundColor: "#D9FDD3",
                    color: "#1D2733",
                  }}
                >
                  <p
                    className="
                      whitespace-pre-wrap
                      break-words
                      text-[13px]
                      leading-relaxed
                    "
                  >
                    {mensaje}
                  </p>

                  <p
                    className="
                      mt-3 text-right
                      text-[10px]
                    "
                    style={{
                      color: "#66736B",
                    }}
                  >
                    Vista previa
                  </p>
                </div>
              </div>
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
