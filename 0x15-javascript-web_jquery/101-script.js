// Script that adds, removes and clears LI elements
// from a list when the user clicks
document.addEventListener('DOMContentLoaded', () => {
  $('DIV#add_item').click(() => $('UL.my_list').append('<li>Item</li>'));
  $('DIV#remove_item').click(() => $('UL.my_list LI').eq(-1).remove());
  $('DIV#clear_list').click(() => $('UL.my_list').empty());
});
