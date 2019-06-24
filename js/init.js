(function($){
  $(function(){
    $('.datesselect').formSelect();
    $('.tabs').tabs();
    $('.datepicker').datepicker();
    $('.parallax').parallax();


    $("#__vtigerWebForm").validate({
      validClass: 'valid',
      errorClass: 'invalid',
      errorPlacement: function(error, element) {
        var helper_text = $( element ).parent().children('.helper-text');
        var text = error[0].innerText;
        helper_text.attr('data-error', text );
      },
      submitHandler: function(form, event) {
        var dates = $('select.datesselect');
        var datess = '';
        var selected = $(dates).children("option:checked");
        $.each(selected, function(){
          datess += $(this).val() + '; ';
        });
        var description = $('#description');
        description.val(description.val() + ' Даты:' + datess);
        var res = $('#description').val();

        return true;
      }
    });
  }); // end of document ready
})(jQuery); // end of jQuery name space
