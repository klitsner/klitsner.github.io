/*global angular */

//add functionality where if you scroll past the bottom of the page, the content collapses


var app = angular.module("myApp", []);


app.controller('InfoController', ['$scope', function ($scope) { 
    $scope.title = 'samson klitsner'; 
    $scope.content = 'Design Media Arts Student';  
    $scope.body = '';
    $scope.images = [];
    $scope.iframe = '';

    if ($("#about").length){
        $scope.title = 'Samson klitsner'; 
        $scope.content = 'Design Media Arts Student';  
    }



    $scope.projects = 
        [
                {
            title: 'S.A.D. Shelter',
            medium: 'Installation, Processing, Sound',
            description: '',
            thumbnail:'',
            body:'',
            press:''
        },
        {
            title: ' Amatuer ',
            medium: 'Dance, Arduino, Sound, Processing',
            description: '',
            thumbnail:'',
            body:'',
            press:''
        },
        {
            title: ' Choose',
            medium: 'Processing, Teensy',
            description: '',
            thumbnail:'',
            body:'',
            press:''
        },
        {
            title: 'Alexander Doggus',
            medium: 'Unity, Installation, Sound',
            description: '',
            thumbnail:'',
            body:'',
            press:'',
            iframe:"https://player.vimeo.com/video/157377653"
        },
        {
            title: 'Martini Scorchazio',
            medium: 'Music Video',
            description: '',
            thumbnail:'',
            body:'',
            press:''
        },
        {
            title: 'Timeline of the Far Future',
            medium: 'Processing',
            description: '',
            thumbnail:'',
            body:'',
            press:''
        },
        {
            title: 'Dro0Oo00ol',
            medium: 'Exhibition',
            description: '',
            thumbnail:'',
            body:'',
            press:''
        },
        {
            title: '25 words 25 works',
            medium: 'Graphic Design, Bookmaking, Design Research',
            description: '',
            thumbnail:'',
            body:'',
            press:''
        },
        {
            title: 'Illustrations',
            medium: 'Charcoal, Ink, Digital ',
            description: '',
            thumbnail:'',
            body:'',
            press:''
        },
        {
            title: 'LA Hacks 2015',
            medium: 'Identity, Promotional Design',
            description: '',
            thumbnail:'',
            body:'',
            press:''
        }


    ];
    $scope.info = function(index){
        $scope.title = $scope.projects[index].title;
        $scope.content = $scope.projects[index].medium;

    };

}]);




