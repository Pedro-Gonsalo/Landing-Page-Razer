let img_p1 = document.getElementById("img_p1");
let img_p2 = document.getElementById("img_p2");
let img_p3 = document.getElementById("img_p3");
let img_p4 = document.getElementById("img_p4");
let img_fundo = document.querySelector(".produtos");

function TrocarImagem(src, id) {
    img_p1.style.border = "1px solid #999999";
    img_p2.style.border = "1px solid #999999";
    img_p3.style.border = "1px solid #999999";
    img_p4.style.border = "1px solid #999999";

    document.querySelector("#" + id).style.border = "1px solid #09EB00";
    img_fundo.src = src;
}

function TrocarProduto(img) {

}