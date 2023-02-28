$(document).ready(function () {
    //setup multiple rows of colours, can also add and remove while spinning but overall this is easier.
    initWheel();

    $('button').on('click', function () {
        var outcome = Math.floor(Math.random() * 14);
        spinWheel(outcome);
    });
});

function initWheel() {
    var $wheel = $('.roulette-wrapper .wheel'),
        row = "";

    row += "<div class='row'>";
    row += "  <div class='card red'><\/div>";
    row += "  <div class='card black'><\/div>";
    row += "  <div class='card red'><\/div>";
    row += "  <div class='card black'><\/div>";
    row += "  <div class='card red'><\/div>";
    row += "  <div class='card black'><\/div>";
    row += "  <div class='card red'><\/div>";
    row += "  <div class='card green'><\/div>";
    row += "  <div class='card black'><\/div>";
    row += "  <div class='card red'><\/div>";
    row += "  <div class='card black'><\/div>";
    row += "  <div class='card red'><\/div>";
    row += "  <div class='card black'><\/div>";
    row += "  <div class='card red'><\/div>";
    row += "  <div class='card black'><\/div>";
    row += "<\/div>";

    for (var x = 0; x < 29; x++) {
        $wheel.append(row);
    }
}

function spinWheel(roll) {
    var $wheel = $('.roulette-wrapper .wheel'),
        order = [0, 11, 5, 10, 6, 9, 7, 8, 1, 14, 2, 13, 3, 12, 4],
        position = order.indexOf(roll);

    //determine position where to land
    var rows = 12,
        card = 100 + 0 * 2,
        landingPosition = (rows * 15 * card) + (position * card);

    var randomize = Math.floor(Math.random() * 100) - (100 / 2);

    landingPosition = landingPosition + randomize;

    var object = {
        x: Math.floor(Math.random() * 50) / 100,
        y: Math.floor(Math.random() * 20) / 100
    };

    $wheel.css({
        'transition-timing-function': 'cubic-bezier(0,' + object.x + ',' + object.y + ',1)',
        'transition-duration': '6s',
        'transform': 'translate3d(-' + landingPosition + 'px, 0px, 0px)'
    });

    setTimeout(function () {
        $wheel.css({
            'transition-timing-function': '',
            'transition-duration': '',
        });

        var resetTo = -(position * card + randomize);
        $wheel.css('transform', 'translate3d(' + resetTo + 'px, 0px, 0px)');
    }, 6 * 1000);
}






