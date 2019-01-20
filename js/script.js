$(document).ready(function(){
  
  $('.custom-num-inc').on('click', function(){
    var parent = $(this).parent();
    var input = $(parent).find('input');
    var value = $(input).val();

    if(value == ''){
      $(input).val(0);
    }  
    else if(!isNaN(parseInt(value))){
      value =  parseInt(value);
      value += 1;
      $(input).val(value);
    }  
  });

  $('.custom-num-dec').on('click', function(){
    var parent = $(this).parent();
    var input = $(parent).find('input');
    var value = $(input).val();

    if(value == ''){
      $(input).val(0);
    }  
    else if(!isNaN(parseInt(value))){
      value =  parseInt(value);
      if(value > 0){
        value -= 1;
        $(input).val(value);
      }
    }  
  });

  $('.nav-pills > li').on('click', function(e){

    e.preventDefault();

    var navPillsItemNum = $(this).attr('data-nav-pills-item');
    var tableWrapper = $('.block-wrapper[data-item-num="'+navPillsItemNum+'"]');

    $('.nav-pills > li').removeClass('active');
    $('.block-wrapper').removeClass('active');

    $(this).addClass('active');
    $(tableWrapper).addClass('active');
  });

  function parseField(value){
    return  value.replace(/[^0-9]/gi,'');
  }

  $('#inputSum').keyup(function(){
    $(this).val(parseField($(this).val()));
  });
});