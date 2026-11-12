
import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Music2,
  Play,
  Pause,
  VolumeX,
  Sparkles,
  Crown,
} from "lucide-react";

// ==========================================
// CONFIGURACIÓN - WEDLY
// ==========================================

const musicaConfig = {
  archivo: "/musica.mp3",
  nombre: "Camila",
  titulo: "Mis XV Años",
  volumen: 0.65,
};

// ==========================================
// PALETA DE COLORES
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
// COMPONENTE PRINCIPAL
// ==========================================

export default function Musica() {
  const audioRef = useRef(null);

  const [mostrarVentana, setMostrarVentana] =
    useState(true);

  const [reproduciendo, setReproduciendo] =
    useState(false);

  const [error, setError] = useState("");

  // ==========================================
  // CONFIGURAR AUDIO
  // ==========================================

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) return;

    audio.volume = musicaConfig.volumen;

    const alReproducir = () => {
      setReproduciendo(true);
      setError("");
    };

    const alPausar = () => {
      setReproduciendo(false);
    };

    const alError = () => {
      setReproduciendo(false);
      setError("No se pudo cargar la canción.");
    };

    audio.addEventListener("play", alReproducir);
    audio.addEventListener("pause", alPausar);
    audio.addEventListener("error", alError);

    return () => {
      audio.removeEventListener("play", alReproducir);
      audio.removeEventListener("pause", alPausar);
      audio.removeEventListener("error", alError);
    };
  }, []);

  // ==========================================
  // BLOQUEAR SCROLL DEL FONDO
  // ==========================================

  useEffect(() => {
    if (!mostrarVentana) return;

    const overflowAnterior =
      document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow =
        overflowAnterior;
    };
  }, [mostrarVentana]);

  // ==========================================
  // ABRIR CON MÚSICA
  // ==========================================

  const abrirConMusica = async () => {
    const audio = audioRef.current;

    setMostrarVentana(false);

    if (!audio) return;

    try {
      setError("");
      await audio.play();
    } catch (err) {
      console.error(
        "Error al reproducir música:",
        err
      );

      setError(
        "Toca el botón de música para reproducirla."
      );
    }
  };

  // ==========================================
  // ABRIR SIN MÚSICA
  // ==========================================

  const abrirSinMusica = () => {
    audioRef.current?.pause();
    setMostrarVentana(false);
  };

  // ==========================================
  // REPRODUCIR / PAUSAR
  // ==========================================

  const toggleMusica = async () => {
    const audio = audioRef.current;

    if (!audio) return;

    if (!audio.paused) {
      audio.pause();
      return;
    }

    try {
      setError("");
      await audio.play();
    } catch (err) {
      console.error(
        "Error al reproducir música:",
        err
      );

      setError(
        "No se pudo reproducir la canción."
      );
    }
  };

  // ==========================================
  // RENDER
  // ==========================================

  return (
    <>
      <audio
        ref={audioRef}
        src={musicaConfig.archivo}
        loop
        preload="auto"
      />

      {/* ======================================
          VENTANA DE BIENVENIDA
      ====================================== */}

      <AnimatePresence>
        {mostrarVentana && (
          <motion.div
            key="bienvenida-xv"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="
              fixed inset-0 z-[9999]
              flex items-start
              justify-center
              overflow-x-hidden
              overflow-y-auto
              overscroll-contain
              px-3 py-3
              sm:items-center
              sm:px-4 sm:py-6
              backdrop-blur-lg
            "
            style={{
              backgroundColor:
                "rgba(26,15,11,0.94)",
              height: "100dvh",
            }}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="titulo-musica-xv"
              initial={{
                opacity: 0,
                y: 25,
                scale: 0.97,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: -15,
                scale: 0.97,
              }}
              transition={{
                duration: 0.65,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                relative mx-auto my-auto
                w-full max-w-[370px]
                shrink-0
                overflow-hidden
                px-5 py-6
                text-center
                min-[390px]:px-7
                sm:max-w-[430px]
                sm:px-12 sm:py-10
              "
              style={{
                background: `
                  radial-gradient(
                    ellipse at 50% 12%,
                    rgba(201,161,95,0.17),
                    transparent 55%
                  ),
                  linear-gradient(
                    155deg,
                    #75533D 0%,
                    #42291E 38%,
                    #2B1A14 100%
                  )
                `,
                boxShadow:
                  "0 20px 70px rgba(0,0,0,0.4)",
              }}
            >
              {/* RESPLANDOR */}

              <div
                className="
                  pointer-events-none
                  absolute left-1/2 top-0
                  h-32 w-48
                  -translate-x-1/2
                  rounded-full blur-3xl
                  sm:h-48 sm:w-64
                "
                style={{
                  background:
                    "rgba(231,201,145,0.12)",
                }}
              />

              {/* MARCO EXTERIOR */}

              <div
                className="
                  pointer-events-none
                  absolute inset-[7px]
                  border
                  sm:inset-[9px]
                "
                style={{
                  borderColor:
                    "rgba(231,201,145,0.55)",
                }}
              />

              {/* MARCO INTERIOR */}

              <div
                className="
                  pointer-events-none
                  absolute inset-[12px]
                  border
                  sm:inset-[15px]
                "
                style={{
                  borderColor:
                    "rgba(231,201,145,0.16)",
                }}
              />

              {/* ARCO DECORATIVO */}

              <div
                className="
                  pointer-events-none
                  absolute left-1/2
                  top-5 h-[270px]
                  w-[84%]
                  -translate-x-1/2
                  rounded-t-[190px]
                  border border-b-0
                  sm:top-7
                  sm:h-[350px]
                "
                style={{
                  borderColor:
                    "rgba(231,201,145,0.32)",
                }}
              />

              {/* LUZ DECORATIVA */}

              <motion.div
                className="
                  pointer-events-none
                  absolute left-8 top-14
                  h-1.5 w-1.5
                  rounded-full
                  sm:left-10 sm:top-20
                "
                style={{
                  backgroundColor:
                    colores.doradoClaro,
                  boxShadow:
                    "0 0 15px rgba(231,201,145,0.8)",
                }}
                animate={{
                  opacity: [0.3, 1, 0.3],
                  scale: [0.8, 1.3, 0.8],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
              />

              <motion.div
                className="
                  pointer-events-none
                  absolute right-8 top-28
                  h-1.5 w-1.5
                  rounded-full
                  sm:right-10 sm:top-44
                "
                style={{
                  backgroundColor:
                    colores.doradoClaro,
                  boxShadow:
                    "0 0 15px rgba(231,201,145,0.8)",
                }}
                animate={{
                  opacity: [1, 0.3, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
              />

              {/* ======================================
                  CONTENIDO
              ====================================== */}

              <div
                className="
                  relative z-10
                  flex flex-col
                  items-center
                "
              >
                {/* CORONA */}

                <motion.div
                  initial={{
                    opacity: 0,
                    y: -10,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: 0.2,
                    duration: 0.6,
                  }}
                >
                  <Crown
                    className="
                      h-8 w-8
                      sm:h-11 sm:w-11
                    "
                    strokeWidth={1}
                    color={colores.doradoClaro}
                  />
                </motion.div>

                {/* ORNAMENTO */}

                <div
                  className="
                    mt-3 flex
                    items-center gap-3
                    sm:mt-5
                  "
                >
                  <span
                    className="h-px w-9 sm:w-12"
                    style={{
                      backgroundColor:
                        colores.dorado,
                    }}
                  />

                  <Sparkles
                    size={14}
                    strokeWidth={1}
                    color={colores.doradoClaro}
                  />

                  <span
                    className="h-px w-9 sm:w-12"
                    style={{
                      backgroundColor:
                        colores.dorado,
                    }}
                  />
                </div>

                {/* SUBTÍTULO */}

                <p
                  className="
                    mt-4 text-[9px]
                    uppercase
                    tracking-[0.25em]
                    sm:mt-6
                    sm:text-xs
                    sm:tracking-[0.38em]
                  "
                  style={{
                    color: colores.champagne,
                  }}
                >
                  Una noche inolvidable
                </p>

                {/* TÍTULO */}

                <h2
                  id="titulo-musica-xv"
                  className="
                    mt-2 text-[clamp(2rem,9vw,3rem)]
                    leading-tight
                    sm:mt-3 sm:text-6xl
                  "
                  style={{
                    fontFamily:
                      '"Playfair Display", Georgia, serif',
                    color: colores.doradoClaro,
                    textShadow:
                      "0 3px 25px rgba(201,161,95,0.18)",
                  }}
                >
                  Mis XV
                </h2>

                <p
                  className="
                    -mt-1 text-[clamp(1.8rem,8vw,2.5rem)]
                    italic leading-tight
                    sm:text-5xl
                  "
                  style={{
                    fontFamily:
                      '"Playfair Display", Georgia, serif',
                    color: colores.champagne,
                  }}
                >
                  Años
                </p>

                {/* NOMBRE */}

                <p
                  className="
                    mt-3 text-lg
                    tracking-wide
                    sm:mt-5 sm:text-2xl
                  "
                  style={{
                    fontFamily:
                      '"Playfair Display", Georgia, serif',
                    color: colores.marfil,
                  }}
                >
                  {musicaConfig.nombre}
                </p>

                {/* DIVISOR */}

                <div
                  className="
                    my-4 flex
                    items-center gap-3
                    sm:my-7
                  "
                >
                  <span
                    className="h-px w-8 sm:w-10"
                    style={{
                      backgroundColor:
                        colores.dorado,
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
                    className="h-px w-8 sm:w-10"
                    style={{
                      backgroundColor:
                        colores.dorado,
                    }}
                  />
                </div>

                {/* ICONO MUSICAL */}

                <motion.div
                  animate={{
                    y: [0, -4, 0],
                  }}
                  transition={{
                    duration: 3.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="
                    flex h-14 w-14
                    items-center justify-center
                    rounded-full border
                    sm:h-[74px] sm:w-[74px]
                  "
                  style={{
                    borderColor:
                      "rgba(231,201,145,0.55)",
                    background:
                      "rgba(231,201,145,0.07)",
                    boxShadow:
                      "0 0 35px rgba(201,161,95,0.12)",
                  }}
                >
                  <Music2
                    className="
                      h-6 w-6
                      sm:h-8 sm:w-8
                    "
                    strokeWidth={1.2}
                    color={colores.doradoClaro}
                  />
                </motion.div>

                {/* MENSAJE */}

                <p
                  className="
                    mt-4 max-w-xs
                    text-sm italic
                    leading-relaxed
                    sm:mt-6 sm:text-base
                  "
                  style={{
                    fontFamily:
                      '"Playfair Display", Georgia, serif',
                    color: colores.marfil,
                  }}
                >
                  Hay momentos que merecen
                  una melodía especial...
                </p>

                <p
                  className="
                    mt-2 max-w-xs
                    text-xs leading-relaxed
                    sm:mt-3 sm:text-sm
                  "
                  style={{
                    color: colores.beige,
                  }}
                >
                  Te invito a disfrutar esta
                  celebración acompañada
                  de música.
                </p>

                {/* ======================================
                    BOTÓN CON MÚSICA
                ====================================== */}

                <motion.button
                  type="button"
                  onClick={abrirConMusica}
                  whileHover={{
                    scale: 1.03,
                  }}
                  whileTap={{
                    scale: 0.97,
                  }}
                  className="
                    mt-5 flex w-full
                    items-center justify-center
                    gap-2 rounded-full
                    px-3 py-3
                    text-xs font-semibold
                    leading-snug
                    transition-all
                    sm:mt-8
                    sm:gap-3
                    sm:px-5 sm:py-4
                    sm:text-sm
                  "
                  style={{
                    color: colores.cafeProfundo,
                    background:
                      "linear-gradient(120deg, #E7C991, #C9A15F, #F1E2C8)",
                    boxShadow:
                      "0 8px 30px rgba(201,161,95,0.25)",
                  }}
                >
                  <Play
                    size={16}
                    fill="currentColor"
                    className="shrink-0"
                  />

                  Abrir invitación con música
                </motion.button>

                {/* ======================================
                    BOTÓN SIN MÚSICA
                ====================================== */}

                <button
                  type="button"
                  onClick={abrirSinMusica}
                  className="
                    mt-3 flex
                    items-center justify-center
                    gap-2 py-2
                    text-xs
                    transition-opacity
                    hover:opacity-70
                    sm:mt-5 sm:text-sm
                  "
                  style={{
                    color: colores.champagne,
                  }}
                >
                  <VolumeX size={16} />

                  Continuar sin música
                </button>

                {/* ORNAMENTO INFERIOR */}

                <div
                  className="
                    mt-4 flex
                    items-center gap-4
                    sm:mt-8
                  "
                >
                  <span
                    className="h-px w-8 sm:w-10"
                    style={{
                      backgroundColor:
                        colores.dorado,
                    }}
                  />

                  <span
                    style={{
                      color: colores.doradoClaro,
                    }}
                  >
                    ✧
                  </span>

                  <span
                    className="h-px w-8 sm:w-10"
                    style={{
                      backgroundColor:
                        colores.dorado,
                    }}
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ======================================
          BOTÓN FLOTANTE DE MÚSICA
      ====================================== */}

      <AnimatePresence>
        {!mostrarVentana && (
          <motion.button
            type="button"
            onClick={toggleMusica}
            initial={{
              opacity: 0,
              scale: 0.6,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              scale: 0.6,
            }}
            whileHover={{
              scale: 1.08,
            }}
            whileTap={{
              scale: 0.93,
            }}
            transition={{
              duration: 0.4,
            }}
            className="
              fixed bottom-5 right-4
              z-[999]
              flex h-12 w-12
              items-center justify-center
              rounded-full border
              sm:bottom-8 sm:right-8
              sm:h-16 sm:w-16
            "
            style={{
              color: colores.champagne,
              background:
                "linear-gradient(145deg, #75533D, #2B1A14)",
              borderColor: colores.dorado,
              boxShadow:
                "0 8px 30px rgba(43,26,20,0.4)",
            }}
            aria-label={
              reproduciendo
                ? "Pausar música"
                : "Reproducir música"
            }
            title={
              reproduciendo
                ? "Pausar música"
                : "Reproducir música"
            }
          >
            {/* ANILLO ANIMADO */}

            {reproduciendo && (
              <motion.span
                className="
                  pointer-events-none
                  absolute inset-0
                  rounded-full border
                "
                style={{
                  borderColor:
                    colores.doradoClaro,
                }}
                animate={{
                  scale: [1, 1.4],
                  opacity: [0.7, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeOut",
                }}
              />
            )}

            {reproduciendo ? (
              <Pause
                size={20}
                fill="currentColor"
              />
            ) : (
              <Music2
                size={21}
                strokeWidth={1.5}
              />
            )}
          </motion.button>
        )}
      </AnimatePresence>

      {/* ======================================
          MENSAJE DE ERROR
      ====================================== */}

      {error && !mostrarVentana && (
        <div
          role="alert"
          className="
            fixed bottom-20
            left-4 right-4
            z-[999]
            rounded-lg border
            px-4 py-3
            text-center text-xs
            shadow-lg
            sm:bottom-24
            sm:left-auto
            sm:right-8
            sm:max-w-xs
          "
          style={{
            backgroundColor: colores.cafe,
            borderColor: colores.dorado,
            color: colores.marfil,
          }}
        >
          {error}
        </div>
      )}
    </>
  );
}
