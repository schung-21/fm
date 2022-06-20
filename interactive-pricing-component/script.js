var slider = document.getElementById('slider');

var pageview = document.getElementById('pageview');
var price = document.getElementById('price');
var yearly = document.getElementById('toggle');

slider.addEventListener('input', function() {
  var value = this.value;
  this.style.background = `linear-gradient(to right, var(--full) 0%, var(--full) ${value}%, var(--empty) ${value}%, var(--empty) 100%)`;

  if (value < 20) {
    pageview.innerHTML = '10K';
    price.innerHTML = yearly.checked ? '6.00': '8.00';
  } else if (20 < value && value < 40) {
    pageview.innerHTML = '50K';
    price.innerHTML = yearly.checked ? '9.00': '12.00';
  } else if (40 < value && value < 60) {
    pageview.innerHTML = '100K';
    price.innerHTML = yearly.checked ? '12.00': '16.00';
  } else if (60 < value && value < 80) {
    pageview.innerHTML = '500K';
    price.innerHTML = yearly.checked ? '18.00': '24.00';
  } else {
    pageview.innerHTML = '1M';
    price.innerHTML = yearly.checked ? '27.00': '36.00';
  }
})