function sendMessage() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    alert(`Thank you, ${name}! Your message has been sent:\n\nEmail: ${email}\nMessage: ${message}`);
  
  }
  
  const navLinks = document.querySelectorAll('nav a');
  const frames = document.querySelectorAll('.frame');
