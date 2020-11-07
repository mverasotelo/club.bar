const cuenta = document.querySelector("#cuenta");
const elemSubtotal = document.querySelector("#subtotal");
const borrarTodo=document.querySelector("#borrarTodo");
const enviarPedido=document.querySelector("#enviarPedido");
const agrega = document.querySelectorAll(".agrega");
const whatsapp=enviarPedido.firstChild;
elemSubtotal.innerHTML="Subtotal: $0";
let lista=[];
let subtotal;
let mensaje="";

for(i=0;i<agrega.length;i++){
    agrega[i].addEventListener("submit", agregaProducto);
}

borrarTodo.addEventListener("click", borrarLista);

enviarPedido.addEventListener("click", enviaPedido);

function agregaProducto(event){
    event.preventDefault();
    let cantidad=event.target.querySelector(".cantidad").value;
    let precio=event.target.querySelector(".precio").innerHTML;
    subtotal=0;
    if(cantidad=>1&&cantidad<=10){
        let precioProducto=Number(precio.substr(1))*cantidad;
        lista.push(Number(precioProducto));
        for(let a=0;a<lista.length;a++){
             subtotal+=lista[a];
        }
        elemSubtotal.previousElementSibling.innerHTML=elemSubtotal.previousElementSibling.innerHTML+event.target.querySelector(".producto").innerHTML+" (x"+cantidad+") ---- $"+ precioProducto+"<br>";
    }
    elemSubtotal.innerHTML="<hr>TOTAL: $"+subtotal;
    event.target.querySelector(".cantidad").value="";
}

function borrarLista(){
    elemSubtotal.previousElementSibling.innerHTML="";
    elemSubtotal.innerHTML="TOTAL: $0";
    lista=[];
}

function enviaPedido(){
    if(lista.length!=0){
        let pedido=(elemSubtotal.previousElementSibling.innerHTML).replaceAll("<br>","%0A")+"*"+elemSubtotal.innerHTML.replace("<hr>","")+"*";
        whatsapp.href=whatsapp.href+pedido;
    }
}