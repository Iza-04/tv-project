import "./Screen.css";

function Screen({
  isOn,
  channel,
  volume,
  isMuted,
  showMenu,
  isTransitioning,
}) {
  // 📺 Если телевизор выключен
  if (!isOn) {
    return (
      <div className="tv-screen off">
        <p>TV OFF</p>
      </div>
    );
  }

  // 🛡️ Защита, если канал ещё не определён
  if (!channel) {
    return (
      <div className="tv-screen loading">
        <p>Нет сигнала...</p>
      </div>
    );
  }

  return (
    <div className="tv-screen on">
      {/* 🎬 Видео текущего канала */}
      <video
        key={channel.video} // важно для корректной смены канала
        src={channel.video}
        autoPlay
        loop
        muted={isMuted}
        volume={volume / 100}
        playsInline
        className={`tv-video ${
          isTransitioning ? "fade-out" : "fade-in"
        }`}
      />

      {/* 📋 Меню поверх экрана */}
      {showMenu && (
        <div className="tv-menu">
          <div className="menu-row">
            📺 Канал: {channel.number}
          </div>
          <div className="menu-row">
            📌 {channel.name}
          </div>
          <div className="menu-row">
            🔊 {isMuted ? "Mute" : volume}
          </div>
        </div>
      )}
    </div>
  );
}

export default Screen;
