
import React from "react";
import { motion } from "framer-motion";
import {
  Camera,
  UtensilsCrossed,
  Music2,
  Cake,
  Sparkles,
  Crown,
  Heart,
} from "lucide-react";

// ==========================================
// PALETA XV ESENCIAL - WEDLY
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
// INFORMACIÓN EDITABLE - WEDLY
// ==========================================

const eventos = [
  {
    id: 1,
    titulo: "Sesión de fotografías",
    hora: "4:00 PM",
    descripcion: "Capturando recuerdos inolvidables.",
    icono: Camera,
  },
  {
    id: 2,
    titulo: "Entrada de Isabella",
    hora: "5:00 PM",
    descripcion: "El comienzo de una noche mágica.",
    icono: Crown,
  },
  {
    id: 3,
    titulo: "Cena",
    hora: "6:00 PM",
    descripcion: "Compartamos juntos este momento especial.",
    icono: UtensilsCrossed,
  },
  {
    id: 4,
    titulo: "Vals",
    hora: "7:30 PM",
    descripcion: "Un baile para recordar toda la vida.",
    icono: Heart,
  },
  {
    id: 5,
    titulo: "Pastel",
    hora: "8:30 PM",
    descripcion: "Un dulce momento para celebrar.",
    icono: Cake,
  },
  {
    id: 6,
    titulo: "Baile y celebración",
    hora: "9:00 PM",
    descripcion: "¡Que comience la diversión!",
    icono: Music2,
  },
];

// ==========================================
// ANIMACIONES
// ==========================================

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// ==========================================
// TARJETA DEL ITINERARIO
// ==========================================

