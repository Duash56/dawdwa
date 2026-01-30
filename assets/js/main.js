document.addEventListener('DOMContentLoaded',function(){
  const form = document.getElementById('contact-form');
  if (!form) return;
  const msg = document.getElementById('form-msg');
  form.addEventListener('submit', function(e){
    e.preventDefault();
    // Dummy submission — replace with real endpoint if needed
    msg.textContent = 'Thanks! Your message has been received (dummy).';
    form.reset();
  });
});
