function showMessage(text) {
  // Create the message element
  const message = document.createElement('div');
  message.innerText = text;
  message.style.position = 'fixed';
  message.style.top = '10px';
  message.style.right = '10px';
  message.style.padding = '10px';
  message.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
  message.style.color = 'white';
  message.style.zIndex = '10000';
  message.style.borderRadius = '5px';
  message.style.fontSize = '16px';

  document.body.appendChild(message);
  setTimeout(() => {
    document.body.removeChild(message);
  }, 3000);
}

document.body.addEventListener('click', function (e) {
  console.log('Clicked element:', e.target);

  // Check for <button> and <a> elements
  if (e.target && (e.target.tagName.toLowerCase() === 'button' || e.target.tagName.toLowerCase() === 'a') && e.target.innerText.toLowerCase().includes('submit')) {
    console.log('Button or link with "submit" clicked:', e.target);
    const audio = new Audio(chrome.runtime.getURL('sound.mp3'));
    audio.play();
    showMessage('Good girl!!!');
  }

  // Check for <input> elements
  if (e.target && e.target.tagName.toLowerCase() === 'input' && e.target.type.toLowerCase() === 'button' && e.target.value.toLowerCase().includes('submit')) {
    console.log('Input button with "submit" clicked:', e.target);
    const audio = new Audio(chrome.runtime.getURL('sound.mp3'));
    audio.play();
    showMessage('Good girl!!!');
  }

  // Check for specific <button> elements containing "Apply"
  if (e.target && e.target.tagName.toLowerCase() === 'button' && e.target.innerText.toLowerCase().includes('apply')) {
    console.log('Button with "apply" clicked:', e.target);
    const audio = new Audio(chrome.runtime.getURL('sound.mp3'));
    audio.play();
    showMessage('Good girl!!!');
  }
  // Same but for more complex cases
  if (e.target && e.target.closest('button') && e.target.closest('button').innerText.toLowerCase().includes('apply')) {
    console.log('Button with complex children and "apply" clicked:', e.target.closest('button'));
    const audio = new Audio(chrome.runtime.getURL('sound.mp3'));
    audio.play();
    showMessage('Good girl!!!');
  }
});
