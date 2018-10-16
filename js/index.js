const numbers = new Map([
  [0, 'zero'],
  [1, 'one'],
  [2, 'two'],
  [3, 'three'],
  [4, 'four'],
  [5, 'five'],
  [6, 'six'],
  [7, 'seven'],
  [8, 'eight'],
  [9, 'nine'],
]);

const clock = document.getElementById('clock');

const seconds = clock.querySelectorAll('.seconds .digit');
const minutes = clock.querySelectorAll('.minutes .digit');
const hours = clock.querySelectorAll('.hours .digit');

const sliceTime = (group, value) => {
  for (let i = 0; i < 2; i++) {
    const html = group[1 - i];
    const digit = (value * i + (-1) ** i * (value % 10)) / 10 ** i;
    html.className = `digit ${numbers.get(digit)}`;
  }
};

const step = () => {
  const now = new Date();

  sliceTime(seconds, now.getSeconds());
  sliceTime(minutes, now.getMinutes());
  sliceTime(hours, now.getHours());

  requestAnimationFrame(step);
};

const dots = clock.querySelectorAll('.dot-top, .dot-bottom');

dots.forEach(dot => {
  dot.animate([{ opacity: 0 }, { opacity: 1, offset: 0.5 }, { opacity: 0 }], {
    duration: 1000,
    iterations: Infinity,
  });
});

requestAnimationFrame(step);
