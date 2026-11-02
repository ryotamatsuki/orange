const fs=require('node:fs');
const {test}=require('node:test');
const assert=require('node:assert/strict');
const html=fs.readFileSync('index.html','utf8');
const css=fs.readFileSync('assets/tailwind.css','utf8');
test('runtime Tailwind external script has been removed',()=>{
 assert.doesNotMatch(html,/<script\b[^>]*cdn\.tailwindcss\.com/i);
 assert.match(html,/<link\s+rel="stylesheet"\s+href="assets\/tailwind\.css"/);
});
test('compiled CSS exists and contains Tailwind utility rules',()=>{
 assert.ok(css.length>5000);
 assert.match(css,/\.flex/);
 assert.match(css,/--tw-/);
});
