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
  return (
    <div>
      <h3>Пульт</h3>

      <button onClick={() => setIsOn(!isOn)}>
        {isOn ? "Выключить" : "Включить"}
      </button>

      <hr />

      <button
        onClick={() => setChannel((channel + 1) % channelsCount)}
        disabled={!isOn}
      >
        Канал +
      </button>

      <button
        onClick={() =>
          setChannel((channel - 1 + channelsCount) % channelsCount)
        }
        disabled={!isOn}
      >
        Канал -
      </button>

      <hr />

      <button onClick={() => setVolume(volume + 1)} disabled={!isOn}>
        🔊 +
      </button>

      <button
        onClick={() => setVolume(volume > 0 ? volume - 1 : 0)}
        disabled={!isOn}
      >
        🔉 -
      </button>

      <hr />

      <button onClick={() => setShowMenu(!showMenu)} disabled={!isOn}>
        Меню
      </button>
    </div>
  );
}

export default Remote;
