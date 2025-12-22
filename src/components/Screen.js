function Screen({ isOn, channel, volume, showMenu }) {
  return (
    <div className={`screen ${isOn ? "on" : "off"}`}>
      {!isOn && <p>Телевизор выключен</p>}

      {isOn && (
        <>
          <h2>{channel}</h2>

          {showMenu && (
            <div className="menu">
              <p>📋 Меню</p>
              <p>🔊 Громкость: {volume}</p>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default Screen;
