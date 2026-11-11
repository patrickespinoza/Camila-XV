
import React from "react";
import { motion } from "framer-motion";

// ==========================================
// CONFIGURACIÓN DE LA PORTADA
// ==========================================

const portadaConfig = {
  nombre: "Isabella",
  apellido: "Montiel",
  fecha: "11 · 06 · 2027",
  

  posicionMobile: "50% 50%",
  posicionDesktop: "50% 40%",
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

const animacionSuave = {
  initial: {
    opacity: 0,
    y: 25,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
};

const transicion = {
  duration: 1.1,
  ease: [0.22, 1, 0.36, 1],
};

// ==========================================
// COMPONENTE PRINCIPAL
// ==========================================

export default function Portada() {
  return (
    <section
      id="inicio"
      className="
        relative
        isolate
        flex
        w-full
        min-h-[600px]
        items-center
        justify-center
        overflow-hidden
      "
      style={{
        height: "100svh",
        backgroundColor: colores.ciruela,
      }}
    >      
      {/* POSICIÓN RESPONSIVA DE LA FOTO */}

      <style>
        {`
          .portada-xv-imagen {
            object-position: ${portadaConfig.posicionMobile};
          }

          @media (min-width: 768px) {
            .portada-xv-imagen {
              object-position: ${portadaConfig.posicionDesktop};
            }
          }
        `}
      </style>

      {/* ======================================
          DEGRADADO SOBRE LA FOTOGRAFÍA
      ====================================== */}

      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: `
            linear-gradient(
              180deg,
              rgba(38, 24, 30, 0.25) 0%,
              rgba(38, 24, 30, 0.16) 30%,
              rgba(38, 24, 30, 0.34) 60%,
              rgba(38, 24, 30, 0.70) 100%
            )
          `,
        }}
      />

      {/* CAPA ROSA MUY SUTIL */}

      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(200,155,145,0.10), transparent 55%)",
        }}
      />

      {/* ======================================
          MARCOS DECORATIVOS
      ====================================== */}

      {/* MARCO EXTERIOR */}

      <div
        className="
          pointer-events-none
          absolute
          inset-4
          z-10
          border
          sm:inset-6
          md:inset-9
        "
        style={{
          borderColor: "rgba(248,242,240,0.55)",
        }}
      />

      {/* MARCO INTERIOR */}

      <div
        className="
          pointer-events-none
          absolute
          inset-6
          z-10
          border
          sm:inset-8
          md:inset-11
        "
        style={{
          borderColor: "rgba(184,154,106,0.50)",
        }}
      />

      {/* ======================================
          ORNAMENTOS SUPERIORES
      ====================================== */}

      <motion.div
        className="
          absolute
          top-16
          left-1/2
          z-20
          flex
          -translate-x-1/2
          flex-col
          items-center
          gap-3
          sm:top-20
        "
        initial={{
          opacity: 0,
          y: -15,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1.2,
          delay: 0.4,
        }}
      >
        <span
          className="font-serif text-xl"
          style={{
            color: colores.rosaClaro,
          }}
        >
          ✦
        </span>

        <div
          className="h-px w-16"
          style={{
            backgroundColor: colores.champagne,
          }}
        />
      </motion.div>

      {/* ======================================
          CONTENIDO PRINCIPAL
      ====================================== */}

      <div
        className="
          relative
          z-20
          flex
          h-full
          w-full
          max-w-5xl
          flex-col
          items-center
          justify-center
          px-10
          pb-12
          pt-16
          text-center
        "
      >
        {/* TEXTO SUPERIOR */}

        <motion.div
          {...animacionSuave}
          transition={{
            ...transicion,
            delay: 0.45,
          }}
        >
          <p
            className="
              mb-5
              font-sans
              text-[11px]
              font-medium
              uppercase
              tracking-[0.35em]
              sm:text-xs
              md:tracking-[0.5em]
            "
            style={{
              color: colores.marfil,
              textShadow: "0 2px 12px rgba(0,0,0,0.35)",
            }}
          >
            Mis XV años
          </p>
        </motion.div>

        {/* ORNAMENTO */}

        <motion.div
          className="mb-5 flex items-center gap-4"
          initial={{
            opacity: 0,
            scale: 0.8,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1,
            delay: 0.7,
          }}
        >
          <span
            className="h-px w-10 sm:w-16"
            style={{
              backgroundColor: colores.champagne,
            }}
          />

          <span
            className="text-lg"
            style={{
              color: colores.rosaClaro,
            }}
          >
            ✧
          </span>

          <span
            className="h-px w-10 sm:w-16"
            style={{
              backgroundColor: colores.champagne,
            }}
          />
        </motion.div>

        {/* NOMBRE */}

        <motion.h1
          className="
            m-0
            font-serif
            text-[clamp(3.5rem,11vw,8rem)]
            font-normal
            leading-[1.08]
            tracking-[-0.045em]
          "
          style={{
            color: colores.marfil,
            fontFamily: '"Playfair Display", Georgia, serif',
            textShadow: "0 5px 35px rgba(0,0,0,0.32)",
          }}
          initial={{
            opacity: 0,
            y: 35,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1.3,
            delay: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {portadaConfig.nombre}
        </motion.h1>

        {/* APELLIDO */}

        <motion.p
          className="
            mt-2
            font-serif
            text-[clamp(1.8rem,5vw,3.5rem)]
            italic
            tracking-[0.035em]
          "
          style={{
            color: colores.rosaClaro,
            fontFamily: '"Playfair Display", Georgia, serif',
            textShadow: "0 4px 25px rgba(0,0,0,0.35)",
          }}
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1.2,
            delay: 1.1,
          }}
        >
          {portadaConfig.apellido}
        </motion.p>

        {/* DIVISOR */}

        <motion.div
          className="my-8 flex items-center gap-3"
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 1,
            delay: 1.4,
          }}
        >
          <span
            className="h-px w-12 sm:w-20"
            style={{
              backgroundColor: colores.champagne,
            }}
          />

          <span
            className="font-serif text-lg"
            style={{
              color: colores.rosaClaro,
            }}
          >
            XV
          </span>

          <span
            className="h-px w-12 sm:w-20"
            style={{
              backgroundColor: colores.champagne,
            }}
          />
        </motion.div>

        {/* FECHA */}

        <motion.p
          className="
            font-sans
            text-sm
            font-normal
            tracking-[0.28em]
            sm:text-base
            md:text-lg
          "
          style={{
            color: colores.marfil,
            textShadow: "0 2px 15px rgba(0,0,0,0.35)",
          }}
          initial={{
            opacity: 0,
            y: 15,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1.1,
            delay: 1.6,
          }}
        >
          {portadaConfig.fecha}
        </motion.p>
      </div>

      {/* ======================================
          INDICADOR INFERIOR
      ====================================== */}

      <motion.div
        className="
          absolute
          bottom-14
          left-1/2
          z-20
          flex
          -translate-x-1/2
          flex-col
          items-center
          gap-3
          sm:bottom-16
        "
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: 2,
          duration: 1,
        }}
      >
        <span
          className="
            whitespace-nowrap
            font-sans
            text-[9px]
            uppercase
            tracking-[0.3em]
          "
          style={{
            color: colores.marfil,
          }}
        >
          Desliza para descubrir
        </span>

        <motion.div
          className="h-8 w-px"
          style={{
            backgroundColor: colores.champagne,
          }}
          animate={{
            scaleY: [1, 0.45, 1],
            opacity: [1, 0.45, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>
    </section>
  );
}
