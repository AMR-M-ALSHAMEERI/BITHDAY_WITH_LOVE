// Function to display love message and start continuous heart animation
function showLoveMessage() {
    const loveMessage = document.getElementById('loveMessage');
    loveMessage.classList.remove('hidden'); // Show the hidden love message
  
    // Start generating hearts continuously after the button is clicked
    setInterval(() => {
      const heart = document.createElement('div');
      heart.classList.add('heart');
      heart.innerText = '❤️';
      heart.style.left = `${Math.random() * 100}vw`;
      heart.style.animationDuration = `${Math.random() * 3 + 2}s`; // Varying animation speed
      heart.style.fontSize = `${Math.random() * 2 + 1.5}em`; // Random heart sizes
      document.body.appendChild(heart);
  
      // Remove hearts after animation
      setTimeout(() => {
        heart.remove();
      }, 5000);
    }, 500); // Hearts will appear every 500ms
  }
  