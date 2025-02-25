function onDocumentReady(callback) {
    if (
        document.readyState === "complete" ||
        document.readyState === "interactive"
    ) {
        setTimeout(callback, 1000);
    } else {
        document.addEventListener("DOMContentLoaded", callback);
    }
}

onDocumentReady(function () {
    function Xu_ly_QR(Text, Result) {
        alert("Scanned QR Code: " + Text, Result);
    }

    let qrCodeScanner = new Html5QrcodeScanner(
        "my-qr-reader",
        { fps: 10, qrbox: 250 }
    );
    qrCodeScanner.render(Xu_ly_QR);
});
