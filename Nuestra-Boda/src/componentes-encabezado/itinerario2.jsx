
import React from "react";
import { motion } from "framer-motion";
import {
  Church,
  Wine,
  UtensilsCrossed,
  Music2,
  Sparkles,
  Heart,
} from "lucide-react";

// ==========================================
// CONFIGURACIÓN EDITABLE - WEDLY
// ==========================================

const eventos = [
  {
    id: 1,
    titulo: "Misa",
    hora: "4:00 PM",
    descripcion: "Damos gracias por este día tan especial.",
    icono: Church,
  },
  {
    id: 2,
    titulo: "Recepción",
    hora: "6:00 PM",
    descripcion: "Bienvenidos a una noche inolvidable.",
    icono: Wine,
  },
  {
    id: 3,
    titulo: "Cena",
    hora: "7:00 PM",
    descripcion: "Compartamos juntos este momento especial.",
    icono: UtensilsCrossed,
  },
  {
    id: 4,
    titulo: "Vals",
    hora: "8:00 PM",
    descripcion: "Un baile para recordar toda la vida.",
    icono: Music2,
  },
];

// ==========================================
// PALETA CHAMPAGNE · DORADO · BEIGE · CAFÉ
// ==========================================

const colores = {
  beige: "#E8D9C6",
  cafe: "#42291E",
  cafeProfundo: "#2B1A14",
  cafeClaro: "#75533D",
  dorado: "#B58C50",
  doradoClaro: "#C9A15F",
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
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// ==========================================
// ORNAMENTO
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

      <Sparkles
        size={19}
        strokeWidth={1.2}
        color={colores.dorado}
      />

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
// TARJETA DE EVENTO
// ==========================================

function TarjetaItinerario({ evento, index }) {
  const Icono = evento.icono;

  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 30,
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
        delay: Math.min(index * 0.1, 0.3),
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        relative w-full
        overflow-hidden
        border
        px-6 py-9
        text-center
        sm:px-10 sm:py-11
      "
      style={{
        backgroundColor: colores.marfil,
        borderColor: "rgba(181,140,80,0.55)",
        boxShadow: "0 12px 28px rgba(66,41,30,0.08)",
      }}
    >
      {/* MARCO INTERIOR */}

      <div
        className="
          pointer-events-none
          absolute inset-2
          border
          sm:inset-3
        "
        style={{
          borderColor: "rgba(181,140,80,0.24)",
        }}
      />

      {/* DETALLE SUPERIOR */}

      <div
        className="
          absolute left-1/2 top-0
          h-[3px] w-24
          -translate-x-1/2
        "
        style={{
          backgroundColor: colores.dorado,
        }}
      />

      {/* CONTENIDO */}

      <div
        className="
          relative z-10
          flex flex-col
          items-center
        "
      >
        {/* ÍCONO */}

        <div
          className="
            mb-6 flex
            h-[76px] w-[76px]
            items-center justify-center
            rounded-full border
          "
          style={{
            backgroundColor: colores.beige,
            borderColor: "rgba(181,140,80,0.55)",
          }}
        >
          <Icono
            size={33}
            strokeWidth={1.3}
            color={colores.cafe}
          />
        </div>

        {/* HORA */}

        <p
          className="
            text-xs font-semibold
            uppercase
            tracking-[0.25em]
            sm:text-sm
          "
          style={{
            color: colores.dorado,
          }}
        >
          {evento.hora}
        </p>

        {/* TÍTULO */}

        <h3
          className="
            mt-4 font-serif
            text-[clamp(1.8rem,5vw,2.6rem)]
            leading-tight
          "
          style={{
            fontFamily:
              '"Playfair Display", Georgia, serif',
            color: colores.cafe,
          }}
        >
          {evento.titulo}
        </h3>

        {/* DIVISOR */}

        <div
          className="my-5 h-px w-14"
          style={{
            backgroundColor: colores.dorado,
          }}
        />

        {/* DESCRIPCIÓN */}

        <p
          className="
            max-w-xs font-serif
            text-sm italic
            leading-relaxed
            sm:text-base
          "
          style={{
            fontFamily:
              '"Playfair Display", Georgia, serif',
            color: colores.cafeClaro,
          }}
        >
          {evento.descripcion}
        </p>
      </div>

      {/* DETALLE INFERIOR */}

      <div
        className="
          absolute bottom-0 left-1/2
          h-[3px] w-24
          -translate-x-1/2
        "
        style={{
          backgroundColor: colores.dorado,
        }}
      />
    </motion.article>
  );
}

