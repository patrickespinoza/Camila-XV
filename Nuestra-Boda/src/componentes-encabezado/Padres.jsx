
import React from "react";
import { motion } from "framer-motion";
import { Heart, Sparkles } from "lucide-react";

// ==========================================
// CONFIGURACIÓN EDITABLE - WEDLY
// ==========================================

const datos = {
  quinceanera: "Isabella Montiel",

  papa: "Airan Vazquez",
  mama: "Arlet Ramirez",

  madrinas: [
    "Sheira Ramirez",
    "Yuridia Ramirez",
  ],

  mensaje:
    "Hay momentos en la vida que se convierten en recuerdos inolvidables. Hoy comienza una nueva etapa llena de sueños, ilusiones y esperanza.",
};

// ==========================================
// PALETA CHAMPAGNE · DORADO · BEIGE · CAFÉ
// ==========================================

const colores = {
  cafe: "#42291E",
  cafeProfundo: "#2B1A14",
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

const aparecer = {
  initial: {
    opacity: 0,
    y: 30,
  },
  whileInView: {
    opacity: 1,
    y: 0,
  },
  viewport: {
    once: true,
    amount: 0.15,
  },
};

const transicion = {
  duration: 1,
  ease: [0.22, 1, 0.36, 1],
};

// ==========================================
// FLOR DECORATIVA SVG
// ==========================================

function FlorDecorativa({
  className = "",
  rotacion = 0,
  escala = 1,
}) {
  return (
    <svg
      viewBox="0 0 240 240"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{
        transform: `rotate(${rotacion}deg) scale(${escala})`,
      }}
      aria-hidden="true"
    >
      <defs>
        <linearGradient
          id="petaloXVPadres"
          x1="30"
          y1="30"
          x2="200"
          y2="200"
        >
          <stop stopColor="#FFFDF6" />
          <stop offset="0.55" stopColor="#F1E2C8" />
          <stop offset="1" stopColor="#D8BC91" />
        </linearGradient>

        <linearGradient
          id="oroXVPadres"
          x1="0"
          y1="0"
          x2="240"
          y2="240"
        >
          <stop stopColor="#E7C991" />
          <stop offset="1" stopColor="#A77D43" />
        </linearGradient>
      </defs>

      {/* TALLOS */}

      <g
        stroke="url(#oroXVPadres)"
        strokeWidth="1.4"
        strokeLinecap="round"
        opacity="0.85"
      >
        <path d="M118 125C82 155 48 180 10 220" />
        <path d="M125 130C158 165 187 195 230 225" />
        <path d="M90 150C57 140 34 122 15 95" />
        <path d="M155 160C188 145 210 125 230 92" />

        <path d="M65 173C44 150 28 156 23 139C48 139 61 148 65 173Z" />
        <path d="M172 179C196 158 213 162 224 145C199 145 182 155 172 179Z" />
      </g>

      {/* PÉTALOS */}

      <g
        fill="url(#petaloXVPadres)"
        stroke="#C9A15F"
        strokeWidth="1.2"
      >
        <path d="M120 119C91 83 94 44 120 22C146 44 149 83 120 119Z" />
        <path d="M120 119C84 93 47 96 27 122C53 147 91 146 120 119Z" />
        <path d="M120 119C94 151 97 188 121 212C145 187 146 151 120 119Z" />
        <path d="M120 119C151 91 188 96 213 122C189 148 151 146 120 119Z" />

        <path d="M120 119C78 112 62 77 70 47C101 54 119 83 120 119Z" />
        <path d="M120 119C131 77 163 61 192 70C184 101 154 119 120 119Z" />
        <path d="M120 119C161 128 179 162 170 191C139 183 121 153 120 119Z" />
        <path d="M120 119C108 161 75 179 47 169C55 139 85 121 120 119Z" />
      </g>

      {/* NERVADURAS */}

      <g
        stroke="#C9A15F"
        strokeWidth="0.8"
        opacity="0.55"
      >
        <path d="M120 115V39" />
        <path d="M116 120H40" />
        <path d="M121 125V195" />
        <path d="M125 120H200" />
        <path d="M115 115L76 61" />
        <path d="M125 114L181 77" />
        <path d="M126 126L163 180" />
        <path d="M113 126L58 162" />
      </g>

      {/* CENTRO */}

      <circle
        cx="120"
        cy="120"
        r="17"
        fill="#F1E2C8"
        stroke="#C9A15F"
        strokeWidth="1.5"
      />

      <circle
        cx="120"
        cy="120"
        r="8"
        fill="#C9A15F"
        opacity="0.75"
      />

      {Array.from({ length: 8 }).map((_, i) => {
        const angulo = (i * Math.PI) / 4;

        return (
          <circle
            key={i}
            cx={120 + Math.cos(angulo) * 12}
            cy={120 + Math.sin(angulo) * 12}
            r="2"
            fill="#A77D43"
          />
        );
      })}
    </svg>
  );
}

