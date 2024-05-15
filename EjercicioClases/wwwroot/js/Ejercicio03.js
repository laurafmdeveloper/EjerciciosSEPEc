class MX7899 {
    constructor() {
        this.blindaje = 1.4;
        this.potencia = 0;
    }
}
class VB98 {
    constructor() {
        this.blindaje = 4.8;
        this.potencia = 9.8;
    }
}
class TAXIN66 {
    constructor() {
        this.blindaje = 0;
        this.potencia = 0;
    }
}
let coleccionEjercito = new Set();
let botonAcumula = document.getElementById("botonAcumula").addEventListener("click", AcumulaUnidad_);
function AcumulaUnidad_() {
    let UnidadACrear;
    let elementoSeleccionado = document.getElementById("tiposUnidad").value;
    switch (elementoSeleccionado) {
        case "MX7899":
            UnidadACrear = new MX7899();
            break;
        case "VB98":
            UnidadACrear = new VB98();
            break;
        case "TAXIN66":
            UnidadACrear = new TAXIN66();
            break;
        default: alert("Algo ha pasado");
    }
    coleccionEjercito.add(UnidadACrear);
    let totalBlindaje = 0.0;
    let totalPotencia = 0.0;
    coleccionEjercito.forEach(function (valor) {
        totalBlindaje += valor.blindaje;
        totalPotencia += valor.potencia;
    });
    let cadena = `Total Unidades ${coleccionEjercito.size} con una potencia de ${totalPotencia} y un blindaje de: ${totalBlindaje}`;
    document.getElementById("resumen").textContent = cadena;
}
//# sourceMappingURL=Ejercicio03.js.map