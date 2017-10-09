$(function() {

  // global variables
  $reset = $('#reset');
  var winner = null;

  // reset to initial state of race
  var raceAgain = function() {
    $reset.addClass('tmp-hidden');
    $('.player').css({left: 0});
    winner = null;
  };

  
  var executeWin = function() {
    $reset.removeClass('tmp-hidden');
  };

  var movePlayer = function(keypressEvent) {
    var keyCode = String.fromCharCode(keypressEvent.keyCode);
    var $player = $('[data-key="' + keyCode + '"]');
    var leftPosition = $player.offset().left;
    $player.css({left: leftPosition + 10});
    if ($player.offset().left >= $('#track').width() - $player.width()) {
      winner = $player;
      executeWin();
    }
  };

  var race = function() {
    $(window).on('keypress', function(event) {
      if (!winner) {
        movePlayer(event);
      }
    });
    $reset.on('click', function() {
      raceAgain();
    });
  };
  race();
});

