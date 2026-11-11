
import React from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Clock3,
  Church,
  Wine,
  ArrowUpRight,
  CalendarDays,
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

// FECHA DE LA CELEBRACIÓN
const fechaCelebracion = {
  dia: "Viernes",
  fecha: "11",
  mesAnio: "Junio 2027",
};

// CEREMONIA
const ceremonia = {
  titulo: "Ceremonia",
  hora: "4:30 PM",
  lugar: "Parroquia de Nuestra Señora",
  direccion: "Puebla, Puebla",
  ubicacion: "https://maps.app.goo.gl/TsSDUBKAractwi8F8",
  icono: Church,
};

// RECEPCIÓN
const recepcion = {
  titulo: "Recepción",
  hora: "8:00 PM",
  lugar: "Jardín Magnolia",
  direccion: "Atlixco, Puebla",
  ubicacion: "https://maps.app.goo.gl/TsSDUBKAractwi8F8",
  icono: Wine,
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
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// ==========================================
// TARJETA REUTILIZABLE
// ==========================================

const TarjetaEvento = ({
  titulo,
  hora,
  lugar,
  direccion,
  ubicacion,
  icono: Icono,
}) => {
  return (
    <motion.article
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{ y: -5 }}
      className="
        relative
        w-full
        max-w-xl
        overflow-hidden
        border
        bg-[#F8F2F0]
        px-7
        py-12
        shadow-[0_20px_60px_rgba(102,84,90,0.15)]
        sm:px-12
        sm:py-14
      "
      style={{
        borderColor: "rgba(184,154,106,0.4)",
      }}
    >
      {/* MARCO DECORATIVO INTERIOR */}
      <div
        className="
          pointer-events-none
          absolute
          inset-3
          border
          sm:inset-4
        "
        style={{
          borderColor: "rgba(200,155,145,0.35)",
        }}
      />

      {/* DETALLE SUPERIOR */}
      <div
        className="
          absolute
          left-1/2
          top-0
          h-[3px]
          w-28
          -translate-x-1/2
        "
        style={{
          backgroundColor: colores.champagne,
        }}
      />

      {/* DECORACIÓN DE FONDO */}
      <div
        className="
          pointer-events-none
          absolute
          -right-16
          -top-16
          h-48
          w-48
          rounded-full
          border
        "
        style={{
          borderColor: "rgba(200,155,145,0.2)",
        }}
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-9
          -top-9
          h-32
          w-32
          rounded-full
          border
        "
        style={{
          borderColor: "rgba(184,154,106,0.2)",
        }}
      />

      {/* CONTENIDO */}
      <div className="relative z-10 flex flex-col items-center text-center">

        {/* ICONO PRINCIPAL */}
        <div
          className="
            mb-7
            flex
            h-20
            w-20
            items-center
            justify-center
            rounded-full
            border
          "
          style={{
            borderColor: "rgba(184,154,106,0.45)",
            backgroundColor: "rgba(232,207,203,0.3)",
          }}
        >
          <Icono
            size={35}
            strokeWidth={1.3}
            style={{
              color: colores.champagne,
            }}
          />
        </div>

        {/* TÍTULO */}
        <h3
          className="
            font-serif
            text-3xl
            font-normal
            tracking-wide
            sm:text-4xl
          "
          style={{
            fontFamily: '"Playfair Display", Georgia, serif',
            color: colores.ciruela,
          }}
        >
          {titulo}
        </h3>

        {/* DIVISOR */}
        <div className="mb-9 mt-7 flex items-center gap-3">
          <div
            className="h-px w-12"
            style={{
              backgroundColor: colores.champagne,
            }}
          />

          <div
            className="h-2 w-2 rotate-45 border"
            style={{
              borderColor: colores.champagne,
            }}
          />

          <div
            className="h-px w-12"
            style={{
              backgroundColor: colores.champagne,
            }}
          />
        </div>

        {/* HORA */}
        <div className="flex flex-col items-center">
          <Clock3
            size={21}
            strokeWidth={1.5}
            className="mb-3"
            style={{
              color: colores.rosaAntiguo,
            }}
          />

          <p
            className="
              font-sans
              text-xs
              font-semibold
              uppercase
              tracking-[0.25em]
            "
            style={{
              color: colores.champagne,
            }}
          >
            Hora del evento
          </p>

          <p
            className="
              mt-3
              font-serif
              text-2xl
              sm:text-3xl
            "
            style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              color: colores.ciruela,
            }}
          >
            {hora}
          </p>
        </div>

        {/* SEPARADOR */}
        <div
          className="my-9 h-px w-16"
          style={{
            backgroundColor: colores.rosaClaro,
          }}
        />

        {/* LUGAR */}
        <div className="flex flex-col items-center">
          <MapPin
            size={22}
            strokeWidth={1.5}
            className="mb-3"
            style={{
              color: colores.rosaAntiguo,
            }}
          />

          <p
            className="
              font-sans
              text-xs
              font-semibold
              uppercase
              tracking-[0.25em]
            "
            style={{
              color: colores.champagne,
            }}
          >
            Lugar
          </p>

          <h4
            className="
              mt-3
              font-serif
              text-2xl
              leading-snug
              sm:text-3xl
            "
            style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              color: colores.ciruela,
            }}
          >
            {lugar}
          </h4>

          <p
            className="
              mt-4
              max-w-sm
              font-sans
              text-sm
              leading-relaxed
              sm:text-base
            "
            style={{
              color: colores.ciruela,
              opacity: 0.8,
            }}
          >
            {direccion}
          </p>
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
            group
            mt-10
            inline-flex
            items-center
            justify-center
            gap-3
            rounded-full
            bg-[#66545A]
            px-8
            py-4
            font-sans
            text-sm
            font-medium
            tracking-wide
            text-white
            shadow-[0_8px_25px_rgba(102,84,90,0.2)]
            transition-colors
            duration-300
            hover:bg-[#544349]
          "
        >
          <MapPin
            size={18}
            strokeWidth={1.7}
          />

          Ver ubicación

          <ArrowUpRight
            size={17}
            className="
              transition-transform
              duration-300
              group-hover:translate-x-1
              group-hover:-translate-y-1
            "
          />
        </motion.a>
      </div>

      {/* DETALLE INFERIOR */}
      <div
        className="
          absolute
          bottom-0
          left-1/2
          h-[3px]
          w-28
          -translate-x-1/2
        "
        style={{
          backgroundColor: colores.champagne,
        }}
      />
    </motion.article>
  );
};

