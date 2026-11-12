
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Heart,
  Send,
  Users,
  MessageCircleHeart,
  Sparkles,
  Check,
  X,
  Crown,
  Ticket,
  AlertCircle,
} from "lucide-react";

// ==========================================
// CONFIGURACIÓN - WEDLY
// ==========================================

const NUMERO_WHATSAPP = "525568804612";

const datosEvento = {
  quinceanera: "Camila",
  titulo: "Mis XV Años",
};

// ==========================================
// PALETA DE COLORES
// ==========================================

const colores = {
  beige: "#E8D9C6",
  cafe: "#42291E",
  cafeProfundo: "#2B1A14",
  cafeClaro: "#75533D",
  dorado: "#B58C50",
  doradoClaro: "#C9A15F",
  marfil: "#FFF8ED",
};

// ==========================================
// LEER DATOS DEL GENERADOR
//
// Formato:
// {
//   n: "Familia Hernández",
//   p: 4,
//   r: "identificador-aleatorio"
// }
// ==========================================

function obtenerDatosInvitacion() {
  const resultadoInvalido = {
    valido: false,
    nombreInvitado: "",
    pases: 0,
    id: "",
  };

  try {
    const parametros = new URLSearchParams(
      window.location.search
    );

    const id = parametros.get("id");

    if (!id) {
      return resultadoInvalido;
    }

    // Convertir Base64URL a Base64
    const base64 = id
      .replace(/-/g, "+")
      .replace(/_/g, "/");

    const relleno = "=".repeat(
      (4 - (base64.length % 4)) % 4
    );

    const binario = atob(base64 + relleno);

    // Decodificar UTF-8
    // Compatible con acentos y ñ
    const bytes = Uint8Array.from(
      binario,
      (caracter) => caracter.charCodeAt(0)
    );

    const texto = new TextDecoder().decode(bytes);

    const datos = JSON.parse(texto);

    const nombreInvitado = datos.n;
    const pases = datos.p;
    const identificador = datos.r;

    // Validar datos
    if (
      typeof nombreInvitado !== "string" ||
      !nombreInvitado.trim() ||
      !Number.isInteger(pases) ||
      pases < 1 ||
      pases > 100 ||
      typeof identificador !== "string" ||
      !identificador.trim()
    ) {
      return resultadoInvalido;
    }

    return {
      valido: true,
      nombreInvitado: nombreInvitado.trim(),
      pases,
      id,
    };
  } catch (error) {
    console.error(
      "No se pudo leer la invitación:",
      error
    );

    return resultadoInvalido;
  }
}

// ==========================================
// ANIMACIONES
// ==========================================

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.85,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// ==========================================
// ORNAMENTO
// ==========================================

function Ornamento() {
  return (
    <div className="flex items-center justify-center gap-4">
      <span
        className="h-px w-12 sm:w-16"
        style={{
          backgroundColor: colores.dorado,
        }}
      />

      <Sparkles
        size={19}
        strokeWidth={1.2}
        color={colores.dorado}
      />

      <span
        className="h-px w-12 sm:w-16"
        style={{
          backgroundColor: colores.dorado,
        }}
      />
    </div>
  );
}

// ==========================================
// COMPONENTE PRINCIPAL
// ==========================================

