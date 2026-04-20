/*global angular */

//add functionality where if you scroll past the bottom of the page, the content collapses


var app = angular.module("myApp", []);


app.controller('InfoController', ['$scope', function ($scope) {
  $scope.title = 'samson klitsner';
  $scope.content = 'Designer, Artist, Developer';
  $scope.body = '';
  $scope.images = [];
  $scope.iframe = '';

  if ($("#about").length){
    $scope.title = 'Samson klitsner';
    $scope.content = 'Designer, Artist, Developer';
  }

  $scope.projects = (window.portfolioProjects || []).map(function (projectFile) {
    return projectFile.summary;
  });

  $scope.info = function(index){
    $scope.title = $scope.projects[index].title;
    $scope.content = $scope.projects[index].medium;
  };
}]);

var projects = (window.portfolioProjects || []).map(function (projectFile) {
  return projectFile.detail;
});

/*Jquery stuff*/
$(document).ready(function(){
  var scope = angular.element(document.getElementById('controller')).scope()
  var index;
  var transTime = 250;
  var color;
  var change = false;
  var show = false;
  var safe = false;

  function thumbnailOut(thumbnail){
    $(thumbnail).find('.thumbnail-color')
    .stop(true,false)
    .animate({height:0},transTime,function(){

    });
  }
  function thumbnailIn(thumbnail){
    $(thumbnail).find('.thumbnail-color')
    .stop(true,false)
    .animate({height:140},transTime,function(){
    });
  }

  function getThumbnailColor(thumbnail){
    return $(thumbnail).find('.thumbnail-color').css('background-color');
  }

  function clearLogoColor(c){
    $('.logo-color').each(function(){
      if($(this).css('background-color')==c){
        $(this)
        .stop(true)
        .animate({height:0},transTime,function(){
          $(this).remove();
        });
      }
    });
  }

  function logoColorIn(color, height){
    length = $('.logo-color').length;
    if(length>=1){
      clearLogoColor();
    }
    //check that logo-color does not already exist before creating another one
    if(!($('#logo-container').find('.logo-color').css("background-color")==color)){
      $logoColor = $('<div class="logo-color"></div>').css("background-color",color);
      $('#logo-container').prepend($logoColor);
    };

    if(!($logoColor.height()==height)){
      $logoColor
      .stop()
      .animate({height:height},transTime,function(){
      });
    }
  }



  function logoColorOut(c, thisThumbnail){
          clearLogoColor(c);
  }

  function colorSlideIn(c){
    $('#color-slider-tab')
    .stop()
    .css("background-color",c)
    .animate({height:24},20,function(){
      console.log("color slide in finished");
    });
  }

  function colorSlideOut(colorLogoCallback){
    colorLogoCallback();
  }

  $('.thumbnail').hover(function(){
    index = $(this).index();
    thumbnailOut(this);
    logoColorIn(getThumbnailColor(this), 234);
    projectTitleDisplay(getThumbnailColor(this));

  },function(){
    thumbnailIn(this);
    if(show==false){
      clearLogoColor(getThumbnailColor(this));
    }
    if(show==false){
    restingTitle();
  }

  });

  function projectTitleDisplay(color){
  $('#info').css('color',color);
  scope.$apply(function(){
    scope.info(index);
    });
  }
  function restingTitle(){
    //callback funtion to change back to resting state
      scope.$apply(function(){
        scope.title = 'Samson klitsner';
        scope.content = 'Designer, Artist, Developer';
        $('#info').css('color','#777');
      });
  }


  //selecting a project to view
  $('.thumbnail').click(function(){

    $('#about-link').addClass('hidden').removeClass('home');
    $('#slider-tab').animate({ opacity:0 }, 0,function(){
      $(this).css('height',0);
      $(this).css('opacity',1);
    });

    $('.logo-color').animate({ height:213 }, 100,function(){});
    // reset();
    change = true;
    show = true;
    $('#projects').hide();
    scope.$apply(function(){
      scope.body= projects[index].body;
      scope.info(index);
    });
    //Add title to URL
    locationHash(scope.title);
  });

  $('#logo-container').hover(function(){
    if(change==true){
      $('#logo-container').css( 'cursor', 'pointer' );

      $('.logo-color').animate({ height:234 }, 100,function(){});
    }
    if(change==false){
      $('#logo-container').css( 'cursor', 'default' );
    }
  },
  function(){
    if(change==true){
      $('.logo-color').animate({ height:213 }, 100,function(){});
    }
  });

  //reset the work page
  var reset = function(){
    if(change==true){
      $('#info').css('color','#777');
      $("#about-link").fadeTo(0,.7);
      $('#about-link').removeClass('hidden');
      // $('#logo-container').removeClass('immediate').css('background-color','#eaeaea');
    }

    scope.$apply(function(){
      scope.body= '';
      scope.title = "Samson Klitsner";
      scope.content = "Designer, Artist, Developer";
      $('#content').css('margin-top', '0').html('');
      show= false;
      change=false;
    });
  }

  //reset
  $('#logo-container').click(function(){
    if(!$("#about").length){
      goHome();
    }
  });

  function goHome(){
    reset();
    removeHash();
    $('#about-link').removeClass('hidden').addClass('home');
    change=false;
    $('.logo-color').fadeOut(function(){
      this.remove();
    });
    $('#projects').css("display",'hidden');
    $('#projects').fadeIn();
  }

  //scroll to top
  $('#content').on("click", '#arrow', function(){
    $("html, body").animate({ scrollTop: 0 }, 400,function(){
      reset();
      removeHash();
      $('#about-link').removeClass('hidden').addClass('home');
      change=false;
      $('.logo-color').fadeOut(function(){
        this.remove();
      });
      history.pushState('', document.title, window.location.pathname);
      change=false;
    });
    $('#projects').css("display",'hidden');
    $('#projects').fadeIn();
  });

  window.onhashchange = function() {

    if (window.location.hash) {
      updateModel(checkHash());
    } else {
      goHome();
    }
  }

  $(window).on('load', function(){
    if(window.location.hash) {
      if(!$("#about").length){
        updateModel(checkHash());
      }
    }else{
      $('#projects').fadeIn();
    }
  });

  //return the index of the object associated with the location hash
  function checkHash(){
    var i;
    $(scope.projects).each(function(index){
      if("#"+this.title.replace(/\s+/g,'').toUpperCase()===location.hash.toUpperCase()){
        i = index;
      }else{
        return -1;
      }
    });
    return i;
  }

  //Update page to project corresponding with index i.
  function updateModel(i) {
    if(i===-1){
      return 0;
    }
    reset();

    $('.thumbnail').each(function(index){
      if(index==i){
        color = $(this).find('.thumbnail-color').css("background-color");
        logoColorIn(color, 213);
      $('#about-link').addClass('hidden').removeClass('home');
      }
    });
    $('#info').css('color',color);
    // $("#about-link").hide();
    change = true;
    show = true;

    $('#projects').hide();

    //
    // $('#logo-container').css('background-color',color);
    scope.$apply(function(){
      scope.body= projects[i].body;
      scope.info(i);
    });

    $('#content').prepend(projects[i].iframe)
    .append(projects[i].body)
    .append(projects[i].press)
    .append(projects[i].images)
    .append('<div id="arrow"><div class="line1"></div><div class="line2"></div></div>');

    $('.description').css('margin','36px 0');
    locationHash(scope.title);
    colorize();
  }

  function colorize(){
    // $('.large-image, iframe').css("border", "3px "+color+" solid").css("box-sizing","content-box");
    // $('.small-image').css("border", "3px "+color+" solid").css("box-sizing","border-box");
    $('#arrow *').css("background", color);
    $('.noFrame').css("border", "none");
  }

  document.onkeydown = function(e) {
    e = e || window.event;
    switch(e.which || e.keyCode) {
      case 37: // left
      var check = checkHash();
      if (check > 0) {
        updateModel(check-1);
      }
      break;

      case 38: // up
      break;

      case 39: // right
      var check = checkHash();
      if (check > -1 && check < (scope.projects.length - 1)) {
        updateModel(check+1);
      }
      break;

      case 40: // down
      break;

      default: return; // exit this handler for other keys
    }
    e.preventDefault(); // prevent the default action (scroll / move caret)
  }
});

function removeHash() {
  history.pushState("", document.title, window.location.pathname
  + window.location.search);

}

function locationHash(scopeTitle) {
  var title = scopeTitle.replace(/\s+/g,'');
  location.hash=title;
}
