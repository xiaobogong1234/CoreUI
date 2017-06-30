function getBodyHeight() {
    $(function() {
        var WholeHeight = $(window).height();
        $(".main").css("min-height", WholeHeight - 107 + 'px');
        var resizeTimer = null;
        $(window).on('resize', function() {
            if (resizeTimer) {
                clearTimeout(resizeTimer)
            }
            resizeTimer = setTimeout(function() {
                var WholeHeight = $(window).height();
                $(".main").css("min-height", WholeHeight - 107 + 'px');

            }, 400);
        });
    });
}