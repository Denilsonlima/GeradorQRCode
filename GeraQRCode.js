    function geraQRCode() {
      let txt_url = document.getElementById("txt_url").value;
      if (txt_url) {
        let qrcodeContainer = document.getElementById("qrcode");
        qrcodeContainer.innerHTML = "";
        new QRCode(qrcodeContainer, txt_url);
        /*With some styles*/
        document.getElementById("qrcode-container").style.display = "block";
    /*Alerta caso não seja passado valor no campo url do formulário*/
      } else {
        alert("Por favor informe a URL que deseja gerar o QRCode");
      }
    }