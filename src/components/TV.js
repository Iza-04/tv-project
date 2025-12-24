import { useState } from "react";
import Screen from "./Screen";
import Remote from "./Remote";

const channels = [
  {
    number: 1,
    name: "News TV",
    video: "/videos/channel1.mp4",
  },
  {
    number: 2,
    name: "Music TV",
    video: "/videos/channel2.mp4",
  },
  {
    number: 3,
    name: "Nature TV",
    video: "/videos/channel3.mp4",
  },
];

function TV() {
  const [isOn, setIsOn] = useState(false);
  const [channel, setChannel] = useState(0);
  const [volume, setVolume] = useState(50);
  const [isMuted, setIsMuted] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

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
