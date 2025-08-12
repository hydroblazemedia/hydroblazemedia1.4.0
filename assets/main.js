
document.addEventListener('DOMContentLoaded', ()=>{
  const menu = document.querySelector('.navlinks');
  const toggle = document.getElementById('nav-toggle');
  if(toggle){ toggle.addEventListener('click', ()=>{ menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex'; }); }
  const form = document.getElementById('contact-form');
  if(form){
    form.addEventListener('submit', async (e)=>{
      e.preventDefault();
      const data = new FormData(form);
      const btn = form.querySelector('button[type=submit]');
      btn.disabled = true; btn.textContent = 'Sending...';
      try{
        const res = await fetch(form.action, { method: 'POST', body: data, headers: { 'Accept': 'application/json' } });
        if(res.ok){ btn.textContent = 'Sent ✓'; form.reset(); } else { btn.disabled=false; btn.textContent='Send Message'; alert('Error sending message'); }
      }catch(err){ btn.disabled=false; btn.textContent='Send Message'; alert('Network error'); }
    });
  }
});
