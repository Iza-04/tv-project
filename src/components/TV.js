import { useState } from "react";
import Screen from "./Screen";
import Remote from "./Remote";

const channels = [
  {
    number: 1,
    name: "Природа",
    image: "/images/nature.jpg",
  },
  {
    number: 2,
    name: "Мультфильмы",
    image: "/images/cartoons.jpg",
  },
  {
    number: 3,
    name: "История",
    image: "/images/history.jpg",
  },
  {
    number: 4,
    name: "Фантастика",
    image: "/images/fantasy.jpg",
  },
];

function TV() {
  const [isOn, setIsOn] = useState(false);
  const [channel, setChannel] = useState(0);
  const [volume, setVolume] = useState(50);
  const [isMuted, setIsMuted] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.repeat) return;

      switch (e.key) {
        case "p":
        case "P":
          setIsOn((prev) => !prev);
          break;

        case "ArrowUp":
          setChannel((prev) => (prev + 1) % channels.length);
          break;

        case "ArrowDown":
          setChannel((prev) => (prev === 0 ? channels.length - 1 : prev - 1));
          break;

        case "ArrowRight":
          setVolume((prev) => Math.min(prev + 5, 100));
          setIsMuted(false);
          break;

        case "ArrowLeft":
          setVolume((prev) => Math.max(prev - 5, 0));
          break;

        case "m":
        case "M":
          setIsMuted((prev) => !prev);
          break;

        case "Enter":
          setShowMenu((prev) => !prev);
          break;

        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const changeChannel = (direction) => {
    setIsLoading(true);

    setTimeout(() => {
      setChannel((prev) => {
        if (direction === "up") {
          return (prev + 1) % channels.length;
        }
        return (prev - 1 + channels.length) % channels.length;
      });
      setIsLoading(false);
    }, 800);
  };

  return (
    <div style={{ display: "flex", gap: "40px", padding: "20px" }}>
      <Screen
        isOn={isOn}
        channel={channels[channel]}
        volume={volume}
        isMuted={isMuted}
        showMenu={showMenu}
        isLoading={isLoading}
      />

      <Remote
        isOn={isOn}
        setIsOn={setIsOn}
        channel={channel}
        changeChannel={changeChannel}
        channelsCount={channels.length}
        volume={volume}
        setVolume={setVolume}
        isMuted={isMuted}
        setIsMuted={setIsMuted}
        showMenu={showMenu}
        setShowMenu={setShowMenu}
      />
    </div>
  );
}

export default TV;
