const { version } = require("react");

const VERSION = '1.2.0';

function saludar(nombre) {
    return `Hola, ${nombre}! Bienvenido a FlowCamilo versión ${VERSION}.`;
}

function healthCheck() {
    return {
        status: 'ok',
        version: VERSION,
        timestamp: new Date().toISOString(),
        message: 'El sistema está funcionando correctamente.'
    };
}

function verificarSistema() {
    const resultado = healthCheck();
    const statusDiv = document.getElementById('status');
    statusDiv.textContent = `Estado: ${resultado.status}, Versión: ${resultado.version}, Hora: ${resultado.timestamp}`;
    statusDiv.style.color = '#009B4C';
}

document.addEventListener(`DOMContentLoaded`, () => {
    document.getElementById(`version`).textContent = `Versión: ${VERSION}`;
    verificarSistema();
});