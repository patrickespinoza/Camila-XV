
import React from "react";
import { motion } from "framer-motion";
import { Crown, ChevronDown, Sparkles } from "lucide-react";

// ==========================================
// CONFIGURACIÓN EDITABLE - WEDLY
// ==========================================

const portadaConfig = {
  nombre: "Camila",
  fecha: "16 · 01 · 2027",
};

// ==========================================
// PALETA CHAMPAGNE · DORADO · BEIGE · CAFÉ
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
// ANIMACIONES
// ==========================================

const entrada = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
};

const transicion = {
  duration: 1.1,
  ease: [0.22, 1, 0.36, 1],
};

// ==========================================
// LÁMPARA DECORATIVA SVG
// ==========================================

function LamparaCristal() {
  return (
    <motion.svg
      viewBox="0 0 240 180"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-full w-full"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.8, delay: 0.3 }}
      aria-hidden="true"
    >
      <defs>
        <linearGradient
          id="lamparaOroXV"
          x1="0"
          y1="0"
          x2="240"
          y2="180"
        >
          <stop stopColor="#FFF1C9" />
          <stop offset="0.5" stopColor="#C9A15F" />
          <stop offset="1" stopColor="#8B6238" />
        </linearGradient>

        <radialGradient id="luzCristalXV">
          <stop stopColor="#FFF4C9" stopOpacity="0.9" />
          <stop offset="1" stopColor="#FFF4C9" stopOpacity="0" />
        </radialGradient>
      </defs>

      <ellipse
        cx="120"
        cy="65"
        rx="100"
        ry="55"
        fill="url(#luzCristalXV)"
        opacity="0.25"
      />

      <g
        stroke="url(#lamparaOroXV)"
        strokeWidth="1.6"
        strokeLinecap="round"
      >
        <path d="M120 0V40" />
        <path d="M105 40H135" />
        <path d="M110 40L100 57H140L130 40" />
        <path d="M120 57V112" />

        <path d="M120 65C100 65 98 98 62 95" />
        <path d="M120 65C140 65 142 98 178 95" />

        <path d="M120 76C92 76 88 116 34 105" />
        <path d="M120 76C148 76 152 116 206 105" />

        <path d="M120 83C110 106 96 122 80 121" />
        <path d="M120 83C130 106 144 122 160 121" />

        <path d="M34 105V88" />
        <path d="M62 95V78" />
        <path d="M80 121V104" />
        <path d="M160 121V104" />
        <path d="M178 95V78" />
        <path d="M206 105V88" />

        <path d="M96 112Q120 145 144 112" />
        <path d="M108 125Q120 148 132 125" />
      </g>

      <g fill="#F4D9A1">
        {[34, 62, 80, 160, 178, 206].map((x, i) => (
          <g key={x}>
            <ellipse
              cx={x}
              cy={[84, 74, 100, 100, 74, 84][i]}
              rx="4"
              ry="7"
              opacity="0.9"
            />
            <circle
              cx={x}
              cy={[84, 74, 100, 100, 74, 84][i]}
              r="12"
              fill="url(#luzCristalXV)"
            />
          </g>
        ))}
      </g>

      <g
        stroke="#F1E2C8"
        strokeWidth="0.8"
        opacity="0.8"
      >
        {[
          [65, 105, 65, 135],
          [90, 113, 90, 146],
          [120, 112, 120, 165],
          [150, 113, 150, 146],
          [175, 105, 175, 135],
        ].map((p, i) => (
          <line
            key={i}
            x1={p[0]}
            y1={p[1]}
            x2={p[2]}
            y2={p[3]}
          />
        ))}
      </g>

      <g fill="#E7C991" opacity="0.8">
        {[
          [65, 139],
          [90, 150],
          [120, 170],
          [150, 150],
          [175, 139],
        ].map(([x, y], i) => (
          <path
            key={i}
            d={`M${x} ${y - 7} L${x + 4} ${y} L${x} ${
              y + 7
            } L${x - 4} ${y} Z`}
          />
        ))}
      </g>
    </motion.svg>
  );
}

// ==========================================
// COMPONENTE PRINCIPAL
// ==========================================