export default function ConfirmacionAsistencia() {
  // Leer datos del enlace
  const [datosInvitacion] = useState(
    obtenerDatosInvitacion
  );

  // Estados del formulario
  const [asistencia, setAsistencia] = useState("");
  const [invitados, setInvitados] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [confirmacion, setConfirmacion] = useState("");

  // Datos del generador
  const enlaceValido = datosInvitacion.valido;

  const nombreInvitado =
    datosInvitacion.nombreInvitado;

  const pasesAutorizados =
    datosInvitacion.pases;

  // ==========================================
  // OPCIONES DE PASES
  //
  // Si hay 4 pases:
  // [1, 2, 3, 4]
  //
  // Si hay 2 pases:
  // [1, 2]
  // ==========================================

  const opcionesPases = enlaceValido
    ? Array.from(
        { length: pasesAutorizados },
        (_, index) => index + 1
      )
    : [];

  // ==========================================
  // SELECCIONAR ASISTENCIA
  // ==========================================

  const seleccionarAsistencia = (valor) => {
    setAsistencia(valor);
    setConfirmacion("");

    if (valor === "No asistiré") {
      setInvitados("");
    }

    if (valor === "Sí asistiré") {
      setInvitados((anterior) => {
        const numero = Number(anterior);

        if (
          Number.isInteger(numero) &&
          numero >= 1 &&
          numero <= pasesAutorizados
        ) {
          return anterior;
        }

        return "1";
      });
    }
  };

  // ==========================================
  // ENVIAR CONFIRMACIÓN
  // ==========================================

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!enlaceValido) {
      setConfirmacion(
        "Esta invitación no contiene pases válidos."
      );
      return;
    }

    if (!asistencia) {
      setConfirmacion(
        "Selecciona si asistirás a la celebración."
      );
      return;
    }

    let cantidadConfirmada = 0;

    if (asistencia === "Sí asistiré") {
      cantidadConfirmada = Number(invitados);

      if (
        !Number.isInteger(cantidadConfirmada) ||
        cantidadConfirmada < 1 ||
        cantidadConfirmada > pasesAutorizados
      ) {
        setConfirmacion(
          `Selecciona una cantidad entre 1 y ${pasesAutorizados}.`
        );
        return;
      }
    }

    setConfirmacion("");

    // ==========================================
    // MENSAJE DE WHATSAPP
    // ==========================================

    const textoWhatsApp = [
      "✨ *CONFIRMACIÓN DE ASISTENCIA*",
      `👑 *XV AÑOS DE ${datosEvento.quinceanera.toUpperCase()}*`,
      "",
      `💌 *Invitación para:* ${nombreInvitado}`,
      "",
      `🎟️ *Pases autorizados:* ${pasesAutorizados}`,
      `💖 *Asistencia:* ${asistencia}`,
      `👥 *Personas que asistirán:* ${cantidadConfirmada}`,
      "",
      `💌 *Mensaje para ${datosEvento.quinceanera}:*`,
      mensaje.trim() || "Sin mensaje adicional",
      "",
      `🔖 *ID de invitación:* ${datosInvitacion.id}`,
    ].join("\n");

    const urlWhatsApp =
      `https://wa.me/${NUMERO_WHATSAPP}?text=${encodeURIComponent(
        textoWhatsApp
      )}`;

    window.open(
      urlWhatsApp,
      "_blank",
      "noopener,noreferrer"
    );
  };

  // ==========================================
  // ESTILOS
  // ==========================================

  const estiloCampo = {
    backgroundColor: colores.marfil,
    borderColor: "rgba(181,140,80,0.45)",
    color: colores.cafe,
  };

  const fuenteElegante =
    '"Playfair Display", Georgia, serif';

  // ==========================================
  // RENDER
  // ==========================================

  return (
    <section
      id="confirmacion"
      className="
        relative isolate
        w-full overflow-hidden
        px-5 py-24
        sm:px-8 sm:py-32
      "
      style={{
        backgroundColor: colores.beige,
      }}
    >
      {/* ======================================
          MARCO EXTERIOR
      ====================================== */}

      <div
        className="
          pointer-events-none
          absolute inset-4 border
          sm:inset-8
        "
        style={{
          borderColor:
            "rgba(181,140,80,0.30)",
        }}
      />

      {/* ESQUINA SUPERIOR */}

      <div
        className="
          pointer-events-none
          absolute left-7 top-7
          h-12 w-12
          border-l border-t
          sm:left-12 sm:top-12
        "
        style={{
          borderColor: colores.dorado,
        }}
      />

      {/* ESQUINA INFERIOR */}

      <div
        className="
          pointer-events-none
          absolute bottom-7 right-7
          h-12 w-12
          border-b border-r
          sm:bottom-12 sm:right-12
        "
        style={{
          borderColor: colores.dorado,
        }}
      />

      <div className="relative z-10 mx-auto max-w-3xl">
        {/* ======================================
            ENCABEZADO
        ====================================== */}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.15,
          }}
          className="mb-12 text-center"
        >
          <Ornamento />

          <h2
            className="
              mt-5 font-serif
              text-[clamp(2.8rem,8vw,5rem)]
              leading-tight
            "
            style={{
              fontFamily: fuenteElegante,
              color: colores.cafe,
            }}
          >
            Confirma tu
            <br />

            <span
              className="italic"
              style={{
                color: colores.dorado,
              }}
            >
              Asistencia
            </span>
          </h2>

          {/* DIVISOR */}

          <div
            className="
              mx-auto my-8
              h-px w-28
            "
            style={{
              backgroundColor: colores.dorado,
            }}
          />

          {/* MENSAJE */}

          <p
            className="
              mx-auto max-w-lg
              font-serif text-base
              leading-[1.9]
              sm:text-lg
            "
            style={{
              fontFamily: fuenteElegante,
              color: colores.cafeClaro,
            }}
          >
            Tu presencia hará que mis XV años
            sean todavía más especiales.
            ¡Me encantaría compartir esta
            noche contigo!
          </p>

          {/* NOMBRE QUINCEAÑERA */}

          <p
            className="
              mt-7 font-serif
              text-2xl italic
              sm:text-3xl
            "
            style={{
              fontFamily: fuenteElegante,
              color: colores.cafe,
            }}
          >
            {datosEvento.quinceanera}
          </p>
        </motion.div>

        {/* ======================================
            TARJETA PRINCIPAL
        ====================================== */}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.1,
          }}
          className="
            relative overflow-hidden
            border px-6 py-10
            sm:px-12 sm:py-14
          "
          style={{
            backgroundColor: colores.marfil,
            borderColor:
              "rgba(181,140,80,0.55)",
            boxShadow:
              "0 16px 38px rgba(66,41,30,0.09)",
          }}
        >
          {/* MARCO INTERIOR */}

          <div
            className="
              pointer-events-none
              absolute inset-2 border
              sm:inset-3
            "
            style={{
              borderColor:
                "rgba(181,140,80,0.22)",
            }}
          />

          {/* DETALLE SUPERIOR */}

          <div
            className="
              absolute left-1/2 top-0
              h-[3px] w-28
              -translate-x-1/2
            "
            style={{
              backgroundColor: colores.dorado,
            }}
          />

          <div className="relative z-10">
            {/* CORONA */}

            <div className="mb-7 flex justify-center">
              <div
                className="
                  flex h-16 w-16
                  items-center justify-center
                  rounded-full border
                "
                style={{
                  backgroundColor: colores.beige,
                  borderColor:
                    "rgba(181,140,80,0.55)",
                }}
              >
                <Crown
                  size={29}
                  strokeWidth={1.2}
                  color={colores.dorado}
                />
              </div>
            </div>

            {/* ======================================
                INFORMACIÓN DE INVITACIÓN
            ====================================== */}

            {enlaceValido ? (
              <div
                className="
                  mb-9 border
                  px-5 py-7
                  text-center
                "
                style={{
                  backgroundColor: colores.beige,
                  borderColor:
                    "rgba(181,140,80,0.5)",
                }}
              >
                {/* DESTINATARIO */}

                <p
                  className="
                    text-[10px]
                    font-semibold uppercase
                    tracking-[0.2em]
                  "
                  style={{
                    color: colores.cafeClaro,
                  }}
                >
                  Invitación especial para
                </p>

                <p
                  className="
                    mt-3 break-words
                    font-serif text-2xl
                    italic sm:text-3xl
                  "
                  style={{
                    fontFamily: fuenteElegante,
                    color: colores.cafe,
                  }}
                >
                  {nombreInvitado}
                </p>

                {/* DIVISOR */}

                <div
                  className="
                    mx-auto my-6
                    h-px w-24
                  "
                  style={{
                    backgroundColor:
                      "rgba(181,140,80,0.6)",
                  }}
                />

                {/* PASES */}

                <Ticket
                  size={29}
                  strokeWidth={1.3}
                  color={colores.dorado}
                  className="mx-auto"
                />

                <p
                  className="
                    mt-3 text-xs
                    font-semibold uppercase
                    tracking-[0.18em]
                  "
                  style={{
                    color: colores.cafeClaro,
                  }}
                >
                  Pases reservados para ti
                </p>

                <p
                  className="
                    mt-3 font-serif
                    text-4xl
                  "
                  style={{
                    fontFamily: fuenteElegante,
                    color: colores.cafe,
                  }}
                >
                  {pasesAutorizados}
                </p>

                <p
                  className="
                    mt-2 text-sm
                  "
                  style={{
                    color: colores.cafeClaro,
                  }}
                >
                  {pasesAutorizados === 1
                    ? "Pase autorizado"
                    : "Pases autorizados"}
                </p>
              </div>
            ) : (
              <div
                role="alert"
                className="
                  mb-9 border
                  px-5 py-6
                  text-center
                "
                style={{
                  backgroundColor: "#F5E6DF",
                  borderColor: "#C58E7D",
                }}
              >
                <AlertCircle
                  size={28}
                  color="#9B382F"
                  className="mx-auto"
                />

                <p
                  className="
                    mt-3 text-sm
                    font-semibold
                  "
                  style={{
                    color: "#9B382F",
                  }}
                >
                  Invitación sin pases válidos
                </p>

                <p
                  className="
                    mt-2 text-sm
                    leading-relaxed
                  "
                  style={{
                    color: colores.cafeClaro,
                  }}
                >
                  Solicita un enlace actualizado
                  para confirmar tu asistencia.
                </p>
              </div>
            )}

            {/* ======================================
                FORMULARIO DE CONFIRMACIÓN
            ====================================== */}

            {enlaceValido && (
              <form
                onSubmit={handleSubmit}
                className="space-y-7"
              >
                {/* ======================================
                    SELECCIONAR ASISTENCIA
                ====================================== */}

                <div>
                  <p
                    className="
                      mb-4 text-xs
                      font-semibold uppercase
                      tracking-[0.15em]
                    "
                    style={{
                      color: colores.cafe,
                    }}
                  >
                    ¿Nos acompañarás?
                  </p>

                  <div className="grid grid-cols-2 gap-3 sm:gap-4">
                    {/* SÍ ASISTIRÉ */}

                    <motion.button
                      type="button"
                      onClick={() =>
                        seleccionarAsistencia(
                          "Sí asistiré"
                        )
                      }
                      whileTap={{
                        scale: 0.97,
                      }}
                      aria-pressed={
                        asistencia === "Sí asistiré"
                      }
                      className="
                        flex min-h-[64px]
                        items-center justify-center
                        gap-2 rounded-lg
                        border px-3 py-4
                        text-sm font-medium
                        transition-all duration-300
                        sm:text-base
                      "
                      style={{
                        backgroundColor:
                          asistencia === "Sí asistiré"
                            ? colores.cafe
                            : colores.beige,
                        borderColor:
                          asistencia === "Sí asistiré"
                            ? colores.cafe
                            : "rgba(181,140,80,0.5)",
                        color:
                          asistencia === "Sí asistiré"
                            ? colores.marfil
                            : colores.cafe,
                      }}
                    >
                      <Check
                        size={18}
                        strokeWidth={1.7}
                      />

                      Sí asistiré
                    </motion.button>

                    {/* NO ASISTIRÉ */}

                    <motion.button
                      type="button"
                      onClick={() =>
                        seleccionarAsistencia(
                          "No asistiré"
                        )
                      }
                      whileTap={{
                        scale: 0.97,
                      }}
                      aria-pressed={
                        asistencia === "No asistiré"
                      }
                      className="
                        flex min-h-[64px]
                        items-center justify-center
                        gap-2 rounded-lg
                        border px-3 py-4
                        text-sm font-medium
                        transition-all duration-300
                        sm:text-base
                      "
                      style={{
                        backgroundColor:
                          asistencia === "No asistiré"
                            ? colores.cafe
                            : colores.beige,
                        borderColor:
                          asistencia === "No asistiré"
                            ? colores.cafe
                            : "rgba(181,140,80,0.5)",
                        color:
                          asistencia === "No asistiré"
                            ? colores.marfil
                            : colores.cafe,
                      }}
                    >
                      <X
                        size={18}
                        strokeWidth={1.7}
                      />

                      No asistiré
                    </motion.button>
                  </div>
                </div>

                {/* ======================================
                    SELECCIÓN DE PERSONAS
                ====================================== */}

                <AnimatePresence>
                  {asistencia === "Sí asistiré" && (
                    <motion.div
                      initial={{
                        opacity: 0,
                        height: 0,
                        y: -10,
                      }}
                      animate={{
                        opacity: 1,
                        height: "auto",
                        y: 0,
                      }}
                      exit={{
                        opacity: 0,
                        height: 0,
                        y: -10,
                      }}
                      transition={{
                        duration: 0.35,
                      }}
                      className="overflow-hidden"
                    >
                      <label
                        htmlFor="invitados-confirmacion"
                        className="
                          mb-3 flex
                          items-center gap-2
                          text-xs font-semibold
                          uppercase tracking-[0.15em]
                        "
                        style={{
                          color: colores.cafe,
                        }}
                      >
                        <Users
                          size={18}
                          strokeWidth={1.5}
                          color={colores.dorado}
                        />

                        Personas que asistirán
                      </label>

                      {/* ======================================
                          SELECTOR LIMITADO
                      ====================================== */}

                      <select
                        id="invitados-confirmacion"
                        value={invitados}
                        onChange={(e) => {
                          setInvitados(e.target.value);
                          setConfirmacion("");
                        }}
                        required
                        className="
                          w-full rounded-lg
                          border px-5 py-4
                          text-base outline-none
                          transition-colors
                          duration-300
                          focus:border-[#B58C50]
                          cursor-pointer
                        "
                        style={estiloCampo}
                      >
                        <option value="" disabled>
                          Selecciona cuántas personas asistirán
                        </option>

                        {opcionesPases.map((numero) => (
                          <option
                            key={numero}
                            value={String(numero)}
                          >
                            {numero}{" "}
                            {numero === 1
                              ? "persona"
                              : "personas"}
                          </option>
                        ))}
                      </select>

                      {/* TEXTO DE APOYO */}

                      <p
                        className="
                          mt-3 text-xs
                          leading-relaxed
                        "
                        style={{
                          color: colores.cafeClaro,
                        }}
                      >
                        Puedes confirmar hasta{" "}
                        <strong>
                          {pasesAutorizados}{" "}
                          {pasesAutorizados === 1
                            ? "persona"
                            : "personas"}
                        </strong>.
                        {" "}Incluye tu asistencia
                        dentro del total.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* ======================================
                    MENSAJE PARA CAMILA
                ====================================== */}

                <div>
                  <label
                    htmlFor="mensaje-confirmacion"
                    className="
                      mb-3 flex
                      items-center gap-2
                      text-xs font-semibold
                      uppercase tracking-[0.15em]
                    "
                    style={{
                      color: colores.cafe,
                    }}
                  >
                    <MessageCircleHeart
                      size={18}
                      strokeWidth={1.5}
                      color={colores.dorado}
                    />

                    Mensaje para Camila
                  </label>

                  <textarea
                    id="mensaje-confirmacion"
                    placeholder="Escribe tus mejores deseos..."
                    value={mensaje}
                    onChange={(e) => {
                      setMensaje(e.target.value);
                      setConfirmacion("");
                    }}
                    rows={4}
                    className="
                      w-full resize-none
                      rounded-lg border
                      px-5 py-4
                      outline-none
                      transition-colors
                      duration-300
                      placeholder:text-[#75533D]/50
                      focus:border-[#B58C50]
                    "
                    style={estiloCampo}
                  />
                </div>

                {/* ======================================
                    BOTÓN WHATSAPP
                ====================================== */}

                <motion.button
                  type="submit"
                  whileHover={{
                    scale: 1.015,
                  }}
                  whileTap={{
                    scale: 0.98,
                  }}
                  className="
                    flex w-full
                    items-center justify-center
                    gap-3 rounded-full
                    px-6 py-4
                    text-sm font-semibold
                    tracking-wide
                    transition-colors
                    sm:text-base
                  "
                  style={{
                    backgroundColor: colores.cafe,
                    color: colores.marfil,
                    boxShadow:
                      "0 8px 22px rgba(66,41,30,0.20)",
                  }}
                >
                  <Send
                    size={19}
                    strokeWidth={1.7}
                  />

                  Confirmar por WhatsApp
                </motion.button>

                {/* ======================================
                    MENSAJE DE ERROR
                ====================================== */}

                {confirmacion && (
                  <p
                    role="alert"
                    className="
                      text-center text-sm
                      font-medium
                    "
                    style={{
                      color: "#9B382F",
                    }}
                  >
                    {confirmacion}
                  </p>
                )}

                {/* AVISO */}

                <p
                  className="
                    text-center text-xs
                    leading-relaxed
                  "
                  style={{
                    color: colores.cafeClaro,
                  }}
                >
                  Al confirmar, se abrirá WhatsApp
                  con tu mensaje preparado para enviarlo.
                </p>
              </form>
            )}

            {/* ORNAMENTO INFERIOR */}

            <div className="mt-12">
              <Ornamento />
            </div>
          </div>

          {/* DETALLE INFERIOR */}

          <div
            className="
              absolute bottom-0 left-1/2
              h-[3px] w-28
              -translate-x-1/2
            "
            style={{
              backgroundColor: colores.dorado,
            }}
          />
        </motion.div>

        {/* ======================================
            FRASE FINAL
        ====================================== */}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
          }}
          className="mt-12 text-center"
        >
          <Heart
            size={22}
            strokeWidth={1.2}
            color={colores.dorado}
            className="mx-auto"
          />

          <p
            className="
              mt-5 font-serif
              text-lg italic
              sm:text-xl
            "
            style={{
              fontFamily: fuenteElegante,
              color: colores.cafe,
            }}
          >
            ¡Gracias por ser parte de este día tan especial!
          </p>
        </motion.div>
      </div>
    </section>
  );
}
