$(function() {
  "use strict";
  $('.about-member-info').last().show().animate({
    width: '94%'
  },{
    complete: setAboutMemberHeaderHeightFunc
  });
  
  $('.about-member-header').click(function() {
    var clickedHeader = this;
    $(this)
        .next()

        .show()
        .css('height', ($(clickedHeader).css('height')))
        .animate({
          width: '94%',
        },
        {
          queue: true,
          duration:500,
          complete: setAboutMemberHeaderHeightFunc
        })
        .siblings(".about-member-info")
        .css('height', ($(this).css('height')))
        .animate({
          width: 0
        }, {
          duration: 200,
          //complete: setAboutMemberHeaderHeightFunc
        });
        
      })
  ;
  

  function setAboutMemberHeaderHeightFunc() {

        $(this).css('height', 'auto');
        var maxHeight;
        $('.about-member-info')
            .each(function() {
              maxHeight = maxHeight > $(this).height() ? maxHeight : $(this).height();
            });
        $('.about-member-header').css('height', maxHeight +'px');
    }
});