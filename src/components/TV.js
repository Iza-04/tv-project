import { useState, useEffect } from "react";
import Screen from "./Screen";
import Remote from "./Remote";

/**
 * 📺 Список каналов
 * Объявлен ВЫШЕ компонента, чтобы был доступен в useEffect
 */
const channels = [
  {
    number: 1,
    name: "Природа",
    video: "/videos/nature.mp4",
  },
  {
    number: 2,
    name: "Мультфильмы",
    video: "/videos/cartoons.mp4",
  },
  {
    number: 3,
    name: "История",
    video: "/videos/history.mp4",
  },
  {
    number: 4,
    name: "Фантастика",
    video: "/videos/fantasy.mp4",
  },
];

function TV() {
  /* 🔹 Основные состояния */
  const [isOn, setIsOn] = useState(false);
  const [channel, setChannel] = useState(0);
  const [volume, setVolume] = useState(50);
  const [isMuted, setIsMuted] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  /* 🔹 Состояние для анимации */
  const [isTransitioning, setIsTransitioning] = useState(false);

  /**
   * 🔁 Плавная смена канала
   */
  const changeChannelSmooth = (newChannel) => {
    setIsTransitioning(true);

    setTimeout(() => {
      setChannel(newChannel);
      setIsTransitioning(false);
    }, 300);
  };

  /**
   * ⌨️ Управление с клавиатуры
   */
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.repeat) return;

      switch (e.key) {
        case "p":
        case "P":
          setIsOn((prev) => !prev);
          break;

        case "ArrowUp": {
          const next = (channel + 1) % channels.length;
          changeChannelSmooth(next);
          break;
        }

        case "ArrowDown": {
          const prev = channel === 0 ? channels.length - 1 : channel - 1;
          changeChannelSmooth(prev);
          break;
        }

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
  }, [channel]);

  return (
    <div
      style={{
        display: "flex",
        gap: "40px",
        padding: "20px",
        alignItems: "flex-start",
      }}
    >
      {/* 📺 Экран телевизора */}
      <Screen
        isOn={isOn}
        channel={channels[channel]}
        volume={volume}
        isMuted={isMuted}
        showMenu={showMenu}
        isTransitioning={isTransitioning}
      />

      {/* 🎮 Пульт управления */}
      <Remote
        isOn={isOn}
        setIsOn={setIsOn}
        channel={channel}
        changeChannel={changeChannelSmooth}
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
