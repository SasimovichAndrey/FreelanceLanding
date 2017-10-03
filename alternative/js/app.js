$(function() {
  "use strict";
  $('.about-member-info').last().show().animate({
    width: '94%'
  });
  $('.about-member-header').click(function() {
    $(this).siblings(".about-member-info").animate({
        width: 0
      });
    $(this)
      .next().show().animate({
        width: '94%'
      })
      

  });

});