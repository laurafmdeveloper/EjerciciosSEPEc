class Figura {
}
class Cuadrado extends Figura {
    dameSuperficie() {
        return this.lado * this.lado;
    }
    damePerimetro() {
        return this.lado * 4;
    }
    constructor(lado) {
        super();
        this.lado = lado;
    }
}
class Circulo extends Figura {
    dameSuperficie() {
        return Math.PI * Math.pow(this.radio, 2);
    }
    damePerimetro() {
        return 2 * Math.PI * this.radio;
    }
    constructor(radio) {
        super();
        this.radio = radio;
    }
}
let botonCalcula = document.getElementById("botonCalcula").addEventListener("click", CalculaLaFigura);
function CalculaLaFigura() {
    let FiguraACrear;
    let valor = Number(document.getElementById("valorEntrada").value);
    let elementoSeleccionado = document.getElementById("tiposFigura").value;
    switch (elementoSeleccionado) {
        case "Cuadrado": FiguraACrear = new Cuadrado(valor);
        default: FiguraACrear = new Circulo(valor);
    }
    document.write(`El area es: ${FiguraACrear.dameSuperficie()} y el perimetro es ${FiguraACrear.damePerimetro()}`);
}
//# sourceMappingURL=Ejercicio02.js.map