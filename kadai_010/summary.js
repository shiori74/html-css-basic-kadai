$(function() {
  $('#change-color').on('click', function() {
    $('#target').css('color', 'red');
  });

  $('#change-text').on('click', function() {
    $('#target').text('Hello!', 'red');
  });

  $('#fade-out').on('click', function () {
    // 不透明度を0にする（フェードアウトする）
    $('#target').fadeOut();
  });
  $('#fade-in').on('click', function () {
    // 不透明度を1にする（フェードインする）
    $('#target').fadeIn();
  });
});