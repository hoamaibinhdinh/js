document.getElementById("enc_button").onclick = function() {
        var text = document.getElementById("new_note").value;
        var password = document.getElementById("pw").value;
        var encrypted = CryptoJS.AES.encrypt(text, password);
        encrypted = encrypted.toString();
        document.getElementById("encrypted").innerHTML = encrypted;
        document.getElementById("encrypted-code").innerHTML = '<div id="decrypt-box"> <div class="decrypt-form" id="decryption" data-href="' + encrypted + '"><div class="decrypt-instructions"> <div class="decrypt-title"> Nội dung đã khóa!</div> </div> <form action="#" id="decrypt-form" method="post"> <input autofocus="" id="decrypt-password" name="password" placeholder="Password" type="Nhập password" /> <input class="decrypt-button" type="submit" value="Mở khóa" /> </form><div id="decrypt-alert"></div> </div> </div>';
    }
    document.getElementById("dec_button").onclick = function() {
        try {
            var enctext = document.getElementById("enc-text").value;
            var decpw = document.getElementById("decpw").value;
            var decrypted = CryptoJS.AES.decrypt(enctext, decpw);
            decrypted = decrypted.toString(CryptoJS.enc.Utf8);
            if (decrypted === "") {
                document.getElementById("decrypted").innerHTML = "Incorrect Password"
            } else {
                document.getElementById("decrypted").innerHTML = decrypted;
            }
        } catch (e) {
            document.getElementById("decrypted").innerHTML = "Incorrect Password"
        }
    }