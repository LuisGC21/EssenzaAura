$(document).ready(function () {
    $(".info").hide();
	setTimeout(function () {
        $(".logo").show();
        $(".info").show();
		$("#ctn-preloader").addClass("loaded");
		if ($("#ctn-preloader").hasClass("loaded")) {
			// Es para que una vez que se haya ido el preloader se elimine toda la seccion preloader
			$("#preloader")
				.delay(1000)
				.queue(function () {
					$(this).remove();
				});
		}
        animacionLogo();
	}, 3000);
});

function animacionLogo(){
     // Detecta el ancho de la ventana del navegador
     const anchoVentana = window.innerWidth;

     if (anchoVentana >= 1024) {
        $("#idLogo").animate({
            marginTop: "-=120px"
        });
     } else if (anchoVentana >= 769) {
        $("#idLogo").animate({
            marginTop: "-=200px"
        });
     } else {
        $("#idLogo").animate({
            marginTop: "-=240px"
        });
     }
}