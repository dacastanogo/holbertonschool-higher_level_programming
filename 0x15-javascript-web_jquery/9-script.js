// Write a Javascript script that fetches from
// https://fourtonfish.com/hellosalut/?lang=fr
// and displays the value of hello from that fetch
// in the HTML’s tag DIV#hello

document.addEventListener('DOMContentLoaded', () =>
  $.get('https://fourtonfish.com/hellosalut/?lang=fr', data =>
    $('DIV#hello').text(data.hello)));
