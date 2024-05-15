//let ElementoNombreCompleto = document.getElementById("NombreCompleto");
//let NombreCompleto = (<HTMLInputElement>ElementoNombreCompleto).value;
var Estados;
(function (Estados) {
    Estados[Estados["Delgado"] = 0] = "Delgado";
    Estados[Estados["Normal"] = 1] = "Normal";
    Estados[Estados["Gordo"] = 2] = "Gordo";
    Estados[Estados["Obeso"] = 3] = "Obeso";
    Estados[Estados["Error"] = 4] = "Error";
})(Estados || (Estados = {}));
class Usuario {
    get NombreCompleto() {
        return this._NombreCompleto;
    }
    set NombreCompleto(value) {
        if (value.length > 1)
            this._NombreCompleto = value;
        else
            this._NombreCompleto = "Nombre mal introducido";
    }
    get NombreUsuario() {
        return this._NombreUsuario;
    }
    set NombreUsuario(value) {
        if (value.length > 1)
            this._NombreUsuario = value;
        else
            this._NombreUsuario = "Nombre Usuario mal introducido";
    }
    get Peso() {
        return this._Peso;
    }
    set Peso(value) {
        if (value > 30 && value < 180)
            this._Peso = value;
        else
            this._Peso = 0;
    }
    get Altura() {
        return this._Altura;
    }
    set Altura(value) {
        if (value > 130 && value < 230)
            this._Altura = value;
        else
            this._Altura = 0;
    }
    constructor(NombreCompleto, NombreUsuario, Peso, Altura) {
        this.NombreCompleto = NombreCompleto;
        this.NombreUsuario = NombreUsuario;
        this.Peso = Peso;
        this.Altura = Altura;
    }
    dameIMC() {
        return this.Peso / Math.pow(this.Altura / 100, 2);
    }
    dameTratamiento() {
        let imc = this.dameIMC();
        if (imc == 0)
            return Estados.Error;
        if (imc <= 18.5)
            return Estados.Delgado;
        if (imc <= 24.9)
            return Estados.Normal;
        if (imc <= 29.9)
            return Estados.Gordo;
        if (imc >= 30)
            return Estados.Obeso;
    }
    dameImagen() {
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
    let NombreCompleto = document.getElementById("NombreCompleto").value;
    let NombreUsuario = document.getElementById("NombreUsuario").value;
    let Peso = Number(document.getElementById("Peso").value);
    let Altura = Number(document.getElementById("Altura").value);
    let Persona = new Usuario(NombreCompleto, NombreUsuario, Peso, Altura);
    let IMC = Persona.dameIMC();
    document.getElementById("imc").value = IMC.toString();
    let rutaImagen = Persona.dameImagen();
    document.getElementById("imagen").src = rutaImagen;
}
//# sourceMappingURL=Ejercicio01.js.map