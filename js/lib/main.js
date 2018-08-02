$('#aboutButton').on('click', function(){
    $('#startPage').fadeOut('fast', function(){
        $('#aboutPage').fadeIn('slow');
    });
});

$('#homeButton').on('click', function(){
    $('#aboutPage').fadeOut('fast', function () {
        $('#startPage').fadeIn('slow');
    });
});
 