var projects = [
    {
        images: '<img src="images/shelter1.jpg" class="large-image"><img src="images/shelter3.jpg" class="large-image"><img src="images/shelter4.jpg" class="large-image">',
        thumbnail:'',
        body:'<p class="description">A place of refuge for the overwhelmed patron, the S.A.D. shelter is activated by surrounding exhibition happenings. Please take off shoes before entering.\n \n \n\n\n\n</p>',
        press:'<div class="side"><h1>Press</h1><li><a href="http://thecreatorsproject.vice.com/blog/ucla-design-media-arts-showcase-amidst-campus-shooting">CREATORS PROJECT</a></li></div>',
        iframe:'<img src="images/shelter5.jpg" class="large-image">'
    }, 
 { 
        title: ' Amatuer Dance Collaboration',
        medium: 'dance, arduino, sound, Processing',
        images: '<img src="images/wac1.png" class="large-image"><img src="images/wac_miami.jpg" class="small-image" style="margin-right:10px"><img src="images/MiamiPerformance2.jpg" class="small-image">',
        thumbnail:'',
        body:'<p class="description" >Start at 3:14 (video password: what)\n\nFeatured at the International Noise Conference in Miami, Amateur is a collaboration between Samson Klitsner, Dorothy Dubrule and Barry Brannum. Using flex sensors and wearable arduinos, Amateur triggers sound samples with movement as means of exploring how performance creates a world for its audience on competing perceptual levels.\n\nAmateur has performed at the Wight Gallery, Eastside International, and Glorya Kaufman Dance Theater in Los Angeles, as well as the International Noise Conference in Miami.\n\n</p><div class="side"><h1>Press</h1><li><a href="https://www.youtube.com/watch?v=dnCuq7sOCyk&feature=youtu.be"target="_blank">SFBandVideos</a></li><li><a href="http://www.miaminewtimes.com/slideshow/the-people-of-international-noise-conference-2015-6283467/13"target="_blank">Miami New Times</a></li></div><img src="images/arduino2.png" class="large-image"><p class="description" >A wireless belt is rigged with an Arduino Lilypad, Xbee module, and flex sensors attached to various joints on the body.\n\nData from the flex sensors is used to trigger sound samples, which are selected and updated through a software/midi interface written in processing.\n\nROLES:\n\nSoftware/Sound Design: Samson Klitsner\n\nCostume design: Sarah B. Lunde\n\nChoreography and dance: Dorothy Dubrule and Barry Brannum</p>',
        press:'',
        iframe:'<iframe src="https://player.vimeo.com/video/121414399?title=0&byline=0&portrait=0" width="814" height="453" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>'
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
        body:'<p class="description" >Alexander Doggus is a wheelchair-bound old-timer who used to be the world’s greatest show dog. Jaded by his exuberant past, Alexander now cares only about his favorite tennis ball.\n\n  The player guides Alexander through the world using a trackball to roll his in-game tennis ball, Alexander always following close behind. Complete with an original soundtrack, Alexander Doggus carefully combines 2D and 3D elements to create a richly textured world. \n\nCreated for Eddo Stern’s 171 Worldbuilding class.</p>',
        press:"<div class='side'><h1>Press</h1><li><a href='http://games.ucla.edu/game/alexander-doggus-2/' target='_blank'>Game Lab</a></li></div>",
        iframe:'<iframe src="https://player.vimeo.com/video/157377653" width="814" height="453" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>'
    },
    {
        title: 'Martini Scorchazio',
        medium: 'Music Video',
        description: '',
        thumbnail:'',
        body:'<p class="description">A work in progress (password: video)\n\n I started working on this music as the final project for my Video class. The song, "Martini Scorchazio," was produced and recorded by myself along with my art school rap-group <a href ="https://soundcloud.com/shadow-realm-dice-boys">ShadowRealmDiceBoys</a>.\n\nDirector/Editor: Sam Klitsner\nDP: Ky Newman\nSong "Martini Scorchazio" by ShadowRealmDiceBoys</p>',
        press:'<div class="side"><h1>Find me on</h1><li><a href="https://soundcloud.com/shadow-realm-dice-boys" target="_blank">Soundcloud</a></li></div>',
        iframe:'<iframe src="https://player.vimeo.com/video/158510257?title=0&byline=0&portrait=0" width="814" height="453" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>'
    },
    {
        title: 'Timeline of the Far Future',
        medium: 'processing',
        thumbnail:'',
        images:'',
        body:'<p class="description" >"PowerPoints of the far future, a collaboration between Samson Klitsner and <a href ="http://pohflepp.net/" target="_blank" style="font-weight:500">Sascha Pohflepp</a>, turns the events from Wikipedia\'s <a href =https://en.wikipedia.org/wiki/Timeline_of_the_far_future style="font-weight:500" target="_blank">Timeline of the Far Future</a> - a list of ridiculously far-off cosmological events - into a call-to-action.\n\nEach slide was algorithmically generated with software development by Sam Klitsner through an automated Google image search based on statements from the database of entries. the statement is also randomly constructed as a future, present or modal statement.\n\nBy presenting a series of increasingly distanced events such as ‘In 1000000 years Neil Armstrong’s footprint and those left by all twelve Apollo moonwalkers will have eroded’, the Powerpoint transforms a page of extinction into farce."\n\n-<em>taken from The Photographers\' Gallery</em></p>',
        press:"<div class='side'><h1>Press</h1><li><a href='http://thephotographersgallery.org.uk/lev-manovich' target='_blank'>Photographers\' Gallery</a></li></div>",
        iframe:'<img src="images/Timeline.png" class="large-image">',

    },
    {
        title: 'drool',
        medium: '',
        thumbnail:'',
        images:'<img src="images/drool.jpg" class="large-image">',
        body:'<p class="description" >Submerged in a media-saturated world, “content” has become something that is acknowledged but seldom processed — a bead of drool is the reward for the uncompromisingly absorbed viewer. In that same breath, we introduce ‘DroOoo0l’, the 2016 multimedia exhibition curated by Sam Klitsner / Echo Theohar / Claire Couch, and which is hosted by the UCLA Department of Design Media Arts to showcase the work of their undergraduates.\n\n Organized into different sights of consumption, “Dro0Oo00OL” guides its viewer through every avenue of media absorption; from the library to the junkyard. As the culture around new media continues to ask for more: harder graphics, riskier statements, blasted colors, and immersive environments, the students at DMA attempt to satiate these demands through their own experimentation in the practice of design. Full of mistakes, speculations, and successes, ‘Dro0Oo0OL’ offers a contemporary insight into the aspirations of young media artists to capture the legendary bead of mouth-sweat which eludes us all.\n\nEXHIBITION CURATORS\nSamson Klitsner, Echo Theohar, Claire Couch\n\nDATES\nJanuary 14 - 28, 2016</p>',
        press:"",
        iframe:'<img src="images/droolBanner.jpg" class="large-image">',

    },
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
        title: 'illustrations',
        medium: '',
        thumbnail:'',
        images:'<img src="http://payload316.cargocollective.com/1/2/75168/8637089/sam_1_670.jpg" class="large-image"><img src="http://payload316.cargocollective.com/1/2/75168/8637089/sam_2_670.jpg" class="large-image"><img src="http://payload316.cargocollective.com/1/2/75168/8637089/sam_3_670.jpg" class="large-image"><img src="http://payload316.cargocollective.com/1/2/75168/8637089/sam_4_670.jpg" class="large-image"><img src="http://payload316.cargocollective.com/1/2/75168/8637089/sam_5_670.jpg" class="large-image"><img src="http://payload316.cargocollective.com/1/2/75168/8637089/sam_6_670.jpg" class="large-image"><img src="images/wordimage2.jpg" class="large-image">',
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
    var curr;
    var change = false;
    var show = false;
    var safe = false;

    
    $('#projects').hover(function(){
        $("#about-link").fadeOut(200);
        
    },
                        function(){
        if(show!=true){
        $("#about-link").fadeIn(200);
        }
                        });


    $('.thumbnail').hover(function(){
        
        if(show==false){
            index = $(this).index()
            $(this).find('.thumbnail-color').animate({
                height: 0
            }, transTime, function() {
            });


            color = $(this).find('.thumbnail-color').css( "background-color" );

            $('#logo-container').append('<div class="logo-color"></div>');

            $( ".logo-color" ).last().css('background-color',color).animate({
                height: 210
            }, transTime, function() {
                curr = $('#info').css('color',color);
                scope.$apply(function(){
                    scope.info(index);
                });
            });
        }
    },
                          function(){
        $('.collapse').hide();
        $('#info').css('color',curr);
        $(this).find('.thumbnail-color').stop(true,true).animate({
            height: 140
        }, transTime, function() {
        });
        $('.logo-color').animate({
            height: 0
        }, transTime, function() {
            $(this).remove();
            if($( ".logo-color" ).length==0 && change==false){
                scope.$apply(function(){
                    scope.title = 'Samson klitsner'; 
                    scope.content = 'Design Media Arts Student';  
                    $('#info').css('color','#eaeaea');
                });
                
//                  if($('.info-title').text()==='SAMSON KLITSNER'){
//                      if(change==false){
//                $('#logo-container').hover(function(){
//                $('#info').css('color','#dbdbdb');
//                },function(){
//                $('#info').css('color','#eaeaea');
//                });
//                      }
//                  }
    
            }
        });
       
    });


    //selecting a project to view
    $('.thumbnail').click(function(){
        reset();
        $("#about-link").hide();
        change = true;
        show = true;
        $('#projects').hide();
        $('#logo-container').css('background-color',color);
        scope.$apply(function(){
            scope.body= projects[index].body;
            scope.info(index);
        });
        $('#content').css('margin-top', '60px').prepend(projects[index].iframe).append(projects[index].body, projects[index].press, projects[index].images).append('<img src="images/colors.png" id="arrow">');
        $('.description').css('margin','36px 0');
    });

    $('#logo-container').hover(function(){

        if(change==true){
            $('.collapse').show().css("color", color);
            $('#logo-container').css( 'cursor', 'pointer' );
        }
        if(change==false){
            $('.collapse').hide();
            $('#logo-container').css( 'cursor', 'default' );
        }
    },
                               function(){

        $('.collapse').hide();

    });

    //reset the work page
    var reset = function(){
        $('#projects').show();
        $('#logo-container').css( 'cursor', 'default' );
        if(change==true){
         $('#info').css('color','#eaeaea');
         $("#about-link").fadeTo(0,.3);
         $('#logo-container').css('background-color','#eaeaea');
        }
        scope.$apply(function(){
            scope.body= '';
            scope.title = "Samson Klitsner";
            scope.content = "Design Media Arts Student";
            $('#content').css('margin-top', '0').html('');
            show= false;
            change=false;
        });
    }

    //reset
    $('#logo-container').click(function(){
        if(!$("#about").length){
            reset();
            change=false;
            $('.collapse').hide();}
    });



    //scroll to top
    $('#content').on("click", '#arrow', function(){
        $("html, body").animate({ scrollTop: 0 }, 400,function(){
            reset();
            change=false;
            $('.collapse').hide();
        });


        return false;
    });
    
    $("#about-link").hover(function(){
    $("#about-link").fadeTo(0,.6);
    },function(){
    $("#about-link").fadeTo(0,.3);
    });   
    
    
    //hover over logo

//    $('#logo-container').hover(function(){
//        if(change==false){
//         $('#info').css('color','#dbdbdb');
//            $('#logo-container').css('background-color','#dbdbdb');
//                    }
//    },
//                              function(){
//        if(change==false){
//            $('#logo-container').css('background-color','#eaeaea');
//             $('#info').css('color','#eaeaea');
//        }
//    });
    
});
