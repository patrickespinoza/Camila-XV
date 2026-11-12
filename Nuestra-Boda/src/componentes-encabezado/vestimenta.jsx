
import React from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  Shirt,
  Crown,
  Heart,
} from "lucide-react";

// ==========================================
// CONFIGURACIÓN EDITABLE - WEDLY
// ==========================================

const vestimentaConfig = {
  titulo: "Formal",



  mensajeColores:
    "Con mucho cariño, nos reservamos los siguientes colores para la quinceañera.",

  coloresReservados: [
    {
      nombre: "Champagne",
      color: "#E8D1A9",
    },
    {
      nombre: "Dorado",
      color: "#C9A15F",
    },
    {
      nombre: "Beige",
      color: "#D8C4A8",
    },
  ],
};

// ==========================================
// PALETA - IGUAL A UBICACIÓN
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

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// ==========================================
// ORNAMENTO
// ==========================================

function Ornamento({ claro = false }) {
  return (
    <div className="flex items-center justify-center gap-4">
      <span
        className="h-px w-12"
        style={{
          backgroundColor: colores.dorado,
        }}
      />

      <span
        className="text-lg"
        style={{
          color: claro
            ? colores.doradoClaro
            : colores.dorado,
        }}
      >
        ✦
      </span>

      <span
        className="h-px w-12"
        style={{
          backgroundColor: colores.dorado,
        }}
      />
    </div>
  );
}

// ==========================================
// CÍRCULO DE COLOR RESERVADO
// ==========================================

function CirculoColor({ nombre, color }) {
  return (
    <motion.div
      variants={fadeUp}
      className="
        flex min-w-0
        flex-col items-center
        gap-4
      "
    >
      <motion.div
        whileHover={{
          scale: 1.06,
          y: -4,
        }}
        transition={{
          duration: 0.3,
        }}
        className="
          flex h-[82px] w-[82px]
          items-center justify-center
          rounded-full border
          sm:h-[110px] sm:w-[110px]
          md:h-[122px] md:w-[122px]
        "
        style={{
          backgroundColor: colores.cafeProfundo,
          borderColor: "rgba(231,201,145,0.65)",
        }}
      >
        <div
          className="
            h-[66px] w-[66px]
            rounded-full
            sm:h-[92px] sm:w-[92px]
            md:h-[104px] md:w-[104px]
          "
          style={{
            backgroundColor: color,
            border: "2px solid rgba(255,255,255,0.45)",
            boxShadow:
              "inset 0 4px 10px rgba(255,255,255,0.18), 0 4px 12px rgba(0,0,0,0.22)",
          }}
        />
      </motion.div>

      <p
        className="
          text-center font-serif
          text-sm sm:text-lg
        "
        style={{
          fontFamily:
            '"Playfair Display", Georgia, serif',
          color: colores.marfil,
        }}
      >
        {nombre}
      </p>
    </motion.div>
  );
}

// ==========================================
// COMPONENTE PRINCIPAL
// ==========================================

