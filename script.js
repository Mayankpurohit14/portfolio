// footer year
document.getElementById('year').textContent = new Date().getFullYear();

// mobile nav toggle
const navToggle = document.querySelector('.nav-toggle');
const endpointNav = document.querySelector('.endpoint-nav');
if (navToggle) {
  navToggle.addEventListener('click', () => {
    const open = endpointNav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', open);
  });
  endpointNav.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      endpointNav.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// typed JSON response — the hero's one orchestrated motion
const target = document.getElementById('typed-json');
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const lines = [
  { k: '"name"',        v: '"Mayank Purohit"' },
  { k: '"role"',        v: '"Full-Stack Developer"' },
  { k: '"stack"',       v: '["Laravel", "PHP", "MySQL", "REST APIs"]' },
  { k: '"experience"',  v: '"4+ years"' },
  { k: '"based_in"',    v: '"Nathdwara, Rajasthan"' },
  { k: '"status"',      v: '"open to opportunities"' },
];

function renderStatic() {
  let html = '{\n';
  lines.forEach((l, i) => {
    html += `  <span class="jk">${l.k}</span>: <span class="${l.v.startsWith('[') ? 'ja' : 'js'}">${l.v}</span>${i < lines.length - 1 ? ',' : ''}\n`;
  });
  html += '}';
  target.innerHTML = html;
}

async function typeJSON() {
  let out = '{\n';
  target.innerHTML = out;

  for (let i = 0; i < lines.length; i++) {
    const { k, v } = lines[i];
    const isArr = v.startsWith('[');
    const full = `  <span class="jk">${k}</span>: <span class="${isArr ? 'ja' : 'js'}">${v}</span>${i < lines.length - 1 ? ',' : ''}\n`;
    // type value char by char for a light typing feel, key appears instantly
    out += `  <span class="jk">${k}</span>: `;
    target.innerHTML = out + '<span class="cursor-inline">&#9612;</span>';
    await sleep(90);

    let typed = '';
    const chars = v.split('');
    for (const ch of chars) {
      typed += ch;
      target.innerHTML = out + `<span class="${isArr ? 'ja' : 'js'}">${typed}</span><span class="cursor-inline">&#9612;</span>`;
      await sleep(12);
    }
    out += `<span class="${isArr ? 'ja' : 'js'}">${v}</span>${i < lines.length - 1 ? ',' : ''}\n`;
    target.innerHTML = out;
    await sleep(120);
  }
  out += '}';
  target.innerHTML = out;
}

function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

if (reduceMotion) {
  renderStatic();
} else {
  typeJSON();
}
