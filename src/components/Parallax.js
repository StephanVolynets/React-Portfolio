import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const ParallaxParticles = ({ particleCount = 150, showLinks = true }) => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const options = useMemo(() => ({
    autoPlay: true,
    background: {
      color: {
        value: "#0d1b2a"
      },
      opacity: 1
    },
    fullScreen: {
      enable: true,
      zIndex: 0
    },
    detectRetina: true,
    fpsLimit: 120,
    interactivity: {
      detectsOn: "window",
      events: {
        onClick: {
          enable: true,
          mode: "push"
        },
        onHover: {
          enable: true,
          mode: "grab",
          parallax: {
            enable: true,
            force: 60,
            smooth: 10
          }
        },
        resize: {
          delay: 0.5,
          enable: true
        }
      },
      modes: {
        grab: {
          distance: 400,
          links: {
            opacity: 1
          }
        },
        push: {
          quantity: 4
        }
      }
    },
    particles: {
      bounce: {
        horizontal: {
          value: 1
        },
        vertical: {
          value: 1
        }
      },
      collisions: {
        enable: false
      },
      color: {
        value: "#ffffff"
      },
      move: {
        enable: true,
        speed: 2,
        direction: "none",
        outModes: {
          default: "out"
        }
      },
      number: {
        density: {
          enable: true,
          width: 1920,
          height: 1080
        },
        value: particleCount
      },
      opacity: {
        value: {
          min: 0.1,
          max: 0.5
        },
        animation: {
          enable: true,
          speed: 3,
          startValue: "random"
        }
      },
      shape: {
        type: "circle"
      },
      size: {
        value: {
          min: 1,
          max: 10
        },
        animation: {
          enable: true,
          speed: 20,
          startValue: "random"
        }
      },
      links: {
        enable: showLinks,
        distance: 200,
        color: "#ffffff",
        opacity: 0.4,
        width: 1
      }
    },
    pauseOnBlur: true,
    pauseOnOutsideViewport: true,
    zLayers: 100,
    motion: {
      reduce: {
        factor: 4,
        value: true
      }
    }
  }), [particleCount, showLinks]);

  if (init) {
    return (
      <Particles
        id="parallaxParticles"
        particlesLoaded={particlesLoaded}
        options={options}
      />
    );
  }

  return <></>;
};

export default ParallaxParticles;
