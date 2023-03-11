$(function () {
    var bar = '';
    bar += '<div class="swiper-wrapper">';
            bar += '<div class="swiper-slide">';
                bar += '<a href="#">';
                    bar += '<img src="/assets/img/info/blog/1.png" alt="Myzuu" />';
                bar += '</a>';
            bar += '</div>';

            bar += '<div class="swiper-slide">';
                bar += '<a href="#">';
                    bar += '<img src="/assets/img/info/blog/1.png" alt="Myzuu" />';
                bar += '</a>';
            bar += '</div>';

            bar += '<center>';
            bar += '<div class="swiper-pagination"></div>';
            bar += '</center>';
            bar += '</div>';


            bar += '<script src="https://unpkg.com/swiper@8/swiper-bundle.min.js"></script>';
    $("#slider").html(bar);
});

function getValueByName(name) {
    var url = document.getElementById('Myzuu').getAttribute('src');
    var param = new Array();
    if (url.indexOf("?") != -1) {
        var source = url.split("?")[1];
        items = source.split("&");
        for (var i = 0; i < items.length; i++) {
            var item = items[i];
            var parameters = item.split("=");
            if (parameters[0] == "id") {
                return parameters[1];
            }
        }
    }
}