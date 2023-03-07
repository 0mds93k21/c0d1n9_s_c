//---------- Pengaturan ----------//

    // LINK TOKO
    const urlToko = "https://avihzserver.bukaolshop.site"

    // AKTIVASI
    const aktivasi = "efc4a75b9df6341bcf57c4f998d87b3000bdff3e1ae2fde12de452ff50c1c5b6"


    // LINK Kategori
    const urlKategori = [
      {
        "nama": "Dana",
        "url": "",
        "cekID": "dana",
        "gambar": "https://i.ibb.co/DVWgYLq/dana1.png"
      },
      {
        "nama": "Gopay",
        "url": "",
        "cekID": "gopay",
        "gambar": "https://i.ibb.co/WVDSysH/gopay1.png"
      },
      {
        "nama": "OVO",
        "url": "",
        "cekID": "ovo",
        "gambar": "https://i.ibb.co/Ybz5Tkz/ovo1.png"
      },
      {
        "nama": "Shopee Pay",
        "url": "",
        "cekID": "shopeepay",
        "gambar": "https://i.ibb.co/f0kZN19/shope1.png"
      },
      {
        "nama": "I Saku",
        "url": "",
        "cekID": "isaku",
        "gambar": "https://i.ibb.co/BVWjpFG/isaku.png"
      },
      {
        "nama": "Grab",
        "url": "",
        "cekID": "grab",
        "gambar": "https://i.ibb.co/vDcKhW2/grab.png"
      },
      {
        "nama": "Link Aja",
        "url": "",
        "cekID": "linkaja",
        "gambar": "https://i.ibb.co/r7HKrJW/linkaja.png"
      },
    ]


    //---------- Jangan Dirubah ----------//

    // Kontak & Barcide
    function getContact() {
      window.location.href = urlToko + "/ambil_kontak"
    }

    // Loading
    var loadAwal = `<div id="loads" class="loading">
    <div class="loadingspinner">
    <div id="square1"></div>
    <div id="square2"></div>
    <div id="square3"></div>
    <div id="square4"></div>
    <div id="square5"></div>
    </div>
    <p id="text-load" class="fw-bold mt-2 text-center t-load">Masukan nomor yang valid terlebih dahulu...</p>
    </div>`

    var loads = `<div id="loads-2" class="loading">
    <div class="loadingspinner">
    <div id="square1"></div>
    <div id="square2"></div>
    <div id="square3"></div>
    <div id="square4"></div>
    <div id="square5"></div>
    </div>
    </div>`

    var noSalah = `<div id="no-salah" class="container text-center produk-none animate__animated animate__fadeIn">
    <img src="https://i.ibb.co/f8gVVGD/eror.jpg">
    <p class="fw-bold mt-3">Nomor yang dimasukan salah nih...</p>
    </div>`

    var produkNone = `<div id="produk-none" class="text-center container produk-none animate__animated animate__fadeIn">
    <img src="https://i.ibb.co/VwtjssF/digital-marketing.webp">
    <p class="fw-bold mt-3">Sepertinya produk ini belum tersedia...</p>
    </div>`

    var kategoriNone = `<div id="produk-none" class="text-center mt-3 container produk-none animate__animated animate__fadeIn">
    <img src="https://i.ibb.co/VwtjssF/digital-marketing.webp">
    <p class="fw-bold mt-3">Kategori belum tersedia...</p>
    </div>`

    //---------- Data API ----------//

    // LoopSubKat
    loopSubKat(urlKategori)
    function loopSubKat(data) {
      var url = urlKategori.url
      $("#katUtama").html("")
      if (url == "" || url == "#") {
        $("#katUtama").html(kategoriNone)
      } else
        if (url != "" || url != "#") {
          $.each(data, function (i, v) {
            $("#katUtama").append(`<div class="cardkat py-2 mb-2" onclick="getData('${v.url}', '${v.nama}', '${v.cekID}', '${v.gambar}')" data-bs-dismiss="offcanvas" aria-label="Close">
            <p>
            <img src="${v.gambar}" width="30" class="rounded-circle">
            <span class="ms-1">${v.nama}</span>
            </p>
            </div>`)
          })
        }
    }

    // Loop Produk
    function loopProduk(data, kode) {
      $("#dataProduk").html("")

      $.each(data, function (i, v) {
        var strHarga = v.harga.split("Rp")
        var strProd = strHarga[1]
        var hargaProd = `Rp ${strProd}`

        $('#dataProduk').append(`<div class="col-6" style="margin-bottom:20px" data-bs-toggle="offcanvas" data-bs-target="#Id3" aria-controls="Id3" onclick="showDetail('${v.nama}','${hargaProd}','${v.url}','${kode}')">
          <div class="cerd">
          <p class="nama-produk">${v.nama}</p>
          <p class="harga-produk">${hargaProd}</p>
          </div>
          </div>`)
      });
    }

    // CekID
    function cekNomorPel(kode) {
      var noPel = $("#nomoTel").val();
      var urlz = "https://nielz.my.id/validation/api/ewallet"
      var zenkey = "8272b58207a73d9"
      $.ajax({
        method: "GET",
        url: `${urlz}/${kode}/?hp=${noPel}&key=${zenkey}`,
        beforeSend: function () {
          $('#nama').html('Mengecek...')
          $("#btls").removeClass("d-flex")
          $("#btnMT").show()
          $("#btnBli").hide()
          $("#btnBtl").hide()
        },

        success: function (response) {
          console.log(response)
          if (response.hasOwnProperty('error_msg')) {
            $('#nama').html("Nomor Tidak Terdaftar");
            $("#btls").removeClass("d-flex")
            $("#btnBli").hide()
            $("#btnMT").hide()
            $("#btnBtl").show()
          } else if (response.name == "Invalid phoneNumber") {
            $('#nama').html("Nomor Tidak Terdaftar");
            $("#btls").removeClass("d-flex")
            $("#btnBli").hide()
            $("#btnMT").hide()
            $("#btnBtl").show()
          } else {
            $('#nama').html(response.name);
            $("#btls").addClass("d-flex")
            $("#btnBli").show()
            $("#btnBtl").show()
            $("#btnMT").hide()
          }
        }
      })
    }


    // Beli
    function tombolBeli(link, isiCat) {
      $("#btnBli").attr("href", link + "?catatan=" + isiCat)
    }

    // search
    $(document).ready(function () {
      $("#src").on("input", function () {
        var value = $(this).val().toLowerCase();
        $("section .cardkat").filter(function () {
          $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
      });
    })