
import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Music2,
  Play,
  Pause,
  Sparkles,
  Heart,
  Volume2,
  VolumeX,
} from "lucide-react";

// ==========================================
// CONFIGURACIÓN EDITABLE - WEDLY
// ==========================================

const musicaConfig = {
  archivo: "/musica.mp3",
  nombre: "Isabella Montiel",
  titulo: "Mis XV Años",
  volumen: 0.65,
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
// COMPONENTE PRINCIPAL
// ==========================================

export default function Musica() {
  const audioRef = useRef(null);

  const [mostrarVentana, setMostrarVentana] = useState(true);
  const [reproduciendo, setReproduciendo] = useState(false);
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
  // BLOQUEAR SCROLL MIENTRAS ESTÁ LA VENTANA
  // ==========================================

  useEffect(() => {
    if (!mostrarVentana) return;

    const overflowAnterior = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = overflowAnterior;
    };
  }, [mostrarVentana]);

  // ==========================================
  // ABRIR INVITACIÓN CON MÚSICA
  // ==========================================

  const abrirConMusica = async () => {
    const audio = audioRef.current;

    setMostrarVentana(false);

    if (!audio) return;

    try {
      setError("");
      await audio.play();
    } catch (err) {
      console.error("No se pudo reproducir la música:", err);
      setError("Toca el botón de música para intentar reproducirla.");
    }
  };

  // ==========================================
  // ABRIR INVITACIÓN SIN MÚSICA
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
      console.error("Error al reproducir música:", err);
      setError("No se pudo reproducir la canción.");
    }
  };

  return (
    <>
      {/* AUDIO PRINCIPAL */}
      <audio
        ref={audioRef}
        src={musicaConfig.archivo}
        loop
        preload="auto"
      />

      {/* ======================================
          VENTANA EMERGENTE DE BIENVENIDA
      ====================================== */}

      <AnimatePresence>
        {mostrarVentana && (
          <motion.div
            key="ventana-musica"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="
              fixed inset-0 z-[9999]
              flex items-center justify-center
              overflow-y-auto
              bg-[#241D20]/80
              px-5 py-6
              backdrop-blur-md
            "
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="titulo-bienvenida-musica"
              initial={{
                opacity: 0,
                y: 35,
                scale: 0.92,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: -20,
                scale: 0.96,
              }}
              transition={{
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                relative
                my-auto
                w-full
                max-w-md
                overflow-hidden
                bg-[#66545A]
                px-8 py-12
                text-center
                shadow-[0_25px_80px_rgba(0,0,0,0.35)]
                sm:px-12 sm:py-14
              "
            >
              {/* MARCO EXTERIOR */}
              <div
                className="pointer-events-none absolute inset-3 border"
                style={{
                  borderColor: "rgba(184,154,106,0.6)",
                }}
              />

              {/* MARCO INTERIOR */}
              <div
                className="pointer-events-none absolute inset-5 border"
                style={{
                  borderColor: "rgba(232,207,203,0.2)",
                }}
              />

              <div className="relative z-10 flex flex-col items-center">

                {/* ORNAMENTO SUPERIOR */}
                <div className="mb-7 flex items-center gap-4">
                  <span className="h-px w-10 bg-[#B89A6A]" />

                  <Sparkles
                    size={20}
                    strokeWidth={1.2}
                    color={colores.champagne}
                  />

                  <span className="h-px w-10 bg-[#B89A6A]" />
                </div>

                {/* SUBTÍTULO */}
                <p className="
                  text-[10px] uppercase
                  tracking-[0.35em]
                  text-[#E8CFCB]
                  sm:text-xs
                ">
                  Estás invitado a celebrar
                </p>

                {/* TÍTULO */}
                <h2
                  id="titulo-bienvenida-musica"
                  className="
                    mt-5
                    font-serif
                    text-4xl
                    leading-tight
                    text-[#F8F2F0]
                    sm:text-5xl
                  "
                  style={{
                    fontFamily:
                      '"Playfair Display", Georgia, serif',
                  }}
                >
                  Mis XV Años
                </h2>

                {/* NOMBRE */}
                <p
                  className="
                    mt-4
                    font-serif
                    text-2xl
                    italic
                    text-[#E8CFCB]
                    sm:text-3xl
                  "
                  style={{
                    fontFamily:
                      '"Playfair Display", Georgia, serif',
                  }}
                >
                  {musicaConfig.nombre}
                </p>

                {/* DIVISOR */}
                <div className="my-8 flex items-center gap-3">
                  <span className="h-px w-10 bg-[#B89A6A]" />

                  <Heart
                    size={17}
                    strokeWidth={1.2}
                    color={colores.rosaClaro}
                  />

                  <span className="h-px w-10 bg-[#B89A6A]" />
                </div>

                {/* ICONO MUSICAL */}
                <motion.div
                  animate={{
                    y: [0, -6, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="
                    mb-7
                    flex
                    h-20 w-20
                    items-center justify-center
                    rounded-full
                    border
                  "
                  style={{
                    borderColor: "rgba(184,154,106,0.6)",
                    backgroundColor:
                      "rgba(248,242,240,0.06)",
                  }}
                >
                  <Music2
                    size={34}
                    strokeWidth={1.2}
                    color={colores.rosaClaro}
                  />
                </motion.div>

                {/* MENSAJE */}
                <p
                  className="
                    max-w-xs
                    font-serif
                    text-base
                    leading-relaxed
                    text-[#F8F2F0]
                    sm:text-lg
                  "
                  style={{
                    fontFamily:
                      '"Playfair Display", Georgia, serif',
                  }}
                >
                  Cada historia especial
                  tiene una melodía...
                </p>

                <p className="
                  mt-3
                  text-sm
                  leading-relaxed
                  text-[#E8CFCB]
                ">
                  ¿Te gustaría disfrutar esta invitación
                  acompañada de música?
                </p>

                {/* BOTÓN CON MÚSICA */}
                <motion.button
                  type="button"
                  onClick={abrirConMusica}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="
                    mt-9
                    flex w-full
                    items-center justify-center gap-3
                    rounded-full
                    bg-[#F8F2F0]
                    px-5 py-4
                    text-sm font-semibold
                    text-[#66545A]
                    shadow-lg
                    transition-colors
                    hover:bg-[#E8CFCB]
                  "
                >
                  <Play size={18} fill="currentColor" />
                  Abrir invitación con música
                </motion.button>

                {/* BOTÓN SIN MÚSICA */}
                <button
                  type="button"
                  onClick={abrirSinMusica}
                  className="
                    mt-5
                    flex items-center justify-center gap-2
                    text-sm
                    text-[#E8CFCB]
                    underline-offset-4
                    transition-colors
                    hover:text-white
                    hover:underline
                  "
                >
                  <VolumeX size={17} />
                  Continuar sin música
                </button>

                {/* ORNAMENTO INFERIOR */}
                <div className="mt-9 flex items-center gap-4">
                  <span className="h-px w-10 bg-[#B89A6A]" />
                  <span className="text-[#E8CFCB]">✧</span>
                  <span className="h-px w-10 bg-[#B89A6A]" />
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
              fixed
              bottom-6 right-5
              z-[999]
              flex h-14 w-14
              items-center justify-center
              rounded-full
              border
              bg-[#66545A]
              text-[#F8F2F0]
              shadow-[0_8px_30px_rgba(102,84,90,0.35)]
              sm:bottom-8 sm:right-8
              sm:h-16 sm:w-16
            "
            style={{
              borderColor: colores.champagne,
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
                  borderColor: colores.rosaClaro,
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
                size={23}
                fill="currentColor"
              />
            ) : (
              <Music2
                size={25}
                strokeWidth={1.5}
              />
            )}
          </motion.button>
        )}
      </AnimatePresence>

      {/* MENSAJE DE ERROR */}
      {error && !mostrarVentana && (
        <div
          role="alert"
          className="
            fixed bottom-24 right-5
            z-[999]
            max-w-xs
            rounded-lg
            bg-[#66545A]
            px-4 py-3
            text-xs text-white
            shadow-lg
            sm:right-8
          "
        >
          {error}
        </div>
      )}
    </>
  );
}
