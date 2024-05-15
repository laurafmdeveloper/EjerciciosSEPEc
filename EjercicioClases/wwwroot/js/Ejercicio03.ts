interface IGuerrero {
    blindaje: number;
    potencia: number;
}

class MX7899 implements IGuerrero {
    blindaje: number = 1.4;
    potencia: number = 0;
}

class VB98 implements IGuerrero {
    blindaje: number = 4.8;
    potencia: number = 9.8;
}

class TAXIN66 implements IGuerrero {
    blindaje: number = 0;
    potencia: number = 0;
}
let coleccionEjercito: Set<IGuerrero> = new Set<IGuerrero>();
let botonAcumula = document.getElementById("botonAcumula").addEventListener("click", AcumulaUnidad_);

function AcumulaUnidad_()
{
    let UnidadACrear: IGuerrero;
    let elementoSeleccionado = (<HTMLSelectElement>document.getElementById("tiposUnidad")).value;
    switch (elementoSeleccionado) {
        case "MX7899": UnidadACrear = new MX7899(); break;
        case "VB98": UnidadACrear = new VB98(); break;
        case "TAXIN66": UnidadACrear = new TAXIN66(); break;
        default: alert("Algo ha pasado");
    }
    
    coleccionEjercito.add(UnidadACrear);
    let totalBlindaje: number = 0.0;
    let totalPotencia: number = 0.0;
    coleccionEjercito.forEach(function (valor: IGuerrero) {
        totalBlindaje += valor.blindaje;
        totalPotencia += valor.potencia;
    }

    

    )
    let cadena: string = `Total Unidades ${coleccionEjercito.size} con una potencia de ${totalPotencia} y un blindaje de: ${totalBlindaje}`;
    (<HTMLLabelElement>document.getElementById("resumen")).textContent = cadena;
}