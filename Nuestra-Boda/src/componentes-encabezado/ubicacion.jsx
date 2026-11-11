
import React from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Clock3,
  Church,
  Wine,
  ArrowUpRight,
  CalendarDays,
  Sparkles,
} from "lucide-react";

// ==========================================
// CONFIGURACIÓN EDITABLE - WEDLY
// ==========================================

const fechaCelebracion = {
  dia: "Sabado",
  fecha: "16",
  mesAnio: "Enero 2027",
};

const ceremonia = {
  titulo: "Ceremonia Religiosa",
  hora: "4:00 PM",
  lugar: "Parroquia Santa Maria de Guadalupe",
  ubicacion:
    "https://maps.app.goo.gl/CfoP5wZEeK4GnHcH7",
  icono: Church,
  numero: "01",
};

const recepcion = {
  titulo: "Recepción",
  hora: "6:00 PM",
  lugar: "Salón de Eventos La Terraza",
  ubicacion:
    "https://maps.app.goo.gl/ntHZNQM8thBfF1g58",
  icono: Wine,
  numero: "02",
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

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 35,
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
// TARJETA DE EVENTO
// ==========================================

function TarjetaEvento({
  titulo,
  hora,
  lugar,
  ubicacion,
  icono: Icono,
  numero,
}) {
  return (
    <motion.article
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.15,
      }}
      whileHover={{
        y: -6,
      }}
      className="
        relative flex w-full
        max-w-xl flex-col
        items-center
        overflow-hidden
        px-7 py-14
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
      {/* MARCO DORADO */}

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
          pointer-events-none
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
          h-56 w-56 rounded-full
          border
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
          h-40 w-40 rounded-full
          border
        "
        style={{
          borderColor:
            "rgba(201,161,95,0.16)",
        }}
      />

      {/* CONTENIDO */}

      <div
        className="
          relative z-10
          flex w-full flex-1
          flex-col items-center
        "
      >
        {/* NÚMERO */}

        <p
          className="
            text-xs font-medium
            tracking-[0.3em]
          "
          style={{
            color: colores.cafeClaro,
          }}
        >
          {numero}
        </p>

        {/* ICONO */}

        <motion.div
          className="
            mt-6 flex
            h-20 w-20
            items-center justify-center
            rounded-full border
          "
          style={{
            borderColor:
              "rgba(201,161,95,0.65)",
            backgroundColor:
              "rgba(255,248,237,0.45)",
          }}
          whileHover={{
            rotate: 5,
            scale: 1.05,
          }}
        >
          <Icono
            size={35}
            strokeWidth={1.2}
            color={colores.dorado}
          />
        </motion.div>

        {/* TÍTULO */}

        <h3
          className="
            mt-7 font-serif
            text-[clamp(1.9rem,5vw,2.8rem)]
            leading-tight
          "
          style={{
            fontFamily:
              '"Playfair Display", Georgia, serif',
            color: colores.cafe,
          }}
        >
          {titulo}
        </h3>

        {/* ORNAMENTO */}

        <div className="mt-6">
          <Ornamento />
        </div>

        {/* HORA */}

        <div className="mt-9 flex flex-col items-center">
          <Clock3
            size={22}
            strokeWidth={1.4}
            color={colores.dorado}
          />

          <p
            className="
              mt-3 text-[10px]
              font-semibold uppercase
              tracking-[0.3em]
            "
            style={{
              color: colores.cafeClaro,
            }}
          >
            Hora del evento
          </p>

          <p
            className="
              mt-3 font-serif
              text-3xl sm:text-4xl
            "
            style={{
              fontFamily:
                '"Playfair Display", Georgia, serif',
              color: colores.cafe,
            }}
          >
            {hora}
          </p>
        </div>

        {/* DIVISOR */}

        <div
          className="my-9 h-px w-20"
          style={{
            backgroundColor:
              "rgba(201,161,95,0.55)",
          }}
        />

        {/* LUGAR */}

        <div className="flex flex-col items-center">
          <MapPin
            size={22}
            strokeWidth={1.4}
            color={colores.dorado}
          />

          <p
            className="
              mt-3 text-[10px]
              font-semibold uppercase
              tracking-[0.3em]
            "
            style={{
              color: colores.cafeClaro,
            }}
          >
            Lugar
          </p>

          <h4
            className="
              mt-4 max-w-sm
              font-serif
              text-[clamp(1.5rem,4vw,2rem)]
              leading-snug
            "
            style={{
              fontFamily:
                '"Playfair Display", Georgia, serif',
              color: colores.cafe,
            }}
          >
            {lugar}
          </h4>
        </div>

        {/* BOTÓN GOOGLE MAPS */}

        <motion.a
          href={ubicacion}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{
            scale: 1.04,
          }}
          whileTap={{
            scale: 0.97,
          }}
          className="
            group mt-10
            inline-flex w-full
            max-w-[260px]
            items-center justify-center
            gap-3 rounded-full
            px-6 py-4
            text-sm font-medium
            tracking-wide
            transition-all
          "
          style={{
            background:
              "linear-gradient(120deg, #75533D, #42291E, #24150F)",
            color: colores.marfil,
            boxShadow:
              "0 8px 25px rgba(66,41,30,0.25)",
          }}
        >
          <MapPin size={18} strokeWidth={1.6} />

          Ver ubicación

          
        </motion.a>
      </div>

      {/* DETALLE INFERIOR */}

      <div
        className="
          pointer-events-none
          absolute bottom-0 left-1/2
          h-[3px] w-32
          -translate-x-1/2
        "
        style={{
          background:
            "linear-gradient(90deg, transparent, #C9A15F, transparent)",
        }}
      />
    </motion.article>
  );
}

