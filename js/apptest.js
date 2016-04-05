/*global angular */


var app = angular.module("myApp", []);


app.controller('InfoController', ['$scope', function ($scope) { 
    $scope.title = 'samson Klitsner'; 
    $scope.content = 'Design Media Arts Student';
   $scope.test = function () {
        alert('Hello you are calling angular js method.');
    }
    $scope.projects = 
        [
        {
            title: ' \'Amatuer\' ',
            medium: 'dance, arduino, sound, processing',
            description: '',
            thumbnail:'',
            body:'',
            press:''
        },
        {
            title: ' Choose',
            medium: 'processing, teensy',
            description: '',
            thumbnail:'',
            body:'',
            press:''
        },
        {
            title: 'Alexander Doggus',
            medium: 'unity',
            description: '',
            thumbnail:'',
            body:'',
            press:''
        },
        {
            title: 'Martini Scorchazio',
            medium: 'music video',
            description: '',
            thumbnail:'',
            body:'',
            press:''
        },
        {
            title: 'Timeline of the Far Future',
            medium: 'processing',
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
        title: ' \'Amatuer\' Dance Collaboration',
        medium: 'dance, arduino, sound, processing',
        description: '',
        thumbnail:'',
        body:'',
        press:''
    },
    {
        title: ' Choose',
        medium: 'processing, teensy',
        description: '',
        thumbnail:'',
        body:'',
        press:''
    },
    {
        title: 'Alexander Doggus',
        medium: 'unity',
        description: '',
        thumbnail:'',
        body:'',
        press:''
    },
    {
        title: 'Martini Scorchazio',
        medium: 'music video',
        description: '',
        thumbnail:'',
        body:'',
        press:''
    },
    {
        title: 'Timeline of the Far Future',
        medium: 'processing',
        description: '',
        thumbnail:'',
        body:'',
        press:''
    }

]




/*Jquery stuff*/
$(document).ready(function(){
    var scope = angular.element(document.getElementById('controller')).scope()
    var index;
    var transTime = 250;
    var color;
    var curr;
    $('.thumbnail').hover(function(){

        index = $(this).index()
        $(this).find('.thumbnail-color').animate({
            height: 0
        }, transTime, function() {
            // Animation complete.

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

},
                  function(){
    change = false;
    $('#info').css('color',curr);
    $(this).find('.thumbnail-color').stop(true,true).animate({
        height: 140
    }, transTime, function() {
    });
    $('.logo-color').animate({
        height: 0
    }, transTime, function() {
        $(this).remove();
    });
});

});
