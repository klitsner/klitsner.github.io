/*global angular */

var app = angular.module("myApp", []);

app.controller('InfoController', ['$scope', function ($scope) {
  $scope.title = 'samson klitsner';
  $scope.content = 'Designer, Artist, Developer';
  $scope.body = '';
  $scope.images = [];
  $scope.iframe = '';
  $scope.projects = [];

  if ($("#about").length){
    $scope.title = 'Samson klitsner';
    $scope.content = 'Designer, Artist, Developer';
  }

  $scope.info = function(index){
    if (!$scope.projects[index]) {
      return;
    }
    $scope.title = $scope.projects[index].title;
    $scope.content = $scope.projects[index].medium;
  };
}]);

/*Jquery stuff*/
$(document).ready(function(){
  var scope = angular.element(document.getElementById('controller')).scope();
  var projects = [];
  var index;
  var transTime = 250;
  var color;
  var change = false;
  var show = false;

  function safeApply(fn) {
    if (scope.$$phase) {
      fn();
      return;
    }
    scope.$apply(fn);
  }

  function loadProjects() {
    return fetch('projects/manifest.json')
      .then(function (response) { return response.json(); })
      .then(function (manifest) {
        return Promise.all((manifest.projects || []).map(function (filename) {
          return fetch('projects/' + filename).then(function (response) {
            return response.json();
          });
        }));
      });
  }

  function thumbnailMarkup(projectConfig, projectIndex) {
    var image = projectConfig.thumbnail && projectConfig.thumbnail.image;
    var imageClass = projectConfig.thumbnail && projectConfig.thumbnail.imageClass ? projectConfig.thumbnail.imageClass : '';
    var imageStyle = projectConfig.thumbnail && projectConfig.thumbnail.imageStyle ? ' style="' + projectConfig.thumbnail.imageStyle + '"' : '';
    var colorClass = projectConfig.thumbnail && projectConfig.thumbnail.colorClass ? projectConfig.thumbnail.colorClass : '';

    var imageMarkup = image ? '<div class="thumbnail-image-container"><img src="' + image + '" class="' + imageClass + '"' + imageStyle + '></div>' : '';
    return '<div class="thumbnail" data-index="' + projectIndex + '">' + imageMarkup + '<div class="thumbnail-color ' + colorClass + '"></div></div>';
  }

  function renderThumbnails(projectConfigs) {
    var html = projectConfigs.map(function (projectConfig, projectIndex) {
      return thumbnailMarkup(projectConfig, projectIndex);
    }).join('');

    $('#projects').html(html).fadeIn();
  }

  function thumbnailOut(thumbnail){
    $(thumbnail).find('.thumbnail-color')
    .stop(true,false)
    .animate({height:0},transTime,function(){});
  }

  function thumbnailIn(thumbnail){
    $(thumbnail).find('.thumbnail-color')
    .stop(true,false)
    .animate({height:140},transTime,function(){});
  }

  function getThumbnailColor(thumbnail){
    return $(thumbnail).find('.thumbnail-color').css('background-color');
  }

  function clearLogoColor(c){
    $('.logo-color').each(function(){
      if(!c || $(this).css('background-color')==c){
        $(this)
        .stop(true)
        .animate({height:0},transTime,function(){
          $(this).remove();
        });
      }
    });
  }

  function logoColorIn(nextColor, height){
    var length = $('.logo-color').length;
    var logoColor;

    if(length >= 1){
      clearLogoColor();
    }

    if(!($('#logo-container').find('.logo-color').css("background-color") === nextColor)){
      logoColor = $('<div class="logo-color"></div>').css("background-color",nextColor);
      $('#logo-container').prepend(logoColor);
    } else {
      logoColor = $('#logo-container').find('.logo-color');
    }

    if(logoColor && !(logoColor.height() === height)){
      logoColor
      .stop()
      .animate({height:height},transTime,function(){});
    }
  }

  function projectTitleDisplay(nextColor){
    $('#info').css('color',nextColor);
    safeApply(function(){
      scope.info(index);
    });
  }

  function restingTitle(){
    safeApply(function(){
      scope.title = 'Samson klitsner';
      scope.content = 'Designer, Artist, Developer';
      $('#info').css('color','#777');
    });
  }

  $('#projects').on('mouseenter', '.thumbnail', function(){
    index = Number($(this).attr('data-index'));
    thumbnailOut(this);
    logoColorIn(getThumbnailColor(this), 234);
    projectTitleDisplay(getThumbnailColor(this));
  });

  $('#projects').on('mouseleave', '.thumbnail', function(){
    thumbnailIn(this);
    if(show===false){
      clearLogoColor(getThumbnailColor(this));
      restingTitle();
    }
  });

  $('#projects').on('click', '.thumbnail', function(){
    index = Number($(this).attr('data-index'));

    $('#about-link').addClass('hidden').removeClass('home');
    $('#slider-tab').animate({ opacity:0 }, 0,function(){
      $(this).css('height',0);
      $(this).css('opacity',1);
    });

    $('.logo-color').animate({ height:213 }, 100,function(){});
    change = true;
    show = true;
    $('#projects').hide();

    safeApply(function(){
      scope.body= projects[index].body;
      scope.info(index);
    });

    locationHash(scope.title);
  });

  $('#logo-container').hover(function(){
    if(change===true){
      $('#logo-container').css( 'cursor', 'pointer' );
      $('.logo-color').animate({ height:234 }, 100,function(){});
    }
    if(change===false){
      $('#logo-container').css( 'cursor', 'default' );
    }
  },
  function(){
    if(change===true){
      $('.logo-color').animate({ height:213 }, 100,function(){});
    }
  });

  var reset = function(){
    if(change===true){
      $('#info').css('color','#777');
      $('#about-link').fadeTo(0,.7);
      $('#about-link').removeClass('hidden');
    }

    safeApply(function(){
      scope.body= '';
      scope.title = 'Samson Klitsner';
      scope.content = 'Designer, Artist, Developer';
      $('#content').css('margin-top', '0').html('');
      show= false;
      change=false;
    });
  };

  $('#logo-container').click(function(){
    if(!$('#about').length){
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
    $('#projects').css('display','hidden');
    $('#projects').fadeIn();
  }

  $('#content').on('click', '#arrow', function(){
    $('html, body').animate({ scrollTop: 0 }, 400,function(){
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
    $('#projects').css('display','hidden');
    $('#projects').fadeIn();
  });

  function checkHash(){
    var i = -1;
    $(scope.projects).each(function(projectIndex){
      if('#' + this.title.replace(/\s+/g,'').toUpperCase()===location.hash.toUpperCase()){
        i = projectIndex;
      }
    });
    return i;
  }

  function colorize(){
    $('#arrow *').css('background', color);
    $('.noFrame').css('border', 'none');
  }

  function updateModel(i) {
    if(i===-1 || !projects[i]){
      return;
    }

    reset();

    $('.thumbnail').each(function(){
      if(Number($(this).attr('data-index'))===i){
        color = $(this).find('.thumbnail-color').css('background-color');
        logoColorIn(color, 213);
        $('#about-link').addClass('hidden').removeClass('home');
      }
    });

    $('#info').css('color',color);
    change = true;
    show = true;

    $('#projects').hide();

    safeApply(function(){
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

  document.onkeydown = function(e) {
    e = e || window.event;
    switch(e.which || e.keyCode) {
      case 37:
      var leftCheck = checkHash();
      if (leftCheck > 0) {
        updateModel(leftCheck-1);
      }
      break;

      case 39:
      var rightCheck = checkHash();
      if (rightCheck > -1 && rightCheck < (scope.projects.length - 1)) {
        updateModel(rightCheck+1);
      }
      break;

      default: return;
    }
    e.preventDefault();
  };

  function bindRouting() {
    window.onhashchange = function() {
      if (window.location.hash) {
        updateModel(checkHash());
      } else {
        goHome();
      }
    };

    if(window.location.hash) {
      if(!$('#about').length){
        updateModel(checkHash());
      }
    } else {
      $('#projects').fadeIn();
    }
  }

  if (!$('#about').length) {
    loadProjects().then(function (projectConfigs) {
      projects = projectConfigs.map(function (projectConfig) {
        return projectConfig.detail;
      });

      safeApply(function () {
        scope.projects = projectConfigs.map(function (projectConfig) {
          return projectConfig.summary;
        });
      });

      renderThumbnails(projectConfigs);
      bindRouting();
    }).catch(function (error) {
      console.error('Failed to load projects CMS data.', error);
    });
  }
});

function removeHash() {
  history.pushState('', document.title, window.location.pathname + window.location.search);
}

function locationHash(scopeTitle) {
  var title = scopeTitle.replace(/\s+/g,'');
  location.hash=title;
}
