document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for your message!');
});

const $cards = document.querySelectorAll('.product');
let bounds;

function rotateToMouse(e) {
  const mouseX = e.clientX;
  const mouseY = e.clientY;
  const leftX = mouseX - bounds.x;
  const topY = mouseY - bounds.y;
  const center = {
    x: leftX - bounds.width / 2,
    y: topY - bounds.height / 2
  }
  const distance = Math.sqrt(center.x**2 + center.y**2);
  
  e.currentTarget.style.transform = `
    scale3d(1.07, 1.07, 1.07)
    rotate3d(
      ${center.y / 100},
      ${-center.x / 100},
      0,
      ${Math.log(distance) * 2}deg
    )
  `;
  
  e.currentTarget.querySelector('.glow').style.backgroundImage = `
    radial-gradient(
      circle at
      ${center.x * 2 + bounds.width / 2}px
      ${center.y * 2 + bounds.height / 2}px,
      #ffffff55,
      #0000000f
    )
  `;
}

$cards.forEach($card => {
  $card.addEventListener('mouseenter', (e) => {
    bounds = e.currentTarget.getBoundingClientRect();
    document.addEventListener('mousemove', rotateToMouse);
  });

  $card.addEventListener('mouseleave', (e) => {
    document.removeEventListener('mousemove', rotateToMouse);
    e.currentTarget.style.transform = '';
    e.currentTarget.querySelector('.glow').style.backgroundImage = '';
  });
});
