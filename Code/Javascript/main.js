"use strict";

const totPages = 5;
const htmldir = "Code/HTML/";
var volume = 7;
var frm;
(function(){
    window.addEventListener("load", main);

}());



function main(){
    var startPage = 1;
    showPage(startPage);
    
    window.addEventListener("message", messageHandler);
    frm = document.getElementsByTagName("iframe")[0];
    frm.addEventListener("load", iframeHandler);
}


function showPage(pageNum){

    var frm = document.getElementsByTagName("iframe")[0];
    if (pageNum == 1){
        frm.src = htmldir+"main menu.html"

    }

    if (pageNum == 2){
        
        frm.src = htmldir+"jogo.html"

    }
    if(pageNum == 3){
        frm.src = htmldir+"opcoes.html"

    }
    if (pageNum == 4){
        frm.src = htmldir+"ajuda.html"
    }
    if(pageNum == 5){
        frm.src = htmldir+"creditos.html"
    }


}

function messageHandler(ev){
   
    
    if(ev.data == "voltar"){
        showPage(1);

    }
    if(ev.data== "jogar"){
        showPage(2);
        
    }

    if(ev.data == "opcoes"){
        showPage(3);
    }
    if(ev.data == "ajuda"){
        showPage(4);
    }
    if(ev.data == "creditos"){
        showPage(5);
    }
    if(ev.data>=0 && ev.data<15){
        
        showPage(1);
        volume = ev.data;

    }
    if(ev.data>15){
        console.log(ev.data);
        volume = ev.data - 20;


    }
}

function iframeHandler(ev){

    var frm = ev.target;
    
    frm.contentWindow.postMessage(volume, "*");

}


