/*global angular */

//add functionality where if you scroll past the bottom of the page, the content collapses


var app = angular.module("myApp", []);


app.controller('InfoController', ['$scope', function ($scope) {
  $scope.title = 'samson klitsner';
  $scope.content = 'Designer, Artist, Creative Technologist';
  $scope.body = '';
  $scope.images = [];
  $scope.iframe = '';

  if ($("#about").length){
    $scope.title = 'Samson klitsner';
    $scope.content = 'Designer, Artist, Creative Technologist';
  }

  $scope.projects =
  [
    {
      title: 'IBM Watson EEC',
      medium: 'Frontend Developer, Interaction Designer',
    },
    {
      title: 'Oblong Industries',
      medium: 'Creative Technologist, Interaction Designer',
    },
    {
      title: 'S.A.D. Shelter',
      medium: 'Installation, Processing, Sound',
    },
    {
      title: 'SoSo Internship',
      medium: 'Research, Sound, Web Development',
    },
    {
      title: ' Amatuer ',
      medium: 'Dance, Arduino, Sound, Processing',
    },
    {
      title: ' Choose',
      medium: 'Processing, Teensy',
    },
    {
      title: 'Alexander Doggus',
      medium: 'Unity, Installation, Sound',
      iframe:"https://player.vimeo.com/video/157377653"
    },
    // {
    //   title: 'Martini Scorchazio',
    //   medium: 'Music Video',
    // },
    // {
    //   title: 'Timeline of the Far Future',
    //   medium: 'Processing',
    // },
    // {
    //   title: 'Dro0Oo00ol',
    //   medium: 'Exhibition',
    // },
    {
      title: '25 words 25 works',
      medium: 'Graphic Design, Bookmaking, Design Research',
    },
    {
      title: 'Illustrations & Graphics',
      medium: 'Ink, Digital',
    },
    {
      title: 'LA Hacks 2015',
      medium: 'Identity, Promotional Design',
    }
  ];
  $scope.info = function(index){
    $scope.title = $scope.projects[index].title;
    $scope.content = $scope.projects[index].medium;
  };
}]);

