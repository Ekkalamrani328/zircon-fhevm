// === Simulated encrypt & local storage ===
const enc = (x)=> btoa(String(x).split('').reverse().join('')+':zircon');
const dbKey = 'zircon:intents';
const localKey = 'zircon:localOrders';
const rndTx = () => '0x' + Math.random().toString(16).slice(2).padEnd(16,'0');

function readBook(){ try { return JSON.parse(localStorage.getItem(dbKey) || '[]'); } catch { return []; } }
function writeBook(v){ localStorage.setItem(dbKey, JSON.stringify(v)); drawBook(); }
function readLocal(){ try { return JSON.parse(localStorage.getItem(localKey) || '[]'); } catch { return []; } }
function writeLocal(v){ localStorage.setItem(localKey, JSON.stringify(v)); drawOrders(); }

function submitIntent(){
  const side = document.getElementById('side').value;
  const price = Number(document.getElementById('price').value || 0);
  const amount = Number(document.getElementById('amount').value || 0);
  const nonce = Date.now().toString();
  const orderId = '0x' + btoa('order:'+nonce).replace(/=/g,'').slice(0,12);
  const ct = { ctSide: enc(side), ctPrice: enc(price), ctAmount: enc(amount), ts: Date.now(), orderId };
  document.getElementById('ct').textContent = JSON.stringify(ct, null, 2);
  const book = readBook(); book.push(ct); writeBook(book);
  const txHash = rndTx();
  const local = readLocal(); local.push({ orderId, side, price, amount, txHash }); writeLocal(local);
  document.getElementById('status').textContent = 'Submitted'; document.getElementById('status').className='ok';
  drawOrders();
}

function tryMatch(){
  const book = readBook();
  if (book.length < 2){ document.getElementById('status').textContent='Need ≥ 2 intents'; document.getElementById('status').className='warn'; return; }
  document.getElementById('status').textContent='Matched ✅'; document.getElementById('status').className='ok';
}

function resetAll(){
  localStorage.removeItem(dbKey);
  localStorage.removeItem(localKey);
  document.getElementById('ct').textContent = '';
  document.getElementById('status').textContent='Idle'; document.getElementById('status').className='warn';
  drawBook(); drawOrders();
}

function drawBook(){
  const book = readBook();
  const el = document.getElementById('book');
  if (!book.length){ el.textContent = '(empty)'; return; }
  el.innerHTML = book.map(x=> `<pre>${JSON.stringify(x, null, 2)}</pre>`).join('');
}

function drawOrders(){
  const rows = readLocal().map(r=> `<tr><td>${r.orderId}</td><td>${r.side}</td><td>${r.price}</td><td>${r.amount}</td><td>${r.txHash}</td></tr>`).join('');
  document.querySelector('#orders tbody').innerHTML = rows || '<tr><td colspan="5" class="muted">(belum ada)</td></tr>';
}

drawBook(); drawOrders();