// ==========================================
// ORNAMENTO DECORATIVO
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

      <span
        className="text-lg"
        style={{
          color: colores.dorado,
        }}
      >
        ✦
      </span>

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

export default function Padres() {
  return (
    <section
      id="padres"
      className="
        relative isolate
        w-full overflow-hidden
        px-5 py-24
        sm:px-8 sm:py-32
      "
      style={{
        backgroundColor: colores.champagne,
      }}
    >
      {/* ======================================
          FONDO TIPO MÁRMOL CHAMPAGNE
      ====================================== */}

      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: `
            radial-gradient(
              ellipse at 12% 10%,
              rgba(255,255,255,0.85),
              transparent 48%
            ),
            radial-gradient(
              ellipse at 90% 85%,
              rgba(201,161,95,0.18),
              transparent 45%
            ),
            linear-gradient(
              145deg,
              #FFF8ED 0%,
              #F1E2C8 48%,
              #E8D9C6 100%
            )
          `,
        }}
      />

      {/* VETAS DECORATIVAS */}

      <svg
        className="
          pointer-events-none
          absolute inset-0
          h-full w-full
          opacity-30
        "
        preserveAspectRatio="none"
        viewBox="0 0 1000 1200"
        aria-hidden="true"
      >
        <path
          d="M-100 150C200 80 290 420 620 320S920 100 1100 250"
          fill="none"
          stroke="#C9A15F"
          strokeWidth="1"
        />

        <path
          d="M-100 170C200 100 290 440 620 340S920 120 1100 270"
          fill="none"
          stroke="#FFFFFF"
          strokeWidth="4"
        />

        <path
          d="M-100 900C250 750 410 1100 760 950S1000 800 1150 900"
          fill="none"
          stroke="#C9A15F"
          strokeWidth="1"
        />
      </svg>

      {/* ======================================
          FLORES DECORATIVAS
      ====================================== */}

      <motion.div
        className="
          pointer-events-none
          absolute -left-20 -top-20
          w-64 opacity-80
          sm:-left-16 sm:-top-16
          sm:w-80
        "
        initial={{ opacity: 0, rotate: -20 }}
        whileInView={{ opacity: 0.8, rotate: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
      >
        <FlorDecorativa rotacion={-20} />
      </motion.div>

      <motion.div
        className="
          pointer-events-none
          absolute -bottom-24 -right-20
          w-72 opacity-80
          sm:-bottom-20 sm:-right-12
          sm:w-96
        "
        initial={{ opacity: 0, rotate: 20 }}
        whileInView={{ opacity: 0.8, rotate: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
      >
        <FlorDecorativa rotacion={25} />
      </motion.div>

      {/* ======================================
          LÍNEAS DECORATIVAS
      ====================================== */}

      <div
        className="
          pointer-events-none
          absolute left-5 top-12
          h-36 w-px
          sm:left-12
        "
        style={{
          background: `
            linear-gradient(
              to bottom,
              transparent,
              rgba(201,161,95,0.6),
              transparent
            )
          `,
        }}
      />

      <div
        className="
          pointer-events-none
          absolute bottom-12 right-5
          h-36 w-px
          sm:right-12
        "
        style={{
          background: `
            linear-gradient(
              to bottom,
              transparent,
              rgba(201,161,95,0.6),
              transparent
            )
          `,
        }}
      />

      {/* ======================================
          CONTENIDO PRINCIPAL
      ====================================== */}

      <div
        className="
          relative z-10
          mx-auto w-full max-w-3xl
          text-center
        "
      >
        {/* ORNAMENTO SUPERIOR */}

        <motion.div
          {...aparecer}
          transition={transicion}
        >
          <Ornamento />
        </motion.div>


        {/* MENSAJE INTRODUCTORIO */}

        <motion.p
          {...aparecer}
          transition={{
            ...transicion,
            delay: 0.2,
          }}
          className="
            mx-auto mt-8
            max-w-xl
            font-serif text-lg
            leading-[1.9]
            sm:text-xl
          "
          style={{
            fontFamily:
              '"Playfair Display", Georgia, serif',
            color: colores.cafe,
          }}
        >
          {datos.mensaje}
        </motion.p>

        {/* ======================================
            PADRES
        ====================================== */}

        <motion.div
          {...aparecer}
          transition={{
            ...transicion,
            delay: 0.3,
          }}
          className="mt-14"
        >
          <div
            className="
              mx-auto flex
              h-14 w-14
              items-center justify-center
              rounded-full border
            "
            style={{
              borderColor:
                "rgba(201,161,95,0.65)",
              backgroundColor:
                "rgba(255,248,237,0.45)",
            }}
          >
            <Heart
              size={24}
              strokeWidth={1}
              color={colores.dorado}
            />
          </div>

          <h2
            className="
              mt-5 font-serif
              text-[clamp(2.6rem,8vw,4.5rem)]
              italic leading-tight
            "
            style={{
              fontFamily:
                '"Playfair Display", Georgia, serif',
              color: colores.cafe,
            }}
          >
            Mis Padres
          </h2>

          <Ornamento />


          {/* NOMBRES */}

          <div className="mt-8 flex flex-col items-center gap-3">
            <p
              className="
                font-serif
                text-[clamp(1.6rem,5vw,2.4rem)]
                leading-snug
              "
              style={{
                fontFamily:
                  '"Playfair Display", Georgia, serif',
                color: colores.cafe,
              }}
            >
              {datos.papa}
            </p>

            <span
              className="
                font-serif text-3xl italic
              "
              style={{
                color: colores.dorado,
              }}
            >
              &
            </span>

            <p
              className="
                font-serif
                text-[clamp(1.6rem,5vw,2.4rem)]
                leading-snug
              "
              style={{
                fontFamily:
                  '"Playfair Display", Georgia, serif',
                color: colores.cafe,
              }}
            >
              {datos.mama}
            </p>
          </div>
        </motion.div>

        {/* ======================================
            DIVISOR ENTRE PADRES Y MADRINAS
        ====================================== */}

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 1.2,
            delay: 0.2,
          }}
          className="
            mx-auto my-14
            flex max-w-xs
            items-center justify-center
            gap-4
          "
        >
          <span
            className="h-px flex-1"
            style={{
              backgroundColor:
                "rgba(201,161,95,0.55)",
            }}
          />

          <Sparkles
            size={20}
            strokeWidth={1}
            color={colores.dorado}
          />

          <span
            className="h-px flex-1"
            style={{
              backgroundColor:
                "rgba(201,161,95,0.55)",
            }}
          />
        </motion.div>

        {/* ======================================
            MADRINAS
        ====================================== */}

        <motion.div
          {...aparecer}
          transition={{
            ...transicion,
            delay: 0.15,
          }}
        >
          <h2
            className="
              font-serif
              text-[clamp(2.6rem,8vw,4.5rem)]
              italic leading-tight
            "
            style={{
              fontFamily:
                '"Playfair Display", Georgia, serif',
              color: colores.cafe,
            }}
          >
            Mis Madrinas
          </h2>

          <div className="mt-5">
            <Ornamento />
          </div>

          <p
            className="
              mt-7 text-xs
              uppercase tracking-[0.22em]
            "
            style={{
              color: colores.cafeClaro,
            }}
          >
            Quienes me acompañan en este día especial
          </p>

          {/* NOMBRES DE MADRINAS */}

          <div className="mt-9 flex flex-col items-center gap-3">
            {datos.madrinas.map((madrina, index) => (
              <React.Fragment key={madrina}>
                <p
                  className="
                    font-serif
                    text-[clamp(1.5rem,5vw,2.3rem)]
                    leading-snug
                  "
                  style={{
                    fontFamily:
                      '"Playfair Display", Georgia, serif',
                    color: colores.cafe,
                  }}
                >
                  {madrina}
                </p>

                {index < datos.madrinas.length - 1 && (
                  <span
                    className="
                      font-serif
                      text-3xl italic
                    "
                    style={{
                      color: colores.dorado,
                    }}
                  >
                    &
                  </span>
                )}
              </React.Fragment>
            ))}
          </div>
        </motion.div>

        {/* ======================================
            MENSAJE FINAL
        ====================================== */}

        <motion.div
          {...aparecer}
          transition={{
            ...transicion,
            delay: 0.2,
          }}
          className="mt-16"
        >
          <Ornamento />

          <p
            className="
              mx-auto mt-8
              max-w-md
              font-serif text-base
              italic leading-[1.9]
              sm:text-lg
            "
            style={{
              fontFamily:
                '"Playfair Display", Georgia, serif',
              color: colores.cafeClaro,
            }}
          >
            Gracias por acompañarme en este
            capítulo tan especial de mi vida.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