var projects = [

{
  title: 'IBM Watson IBM Watson EEC',
  images: '<img src="images/immersionroom.jpeg" class="large-image"><img src="images/oblong-5.jpg" class="large-image">',
  thumbnail:'',
  body:'<p class="description">Working with IBM and Local Projects, the Oblong Industries developed a series of branded interactive experiences for IBM Watson\'s Executive Experience Center. Built upon Oblong\'s proprietary software platform, g-speak, these rooms use interactive storytelling to showcase the power of custom AI solutions in various enterprise scenarios.\n\nMy role as an Interaction Designer was to work between the designers at Local Projects and the engineers at Oblong to implement visual designs and prototype interactions for room-scale environments.\n\nI also worked as the Sound Designer for a number of the experiences, from crafting accents for micro-interactions in UI to composing for the cinematic moments of the disaster-relief themed scenario.</p>',
  press:'<div class="side"><h1>Press</h1><li><a href="https://ux-design-awards.com/en/product/ibm-watson-experience-centers/">UX DESIGN AWARDS</a></li></div>',
  iframe:'<iframe src="https://player.vimeo.com/video/341664847" width="814" height="453" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>'
},
{
  title: 'Oblong Industries',
  // images: '<img src="images/oblong-internal-docs.png" class="small-image"> <img src="images/oblong-internal-docs1.png" class="small-image"> <img src="images/oblong-internal-docs2.png" class="small-image"> <img src="images/oblong-internal-docs4.png" class="small-image">',
  thumbnail:'',
  body:'<p class="description"></p>',
  press:'',
  iframe:'<img src="images/oblong-logo.png" class="large-image"><p class="description">While working for Oblong Industries, about half of my time was dedicated to internal projects. This work ranged from R&D, protoyping new interfaces, and developing custom tools for the Solutions team, to creating clear documentation of client-work and supporting marketing endeavors.\n\n From things for smaller screens, like this interactive widget to demonstrate a shared digital workspace: </p><div class="side"><h1>Press</h1><li><a href="https://www.ted.com/talks/john_underkoffler_pointing_to_the_future_of_ui?language=en">Future of UI</a></li></div><iframe seamless class="noFrame" src="marketing-demo-module/index.html" width="814px" height="380px" frameborder="0"></iframe><p class="description">To collaborating with the rest of the Solutions team on software for many larger screens, running across multiple systems. This is a demo that showcases the multi-machine capabilities of \nG-speak, Oblong\'s spatial computing platform: </p><iframe src="https://player.vimeo.com/video/397090314" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe><p class=description> The G-speak operating system uses a coordinate system that is based in realworld millimeters, with an origin point in the center of the room. What that means is that even without an AR/VR headset, multiple users can interact with the nearby surfaces and connected devices. In the video below I show a spatial hit-area demo built with Oblong\'s Busby library and some Arduino light-strip fun.</p><iframe src="https://player.vimeo.com/video/397100885" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>'
},
  {
    title: 'S.A.D. Shelter',
    images: '<img src="images/shelter1.jpg" class="large-image"><img src="images/shelter3.jpg" class="large-image"><img src="images/shelter4.jpg" class="large-image">',
    thumbnail:'',
    body:'<p class="description">A place of refuge for the overwhelmed patron, the S.A.D. shelter is activated by surrounding exhibition happenings (Please take off shoes before entering).\n\nThe S.A.D. Shelter was created for the S.A.D. Show, UCLA\'s DMA Senior Exhibition. Inspired by the overwhelming nature of gallery openings, the S.A.D. Shelter draws inspiration from a variety of comforts ranging from ASMR videos to primitive lean-to shelters. Viewers enter the shelter through the side and are shielded visually by glsl generated graphics, which in turn are activated by a microphone monitoring room noise or \'activity\'. Through headphones, the visuals are accompanied by calming ASMR audio clips to create a meditative space within the gallery. \n\n\n\n</p>',
    press:'<div class="side"><h1>Press</h1><li><a href="http://thecreatorsproject.vice.com/blog/ucla-design-media-arts-showcase-amidst-campus-shooting">CREATORS PROJECT</a></li></div>',
    iframe:'<img src="images/shelter5.jpg" class="large-image">'
  },
  {
    title: 'Soso Internship',
    medium: 'dance, arduino, sound, Processing',
    images: '',
    thumbnail:'',
    body:'<p class="description">I spent my summer of 2016 in Boston interning for my favorite rockstars-turned-design-studio, SosoLimited. I got to work on some in-house projects (like the bi-coastal message board shown above), experiment with the twitter API for some live data-driven installations, and I was introduced to beurocracy\'s place in the design process via many meetings for a public work that was ultimately shot down by some grumpy neighbors...\n\n Soso rocks, and their Quadrennial <a style="font-weight:900; text-decoration:underline;" href="https://www.sosolimited.com/work/reconstitution-2008">Reconstitution</a> is still one of my favorite projects.</p>',
    press:'',
    iframe:'<iframe src="https://player.vimeo.com/video/139732443?title=0&byline=0&portrait=0" width="814" height="453" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>'
  },
  {
    title: ' Amatuer Dance Collaboration',
    medium: 'dance, arduino, sound, Processing',
    images: '<img src="images/wac1.png" class="large-image"><img src="images/wac_miami.jpg" class="small-image" style="margin-right:10px"><img src="images/MiamiPerformance2.jpg" class="small-image">',
    thumbnail:'',
    body:'<div class="caption">(video password: what)</div><p class="description" >\n\nFeatured at the International Noise Conference in Miami, Amateur is a collaboration between Samson Klitsner, Dorothy Dubrule and Barry Brannum. Using flex sensors and wearable arduinos, Amateur triggers sound samples with movement as means of exploring how performance creates a world for its audience on competing perceptual levels.\n\nAmateur has performed at the Wight Gallery, Eastside International, and Glorya Kaufman Dance Theater in Los Angeles, as well as the International Noise Conference in Miami.\n\n</p><div class="side"><h1>Press</h1><li><a href="https://www.youtube.com/watch?v=dnCuq7sOCyk&feature=youtu.be"target="_blank">SFBandVideos</a></li><li><a href="http://www.miaminewtimes.com/slideshow/the-people-of-international-noise-conference-2015-6283467/13"target="_blank">Miami New Times</a></li></div><img src="images/arduino2.png" class="large-image"><p class="description" >A wireless belt is rigged with an Arduino Lilypad, Xbee module, and flex sensors attached to various joints on the body.\n\nData from the flex sensors is used to trigger sound samples, which are selected and updated through a software/midi interface written in processing.\n\nROLES:\n\nSoftware/Sound Design: Samson Klitsner\n\nCostume design: Sarah B. Lunde\n\nChoreography and dance: Dorothy Dubrule and Barry Brannum</p>',
    press:'',
    iframe:'<iframe src="https://player.vimeo.com/video/256499592?title=0&byline=0&portrait=0" width="814" height="453" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>'
  },
  {
    title: ' Choose',
    medium: 'processing, teensy',
    description: '',
    thumbnail:'',
    images:'<img src="images/choose.png" class="large-image"><img src="images/choose.jpg" class="large-image">',
    iframe:'<iframe src="https://player.vimeo.com/video/119825927" width="814" height="453" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>',
    body:'<p class="description">Choose is an interactive color and sound installation that was featured in the DMA 2015 undergraduate exhibition.\n\nUsing Teensy, Processing, and projection mapping, colored dots are randomly mapped to an all-white 16 button MIDI controller so that each button is colorized to a different hue. Each button pressed changes the background to the button\'s corresponding color, altering the contrast relationship for remaining buttons.</p>',
    press:''
  },
  {
    title: 'Alexander Doggus',
    medium: 'unity',
    thumbnail:'',
    images:'<img src="images/AlexanderDoggusMain.png" class="large-image"><img src="images/DoggusSam.jpg" class="large-image">',
    body:'<p class="description" >Alexander Doggus is a wheelchair-bound old-timer who used to be the world\'s greatest show dog. Jaded by his exuberant past, Alexander now cares only about his favorite tennis ball.\n\n  The player guides Alexander through the world using a trackball to roll his in-game tennis ball, Alexander always following close behind. Complete with an original soundtrack, Alexander Doggus carefully combines 2D and 3D elements to create a richly textured world. \n\nCreated for Eddo Stern\'s 171 Worldbuilding class.</p>',
    press:"<div class='side'><h1>Press</h1><li><a href='http://games.ucla.edu/game/alexander-doggus-2/' target='_blank'>Game Lab</a></li></div>",
    iframe:'<iframe src="https://player.vimeo.com/video/157377653" width="814" height="453" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>'
  },
  // {
  //   title: 'Martini Scorchazio',
  //   medium: 'Music Video',
  //   description: '',
  //   thumbnail:'',
  //   body:'<p class="description">A work in progress\n\n My final project for DMA 161: Video. The song, "Martini Scorchazio," was produced and recorded by myself along with fellow DMA and Fine Art  <a href ="https://soundcloud.com/shadow-realm-dice-boys">ShadowRealmDiceBoys</a>.\n\nDirector/Editor: Sam Klitsner\nDP: Ky Newman\nSong "Martini Scorchazio" by ShadowRealmDiceBoys</p>',
  //   press:'<div class="side"><h1>Find me on</h1><li><a href="https://soundcloud.com/shadow-realm-dice-boys" target="_blank">Soundcloud</a></li></div>',
  //   iframe:'<iframe src="https://player.vimeo.com/video/158510257?title=0&byline=0&portrait=0" width="100%" height="453" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>'
  // },
  // {
  //   title: 'Timeline of the Far Future',
  //   medium: 'processing',
  //   thumbnail:'',
  //   images:'<img src="images/PPtotFF/frames3684.png" class="large-image"><img src="images/PPtotFF/PPTotFF 1.027.png" class="large-image"><img src="images/PPtotFF/PPTotFF 1.010.png" class="large-image">',
  //   body:'<p class="description" >"PowerPoints of the far future, a collaboration between Samson Klitsner and <a href ="http://pohflepp.net/" target="_blank" style="font-weight:500">Sascha Pohflepp</a>, turns the events from Wikipedia\'s <a href =https://en.wikipedia.org/wiki/Timeline_of_the_far_future style="font-weight:500" target="_blank">Timeline of the Far Future</a> - a list of ridiculously far-off cosmological events - into a call-to-action.\n\nEach slide was algorithmically generated with software development by Sam Klitsner through an automated Google image search based on statements from the database of entries. the statement is also randomly constructed as a future, present or modal statement.\n\nBy presenting a series of increasingly distanced events such as \"In 1000000 years Neil Armstrong\'s footprint and those left by all twelve Apollo moonwalkers will have eroded\", the Powerpoint transforms a page of extinction into farce."\n\n-<em>taken from The Photographers\' Gallery</em></p>',
  //   press:"<div class='side'><h1>Press</h1><li><a href='http://thephotographersgallery.org.uk/lev-manovich' target='_blank'>Photographers\' Gallery</a></li></div>",
  //   iframe:'<img src="images/Timeline.png" class="large-image">',
  //
  // },
  // {
  //   title: 'drool',
  //   medium: '',
  //   thumbnail:'',
  //   images:'<img src="images/drool.jpg" class="large-image">',
  //   body:'<p class="description" >Submerged in a media-saturated world, “content” has become something that is acknowledged but seldom processed — a bead of drool is the reward for the uncompromisingly absorbed viewer. In that same breath, we introduce ‘DroOoo0l’, the 2016 multimedia exhibition curated by Sam Klitsner / Echo Theohar / Claire Couch, and which is hosted by the UCLA Department of Design Media Arts to showcase the work of their undergraduates.\n\n Organized into different sights of consumption, “Dro0Oo00OL” guides its viewer through every avenue of media absorption; from the library to the junkyard. As the culture around new media continues to ask for more: harder graphics, riskier statements, blasted colors, and immersive environments, the students at DMA attempt to satiate these demands through their own experimentation in the practice of design. Full of mistakes, speculations, and successes, ‘Dro0Oo0OL’ offers a contemporary insight into the aspirations of young media artists to capture the legendary bead of mouth-sweat which eludes us all.\n\nEXHIBITION CURATORS\nSamson Klitsner, Echo Theohar, Claire Couch\n\nDATES\nJanuary 14 - 28, 2016</p>',
  //   press:"",
  //   iframe:'<img src="images/droolBanner.jpg" class="large-image">',
  // },
  {
    title: '25 Words 25 works',
    medium: '',
    thumbnail:'',
    images:'<img src="images/wordimage2.jpg" class="large-image"><img src="images/wordimage3.jpg" class="large-image"><img src="images/wordimage4.jpg" class="large-image"><img src="images/wordimage5.jpg" class="large-image"><img src="images/wordimage6.jpg" class="large-image">',
    body:'<p class="description" ><i>25 Words 25 Works</i> was the final product of DMA 154 Word + Image taught by Professor Rebecca Mendez. Through a process of textual analysis, research, design, and production, each student of the class produced and distributed a 20 page booklet for each classmate to be bound by hand in a single volume. \n\nThe inspiration for my edition of <i>25 Words 25 Works</i> is drawn from both the research and physical processes of production which became all too familiar to us over the course of the quarter. </p>',
    press:"",
    iframe:'<img src="images/wordimage1.jpg" class="large-image">',

  },
  {
    title: 'Illustrations & Graphics',
    medium: '',
    thumbnail:'',
    images:'<img src="images/buttsniffers.jpg" class="large-image" style="border=none;"><img src="images/pink-dog.png" class="large-image" style="border=none;"><h4> Illustration series for monthly NTS show "The Food and Liquor" </h4><img src="images/NTS-Honey-Bun-no-text.png" class="large-image"><h4>Zine<br> With excerpts from "Men Explain Things to Me" by Rebeca Solnit</h4><img src="http://payload316.cargocollective.com/1/2/75168/8637089/sam_1_670.jpg" class="large-image"><img src="http://payload316.cargocollective.com/1/2/75168/8637089/sam_2_670.jpg" class="large-image"><img src="http://payload316.cargocollective.com/1/2/75168/8637089/sam_3_670.jpg" class="large-image"><img src="http://payload316.cargocollective.com/1/2/75168/8637089/sam_4_670.jpg" class="large-image"><img src="http://payload316.cargocollective.com/1/2/75168/8637089/sam_5_670.jpg" class="large-image"><img src="http://payload316.cargocollective.com/1/2/75168/8637089/sam_6_670.jpg" class="large-image"><h4>Dog</h4><img src="https://pbs.twimg.com/media/CMDHZNfUAAAe8Gm.jpg:large" class="large-image">',
    body:'',
    press:"",
    iframe:'',

  },
  {
    title: 'LA Hacks',
    medium: '',
    thumbnail:'',
    images:'<img src="images/hackarena.png" class="large-image"><img src="images/LAHacksShirt.jpg" class="large-image"><img src="images/LAhacks-process3.png" class="large-image"><img src="images/LAhacks-process4.png" class="large-image"><img src="images/LAhacks-process5.png" class="large-image"><img src="images/LAhacks-process7.png" class="large-image">',
    body:'<p class="description"> I Worked with fellow design student <a href="http://jasonspielman.com">Jason Spielman</a> to create logo & identity, promotional material, jumbotron/LED graphics, and print media for LA Hacks.\n\n<a href="http://lahacks.com/">LA Hacks</a> is the largest hackathon in the nation. 1,500 hackers came to compete for 36 hours building innovative applications and tech products. These products were then judged by top tech industry professionals (i.e. Sam Altman - President of Y Combinator, Chris De Wolfe - CEO of SGN and Founder of Myspace, Tomer Kagan - Co-Founder and CEO of Quixey). \n\nLA Hacks was held at UCLA\'s iconic Pauley Pavilion. We raised a quarter-million dollars through corporate sponsorships in order to put on the event! Special guests came to speak at LA Hacks including the likes of Evan Spiegel - Founder and CEO of Snapchat, Alexis Ohanian - Co-Founder of Reddit, Baiju Bhatt - Co-Founder of Robinhood.\n\n <b>Team:</b> Samson Klitsner, Jason Spielman </p>',
    press:"<div class='side'><h1>Press</h1><li><a href='http://articles.latimes.com/2014/apr/13/business/la-fi-tn-la-hacks-hackathon-20140412'>LA Times</a></li><li><a href='http://www.laweekly.com/news/ucla-hosts-biggest-hackathon-in-history-4581816'>LA Weekly</a></li><li><a href='http://dailybruin.com/2014/04/14/la-hacks-gathers-about-1300-participants-at-ucla-for-hackathon/'>Daily Bruin</a></li><li><a href='http://techzulu.com/la-hacks-making-la-tech-hub-world/'>TeckZulu</a></li></div>",
    iframe:'<iframe width="814" height="453" src="https://www.youtube.com/embed/n_PT7W2zxAs" frameborder="0" allowfullscreen></iframe>',

  }

]

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
        scope.content = 'Designer, Artist, Creative Technologist';
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
      scope.content = "Designer, Artist, Creative Technologist";
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
    $('#content').css('margin-top', '60px').prepend(projects[i].iframe).append(projects[i].body, projects[i].press, projects[i].images).append('<div id="arrow"><div class="line1"></div><div class="line2"></div></div>');
    $('.description').css('margin','36px 0');
    locationHash(scope.title);
    colorize();
  }

  function colorize(){
    $('.large-image, iframe').css("border", "3px "+color+" solid").css("box-sizing","content-box");
    $('.small-image').css("border", "3px "+color+" solid").css("box-sizing","border-box")
    $('#arrow *').css("background", color);
    $('.noFrame').css("border", "none");
  }

  document.onkeydown = function(e) {
    e = e || window.event;
    switch(e.which || e.keyCode) {
      case 37: // left
      var check = checkHash();
      if (check>0&&check<10) {
        updateModel(check-1);
      }
      break;

      case 38: // up
      break;

      case 39: // right
      var check = checkHash();
      if (check>-1&&check<9) {
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
