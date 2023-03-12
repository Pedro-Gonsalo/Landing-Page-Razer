let img_p1 = document.getElementById("img_p1");
let img_p2 = document.getElementById("img_p2");
let img_p3 = document.getElementById("img_p3");
let img_p4 = document.getElementById("img_p4");
let img_fundo = document.querySelector(".produtos");
let imagens = [img_p1.src, img_p2.src,
			   img_p3.src, img_p4.src];
let num = 0;

function TrocarImagem(src, id) {
    img_p1.style.border = "1px solid #999999";
    img_p2.style.border = "1px solid #999999";
    img_p3.style.border = "1px solid #999999";
    img_p4.style.border = "1px solid #999999";

    document.querySelector("#" + id).style.border = "1px solid #09EB00";
    img_fundo.src = src;
}

function anterior() {
    num--;
    if (num < 0) {
        num = imagens.length - 1;
    }
    img_fundo.src = imagens[num]
}

function posterior() {
    num++;
    if (num >= imagens.length) {
        num = 0;
    }
    img_fundo.src = imagens[num];
}