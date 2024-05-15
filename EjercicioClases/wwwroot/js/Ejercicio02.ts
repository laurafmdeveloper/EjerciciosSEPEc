abstract class Figura {
    public abstract dameSuperficie(): number;
    public abstract damePerimetro(): number;
}

class Cuadrado extends Figura {
    public dameSuperficie(): number {
        return this.lado * this.lado;
    }
    public damePerimetro(): number {
        return this.lado * 4;
    }
    private readonly lado: number;
    public constructor(lado: number) {
        super();
        this.lado = lado;
    }
}

class Circulo extends Figura {
    public dameSuperficie(): number {
        return Math.PI * Math.pow(this.radio, 2);
    }
    public damePerimetro(): number {
        return 2 * Math.PI * this.radio;
    }
    private readonly radio: number;
    public constructor(radio: number) {
        super();
        this.radio = radio;
    }
}
let botonCalcula = document.getElementById("botonCalcula").addEventListener("click", CalculaLaFigura);

function CalculaLaFigura() {
    let FiguraACrear: Figura;
    let valor = Number((<HTMLInputElement>document.getElementById("valorEntrada")).value);
    let elementoSeleccionado = (<HTMLSelectElement>document.getElementById("tiposFigura")).value;
    switch (elementoSeleccionado) {
        case "Cuadrado": FiguraACrear = new Cuadrado(valor);
        default: FiguraACrear = new Circulo(valor);
    }
    document.write(`El area es: ${FiguraACrear.dameSuperficie()} y el perimetro es ${FiguraACrear.damePerimetro()}`);
}


