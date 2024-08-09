chrome.runtime.onMessage.addListener(
  function (request, sender, sendResponse) {
    if (request.playSound) {
      const audio = new Audio(chrome.runtime.getURL('sound.mp3'));
      audio.play();
    }
  }
);