export default function Vestimenta() {
  return (
    <section
      id="vestimenta"
      className="
        relative isolate
        w-full overflow-hidden
        px-5 pb-24 pt-8
        sm:px-8 sm:pb-32 sm:pt-10
      "
      style={{
        backgroundColor: colores.cafeProfundo,
      }}
    >
      {/* ======================================
          FONDO IGUAL AL DE UBICACIÓN
      ====================================== */}

      <div
        className="
          pointer-events-none
          absolute inset-0
        "
        style={{
          background: `
            radial-gradient(
              ellipse at 50% 0%,
              rgba(201,161,95,0.20),
              transparent 55%
            ),
            linear-gradient(
              145deg,
              #75533D 0%,
              #42291E 40%,
              #24150F 100%
            )
          `,
        }}
      />

      {/* ======================================
          COLUMNAS LATERALES
      ====================================== */}

      <div
        className="
          pointer-events-none
          absolute bottom-0 left-0 top-0
          w-[7%]
        "
        style={{
          background:
            "linear-gradient(90deg, #21130F, #75533D, #42291E)",
          boxShadow:
            "8px 0 30px rgba(0,0,0,0.18)",
        }}
      />

      <div
        className="
          pointer-events-none
          absolute bottom-0 right-0 top-0
          w-[7%]
        "
        style={{
          background:
            "linear-gradient(90deg, #42291E, #75533D, #21130F)",
          boxShadow:
            "-8px 0 30px rgba(0,0,0,0.18)",
        }}
      />

      {/* LÍNEAS DORADAS LATERALES */}

      <div
        className="
          pointer-events-none
          absolute bottom-0 left-[8%] top-0
          w-px
        "
        style={{
          background:
            "linear-gradient(to bottom, transparent, rgba(231,201,145,0.4), transparent)",
        }}
      />

      <div
        className="
          pointer-events-none
          absolute bottom-0 right-[8%] top-0
          w-px
        "
        style={{
          background:
            "linear-gradient(to bottom, transparent, rgba(231,201,145,0.4), transparent)",
        }}
      />

      {/* ======================================
          CONTENIDO
      ====================================== */}

      <div
        className="
          relative z-10
          mx-auto max-w-5xl
        "
      >
        {/* ENCABEZADO */}

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
          <Ornamento claro />


          <h2
            className="
              mt-5 font-serif
              text-[clamp(2.7rem,7vw,5rem)]
              leading-tight
            "
            style={{
              fontFamily:
                '"Playfair Display", Georgia, serif',
              color: colores.marfil,
            }}
          >
            Código de
            <br />
            <span
              className="italic"
              style={{
                color: colores.doradoClaro,
              }}
            >
              Vestimenta
            </span>
          </h2>

          <div className="mt-8">
            <Ornamento claro />
          </div>
        </motion.div>

        {/* ======================================
            TARJETA CHAMPAGNE
            MISMO ESTILO QUE UBICACIÓN
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
            relative mx-auto
            w-full max-w-3xl
            overflow-hidden
            px-6 py-14
            text-center
            sm:px-12 sm:py-16
          "
          style={{
            background: `
              linear-gradient(
                145deg,
                #FFF8ED 0%,
                #F1E2C8 65%,
                #E8D9C6 100%
              )
            `,
            boxShadow:
              "0 25px 65px rgba(0,0,0,0.25)",
          }}
        >
          {/* MARCO EXTERIOR */}

          <div
            className="
              pointer-events-none
              absolute inset-3
              border
              sm:inset-4
            "
            style={{
              borderColor:
                "rgba(201,161,95,0.55)",
            }}
          />

          {/* MARCO INTERIOR */}

          <div
            className="
              pointer-events-none
              absolute inset-5
              border
              sm:inset-6
            "
            style={{
              borderColor:
                "rgba(201,161,95,0.18)",
            }}
          />

          {/* DETALLE SUPERIOR */}

          <div
            className="
              absolute left-1/2 top-0
              h-[3px] w-32
              -translate-x-1/2
            "
            style={{
              background:
                "linear-gradient(90deg, transparent, #C9A15F, transparent)",
            }}
          />

          {/* CÍRCULOS DECORATIVOS */}

          <div
            className="
              pointer-events-none
              absolute -right-20 -top-20
              h-56 w-56 rounded-full border
            "
            style={{
              borderColor:
                "rgba(201,161,95,0.20)",
            }}
          />

          <div
            className="
              pointer-events-none
              absolute -right-12 -top-12
              h-40 w-40 rounded-full border
            "
            style={{
              borderColor:
                "rgba(201,161,95,0.16)",
            }}
          />

          {/* CONTENIDO TARJETA */}

          <div
            className="
              relative z-10
              flex flex-col items-center
            "
          >
            {/* NÚMERO DECORATIVO */}

            <p
              className="
                text-xs font-medium
                tracking-[0.3em]
              "
              style={{
                color: colores.cafeClaro,
              }}
            >
              XV AÑOS
            </p>

            {/* ÍCONO */}

            <div
              className="
                mt-6 flex h-20 w-20
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
              <Shirt
                size={35}
                strokeWidth={1.2}
                color={colores.dorado}
              />
            </div>

            {/* FORMAL */}

            <h3
              className="
                mt-7 font-serif
                text-[clamp(2.3rem,6vw,3.5rem)]
                italic
              "
              style={{
                fontFamily:
                  '"Playfair Display", Georgia, serif',
                color: colores.cafe,
              }}
            >
              {vestimentaConfig.titulo}
            </h3>

            <div className="mt-6">
              <Ornamento />
            </div>

      

        

            {/* DIVISOR */}

            <div
              className="my-10 h-px w-24"
              style={{
                backgroundColor:
                  "rgba(201,161,95,0.55)",
              }}
            />

            {/* ======================================
                COLORES RESERVADOS
            ====================================== */}

            <Crown
              size={35}
              strokeWidth={1.1}
              color={colores.dorado}
            />

            <h3
              className="
                mt-5 font-serif
                text-[clamp(2rem,6vw,3.2rem)]
                leading-tight
              "
              style={{
                fontFamily:
                  '"Playfair Display", Georgia, serif',
                color: colores.cafe,
              }}
            >
              Colores
              <span
                className="italic"
                style={{
                  color: colores.dorado,
                }}
              >
                {" "}reservados
              </span>
            </h3>

            <p
              className="
                mx-auto mt-5
                max-w-md
                text-sm leading-[1.9]
                sm:text-base
              "
              style={{
                color: colores.cafeClaro,
              }}
            >
              {vestimentaConfig.mensajeColores}
            </p>

            {/* ======================================
                CÍRCULOS DE COLORES
                FONDO CAFÉ PARA CONTRASTE
            ====================================== */}

            <div
              className="
                mt-9 grid w-full
                grid-cols-3
                items-start gap-2
                px-3 py-9
                sm:gap-7 sm:px-8
                sm:py-12
              "
              style={{
                backgroundColor:
                  colores.cafeProfundo,
                border:
                  "1px solid rgba(201,161,95,0.45)",
              }}
            >
              {vestimentaConfig.coloresReservados.map(
                (item) => (
                  <CirculoColor
                    key={item.nombre}
                    nombre={item.nombre}
                    color={item.color}
                  />
                )
              )}
            </div>

            {/* ACLARACIÓN */}

            <p
              className="
                mx-auto mt-7
                max-w-md
                text-xs italic
                leading-relaxed
                sm:text-sm
              "
              style={{
                color: colores.cafeClaro,
              }}
            >
              Agradecemos evitar estos tonos
              y sus variantes similares.
            </p>

            {/* FRASE FINAL */}

            <Heart
              size={22}
              strokeWidth={1.2}
              color={colores.dorado}
              className="mt-12"
            />

            <p
              className="
                mx-auto mt-5
                max-w-md
                font-serif text-lg
                italic leading-relaxed
                sm:text-xl
              "
              style={{
                fontFamily:
                  '"Playfair Display", Georgia, serif',
                color: colores.cafe,
              }}
            >
              {vestimentaConfig.frase}
            </p>

            <div className="mt-9">
              <Ornamento />
            </div>
          </div>

          {/* DETALLE INFERIOR */}

          <div
            className="
              absolute bottom-0 left-1/2
              h-[3px] w-32
              -translate-x-1/2
            "
            style={{
              background:
                "linear-gradient(90deg, transparent, #C9A15F, transparent)",
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}