export default function Portada() {
  return (
    <section
      id="inicio"
      className="
        relative isolate
        flex min-h-[650px] w-full
        items-center justify-center
        overflow-hidden
      "
      style={{
        minHeight: "100svh",
        backgroundColor: colores.cafeProfundo,
      }}
    >
      {/* ======================================
          FONDO CAFÉ CON ILUMINACIÓN
      ====================================== */}

      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: `
            radial-gradient(
              ellipse at 50% 28%,
              rgba(201,161,95,0.24) 0%,
              rgba(117,83,61,0.20) 32%,
              transparent 70%
            ),
            linear-gradient(
              135deg,
              #75533D 0%,
              #42291E 42%,
              #24150F 100%
            )
          `,
        }}
      />

      {/* ILUMINACIÓN CENTRAL */}

      <motion.div
        className="
          pointer-events-none
          absolute left-1/2 top-[28%]
          h-[480px] w-[320px]
          -translate-x-1/2
          rounded-full blur-[100px]
          sm:w-[550px]
        "
        style={{
          background: "rgba(201,161,95,0.13)",
        }}
        animate={{
          opacity: [0.5, 0.9, 0.5],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* ======================================
          COLUMNAS ARQUITECTÓNICAS
      ====================================== */}

      <div
        className="
          pointer-events-none
          absolute bottom-0 left-0 top-0
          w-[11%] sm:w-[13%]
        "
        style={{
          background: `
            linear-gradient(
              90deg,
              #21130F 0%,
              #664735 35%,
              #8A684B 55%,
              #352118 100%
            )
          `,
          boxShadow:
            "12px 0 35px rgba(0,0,0,0.24)",
        }}
      />

      <div
        className="
          pointer-events-none
          absolute bottom-0 right-0 top-0
          w-[11%] sm:w-[13%]
        "
        style={{
          background: `
            linear-gradient(
              90deg,
              #352118 0%,
              #8A684B 45%,
              #664735 65%,
              #21130F 100%
            )
          `,
          boxShadow:
            "-12px 0 35px rgba(0,0,0,0.24)",
        }}
      />

      {/* ======================================
          ARCO PRINCIPAL
      ====================================== */}

      <div
        className="
          pointer-events-none
          absolute left-1/2 top-[5%]
          h-[105%] w-[87%]
          -translate-x-1/2
          rounded-t-[50%]
          border-[3px]
          sm:w-[75%]
          md:w-[60%]
          lg:w-[48%]
        "
        style={{
          borderColor: colores.dorado,
          boxShadow: `
            0 0 20px rgba(201,161,95,0.25),
            inset 0 0 25px rgba(201,161,95,0.10)
          `,
        }}
      />

      <div
        className="
          pointer-events-none
          absolute left-1/2 top-[6.5%]
          h-[103%] w-[84%]
          -translate-x-1/2
          rounded-t-[50%]
          border
          sm:w-[72%]
          md:w-[57%]
          lg:w-[46%]
        "
        style={{
          borderColor: "rgba(231,201,145,0.45)",
        }}
      />

      {/* ======================================
          MARCOS LATERALES
      ====================================== */}

      <div
        className="
          pointer-events-none
          absolute inset-4 border
          sm:inset-7
        "
        style={{
          borderColor: "rgba(231,201,145,0.35)",
        }}
      />

      {/* ======================================
          LÁMPARA DE CRISTAL
      ====================================== */}

      <div
        className="
          pointer-events-none
          absolute left-1/2 top-0 z-10
          h-[145px] w-[195px]
          -translate-x-1/2
          sm:h-[190px] sm:w-[260px]
          md:h-[220px] md:w-[300px]
        "
      >
        <LamparaCristal />
      </div>

      {/* ======================================
          DESTELLOS DORADOS
      ====================================== */}

      {[
        { left: "18%", top: "29%", delay: 0 },
        { left: "82%", top: "37%", delay: 1.2 },
        { left: "23%", top: "73%", delay: 2.1 },
        { left: "76%", top: "68%", delay: 0.8 },
      ].map((destello, i) => (
        <motion.div
          key={i}
          className="
            pointer-events-none
            absolute z-10
          "
          style={{
            left: destello.left,
            top: destello.top,
            color: colores.doradoClaro,
          }}
          animate={{
            opacity: [0.2, 0.9, 0.2],
            scale: [0.7, 1.2, 0.7],
          }}
          transition={{
            duration: 3.5,
            delay: destello.delay,
            repeat: Infinity,
          }}
        >
          <Sparkles size={14} strokeWidth={1} />
        </motion.div>
      ))}

      {/* ======================================
          CONTENIDO PRINCIPAL
      ====================================== */}

      <div
        className="
          relative z-20
          flex w-full max-w-4xl
          flex-col items-center
          justify-center
          px-8 pb-20 pt-28
          text-center
          sm:pt-36
        "
      >
        {/* CORONA */}

        <motion.div
          initial={{
            opacity: 0,
            y: -20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
            delay: 0.5,
          }}
          className="mb-5"
        >
          <Crown
            size={45}
            strokeWidth={1}
            color={colores.doradoClaro}
          />
        </motion.div>

        {/* MIS */}

        <motion.p
          {...entrada}
          transition={{
            ...transicion,
            delay: 0.7,
          }}
          className="
            text-[11px]
            uppercase
            tracking-[0.55em]
            sm:text-sm
          "
          style={{
            color: colores.champagne,
          }}
        >
          Mis
        </motion.p>

        {/* XV */}

        <motion.h1
          initial={{
            opacity: 0,
            scale: 0.85,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1.4,
            delay: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            mt-1 font-serif
            text-[clamp(6rem,22vw,13rem)]
            font-normal
            leading-[0.95]
            tracking-[-0.07em]
          "
          style={{
            fontFamily:
              '"Playfair Display", Georgia, serif',
            color: colores.doradoClaro,
            textShadow: `
              0 4px 0 rgba(99,62,32,0.5),
              0 10px 35px rgba(0,0,0,0.4),
              0 0 45px rgba(201,161,95,0.25)
            `,
          }}
        >
          XV
        </motion.h1>

        {/* AÑOS */}

        <motion.p
          {...entrada}
          transition={{
            ...transicion,
            delay: 1.05,
          }}
          className="
            -mt-2 font-serif
            text-[clamp(3rem,11vw,6.5rem)]
            italic leading-none
          "
          style={{
            fontFamily:
              '"Playfair Display", Georgia, serif',
            color: colores.champagne,
            textShadow:
              "0 5px 25px rgba(0,0,0,0.3)",
          }}
        >
          Años
        </motion.p>

        {/* ORNAMENTO */}

        <motion.div
          initial={{ opacity: 0, scaleX: 0.5 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{
            duration: 1,
            delay: 1.25,
          }}
          className="my-6 flex items-center gap-4"
        >
          <span
            className="h-px w-12 sm:w-20"
            style={{
              backgroundColor: colores.dorado,
            }}
          />

          <span
            style={{
              color: colores.doradoClaro,
            }}
          >
            ✦
          </span>

          <span
            className="h-px w-12 sm:w-20"
            style={{
              backgroundColor: colores.dorado,
            }}
          />
        </motion.div>

        {/* NOMBRE DE LA QUINCEAÑERA */}

        <motion.div
          {...entrada}
          transition={{
            ...transicion,
            delay: 1.4,
          }}
        >
          <p
            className="
              font-serif
              text-[clamp(2rem,7vw,4rem)]
              leading-tight
            "
            style={{
              fontFamily:
                '"Playfair Display", Georgia, serif',
              color: colores.marfil,
              textShadow:
                "0 4px 20px rgba(0,0,0,0.3)",
            }}
          >
            {portadaConfig.nombre}
          </p>

          <p
            className="
              mt-1 font-serif
              text-[clamp(1.4rem,4.5vw,2.5rem)]
              italic
            "
            style={{
              fontFamily:
                '"Playfair Display", Georgia, serif',
              color: colores.doradoClaro,
            }}
          >
            {portadaConfig.apellido}
          </p>
        </motion.div>

        {/* FECHA */}

        <motion.div
          {...entrada}
          transition={{
            ...transicion,
            delay: 1.65,
          }}
          className="mt-7"
        >
          <p
            className="
              text-xs tracking-[0.3em]
              sm:text-base
            "
            style={{
              color: colores.champagne,
            }}
          >
            {portadaConfig.fecha}
          </p>
        </motion.div>

        {/* MENSAJE */}

        <motion.p
          {...entrada}
          transition={{
            ...transicion,
            delay: 1.85,
          }}
          className="
            mt-5 font-serif
            text-sm italic
            sm:text-base
          "
          style={{
            fontFamily:
              '"Playfair Display", Georgia, serif',
            color: colores.beige,
          }}
        >
          {portadaConfig.mensaje}
        </motion.p>
      </div>

      {/* ======================================
          DECORACIÓN INFERIOR
      ====================================== */}

      <div
        className="
          pointer-events-none
          absolute bottom-0 left-0 right-0
          h-32
        "
        style={{
          background: `
            linear-gradient(
              to top,
              rgba(20,10,7,0.65),
              transparent
            )
          `,
        }}
      />

      {/* ======================================
          INDICADOR DE DESPLAZAMIENTO
      ====================================== */}

      <motion.div
        className="
          absolute bottom-7 left-1/2
          z-30 flex -translate-x-1/2
          flex-col items-center gap-2
          sm:bottom-10
        "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 2.2,
          duration: 1,
        }}
      >
        <span
          className="
            whitespace-nowrap
            text-[9px]
            uppercase
            tracking-[0.28em]
          "
          style={{
            color: colores.champagne,
          }}
        >
          Desliza para descubrir
        </span>

        <motion.div
          animate={{
            y: [0, 7, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <ChevronDown
            size={19}
            strokeWidth={1.3}
            color={colores.doradoClaro}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
