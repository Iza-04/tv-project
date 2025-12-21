function Screen({ isOn, channel, volume, showMenu }) {
  return (
    <div
      style={{
        width: "400px",
        height: "250px",
        backgroundColor: isOn ? "#000" : "#555",
        color: "white",
        padding: "20px",
        borderRadius: "10px",
      }}
    >
      {!isOn && <h2>Телевизор выключен</h2>}

      {isOn && (
        <>
          <h2>Канал: {channel}</h2>

          {showMenu && (
            <div style={{ marginTop: "20px" }}>
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
