// /************************ナビジャンプ************************//

$('.nav-link').on('click', function() {
  var jump_id = $(this).attr('data-jump-id'); // ジャンプ先の要素のid
  var jump_element_offset_top = $(jump_id).offset().top; // ジャンプ先の要素のスクロール内の位置
  var scroll_area_current_offset_top = $('.split-box.right-box').scrollTop(); // スクロールエリアの現在のスクロール位置

  console.log('jump_element_offset_top(ジャンプ先の要素のスクロール内の位置) ->', jump_element_offset_top)
  console.log('scroll_area_current_offset_top(スクロールエリアの現在のスクロール位置) ->', scroll_area_current_offset_top)

  if ($(window).width() > 600) {
    var adjust = 100; // 微調整用数値
    $('.split-box.right-box').scrollTop(jump_element_offset_top + scroll_area_current_offset_top - adjust);
  }
  else {
    $(document).scrollTop(jump_element_offset_top + scroll_area_current_offset_top);
  }
});
