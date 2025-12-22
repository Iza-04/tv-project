import clickSound from "../sounds/click.mp3";
import powerOnSound from "../sounds/power-on.mp3";
import powerOffSound from "../sounds/power-off.mp3";

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
  const click = () => new Audio(clickSound).play();

  const powerToggle = () => {
    if (isOn) {
      new Audio(powerOffSound).play();
    } else {
      new Audio(powerOnSound).play();
    }
    setIsOn(!isOn);
  };

  return (
    <div className="remote">
      <h3>Пульт</h3>

      <button className="power" onClick={powerToggle}>
        ⏻
      </button>

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
