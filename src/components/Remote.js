import "./Remote.css";

function Remote({
  isOn,
  setIsOn,
  changeChannel,
  volume,
  setVolume,
  isMuted,
  setIsMuted,
  showMenu,
  setShowMenu,
}) {
  return (
    <div className="remote">
      {/* КНОПКА ПИТАНИЯ */}
      <button className="power" onClick={() => setIsOn(!isOn)}>
        POWER
      </button>

      {/* КАНАЛЫ */}
      <button onClick={() => changeChannel("up")}>CH +</button>

      <button onClick={() => changeChannel("down")}>CH -</button>

      {/* ГРОМКОСТЬ */}
      <button onClick={() => setVolume(Math.min(volume + 10, 100))}>
        VOL +
      </button>

      <button onClick={() => setVolume(Math.max(volume - 10, 0))}>VOL -</button>

      {/* MUTE */}
      <button onClick={() => setIsMuted(!isMuted)}>MUTE</button>

      {/* MENU */}
      <button onClick={() => setShowMenu(!showMenu)}>MENU</button>
    </div>
  );
}

export default Remote;
