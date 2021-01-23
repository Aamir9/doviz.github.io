$( document ).ready(function() {


   $('#profile-tab').click(function(){
      $("#profile-tab").css('background-color', '#3aa6b2');
        $("#home-tab").css('background-color', '#b09c01');
        $("#contact-tab").css('background-color', '#b09c01');
        
      });

    $('#home-tab').click(function(){
        $("#home-tab").css('background-color', '#3aa6b2');
        $("#profile-tab").css('background-color', '#b09c01');
        $("#contact-tab").css('background-color', '#b09c01');
        
    });

    $('#contact-tab').click(function(){
        $("#contact-tab").css('background-color', '#3aa6b2');
        $("#home-tab").css('background-color', '#b09c01');
        $("#profile-tab").css('background-color', '#b09c01');
        
    });

});