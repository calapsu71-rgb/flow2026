import { saludar, despedir, estadoSistema } from "../src/app.js"

function ejecutarPruebas() {
    let pasadas = 0;
    let fallidas = 0;

    const r1 = saludar("Vitonco")
    if (r1.includes("Vitonco")) {
        console.log("Test 1 Pasado: función saludar en Vitonco es correcta")
        pasadas++;
    } else {
        console.log("Test 1 fallido: ", r1);
        fallidas++;
    }

    const actualEstado = estadoSistema();
    if (actualEstado.estado === "activo") {
        console.log("Test 2 Pasado: estadoSistema() funciona en Vitonco");
        pasadas++;
    } else {
        console.log("Test 2 fallido: ", estado, "en Vitonco");
        fallidas++;
    }
    console.log ("\nResultados: " + pasadas + " pasadas, ", + fallidas + "fallidas");
    if(fallidas>0) process.exit(1);
}
ejecutarPruebas();