// ==========================================
// COMPONENTE PRINCIPAL
// ==========================================

export default function Celebracion() {
  return (
    <section
      id="celebracion"
      className="
        relative
        w-full
        overflow-hidden
        bg-[#C89B91]
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
          borderColor: "rgba(248,242,240,0.2)",
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
          borderColor: "rgba(248,242,240,0.2)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-6xl">

        {/* ENCABEZADO */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          {/* ORNAMENTO */}
          <div className="mb-6 flex items-center justify-center gap-3">
            <div
              className="h-px w-10"
              style={{
                backgroundColor: colores.marfil,
              }}
            />

            <CalendarDays
              size={19}
              strokeWidth={1.4}
              style={{
                color: colores.marfil,
              }}
            />

            <div
              className="h-px w-10"
              style={{
                backgroundColor: colores.marfil,
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
              tracking-[0.35em]
              sm:text-sm
            "
            style={{
              color: colores.marfil,
            }}
          >
            Mis XV años
          </p>

          {/* TÍTULO */}
          <h2
            className="
              mt-5
              font-serif
              text-4xl
              font-normal
              sm:text-5xl
            "
            style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              color: "#FFFFFF",
            }}
          >
            Un día inolvidable
          </h2>

          {/* FECHA */}
          <div className="mt-12 flex flex-col items-center">

            <p
              className="
                font-sans
                text-sm
                font-semibold
                uppercase
                tracking-[0.3em]
                sm:text-base
              "
              style={{
                color: colores.marfil,
              }}
            >
              {fechaCelebracion.dia}
            </p>

            <h3
              className="
                mt-4
                font-serif
                text-7xl
                leading-none
                sm:text-8xl
                md:text-9xl
              "
              style={{
                fontFamily: '"Playfair Display", Georgia, serif',
                color: "#FFFFFF",
                textShadow: "0 5px 25px rgba(102,84,90,0.15)",
              }}
            >
              {fechaCelebracion.fecha}
            </h3>

            <p
              className="
                mt-5
                font-serif
                text-xl
                tracking-[0.15em]
                sm:text-2xl
              "
              style={{
                fontFamily: '"Playfair Display", Georgia, serif',
                color: colores.marfil,
              }}
            >
              {fechaCelebracion.mesAnio}
            </p>
          </div>
        </motion.div>

        {/* TARJETAS */}
        <div
          className="
            grid
            grid-cols-1
            items-stretch
            justify-items-center
            gap-10
            lg:grid-cols-2
            lg:gap-8
          "
        >
          <TarjetaEvento {...ceremonia} />
          <TarjetaEvento {...recepcion} />
        </div>

        {/* MENSAJE FINAL */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="
            mt-16
            text-center
            font-serif
            text-lg
            italic
            sm:text-xl
          "
          style={{
            fontFamily: '"Playfair Display", Georgia, serif',
            color: colores.marfil,
          }}
        >
          Cada momento será más especial con tu presencia.
        </motion.p>
      </div>
    </section>
  );
}
