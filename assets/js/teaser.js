/**
 * Hoteles Kariña - Teaser Landing Interactive Controller
 * Manejo del reproductor de video 9:16, controles de audio y estado de reproducción.
 */
document.addEventListener('DOMContentLoaded', () => {
  const video = document.getElementById('teaser-video');
  const videoContainer = document.getElementById('video-container');
  const playIndicator = document.getElementById('play-indicator');
  const muteBtn = document.getElementById('toggle-mute-btn');
  const iconMuted = document.getElementById('icon-muted');
  const iconUnmuted = document.getElementById('icon-unmuted');

  if (!video || !videoContainer) return;

  // Intento de auto-reproducción inicial
  const playPromise = video.play();
  if (playPromise !== undefined) {
    playPromise.catch(() => {
      // Si el navegador bloquea el autoplay, reflejar estado pausado en la UI
      updatePlayState(false);
    });
  }

  function updatePlayState(isPlaying) {
    if (playIndicator) {
      if (isPlaying) {
        playIndicator.classList.add('hidden');
      } else {
        playIndicator.classList.remove('hidden');
      }
    }
  }

  function togglePlay() {
    if (video.paused) {
      video.play().then(() => {
        updatePlayState(true);
      }).catch((err) => {
        console.warn('Playback error:', err);
      });
    } else {
      video.pause();
      updatePlayState(false);
    }
  }

  function updateMuteState(isMuted) {
    video.muted = isMuted;
    if (muteBtn) {
      muteBtn.setAttribute('aria-label', isMuted ? 'Activar sonido' : 'Silenciar');
    }
    if (iconMuted && iconUnmuted) {
      if (isMuted) {
        iconMuted.classList.remove('hidden');
        iconUnmuted.classList.add('hidden');
      } else {
        iconMuted.classList.add('hidden');
        iconUnmuted.classList.remove('hidden');
      }
    }
  }

  function toggleMute(e) {
    if (e) e.stopPropagation();
    updateMuteState(!video.muted);
  }

  // Event Listeners
  videoContainer.addEventListener('click', togglePlay);

  if (muteBtn) {
    muteBtn.addEventListener('click', toggleMute);
  }

  video.addEventListener('play', () => updatePlayState(true));
  video.addEventListener('pause', () => updatePlayState(false));
});
