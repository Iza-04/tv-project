import "./Screen.css";

function Screen({ isOn, channel, volume, isMuted, showMenu, isLoading }) {
  if (!isOn) {
    return (
      <div className="tv-screen off">
        <span className="off-text">TV OFF</span>
      </div>
    );
  }

  return (
    <div className="tv-screen on">
      {isLoading && <div className="loading">Loading channel...</div>}

      <img src={channel.image} alt={channel.name} className="channel-image" />

      {showMenu && (
        <div className="menu">
          <div>📺 Канал: {channel.number}</div>
          <div>📌 {channel.name}</div>
          <div>🔊 Громкость: {isMuted ? 0 : volume}</div>
          {isMuted && <div className="mute">MUTE</div>}
        </div>
      )}
    </div>
  );
}

export default Screen;