// ==========================================
// COMPONENTE PRINCIPAL
// ==========================================

export default function Itinerario2() {
  return (
    <section
      id="itinerario"
      className="
        relative isolate
        w-full overflow-hidden
        px-5 py-24
        sm:px-8 sm:py-32
      "
      style={{
        backgroundColor: colores.beige,
      }}
    >
      {/* ======================================
          FONDO BEIGE SÓLIDO
          SIN DEGRADADOS NI DIFUMINADOS
      ====================================== */}

      {/* MARCOS DECORATIVOS */}

      <div
        className="
          pointer-events-none
          absolute inset-4
          border
          sm:inset-8
        "
        style={{
          borderColor: "rgba(181,140,80,0.30)",
        }}
      />

      {/* ESQUINAS DECORATIVAS */}

      <div
        className="
          pointer-events-none
          absolute left-7 top-7
          h-12 w-12
          border-l border-t
          sm:left-12 sm:top-12
        "
        style={{
          borderColor: colores.dorado,
        }}
      />

      <div
        className="
          pointer-events-none
          absolute bottom-7 right-7
          h-12 w-12
          border-b border-r
          sm:bottom-12 sm:right-12
        "
        style={{
          borderColor: colores.dorado,
        }}
      />

      {/* ======================================
          CONTENEDOR
      ====================================== */}

      <div className="relative z-10 mx-auto max-w-5xl">
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
          <Ornamento />
      

          {/* TÍTULO */}

          <h2
            className="
              mt-5 font-serif
              text-[clamp(2.8rem,8vw,5rem)]
              leading-tight
            "
            style={{
              fontFamily:
                '"Playfair Display", Georgia, serif',
              color: colores.cafe,
            }}
          >
            Mi
            <br />
            <span
              className="italic"
              style={{
                color: colores.dorado,
              }}
            >
              Itinerario
            </span>
          </h2>

          {/* DIVISOR */}

          <div
            className="mx-auto mt-8 h-px w-28"
            style={{
              backgroundColor: colores.dorado,
            }}
          />

          {/* DESCRIPCIÓN */}

          <p
            className="
              mx-auto mt-7
              max-w-lg
              font-serif text-base
              leading-relaxed
              sm:text-lg
            "
            style={{
              fontFamily:
                '"Playfair Display", Georgia, serif',
              color: colores.cafeClaro,
            }}
          >
            Cada momento de esta noche será
            parte de una historia.
          </p>
        </motion.div>

        {/* ======================================
            LÍNEA DE TIEMPO
        ====================================== */}

        <div className="relative">
          {/* LÍNEA VERTICAL - COMPUTADORA */}

          <div
            className="
              pointer-events-none
              absolute bottom-0
              left-1/2 top-0
              hidden w-px
              -translate-x-1/2
              md:block
            "
            style={{
              backgroundColor: colores.dorado,
            }}
          />

          {/* LÍNEA VERTICAL - CELULAR */}

          <div
            className="
              pointer-events-none
              absolute bottom-0
              left-4 top-0
              w-px
              md:hidden
            "
            style={{
              backgroundColor: colores.dorado,
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
                    relative grid
                    grid-cols-[32px_minmax(0,1fr)]
                    items-center gap-4
                    md:grid-cols-[minmax(0,1fr)_48px_minmax(0,1fr)]
                    md:gap-5
                  "
                >
                  {/* PUNTO DE LA LÍNEA */}

                  <div
                    className="
                      relative z-10
                      col-start-1 row-start-1
                      mx-auto h-4 w-4
                      rotate-45 border-2
                      md:col-start-2
                    "
                    style={{
                      backgroundColor: colores.beige,
                      borderColor: colores.dorado,
                    }}
                  />

                  {/* TARJETA */}

                  <div
                    className={`
                      col-start-2 row-start-1
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
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="mb-6 flex items-center justify-center gap-4">
            <span
              className="h-px w-12"
              style={{
                backgroundColor: colores.dorado,
              }}
            />

            <Heart
              size={20}
              strokeWidth={1.2}
              color={colores.cafe}
            />

            <span
              className="h-px w-12"
              style={{
                backgroundColor: colores.dorado,
              }}
            />
          </div>

    
        </motion.div>
      </div>
    </section>
  );
}
