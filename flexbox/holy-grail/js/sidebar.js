// show side bar on left
$('a.sidebarLeftToggle').click(function () {
  if (!$('.sidebar').hasClass('sidebarLeft')) {
    $('.sidebar').addClass('sidebarLeft');
    console.log("left toggle");
  };
});
// show side bar on right
$('a.sidebarRightToggle').click(function () {
  console.log("right toggle");
  if ($('.sidebar').hasClass('sidebarLeft')) {
    $('.sidebar').removeClass('sidebarLeft');
  };
});
//show sidebar below content, click button again to remove justify
$('a.noSidebarToggle').click(function () {
  console.log("no sidebar toggle");
  if (!$('.content').hasClass('noSidebar')) {
    $('.content').addClass('noSidebar');
  } else {
    $('.content').removeClass('noSidebar');
  };
});
//hide sidebar, click button again to reshow sidebar
$('a.hideSidebarToggle').click(function () {
  console.log("hide toggle");
  if (!$('.sidebar').hasClass('hide')) {
    $('.sidebar').addClass('hide');
  } else {
    $('.sidebar').removeClass('hide');
  };
});
