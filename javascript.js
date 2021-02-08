 function kayit_alanina_gec() {
     document.getElementById("login_alanı").style.height = "790px";

     document.getElementById("kaydol_alani").style.animationName = "renk_degis";
     document.getElementById("giris_alani").style.animationName = "renk_degis_sifirla";
     document.getElementById("form_kaydol_bilgiler_alani").style.animationName = "animasyon_alani_degerleri";
     document.getElementById("animasyon_alani").style.animationName = "animasyon_alani_sifirla";

     document.getElementById("input_kaydol_kullanici_adi_alani").style.display = "block";
     document.getElementById("input_kaydol_kullanici_alani").style.display = "block";
     document.getElementById("input_kaydol_kullanici_yas_alani").style.display = "block";
     document.getElementById("input_kaydol_kullanici_cinsiyet_alani").style.display = "block";



     document.getElementById("input_kullanici_alani").style.display = "none";
     document.getElementById("input_kullanici_sifre_alani").style.display = "none";
     document.getElementById("input_kaydol_kullanici_alani").style.display = "block";
     document.getElementById("input_kaydol_kullanici_sifre_alani").style.display = "block";
     document.getElementById("input_kaydol_kullanici_sifre_tekrar_alani").style.display = "block";
     document.getElementById("login_alt_alani").style.display = "none";
     document.getElementById("giris_alani").style.backgroundColor = "rgb(26, 26, 26)";
     document.getElementById("kaydol_alani").style.backgroundColor = "white";

     document.getElementById("kaydol_buton_alani").style.display = "block";
     document.getElementById("giris_butonu").style.display = "none";
 }

 function giris_alanina_gec() {
     document.getElementById("login_alanı").style.height = "490px";


     document.getElementById("giris_alani").style.animationName = "renk_degis";
     document.getElementById("kaydol_alani").style.animationName = "renk_degis_sifirla";
     document.getElementById("animasyon_alani").style.animationName = "animasyon_alani_degerleri";
     document.getElementById("form_kaydol_bilgiler_alani").style.animationName = "animasyon_alani_sifirla";


     document.getElementById("input_kaydol_kullanici_adi_alani").style.display = "none";
     document.getElementById("input_kaydol_kullanici_alani").style.display = "none";
     document.getElementById("input_kaydol_kullanici_cinsiyet_alani").style.display = "none";
     document.getElementById("input_kaydol_kullanici_yas_alani").style.display = "none";


     document.getElementById("input_kullanici_alani").style.display = "block";
     document.getElementById("input_kullanici_sifre_alani").style.display = "block";
     document.getElementById("input_kaydol_kullanici_alani").style.display = "none";
     document.getElementById("input_kaydol_kullanici_sifre_alani").style.display = "none";
     document.getElementById("input_kaydol_kullanici_sifre_tekrar_alani").style.display = "none";
     document.getElementById("login_alt_alani").style.display = "block";
     document.getElementById("giris_alani").style.backgroundColor = "white";
     document.getElementById("kaydol_alani").style.backgroundColor = "rgb(26, 26, 26)";

     document.getElementById("giris_butonu").style.display = "block";
     document.getElementById("kaydol_buton_alani").style.display = "none";

 }

 function giris_sayfasi_bos_gönderim_engelleme() {
     var giris_eposta = document.forms["form_alani"]["giris_eposta"].value;
     var giris_sifre = document.forms["form_alani"]["giris_sifre"].value;
     if (giris_eposta == "" || giris_sifre == "") {
         alert("lütfen tüm alanlari doldurunuz")
         return false
     }

 }

 function kayit_sayfasi_bos_gönderim_engelleme() {
     var kaydol_eposta = document.forms["form_kayit"]["kaydol_eposta"].value;
     var kaydol_sifre = document.forms["form_kayit"]["kaydol_sifre"].value;
     var kaydol_sifre_tekrar = document.forms["form_kayit"]["kaydol_sifre_tekrar"].value;
     if (kaydol_eposta == "" || kaydol_sifre == "" || kaydol_sifre_tekrar == "") {
         alert("lütfen tüm alanlari doldurunuz");
         return false
     } else if (kaydol_sifre != kaydol_sifre_tekrar) {
         alert("şifreler eşleşmiyor");
         return false
     }
 }