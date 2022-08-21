
let Ingresaunaopciondecompra = prompt (" Seleccione un producto \n[1]Zapato \n[2]Pantalon \n[3]Remera \n[4]Campera");
switch (Ingresaunaopciondecompra) {
    case "1":
        let precio = 25000 ;
        let descuento = 0.20 ;
        let iva = 1.21 ; 
        let totaldescuento = precio* descuento ;
        let subtotal =precio - totaldescuento ;
        let totaliva = subtotal - (subtotal / iva) ;
        let total = subtotal * iva ;
        alert("precio pantalo :" +precio+ "\n"+
        "descuento :" +totaldescuento+ "\n"+
        "monto iva :" +totaliva+ "\n"+
        "Total a paga :" +total ) ;
    break;
   
    case "2":
        let precio2 = 18000 ;
        let descuento2 = 0.20 ;
        let iva2 = 1.21 ; 
        let totaldescuento2 = precio2* descuento2 ;
        let subtotal2 =precio2 - totaldescuento2 ;
        let totaliva2 = subtotal2 - (subtotal2 / iva2) ;
        let total2 = subtotal2 * iva2 ;
        alert("precio pantalo :" +precio2+ "\n"+
        "descuento :" +totaldescuento2+ "\n"+
        "monto iva :" +totaliva2+ "\n"+
        "Total a paga :" +total2 ) ;
    break;

    case "3":
        let precio3 = 7500 ;
        let descuento3 = 0.20 ;
        let iva3 = 1.21 ; 
        let totaldescuento3 = precio3* descuento3 ;
        let subtotal3 =precio3 - totaldescuento3 ;
        let totaliva3 = subtotal3 - (subtotal3 / iva3) ;
        let total3 = subtotal3 * iva3 ;
        alert("precio pantalo :" +precio3+ "\n"+
        "descuento :" +totaldescuento3+ "\n"+
        "monto iva :" +totaliva3+ "\n"+
        "Total a paga :" +total3 ) ;
    break;

    case "4":
        let precio4 = 33000 ;
        let descuento4 = 0.20 ;
        let iva4 = 1.21 ; 
        let totaldescuento4 = precio4* descuento4 ;
        let subtotal4 =precio4 - totaldescuento4 ;
        let totaliva4 = subtotal4 - (subtotal4 / iva4) ;
        let total4 = subtotal4 * iva4 ;
        alert("precio pantalo :" +precio4+ "\n"+
        "descuento :" +totaldescuento4+ "\n"+
        "monto iva :" +totaliva4+ "\n"+
        "Total a paga :" +total4 ) ;
    break;

    default:
    alert ("Error Opcion Invalidad");
    break;
}
