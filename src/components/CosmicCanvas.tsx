import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { type ISourceOptions } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

// This component no longer needs props
const CosmicCanvas = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options: ISourceOptions = useMemo(
    () => ({
      autoPlay: true,
      background: {
        color: {
          value: "#0a0a1a",
        },
        // Nebula effect with slightly increased vibrancy
        image: `radial-gradient(ellipse at 70% 20%, hsla(280, 40%, 30%, 0.6) 0%, transparent 50%),
                radial-gradient(ellipse at 30% 80%, hsla(220, 45%, 30%, 0.6) 0%, transparent 50%),
                radial-gradient(ellipse at 50% 50%, hsla(50, 50%, 20%, 0.4) 0%, transparent 70%)`,
        position: "50% 50%",
        repeat: "no-repeat",
        size: "cover",
      },
      fullScreen: {
        enable: true,
        zIndex: -1,
      },
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: "bubble",
          },
        },
        modes: {
          bubble: {
            distance: 200,
            size: 2.5,
            duration: 2,
            opacity: 1,
          },
        },
      },
      particles: {
        color: {
          // Using the new 'golden-glow' color
          value: ["#ffffff", "#ffc371"],
        },
        links: {
          enable: false,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: "out",
          random: true,
          speed: 0.3,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            area: 800,
          },
          value: 160,
        },
        opacity: {
          value: { min: 0.1, max: 0.6 },
          animation: {
            enable: true,
            speed: 0.8,
            sync: false,
          },
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 0.5, max: 1.5 },
        },
        twinkle: {
          particles: {
            enable: true,
            frequency: 0.05,
            opacity: 1,
          },
        },
      },
      pauseOnOutsideViewport: true,
      responsive: [
        {
          maxWidth: 768,
          options: {
            particles: {
              number: {
                value: 160,
              },
            },
            interactivity: {
              events: {
                onHover: {
                  enable: false,
                },
              },
            },
          },
        },
      ],
    }),
    [],
  );

  if (init) {
    return (
      <Particles
        id="tsparticles"
        options={options}
      />
    );
  }

  return null;
};

export default CosmicCanvas;