
import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Shirt } from "lucide-react";

// ==========================================
// CONFIGURACIÓN EDITABLE - WEDLY
// ==========================================

const vestimentaConfig = {
  titulo: "Vestimenta Formal",

  descripcion:
    "Para esta noche tan especial, te invito a lucir tu mejor atuendo y acompañarme a celebrar mis XV años con elegancia y mucho estilo.",

  recomendacion:
    "Vestidos de noche y traje formal",

  frase:
    "Una noche mágica merece un look inolvidable.",
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
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// ==========================================
// COMPONENTE PRINCIPAL
// ==========================================

export default function Vestimenta() {
  return (
    <section
      id="vestimenta"
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
      {/* DECORACIÓN DE FONDO */}

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
          backgroundColor: "rgba(232,207,203,0.35)",
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

      {/* TARJETA PRINCIPAL */}

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{
          once: true,
          amount: 0.15,
        }}
        className="
          relative
          mx-auto
          w-full
          max-w-4xl
          overflow-hidden
          bg-white
          px-7
          py-16
          text-center
          shadow-[0_20px_70px_rgba(102,84,90,0.08)]
          sm:px-14
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

        <div className="relative z-10 flex flex-col items-center">

          {/* ORNAMENTO SUPERIOR */}

          <motion.div
            variants={fadeUp}
            className="mb-7 flex items-center gap-4"
          >
            <span
              className="h-px w-12"
              style={{
                backgroundColor: colores.champagne,
              }}
            />

            <Sparkles
              size={22}
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
          </motion.div>

          {/* SUBTÍTULO */}

          <motion.p
            variants={fadeUp}
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
            Una noche especial
          </motion.p>

          {/* TÍTULO */}

          <motion.h2
            variants={fadeUp}
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
            Código de
            <br />
            <em
              style={{
                color: colores.rosaAntiguo,
              }}
            >
              Vestimenta
            </em>
          </motion.h2>

          {/* DIVISOR */}

          <motion.div
            variants={fadeUp}
            className="my-9 flex items-center gap-3"
          >
            <span
              className="h-px w-12"
              style={{
                backgroundColor: colores.champagne,
              }}
            />

            <span
              className="h-2 w-2 rotate-45 border"
              style={{
                borderColor: colores.champagne,
              }}
            />

            <span
              className="h-px w-12"
              style={{
                backgroundColor: colores.champagne,
              }}
            />
          </motion.div>

          {/* ÍCONO DE VESTIMENTA */}

          <motion.div
            variants={fadeUp}
            className="
              mb-7
              flex
              h-24
              w-24
              items-center
              justify-center
              rounded-full
              border
            "
            style={{
              backgroundColor: "rgba(232,207,203,0.3)",
              borderColor: "rgba(184,154,106,0.45)",
            }}
          >
            <Shirt
              size={42}
              strokeWidth={1.1}
              style={{
                color: colores.rosaAntiguo,
              }}
            />
          </motion.div>

          {/* TIPO DE VESTIMENTA */}

          <motion.h3
            variants={fadeUp}
            className="
              font-serif
              text-2xl
              font-normal
              sm:text-3xl
            "
            style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              color: colores.ciruela,
            }}
          >
            {vestimentaConfig.titulo}
          </motion.h3>

          {/* DESCRIPCIÓN */}

          <motion.p
            variants={fadeUp}
            className="
              mx-auto
              mt-6
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
            {vestimentaConfig.descripcion}
          </motion.p>

          {/* RECOMENDACIÓN */}

          <motion.div
            variants={fadeUp}
            className="
              mt-9
              w-full
              max-w-md
              border-y
              px-4
              py-6
            "
            style={{
              borderColor: "rgba(184,154,106,0.3)",
            }}
          >
            <p
              className="
                font-sans
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.25em]
                sm:text-xs
              "
              style={{
                color: colores.champagne,
              }}
            >
              Sugerencia de atuendo
            </p>

            <p
              className="
                mt-3
                font-serif
                text-lg
                italic
                sm:text-xl
              "
              style={{
                fontFamily: '"Playfair Display", Georgia, serif',
                color: colores.ciruela,
              }}
            >
              {vestimentaConfig.recomendacion}
            </p>
          </motion.div>

          {/* FRASE FINAL */}

          <motion.p
            variants={fadeUp}
            className="
              mt-10
              max-w-md
              font-serif
              text-lg
              italic
              leading-relaxed
              sm:text-xl
            "
            style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              color: colores.rosaAntiguo,
            }}
          >
            {vestimentaConfig.frase}
          </motion.p>

          {/* ORNAMENTO INFERIOR */}

          <motion.div
            variants={fadeUp}
            className="mt-9 flex items-center gap-4"
          >
            <span
              className="h-px w-10"
              style={{
                backgroundColor: colores.champagne,
              }}
            />

            <span
              className="font-serif text-xl"
              style={{
                color: colores.rosaAntiguo,
              }}
            >
              ✧
            </span>

            <span
              className="h-px w-10"
              style={{
                backgroundColor: colores.champagne,
              }}
            />
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
}
