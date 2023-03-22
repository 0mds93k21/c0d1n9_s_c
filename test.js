// Get HTML head element
var head = document.getElementsByTagName('head')[0];
 
// Create new link Element
var link = document.createElement('link');

// set the attributes for link element
link.rel = 'stylesheet';

link.type = 'text/css';

link.href = 'https://sc.myzuu.my.id/assets/css/home/myzuu.css';

// Append link element to HTML head
head.appendChild(link);

// filter array 
let filterarray = [];

// gallery card array

let galleryarray = [
    {
        id: 1,
        img: "https://sc.myzuu.my.id/assets/img/info/slider/1.png",
    },

];


showgallery(galleryarray);


// create function to show card


function showgallery(curarra) {
    document.getElementById("footer").innerText = "";
    for (var i = 0; i < curarra.length; i++) {
        document.getElementById("footer").innerHTML += `
        <div class="header-myzuu">
        <div class="name-user">
            <p>Hi,</p>
            <h6>{{nama_user}}</h6>
        </div>
        <div class="notification">
            <a href="https://myzuu.webtoko.net/akun/?page=notifikasi">
                <button type="button" class="btn btn-primary position-relative myzuu-notice">
                    <i class="far fa-bell"></i>
                    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                        style="margin-left: -15px;">
                        {{total_notif}}
                        <span class="visually-hidden">unread messages</span>
                    </span>
                </button>
            </a>
        </div>
    </div>

    <div class="bg-myzuu">
        <div class="box-myzuu">
            <div class="image-wallet">
                <img src="https://sc.myzuu.my.id/assets/img/icon/wallet.png" alt="Myzuu">
            </div>
            <div class="text-wallet">
                <div style="display: flex;">
                    <h5>Rp </h5>
                    <h5 id="saldo_user" class="skeleton">{{saldo_user}}</h5>
                </div>
                <div style="display: flex;">
                    <p id="myzuu_poin" class="skeleton">{{poin_member}}</p>
                </div>
            </div>
            <a href="https://myzuu.webtoko.net/akun/?page=topup">
                <div class="plus-wallet">
                    <img src="https://sc.myzuu.my.id/assets/img/icon/plus.png" alt="Myzuu">
                </div>
            </a>
        </div>


        <div class="box-myzuu2 ">
            <div class="myzuu-flex">
                <div class="tab">
                    <button class="myzuutab active skeleton" onclick="openCity(event, 'myzuu-tab1')">Top Up</button>
                    <button class="myzuutab skeleton" onclick="openCity(event, 'myzuu-tab2')">Tagihan</button>
                </div>
            </div>


            <!-- MENU 1-->
            <div id="myzuu-tab1" class="tabcontent" style="display: block;padding: 0px;">
                <div class="myzuu-grid4" style="padding: 0px;">
                    <a href="https://myzuu.webtoko.net/digital/192392">
                        <button class="menu-list">
                            <img src="https://sc.myzuu.my.id/assets/img/icon/pulsa.png" class="img-myzuu" alt="Myzuu">
                            <p>Pulsa</p>
                        </button>
                    </a>

                    <a href="">
                        <button class="menu-list">
                            <img src="https://sc.myzuu.my.id/assets/img/icon/paket-data.png" class="img-myzuu"
                                alt="Myzuu">
                            <p>Paket Data</p>
                        </button>
                    </a>

                    <a href="https://myzuu.webtoko.net/digital/194778">
                        <button class="menu-list">
                            <img src="https://sc.myzuu.my.id/assets/img/icon/pln.png" class="img-myzuu" alt="Myzuu">
                            <p>Token Listrik</p>
                        </button>
                    </a>

                    <a href="https://myzuu.webtoko.net/digital/192428">
                        <button class="menu-list">
                            <img src="https://sc.myzuu.my.id/assets/img/icon/game.png" class="img-myzuu" alt="Myzuu">
                            <p>Game</p>
                        </button>
                    </a>

                    <a href="https://myzuu.webtoko.net/digital/192952">
                        <button class="menu-list">
                            <img src="https://sc.myzuu.my.id/assets/img/icon/e-money.png" class="img-myzuu" alt="Myzuu">
                            <p>E-Money</p>
                        </button>
                    </a>

                    <a href="">
                        <button class="menu-list">
                            <img src="https://sc.myzuu.my.id/assets/img/icon/voucher.png" class="img-myzuu" alt="Myzuu">
                            <p>Voucher</p>
                        </button>
                    </a>

                    <a href="https://myzuu.webtoko.net/digital/192933">
                        <button class="menu-list">
                            <img src="https://sc.myzuu.my.id/assets/img/icon/streaming.png" class="img-myzuu"
                                alt="Myzuu">
                            <p>Streaming</p>
                        </button>
                    </a>

                </div>
            </div>

            <!-- MENU 2 -->
            <div id="myzuu-tab2" class="tabcontent">
                <div class="myzuu-grid4" style="padding: 0px;">
                    <a href="https://myzuu.webtoko.net/digital/194778">
                        <button class="menu-list">
                            <img src="https://sc.myzuu.my.id/assets/img/icon/pln.png" class="img-myzuu" alt="Myzuu">
                            <p>Token PLN</p>
                        </button>
                    </a>

                </div>
            </div>
            <!-- MENU 2 -->

        </div>


        <!-- Slide -->
        <div class="swiper-container swiper-slider-center">
            <div class="swiper-wrapper">

                <div class="swiper-slide">
                    <a href="#">
                        <img src="https://sc.myzuu.my.id/assets/img/info/slider/1.png" alt="Myzuu" />
                    </a>
                </div>
                <div class="swiper-slide">
                    <a href="#">
                        <img src="https://sc.myzuu.my.id/assets/img/info/slider/2.png" alt="Myzuu" />
                    </a>
                </div>

            </div>
            <!-- Add Pagination -->
            <center>
                <div class="swiper-pagination"></div>
            </center>
        </div>
        <!-- Slide -->

        <!-- CARD SLIDER -->
        <div class="container">
            <div class="row" style="margin-bottom:10px;">
                <div class="col info-title" style="font-size:14px;font-weight:bold;"> Info Terbaru
                    <p class="info-subtitle">Seputar layanan Promosi</p>
                </div>
                <a href="#">
                    <h5 class="lainnya-event">Lainnya</h5>
                </a>
                <div class="col text-end" style="font-size:12px">
                </div>
            </div>
            <div class="scrollmenu" id="event"> </div>

            <!-- card -->
            <section class="container__cards__menarik">
                <div class="col" style="font-size:14px;font-weight:bold;"> Yang Menarik Di Myzuu
                    <p style="margin:0px;font-weight:400;font-size:12px;">Jangan Ngaku Pengguna Setia Kalau Belum Tau
                        Fitur Ini</p>
                </div>
                <div id="blog"></div>
            </section>
               `
    }

}