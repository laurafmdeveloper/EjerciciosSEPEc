class ElementoBase {
}
class MX7899_ extends ElementoBase {
    dameBlindaje() {
        return 1.4;
    }
    damePotencia() {
        return 0;
    }
}
class VB98_ extends ElementoBase {
    dameBlindaje() {
        return 4.8;
    }
    damePotencia() {
        return 9.8;
    }
}
class TAXIN66_ extends ElementoBase {
    dameBlindaje() {
        return 0;
    }
    damePotencia() {
        return 0;
    }
}
let coleccionEjercito_ = new Set();
let botonAcumula_ = document.getElementById("botonAcumula").addEventListener("click", AcumulaUnidad);
function AcumulaUnidad() {
    let UnidadACrear_;
    let elementoSeleccionado = document.getElementById("tiposUnidad").value;
    switch (elementoSeleccionado) {
        case "MX7899":
            UnidadACrear_ = new MX7899_();
            break;
        case "VB98":
            UnidadACrear_ = new VB98_();
            break;
        case "TAXIN66":
            UnidadACrear_ = new TAXIN66_();
            break;
        default: alert("Algo ha pasado");
    }
    coleccionEjercito_.add(UnidadACrear_);
    let totalBlindaje_ = 0.0;
    let totalPotencia_ = 0.0;
    for (var item of coleccionEjercito_) {
        totalBlindaje_ += item.dameBlindaje();
        totalPotencia_ += item.damePotencia();
    }
    let cadena = `Total Unidades ${coleccionEjercito_.size} con una potencia de ${totalPotencia_} y un blindaje de: ${totalBlindaje_}`;
    document.getElementById("resumen").textContent = cadena;
}
//# sourceMappingURL=Ejercicio04.js.map