// ==========================================
// COMPONENTE PRINCIPAL
// ==========================================

export default function Celebracion() {
  return (
    <section
      id="celebracion"
      className="
        relative isolate
        w-full overflow-hidden
        px-5 py-24
        sm:px-8 sm:py-32
      "
      style={{
        backgroundColor: colores.cafeProfundo,
      }}
    >
      {/* ======================================
          FONDO CAFÉ PROFUNDO
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
          COLUMNAS DECORATIVAS
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

      {/* ======================================
          LÍNEAS DORADAS LATERALES
      ====================================== */}

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
          DESTELLOS
      ====================================== */}

      {[
        { left: "15%", top: "18%", delay: 0 },
        { left: "85%", top: "30%", delay: 1 },
        { left: "20%", top: "75%", delay: 2 },
        { left: "80%", top: "85%", delay: 0.5 },
      ].map((item, i) => (
        <motion.div
          key={i}
          className="
            pointer-events-none
            absolute
          "
          style={{
            left: item.left,
            top: item.top,
            color: colores.doradoClaro,
          }}
          animate={{
            opacity: [0.2, 0.8, 0.2],
            scale: [0.7, 1.2, 0.7],
          }}
          transition={{
            duration: 4,
            delay: item.delay,
            repeat: Infinity,
          }}
        >
          <Sparkles size={15} strokeWidth={1} />
        </motion.div>
      ))}

      {/* ======================================
          CONTENIDO PRINCIPAL
      ====================================== */}

      <div
        className="
          relative z-10
          mx-auto max-w-6xl
        "
      >
        {/* ENCABEZADO */}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
          className="mb-16 text-center"
        >
          {/* ORNAMENTO SUPERIOR */}

          <div className="mb-7 flex items-center justify-center gap-4">
            <span
              className="h-px w-12"
              style={{
                backgroundColor: colores.dorado,
              }}
            />

            <CalendarDays
              size={22}
              strokeWidth={1.2}
              color={colores.doradoClaro}
            />

            <span
              className="h-px w-12"
              style={{
                backgroundColor: colores.dorado,
              }}
            />
          </div>

          {/* SUBTÍTULO */}

          <p
            className="
              text-xs font-medium
              uppercase
              tracking-[0.4em]
            "
            style={{
              color: colores.champagne,
            }}
          >
            Mis XV Años
          </p>

          {/* TÍTULO */}

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
            Un día inolvidable
          </h2>

          {/* ORNAMENTO */}

          <div className="mt-7">
            <Ornamento claro />
          </div>

          {/* ======================================
              FECHA
          ====================================== */}

          <div className="mt-12 flex flex-col items-center">
            <p
              className="
                text-xs uppercase
                tracking-[0.35em]
              "
              style={{
                color: colores.champagne,
              }}
            >
              {fechaCelebracion.dia}
            </p>

            <h3
              className="
                mt-3 font-serif
                text-[clamp(5rem,15vw,8rem)]
                leading-none
              "
              style={{
                fontFamily:
                  '"Playfair Display", Georgia, serif',
                color: colores.doradoClaro,
                textShadow:
                  "0 5px 30px rgba(0,0,0,0.3)",
              }}
            >
              {fechaCelebracion.fecha}
            </h3>

            <p
              className="
                mt-4 font-serif
                text-xl tracking-[0.12em]
                sm:text-2xl
              "
              style={{
                fontFamily:
                  '"Playfair Display", Georgia, serif',
                color: colores.champagne,
              }}
            >
              {fechaCelebracion.mesAnio}
            </p>
          </div>
        </motion.div>

        {/* ======================================
            TARJETAS DE UBICACIÓN
        ====================================== */}

        <div
          className="
            grid grid-cols-1
            items-stretch
            justify-items-center
            gap-9
            lg:grid-cols-2
            lg:gap-8
          "
        >
          <TarjetaEvento {...ceremonia} />
          <TarjetaEvento {...recepcion} />
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
          <Ornamento claro />

          <p
            className="
              mx-auto mt-7
              max-w-md
              font-serif
              text-lg italic
              leading-relaxed
              sm:text-xl
            "
            style={{
              fontFamily:
                '"Playfair Display", Georgia, serif',
              color: colores.champagne,
            }}
          >
            Cada momento será más especial
            con tu presencia.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
