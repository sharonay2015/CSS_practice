
$('a.sidebarLeftToggle').click(function () {
  if (!$('.sidebar').hasClass('sidebarLeft')) {
    $('.sidebar').addClass('sidebarLeft');
    console.log("left toggle");
  };
});

$('a.sidebarRightToggle').click(function () {
  console.log("right toggle");
  if ($('.sidebar').hasClass('sidebarLeft')) {
    $('.sidebar').removeClass('sidebarLeft');
  };
});

$('a.noSidebarToggle').click(function () {
  console.log("no sidebar toggle");
  if (!$('.content').hasClass('noSidebar')) {
    $('.content').addClass('noSidebar');
  } else {
    $('.content').removeClass('noSidebar');
  };
});

