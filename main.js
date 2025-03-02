// linkagem da pagina
const link = "https://diekmann.github.io/wasm-fizzbuzz/doom/";
// criando o Iframe
const Iframe = document.createElement("iframe");
// definido o Iframe
Iframe.src = link;
Iframe.width = window.width;
Iframe.height = "400";
Iframe.allowFullscreen = true;
Iframe.style.overflow = false;
// substituindo o video pelo iframe
const Video = document.getElementById("shorts-container");
Video.replaceWith(Iframe);
// quando O script ja tiver substituido o video
const Doom = document.getElementById('screen');
Iframe.width = Doom.width;
Iframe.height = Doom.height;
Video.replaceWith(Doom);
