//cargar pagina
window.onload= function(){
    new Vue({
        el:"#loader",
        data:{
            show:""
        }
    });
}

// abrir/cerrar menu
new Vue({
    el:"#menu",
    data:{
        iconoMenu:"icon fas fa-bars",
        desplegar:"cerrarMenu"
    },
    methods:{
        desplegarMenu: function(){
                if(this.iconoMenu=="icon fas fa-bars"){
                    this.iconoMenu="icon fas fa-times",
                    this.desplegar=""
                }else{
                    this.iconoMenu="icon fas fa-bars",
                    this.desplegar="cerrarMenu"
                }
        },
    }
});

//confirmar reserva
new Vue({
    el:"#reservar",
    data:{
        nombre:"",
        email:"",
        tel:"",
        personas:"",
        fecha:"",
        hora:"",
        confirmado:""
    },
    methods:{
        confirmarReserva: function(){
            this.confirmado="confirmado"
        },
        cerrarCuadro: function(){
            this.confirmado="",
            this.limpiarFormulario();
        },
        limpiarFormulario: function(){
            this.nombre="",
            this.email="",
            this.tel="",
            this.personas="",
            this.fecha="",
            this.hora=""
        }
    }
});

//confirmar suscripcion
new Vue({
    el:"#suscripcion",
    data:{
        confirmacion:"Suscribite a nuestro newsletter y recibí un descuento del 10% en tu primer pedido!",
        eMail:"",
        clase:""
    },
    methods:{
        confirmarSuscripcion: function(){
            this.confirmacion = "Gracias por suscribirte a nuestro newsletter!",
            this.clase="confirma",
            this.eMail=""
        }
    }
});
