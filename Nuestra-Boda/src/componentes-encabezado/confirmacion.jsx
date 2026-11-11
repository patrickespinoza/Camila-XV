
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Heart,
  Send,
  Users,
  UserRound,
  MessageCircleHeart,
  Sparkles,
} from "lucide-react";

// ==========================================
// INFORMACIÓN EDITABLE - WEDLY
// ==========================================

// Número de WhatsApp que recibirá las confirmaciones.
// Código de país + número, sin espacios ni signos.
// Número ficticio para demostración.
const NUMERO_WHATSAPP = "5210000000000";

const datosEvento = {
  quinceanera: "Isabella Montiel",
  titulo: "Mis XV Años",
};

// ==========================================
// PALETA XV ESENCIAL
// ROSA EMPOLVADO Y CHAMPÁN
// ==========================================

const colores = {
  marfil: "#F8F2F0",
  rosaClaro: "#E8CFCB",
  rosaAntiguo: "#C89B91",
  champagne: "#B89A6A",
  ciruela: "#66545A",
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

    if (
      asistencia === "Sí asistiré" &&
      (!invitados || Number(invitados) < 1)
    ) {
      setConfirmacion(
        "Por favor, indica el número de personas que asistirán."
      );
      return;
    }

    setConfirmacion("");

    const textoWhatsApp = [
      "🌸 *CONFIRMACIÓN DE ASISTENCIA*",
      `✨ *XV AÑOS DE ${datosEvento.quinceanera.toUpperCase()}*`,
      "",
      `👤 *Nombre:* ${nombre.trim()}`,
      `💌 *Asistencia:* ${asistencia}`,
      `👥 *Número de personas:* ${
        asistencia === "Sí asistiré" ? invitados : "0"
      }`,
      "",
      "💗 *Mensaje para Isabella:*",
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

  return (
    <section
      id="confirmacion"
      className="
        relative
        w-full
        overflow-hidden
        px-5
        py-20
        sm:px-8
        sm:py-28
      "
      style={{
        backgroundColor: colores.marfil,
      }}
    >
      {/* ======================================
          DECORACIÓN DE FONDO
      ====================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -left-24
          -top-24
          h-72
          w-72
          rounded-full
          blur-3xl
        "
        style={{
          backgroundColor: "rgba(232,207,203,0.4)",
        }}
      />

      <div
        className="
          pointer-events-none
          absolute
          -bottom-24
          -right-24
          h-72
          w-72
          rounded-full
          blur-3xl
        "
        style={{
          backgroundColor: "rgba(200,155,145,0.2)",
        }}
      />

      {/* ======================================
          CONTENEDOR PRINCIPAL
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
          relative
          mx-auto
          w-full
          max-w-3xl
          overflow-hidden
          bg-white
          px-7
          py-16
          shadow-[0_20px_70px_rgba(102,84,90,0.09)]
          sm:px-12
          sm:py-20
          md:px-20
        "
      >
        {/* MARCO EXTERIOR */}

        <div
          className="
            pointer-events-none
            absolute
            inset-3
            border
            sm:inset-5
          "
          style={{
            borderColor: "rgba(184,154,106,0.35)",
          }}
        />

        {/* MARCO INTERIOR */}

        <div
          className="
            pointer-events-none
            absolute
            inset-5
            border
            sm:inset-7
          "
          style={{
            borderColor: "rgba(232,207,203,0.65)",
          }}
        />

        {/* CONTENIDO */}

        <div className="relative z-10">

          {/* ======================================
              ENCABEZADO
          ====================================== */}

          <motion.div
            variants={fadeUp}
            className="mb-12 text-center"
          >
            {/* ORNAMENTO */}

            <div className="mb-7 flex items-center justify-center gap-4">
              <span
                className="h-px w-12"
                style={{
                  backgroundColor: colores.champagne,
                }}
              />

              <Sparkles
                size={23}
                strokeWidth={1.2}
                style={{
                  color: colores.rosaAntiguo,
                }}
              />

              <span
                className="h-px w-12"
                style={{
                  backgroundColor: colores.champagne,
                }}
              />
            </div>

            {/* SUBTÍTULO */}

            <p
              className="
                font-sans
                text-[11px]
                font-semibold
                uppercase
                tracking-[0.3em]
                sm:text-xs
              "
              style={{
                color: colores.champagne,
              }}
            >
              Una noche para recordar
            </p>

            {/* TÍTULO */}

            <h2
              className="
                mt-6
                font-serif
                text-4xl
                font-normal
                leading-tight
                sm:text-5xl
                md:text-6xl
              "
              style={{
                fontFamily: '"Playfair Display", Georgia, serif',
                color: colores.ciruela,
              }}
            >
              Confirma tu
              <br />
              <em
                style={{
                  color: colores.rosaAntiguo,
                }}
              >
                Asistencia
              </em>
            </h2>

            {/* DIVISOR */}

            <div
              className="mx-auto my-8 h-px w-24"
              style={{
                backgroundColor: colores.champagne,
              }}
            />

            {/* MENSAJE */}

            <p
              className="
                mx-auto
                max-w-lg
                font-serif
                text-base
                leading-[1.9]
                sm:text-lg
              "
              style={{
                fontFamily: '"Playfair Display", Georgia, serif',
                color: colores.ciruela,
              }}
            >
              Tu presencia hará que mis XV años
              sean todavía más especiales.
              ¡Me encantaría compartir esta noche contigo!
            </p>

            {/* NOMBRE */}

            <p
              className="
                mt-6
                font-serif
                text-xl
                italic
                sm:text-2xl
              "
              style={{
                fontFamily: '"Playfair Display", Georgia, serif',
                color: colores.rosaAntiguo,
              }}
            >
              {datosEvento.quinceanera}
            </p>
          </motion.div>

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
                  mb-3
                  flex
                  items-center
                  gap-2
                  font-sans
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.15em]
                "
                style={{
                  color: colores.ciruela,
                }}
              >
                <UserRound
                  size={17}
                  strokeWidth={1.5}
                  style={{
                    color: colores.rosaAntiguo,
                  }}
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
                  w-full
                  rounded-xl
                  border
                  bg-[#F8F2F0]
                  px-5
                  py-4
                  text-[#66545A]
                  outline-none
                  transition-colors
                  duration-300
                  placeholder:text-[#66545A]/50
                  focus:border-[#B89A6A]
                "
                style={{
                  borderColor: "rgba(184,154,106,0.3)",
                }}
              />
            </div>

            {/* ASISTENCIA */}

            <div>
              <p
                className="
                  mb-4
                  font-sans
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.15em]
                "
                style={{
                  color: colores.ciruela,
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
                  aria-pressed={asistencia === "Sí asistiré"}
                  className={`
                    flex
                    min-h-[64px]
                    items-center
                    justify-center
                    gap-2
                    rounded-xl
                    border
                    px-3
                    py-4
                    text-sm
                    font-medium
                    transition-all
                    duration-300
                    sm:text-base
                    ${
                      asistencia === "Sí asistiré"
                        ? "border-[#66545A] bg-[#66545A] text-white"
                        : "border-[#E8CFCB] bg-[#F8F2F0] text-[#66545A] hover:border-[#C89B91]"
                    }
                  `}
                >
                  <Heart
                    size={17}
                    strokeWidth={1.6}
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
                  aria-pressed={asistencia === "No asistiré"}
                  className={`
                    flex
                    min-h-[64px]
                    items-center
                    justify-center
                    rounded-xl
                    border
                    px-3
                    py-4
                    text-sm
                    font-medium
                    transition-all
                    duration-300
                    sm:text-base
                    ${
                      asistencia === "No asistiré"
                        ? "border-[#66545A] bg-[#66545A] text-white"
                        : "border-[#E8CFCB] bg-[#F8F2F0] text-[#66545A] hover:border-[#C89B91]"
                    }
                  `}
                >
                  No asistiré
                </motion.button>
              </div>
            </div>

            {/* ======================================
                NÚMERO DE INVITADOS
                SOLO SI ASISTIRÁ
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
                      mb-3
                      flex
                      items-center
                      gap-2
                      font-sans
                      text-xs
                      font-semibold
                      uppercase
                      tracking-[0.15em]
                    "
                    style={{
                      color: colores.ciruela,
                    }}
                  >
                    <Users
                      size={18}
                      strokeWidth={1.5}
                      style={{
                        color: colores.rosaAntiguo,
                      }}
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
                    required={asistencia === "Sí asistiré"}
                    className="
                      w-full
                      rounded-xl
                      border
                      bg-[#F8F2F0]
                      px-5
                      py-4
                      text-[#66545A]
                      outline-none
                      transition-colors
                      duration-300
                      placeholder:text-[#66545A]/50
                      focus:border-[#B89A6A]
                    "
                    style={{
                      borderColor: "rgba(184,154,106,0.3)",
                    }}
                  />

                  <p
                    className="mt-2 text-xs leading-relaxed"
                    style={{
                      color: colores.ciruela,
                      opacity: 0.7,
                    }}
                  >
                    Incluye tu asistencia dentro del total.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* ======================================
                MENSAJE PARA ISABELLA
            ====================================== */}

            <div>
              <label
                htmlFor="mensaje-confirmacion"
                className="
                  mb-3
                  flex
                  items-center
                  gap-2
                  font-sans
                  text-xs
                  font-semibold
                  uppercase
                  tracking-[0.15em]
                "
                style={{
                  color: colores.ciruela,
                }}
              >
                <MessageCircleHeart
                  size={18}
                  strokeWidth={1.5}
                  style={{
                    color: colores.rosaAntiguo,
                  }}
                />

                Mensaje para Isabella
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
                  w-full
                  resize-none
                  rounded-xl
                  border
                  bg-[#F8F2F0]
                  px-5
                  py-4
                  text-[#66545A]
                  outline-none
                  transition-colors
                  duration-300
                  placeholder:text-[#66545A]/50
                  focus:border-[#B89A6A]
                "
                style={{
                  borderColor: "rgba(184,154,106,0.3)",
                }}
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
                flex
                w-full
                items-center
                justify-center
                gap-3
                rounded-full
                bg-[#66545A]
                px-6
                py-4
                font-sans
                text-sm
                font-semibold
                tracking-wide
                text-white
                shadow-[0_10px_30px_rgba(102,84,90,0.2)]
                transition-colors
                duration-300
                hover:bg-[#544349]
                sm:text-base
              "
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
                  text-center
                  text-sm
                  font-medium
                "
                style={{
                  color: colores.ciruela,
                }}
              >
                {confirmacion}
              </p>
            )}

            {/* AVISO */}

            <p
              className="
                text-center
                text-xs
                leading-relaxed
              "
              style={{
                color: colores.ciruela,
                opacity: 0.7,
              }}
            >
              Al confirmar, se abrirá WhatsApp con
              tu mensaje preparado para enviarlo.
            </p>
          </form>

          {/* ======================================
              ORNAMENTO INFERIOR
          ====================================== */}

          <div className="mt-12 flex items-center justify-center gap-4">
            <span
              className="h-px w-10"
              style={{
                backgroundColor: colores.champagne,
              }}
            />

            <Heart
              size={18}
              strokeWidth={1.3}
              style={{
                color: colores.rosaAntiguo,
              }}
            />

            <span
              className="h-px w-10"
              style={{
                backgroundColor: colores.champagne,
              }}
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
