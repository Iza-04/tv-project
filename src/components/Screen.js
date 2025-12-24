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

      <video
        src={channel.video}
        autoPlay
        muted={isMuted}
        volume={volume / 100}
        width="100%"
      />

      {showMenu && (
        <div className="menu">
          <div>📺 Channel: {channel.number}</div>
          <div>🔊 Volume: {isMuted ? 0 : volume}</div>
          {isMuted && <div className="mute">MUTE</div>}
        </div>
      )}
    </div>
  );
}

export default Screen;
