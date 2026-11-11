
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Heart,
  Send,
  Users,
  UserRound,
  MessageCircleHeart,
  Sparkles,
  Check,
  X,
  Crown,
} from "lucide-react";

// ==========================================
// CONFIGURACIÓN EDITABLE - WEDLY
// ==========================================

// México: código de país 52 + número de 10 dígitos
const NUMERO_WHATSAPP = "525568804612";

const datosEvento = {
  quinceanera: "Camila",
  titulo: "Mis XV Años",
};

// ==========================================
// PALETA CHAMPAGNE · DORADO · BEIGE · CAFÉ
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
  const [nombre, setNombre] = useState("");
  const [asistencia, setAsistencia] = useState("");
  const [invitados, setInvitados] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [confirmacion, setConfirmacion] = useState("");

  // ==========================================
  // SELECCIONAR ASISTENCIA
  // ==========================================

  const seleccionarAsistencia = (valor) => {
    setAsistencia(valor);
    setConfirmacion("");

    if (valor === "No asistiré") {
      setInvitados("");
    }
  };

  // ==========================================
  // ENVIAR CONFIRMACIÓN POR WHATSAPP
  // ==========================================

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!nombre.trim() || !asistencia) {
      setConfirmacion(
        "Por favor, escribe tu nombre y selecciona si asistirás."
      );
      return;
    }

    if (asistencia === "Sí asistiré") {
      const cantidad = Number(invitados);

      if (
        !invitados ||
        !Number.isInteger(cantidad) ||
        cantidad < 1
      ) {
        setConfirmacion(
          "Por favor, indica un número válido de personas."
        );
        return;
      }
    }

    setConfirmacion("");

    const textoWhatsApp = [
      "✨ *CONFIRMACIÓN DE ASISTENCIA*",
      `👑 *XV AÑOS DE ${datosEvento.quinceanera.toUpperCase()}*`,
      "",
      `👤 *Nombre:* ${nombre.trim()}`,
      `💌 *Asistencia:* ${asistencia}`,
      `👥 *Número de personas:* ${
        asistencia === "Sí asistiré" ? invitados : "0"
      }`,
      "",
      "💖 *Mensaje para Camila:*",
      mensaje.trim() || "Sin mensaje adicional",
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
  // ESTILO DE CAMPOS
  // ==========================================

  const estiloCampo = {
    backgroundColor: colores.marfil,
    borderColor: "rgba(181,140,80,0.45)",
    color: colores.cafe,
  };

  // ==========================================
  // COMPONENTE VISUAL
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
          FONDO BEIGE SÓLIDO
          SIN DEGRADADOS NI DIFUMINADOS
      ====================================== */}

      {/* MARCO EXTERIOR */}

      <div
        className="
          pointer-events-none
          absolute inset-4
          border
          sm:inset-8
        "
        style={{
          borderColor: "rgba(181,140,80,0.30)",
        }}
      />

      {/* ESQUINAS DECORATIVAS */}

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

      {/* ======================================
          CONTENEDOR PRINCIPAL
      ====================================== */}

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



          {/* TÍTULO */}

          <h2
            className="
              mt-5 font-serif
              text-[clamp(2.8rem,8vw,5rem)]
              leading-tight
            "
            style={{
              fontFamily:
                '"Playfair Display", Georgia, serif',
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
            className="mx-auto my-8 h-px w-28"
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
              fontFamily:
                '"Playfair Display", Georgia, serif',
              color: colores.cafeClaro,
            }}
          >
            Tu presencia hará que mis XV años
            sean todavía más especiales.
            ¡Me encantaría compartir esta noche contigo!
          </p>

          {/* NOMBRE DE Camila */}

          <p
            className="
              mt-7 font-serif
              text-2xl italic
              sm:text-3xl
            "
            style={{
              fontFamily:
                '"Playfair Display", Georgia, serif',
              color: colores.cafe,
            }}
          >
            {datosEvento.quinceanera}
          </p>
        </motion.div>

        {/* ======================================
            FORMULARIO
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
            border
            px-6 py-10
            sm:px-12 sm:py-14
          "
          style={{
            backgroundColor: colores.marfil,
            borderColor: "rgba(181,140,80,0.55)",
            boxShadow:
              "0 16px 38px rgba(66,41,30,0.09)",
          }}
        >
          {/* MARCO INTERIOR */}

          <div
            className="
              pointer-events-none
              absolute inset-2
              border
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

            <div className="mb-8 flex justify-center">
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
                FORMULARIO
            ====================================== */}

            <form
              onSubmit={handleSubmit}
              className="space-y-7"
            >
              {/* NOMBRE */}

              <div>
                <label
                  htmlFor="nombre-confirmacion"
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
                  <UserRound
                    size={17}
                    strokeWidth={1.5}
                    color={colores.dorado}
                  />

                  Tu nombre
                </label>

                <input
                  id="nombre-confirmacion"
                  type="text"
                  placeholder="Nombre y apellido"
                  value={nombre}
                  onChange={(e) => {
                    setNombre(e.target.value);
                    setConfirmacion("");
                  }}
                  required
                  className="
                    w-full rounded-lg
                    border px-5 py-4
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
                  ASISTENCIA
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
                      seleccionarAsistencia("Sí asistiré")
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
                      seleccionarAsistencia("No asistiré")
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
                  NÚMERO DE PERSONAS
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

                      Número de personas
                    </label>

                    <input
                      id="invitados-confirmacion"
                      type="number"
                      min="1"
                      step="1"
                      placeholder="¿Cuántas personas asistirán?"
                      value={invitados}
                      onChange={(e) => {
                        setInvitados(e.target.value);
                        setConfirmacion("");
                      }}
                      required={
                        asistencia === "Sí asistiré"
                      }
                      className="
                        w-full rounded-lg
                        border px-5 py-4
                        outline-none
                        transition-colors
                        duration-300
                        placeholder:text-[#75533D]/50
                        focus:border-[#B58C50]
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
                      Incluye tu asistencia dentro del total.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* ======================================
                  MENSAJE PARA Camila
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
                  onChange={(e) =>
                    setMensaje(e.target.value)
                  }
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

              {/* VALIDACIÓN */}

              {confirmacion && (
                <p
                  role="alert"
                  className="
                    text-center text-sm
                    font-medium
                  "
                  style={{
                    color: colores.cafe,
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

            {/* ======================================
                ORNAMENTO INFERIOR
            ====================================== */}

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
              fontFamily:
                '"Playfair Display", Georgia, serif',
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
