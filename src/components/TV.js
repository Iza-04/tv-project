import { useState } from "react";
import Screen from "./Screen";
import Remote from "./Remote";

const channels = ["Новости", "Фильмы", "Музыка", "Спорт", "Детский"];

function TV() {
  const [isOn, setIsOn] = useState(false);
  const [channel, setChannel] = useState(0);
  const [volume, setVolume] = useState(5);
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div style={{ display: "flex", gap: "40px", padding: "20px" }}>
      <Screen
        isOn={isOn}
        channel={channels[channel]}
        volume={volume}
        showMenu={showMenu}
      />

      <Remote
        isOn={isOn}
        setIsOn={setIsOn}
        channel={channel}
        setChannel={setChannel}
        channelsCount={channels.length}
        volume={volume}
        setVolume={setVolume}
        showMenu={showMenu}
        setShowMenu={setShowMenu}
      />
    </div>
  );
}

export default TV;
