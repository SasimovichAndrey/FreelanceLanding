$(function() {
  "use strict";

    window.setTimeout(function(){hideLoader()}, 1000);

    var loaderHided = false;
    /* Loader*/
    function hideLoader(){
        if(!loaderHided){
            $('#loader')
              .animate(
                {
                  opacity: 0
                },
                {
                  complete: function(){
                    $('#loader').hide();
                  }
                });
        }
      };
});