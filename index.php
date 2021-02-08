<!DOCTYPE html>
<html lang="tr
">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="style.css" />
    <script type="text/javascript" src="javascript.js"></script>
    <title>Login</title>
</head>

<body>
    <div id="bosluk">
        <div class="flas">Ege Erbilen</div>
    </div>
    <div id="login_alanı">
        <form action="uyegiris.php" method="POST" onsubmit="return giris_sayfasi_bos_gönderim_engelleme()" name="form_alani">
            <div id="giris_alani" onclick="giris_alanina_gec()">
                <div id="giris_yazi_alani">Giriş </div>
            </div>
            <div id="kaydol_alani" onclick="kayit_alanina_gec()">
                <div id="kaydol_yazi_alani">Kaydol </div>
            </div>

            <div id="animasyon_alani">
            </div>

            <div id="form_kaydol_bilgiler_alani">
                <div id="input_kullanici_alani">
                    <div class="input_bilgi_yeri">E posta adresi: </div>
                    <input type="text" id="giris_eposta" name="giris_eposta" class="input_yeri" placeholder="Kullanıcı adınızı giriniz">
                </div>
                <div id="input_kullanici_sifre_alani">
                    <div class="input_bilgi_yeri">Şifre: </div>
                    <input type="password" id="giris_sifre" name="giris_sifre" class="input_yeri" placeholder="Şifrenizi giriniz">
                </div>
            </div>
            <div id="giris_buton_alani">
                <button id="giris_butonu">
                    <p id="dn">Giriş</p>
                </button>
            </div>
            <div id="login_alt_alani">
                <label id="beni_hatirla_btn"><input type="checkbox">Beni hatırla</label>
                <a href="sifremi_unuttum.php" class="sifre_unuttum">Şifremi unuttum</a>
            </div>
        </form>

        <form action="uyeolsonuc.php" method="POST" onsubmit="return kayit_sayfasi_bos_gönderim_engelleme()" name="form_kayit">
            <div id="input_kaydol_kullanici_adi_alani" hidden>
                <div class="input_bilgi_yeri">Kullanıcı adı: </div>
                <input type="text" id="kullanici_adi" name="kullanici_adi" class="input_yeri" placeholder="Kullanıcı adınızı giriniz">
            </div>
            <div id="input_kaydol_kullanici_alani" hidden>
                <div class="input_bilgi_yeri">E posta adresi: </div>
                <input type="text" id="kaydol_eposta" name="kaydol_eposta" class="input_yeri" placeholder="e posta adresinizi giriniz">
            </div>
            <div id="input_kaydol_kullanici_yas_alani" hidden>
                <div class="input_bilgi_yeri">Yaş: </div>
                <input type="number" id="kullanici_adi" name="kullanici_yas" class="input_yeri" placeholder="Yaşınızı giriniz">
            </div>
            <div id="input_kaydol_kullanici_cinsiyet_alani" hidden>
                <div class="input_bilgi_yeri">Cinsiyet: </div>
                <select class="input_cinsiyet">
                    <option>Cinsiyet seniniz</option>
                    <option>Kadın</option>
                    <option>Erkek</option>
                </select>
            </div>
            <div id="input_kaydol_kullanici_sifre_alani" hidden>
                <div class="input_bilgi_yeri">Şifre: </div>
                <input type="password" id="kaydol_sifre" name="kaydol_sifre" class="input_yeri" placeholder="Şifrenizi giriniz">
            </div>
            <div id="input_kaydol_kullanici_sifre_tekrar_alani" hidden>
                <div class="input_bilgi_yeri">Şifre (Tekrar): </div>
                <input type="password" id="kaydol_sifre_tekrar" name="kaydol_sifre_tekrar" class="input_yeri" placeholder="Şifrenizi(Tekrar) giriniz">
            </div>
            <div id="kaydol_buton_alani" hidden>
                <button id="giris_butonu">
                    <p id="dn">Kaydol</p>
                </button>
            </div>
            <br><br><br>
        </form>
    </div>
</body>

</html>