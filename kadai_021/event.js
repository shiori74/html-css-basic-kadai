const Btn = document.getElementById('btn');

const text = document.getElementById('text');

Btn.addEventListener('click', () => {
  setTimeout(() => {
    text.textContent = 'ボタンをクリックしました';
    console.log('text');
  }, 2000);
})

