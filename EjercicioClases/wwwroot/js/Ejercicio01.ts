//let ElementoNombreCompleto = document.getElementById("NombreCompleto");
//let NombreCompleto = (<HTMLInputElement>ElementoNombreCompleto).value;
enum Estados { Delgado, Normal, Gordo, Obeso, Error }
class Usuario {
    private _NombreCompleto: string;
    public get NombreCompleto(): string {
        return this._NombreCompleto;
    }
    public set NombreCompleto(value: string) {
        if (value.length > 1)
            this._NombreCompleto = value;
        else
            this._NombreCompleto = "Nombre mal introducido";
    }
    private _NombreUsuario: string;
    public get NombreUsuario(): string {
        return this._NombreUsuario;
    }
    public set NombreUsuario(value: string) {
        if (value.length > 1)
            this._NombreUsuario = value;
        else
            this._NombreUsuario = "Nombre Usuario mal introducido";
    }
    private _Peso: number;
    public get Peso(): number {
        return this._Peso;
    }
    public set Peso(value: number) {
        if (value > 30 && value < 180)
            this._Peso = value;
        else
            this._Peso = 0;
    }
    private _Altura: number;
    public get Altura(): number {
        return this._Altura;
    }
    public set Altura(value: number) {

        if (value > 130 && value < 230)
            this._Altura = value;
        else
            this._Altura = 0;
    }
    public constructor(NombreCompleto: string, NombreUsuario: string, Peso: number, Altura: number) {
        this.NombreCompleto = NombreCompleto;
        this.NombreUsuario = NombreUsuario;
        this.Peso = Peso;
        this.Altura = Altura;
    }

    public dameIMC(): number {
        return this.Peso / Math.pow(this.Altura/100, 2);
    }

    public dameTratamiento(): Estados {
        let imc = this.dameIMC();
        if (imc == 0) return Estados.Error;
        if (imc <= 18.5) return Estados.Delgado;
        if (imc <= 24.9) return Estados.Normal;
        if (imc <= 29.9) return Estados.Gordo;
        if (imc >= 30) return Estados.Obeso;
    }

    public dameImagen(): string {
        switch (this.dameTratamiento()) {
            case Estados.Error: return "img/error.png";
            case Estados.Delgado: return "img/delgado.png";
            case Estados.Normal: return "img/normal.png";
            case Estados.Gordo: return "img/gordo.png";
            case Estados.Obeso: return "img/obeso.png";
        }
    }
}

let boton = document.getElementById("boton").addEventListener("click", Comprueba);



function Comprueba() {
    let NombreCompleto = (<HTMLInputElement>document.getElementById("NombreCompleto")).value;
    let NombreUsuario = (<HTMLInputElement>document.getElementById("NombreUsuario")).value;
    let Peso = Number((<HTMLInputElement>document.getElementById("Peso")).value);
    let Altura = Number((<HTMLInputElement>document.getElementById("Altura")).value);
    let Persona: Usuario = new Usuario(NombreCompleto, NombreUsuario, Peso, Altura);
    let IMC: number = Persona.dameIMC();
    (<HTMLInputElement>document.getElementById("imc")).value = IMC.toString();
    let rutaImagen = Persona.dameImagen();
    (<HTMLImageElement>document.getElementById("imagen")).src = rutaImagen;
}