const TarjetaItinerario = ({ evento, index }) => {
  const Icono = evento.icono;

  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 35,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={{
        duration: 0.8,
        delay: Math.min(index * 0.08, 0.35),
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        relative
        w-full
        overflow-hidden
        border
        bg-[#F8F2F0]
        px-6
        py-8
        text-center
        shadow-[0_12px_35px_rgba(102,84,90,0.10)]
        sm:px-10
        sm:py-10
      "
      style={{
        borderColor: "rgba(184,154,106,0.35)",
      }}
    >
      {/* MARCO INTERIOR */}

      <div
        className="
          pointer-events-none
          absolute
          inset-2
          border
          sm:inset-3
        "
        style={{
          borderColor: "rgba(232,207,203,0.65)",
        }}
      />

      {/* CONTENIDO */}

      <div className="relative z-10 flex flex-col items-center">

        {/* ICONO */}

        <div
          className="
            mb-5
            flex
            h-16
            w-16
            items-center
            justify-center
            rounded-full
            border
            sm:h-20
            sm:w-20
          "
          style={{
            backgroundColor: "rgba(232,207,203,0.35)",
            borderColor: "rgba(184,154,106,0.45)",
          }}
        >
          <Icono
            size={32}
            strokeWidth={1.3}
            style={{
              color: colores.rosaAntiguo,
            }}
          />
        </div>

        {/* HORA */}

        <p
          className="
            font-sans
            text-xs
            font-semibold
            uppercase
            tracking-[0.2em]
            sm:text-sm
          "
          style={{
            color: colores.champagne,
          }}
        >
          {evento.hora}
        </p>

        {/* TÍTULO */}

        <h3
          className="
            mt-4
            font-serif
            text-2xl
            font-normal
            leading-snug
            sm:text-3xl
          "
          style={{
            fontFamily: '"Playfair Display", Georgia, serif',
            color: colores.ciruela,
          }}
        >
          {evento.titulo}
        </h3>

        {/* DIVISOR */}

        <div
          className="my-5 h-px w-12"
          style={{
            backgroundColor: colores.champagne,
          }}
        />

        {/* DESCRIPCIÓN */}

        <p
          className="
            max-w-xs
            font-serif
            text-sm
            italic
            leading-relaxed
            sm:text-base
          "
          style={{
            fontFamily: '"Playfair Display", Georgia, serif',
            color: colores.ciruela,
            opacity: 0.85,
          }}
        >
          {evento.descripcion}
        </p>
      </div>
    </motion.article>
  );
};

// ==========================================
// COMPONENTE PRINCIPAL
// ==========================================

export default function Itinerario2() {
  return (
    <section
      id="itinerario"
      className="
        relative
        w-full
        overflow-hidden
        bg-[#E8CFCB]
        px-5
        py-20
        sm:px-8
        sm:py-28
      "
    >
      {/* DECORACIÓN DE FONDO */}

      <div
        className="
          pointer-events-none
          absolute
          -left-32
          top-20
          h-80
          w-80
          rounded-full
          border
        "
        style={{
          borderColor: "rgba(184,154,106,0.2)",
        }}
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-32
          bottom-20
          h-80
          w-80
          rounded-full
          border
        "
        style={{
          borderColor: "rgba(184,154,106,0.2)",
        }}
      />

      {/* CONTENEDOR */}

      <div className="relative z-10 mx-auto max-w-5xl">

        {/* ======================================
            ENCABEZADO
        ====================================== */}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
          }}
          className="mb-16 text-center"
        >
          {/* ORNAMENTO SUPERIOR */}

          <div className="mb-6 flex items-center justify-center gap-4">
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
                color: colores.champagne,
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
              text-xs
              font-semibold
              uppercase
              tracking-[0.3em]
              sm:text-sm
            "
            style={{
              color: colores.ciruela,
            }}
          >
            Una noche llena de magia
          </p>

          {/* TÍTULO */}

          <h2
            className="
              mt-5
              font-serif
              text-4xl
              font-normal
              sm:text-5xl
              md:text-6xl
            "
            style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              color: colores.ciruela,
            }}
          >
            Nuestro
            <br />
            <em
              style={{
                color: colores.rosaAntiguo,
              }}
            >
              Itinerario
            </em>
          </h2>

          {/* DIVISOR */}

          <div
            className="mx-auto mt-7 h-px w-24"
            style={{
              backgroundColor: colores.champagne,
            }}
          />

          {/* DESCRIPCIÓN */}

          <p
            className="
              mx-auto
              mt-7
              max-w-lg
              font-serif
              text-base
              leading-relaxed
              sm:text-lg
            "
            style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              color: colores.ciruela,
            }}
          >
            Cada momento de esta noche será
            parte de una historia inolvidable.
          </p>
        </motion.div>

        {/* ======================================
            LÍNEA DE TIEMPO
        ====================================== */}

        <div className="relative">

          {/* LÍNEA VERTICAL CENTRAL - COMPUTADORA */}

          <div
            className="
              pointer-events-none
              absolute
              bottom-0
              left-1/2
              top-0
              hidden
              w-px
              -translate-x-1/2
              md:block
            "
            style={{
              backgroundColor: "rgba(184,154,106,0.65)",
            }}
          />

          {/* LÍNEA VERTICAL - CELULAR */}

          <div
            className="
              pointer-events-none
              absolute
              bottom-0
              left-4
              top-0
              w-px
              md:hidden
            "
            style={{
              backgroundColor: "rgba(184,154,106,0.65)",
            }}
          />

          {/* EVENTOS */}

          <div className="flex flex-col gap-10 md:gap-12">
            {eventos.map((evento, index) => {
              const esIzquierda = index % 2 === 0;

              return (
                <div
                  key={evento.id}
                  className="
                    relative
                    grid
                    grid-cols-[32px_minmax(0,1fr)]
                    items-center
                    gap-4
                    md:grid-cols-[minmax(0,1fr)_48px_minmax(0,1fr)]
                    md:gap-5
                  "
                >
                  {/* PUNTO CENTRAL */}

                  <div
                    className="
                      relative
                      z-10
                      col-start-1
                      row-start-1
                      mx-auto
                      h-4
                      w-4
                      rotate-45
                      border-2
                      bg-[#E8CFCB]
                      md:col-start-2
                    "
                    style={{
                      borderColor: colores.champagne,
                    }}
                  />

                  {/* TARJETA */}

                  <div
                    className={`
                      col-start-2
                      row-start-1
                      min-w-0
                      ${
                        esIzquierda
                          ? "md:col-start-1"
                          : "md:col-start-3"
                      }
                    `}
                  >
                    <TarjetaItinerario
                      evento={evento}
                      index={index}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ======================================
            MENSAJE FINAL
        ====================================== */}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
          }}
          className="mt-16 text-center"
        >
          <div className="mb-5 flex items-center justify-center gap-4">
            <span
              className="h-px w-10"
              style={{
                backgroundColor: colores.champagne,
              }}
            />

            <Heart
              size={20}
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

          <p
            className="
              font-serif
              text-lg
              italic
              leading-relaxed
              sm:text-xl
            "
            style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              color: colores.ciruela,
            }}
          >
            ¡Prepárate para vivir una noche inolvidable!
          </p>
        </motion.div>

      </div>
    </section>
  );
}
