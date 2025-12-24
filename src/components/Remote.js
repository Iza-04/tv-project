function Remote({
  isOn,
  setIsOn,
  channel,
  changeChannel,
  channelsCount,
  volume,
  setVolume,
  isMuted,
  setIsMuted,
  showMenu,
  setShowMenu,
}) {
  const playSound = (src) => {
    if (isMuted) return;
    const audio = new Audio(src);
    audio.volume = volume / 100;
    audio.play().catch(() => {});
  };

  const click = () => playSound("/sounds/click.mp3");

  const powerToggle = () => {
    playSound(isOn ? "/sounds/power-off.mp3" : "/sounds/power-on.mp3");
    setIsOn(!isOn);
  };

  const selectChannelByNumber = (number) => {
    if (!isOn) return;
    click();

    const index = number - 1;
    if (index < channelsCount) {
      changeChannel(index);
    }
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
          changeChannel((channel + 1) % channelsCount);
        }}
        disabled={!isOn}
      >
        Канал +
      </button>

      <button
        onClick={() => {
          click();
          changeChannel((channel - 1 + channelsCount) % channelsCount);
        }}
        disabled={!isOn}
      >
        Канал -
      </button>

      <hr />

      {/* Цифровые кнопки */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "5px",
        }}
      >
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
          <button
            key={num}
            onClick={() => selectChannelByNumber(num)}
            disabled={!isOn}
          >
            {num}
          </button>
        ))}
      </div>

      <hr />

      <button
        onClick={() => {
          click();
          setIsMuted(!isMuted);
        }}
        disabled={!isOn}
      >
        {isMuted ? "🔇 Mute" : "🔊 Sound"}
      </button>

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
