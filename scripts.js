$(document).ready(function(){
  $('tr.foot.total-level-0:last-child th:nth(2)').remove();
  $('tr.foot.total-level-0:last-child th.nav.total').attr('colspan',3);


  var reportDate = $('.header-print-date').text().match(/\(([^)]+)\)/)[1];
  $('.header-print-date').text(reportDate);

});