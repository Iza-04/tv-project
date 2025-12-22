function Remote({
  isOn,
  setIsOn,
  channel,
  setChannel,
  channelsCount,
  volume,
  setVolume,
  showMenu,
  setShowMenu,
}) {
  const playSound = (src) => {
    const audio = new Audio(src);
    audio.volume = 0.5;

    audio.play().catch(() => {});
  };

  const click = () => {
    playSound("/sounds/click.mp3");
  };

  const powerToggle = () => {
    if (isOn) {
      playSound("/sounds/power-off.mp3");
    } else {
      playSound("/sounds/power-on.mp3");
    }

    setIsOn(!isOn);
  };

  return (
    <div className="remote">
      <h3>Пульт</h3>

      <button className="power" onClick={powerToggle}>
        ⏻
      </button>

      <hr />

      <button
        onClick={() => {
          click();
          setChannel((channel + 1) % channelsCount);
        }}
        disabled={!isOn}
      >
        Канал +
      </button>

      <button
        onClick={() => {
          click();
          setChannel((channel - 1 + channelsCount) % channelsCount);
        }}
        disabled={!isOn}
      >
        Канал -
      </button>

      <hr />

      <button
        onClick={() => {
          click();
          setVolume(volume + 1);
        }}
        disabled={!isOn}
      >
        🔊 +
      </button>

      <button
        onClick={() => {
          click();
          setVolume(volume > 0 ? volume - 1 : 0);
        }}
        disabled={!isOn}
      >
        🔉 -
      </button>

      <hr />

      <button
        onClick={() => {
          click();
          setShowMenu(!showMenu);
        }}
        disabled={!isOn}
      >
        Меню
      </button>
    </div>
  );
}

export default Remote;
