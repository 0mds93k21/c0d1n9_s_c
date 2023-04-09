$(function () {
    var bar = '';

    bar += '<a href="#home">';
        bar += '<button class="button-myzuu-produk2">';
            bar += '<img src="https://sc.myzuu.my.id/assets/img/info/event/1.png" alt="Myzuu">';
            bar += '<p>Weeken Deal Promo Paket data Telkomsel</p>';
            bar += '<h4>Klik, Punya Kode Voucher? Gunakan skrng</h4>';
        bar += '</button>';
    bar += '</a>';

    bar += '<a href="#home">';
        bar += '<button class="button-myzuu-produk2">';
            bar += '<img src="https://sc.myzuu.my.id/assets/img/info/event/2.png" alt="Myzuu">';
            bar += '<p>Event Jujutsu Kaisen</p>';
            bar += '<h4>Klik, Punya Kode Voucher? Gunakan skrng</h4>';
        bar += '</button>';
    bar += '</a>';

    $("#event").html(bar);
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