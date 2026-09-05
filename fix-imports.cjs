const fs = require('fs');
const path = require('path');

function walk(dir) {
  const files = [];
  for (const f of fs.readdirSync(dir)) {
    const p = path.join(dir, f);
    if (fs.statSync(p).isDirectory()) files.push(...walk(p));
    else if (p.endsWith('.astro')) files.push(p);
  }
  return files;
}

const files = walk('src');
files.forEach(f => {
  let c = fs.readFileSync(f, 'utf8');
  if (c.includes('lucide-astro')) {
    c = c.replaceAll('lucide-astro', '@lucide/astro');
    fs.writeFileSync(f, c);
    console.log('Fixed:', f);
  }
});
