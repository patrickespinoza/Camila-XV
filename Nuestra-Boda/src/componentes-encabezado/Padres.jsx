
import React from "react";
import { motion } from "framer-motion";

// ==========================================
// CONFIGURACIÓN
// ==========================================

const datos = {
  quinceanera: "Isabella Montiel",
  papa: "Alejandro Montiel",
  mama: "Mariana Herrera",
};

// ==========================================
// PALETA XV ESENCIAL
// ==========================================

const colores = {
  marfil: "#F8F2F0",
  rosaClaro: "#E8CFCB",
  rosaAntiguo: "#C89B91",
  champagne: "#B89A6A",
  ciruela: "#66545A",
};

// ==========================================
// ANIMACIÓN
// ==========================================

const aparecer = {
  initial: {
    opacity: 0,
    y: 25,
  },
  whileInView: {
    opacity: 1,
    y: 0,
  },
  viewport: {
    once: true,
    amount: 0.2,
  },
};

// ==========================================
// COMPONENTE PRINCIPAL
// ==========================================

export default function Padres() {
  return (
    <section
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
          backgroundColor: "rgba(200,155,145,0.20)",
        }}
      />

      {/* CONTENEDOR PRINCIPAL */}

      <motion.div
        initial={{
          opacity: 0,
          y: 45,
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
          duration: 1.1,
          ease: [0.22, 1, 0.36, 1],
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

        <div className="relative z-10">

          {/* ORNAMENTO SUPERIOR */}

          <motion.div
            {...aparecer}
            transition={{
              duration: 0.9,
            }}
            className="mb-7 flex items-center justify-center gap-4"
          >
            <span
              className="h-px w-12"
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
              className="h-px w-12"
              style={{
                backgroundColor: colores.champagne,
              }}
            />
          </motion.div>

          {/* ENCABEZADO */}

          <motion.p
            {...aparecer}
            transition={{
              duration: 1,
              delay: 0.1,
            }}
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
            Con amor y gratitud
          </motion.p>


          {/* DIVISOR */}

          <motion.div
            initial={{
              opacity: 0,
              scaleX: 0,
            }}
            whileInView={{
              opacity: 1,
              scaleX: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 1,
              delay: 0.4,
            }}
            className="mx-auto my-10 h-px w-28"
            style={{
              backgroundColor: colores.champagne,
            }}
          />

          {/* MENSAJE */}

          <motion.p
            {...aparecer}
            transition={{
              duration: 1,
              delay: 0.4,
            }}
            className="
              mx-auto
              max-w-xl
              font-serif
              text-lg
              leading-[1.9]
              sm:text-xl
            "
            style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              color: colores.ciruela,
            }}
          >
            Hay momentos en la vida que se convierten
            en recuerdos inolvidables.
            Hoy comienza una nueva etapa llena
            de sueños, ilusiones y esperanza.
          </motion.p>

          {/* TEXTO DE PADRES */}

          <motion.p
            {...aparecer}
            transition={{
              duration: 1,
              delay: 0.5,
            }}
            className="
              mt-12
              font-sans
              text-[11px]
              font-semibold
              uppercase
              tracking-[0.25em]
              sm:text-xs
            "
            style={{
              color: colores.champagne,
            }}
          >
            Con la bendición de mis padres
          </motion.p>

          {/* NOMBRES DE LOS PADRES */}

          <motion.div
            {...aparecer}
            transition={{
              duration: 1,
              delay: 0.6,
            }}
            className="
              mx-auto
              mt-8
              flex
              max-w-lg
              flex-col
              items-center
              gap-4
            "
          >
            {/* PAPÁ */}

            <p
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
              {datos.papa}
            </p>

            {/* & */}

            <span
              className="
                font-serif
                text-3xl
                italic
              "
              style={{
                color: colores.rosaAntiguo,
              }}
            >
              &
            </span>

            {/* MAMÁ */}

            <p
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
              {datos.mama}
            </p>
          </motion.div>

          {/* MENSAJE FINAL */}

          <motion.p
            {...aparecer}
            transition={{
              duration: 1,
              delay: 0.7,
            }}
            className="
              mx-auto
              mt-12
              max-w-md
              font-serif
              text-base
              italic
              leading-[1.9]
              sm:text-lg
            "
            style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              color: colores.rosaAntiguo,
            }}
          >
            Gracias por acompañarme en este
            capítulo tan especial de mi vida.
          </motion.p>

          {/* ORNAMENTO INFERIOR */}

          <motion.div
            {...aparecer}
            transition={{
              duration: 1,
              delay: 0.8,
            }}
            className="mt-10 flex items-center justify-center gap-4"
          >
            <span
              className="h-px w-12"
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
              className="h-px w-12"
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
