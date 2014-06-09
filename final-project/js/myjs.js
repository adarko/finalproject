/*slider*/

< script >
    $(document).foundation();
$(function() {
    $('.fadein img:gt(0)').hide();
    setInterval(function() {
        $('.fadein :first-child').fadeOut()
            .next('img')
            .fadeIn()
            .end()
            .appendTo('.fadein');
    }, 4000); // 4 seconds
}); < /script>

/ * tablesorter * /

$(document).ready(function() {
    $("#myTable").tablesorter();
});

/ * addFunction * /

< script >
var totals = [0, 0, 0];
$(document).ready(function() {

    var $dataRows = $("#myTable tr:not('.totalColumn, .titlerow')");

    $dataRows.each(function() {
        $(this).find('.rowDataSd').each(function(i) {
            totals[i] += parseInt($(this).html());
        });
    });
    $("#sum_table td.totalCol").each(function(i) {
        $(this).html("total:" + totals[i]);
    });

}); < /script >