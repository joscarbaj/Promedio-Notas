const boton = document.getElementById('calcular');

const popup = document.getElementById('popup');
const cerrarPopup = document.getElementById('cerrarPopup');

const promedioTexto = document.getElementById('promedioTexto');
const estadoTexto = document.getElementById('estadoTexto');

boton.addEventListener('click', () => {

    const nota1 = parseFloat(document.getElementById('nota1').value);
    const nota2 = parseFloat(document.getElementById('nota2').value);
    const nota3 = parseFloat(document.getElementById('nota3').value);

    // Validaciones
    if (
        isNaN(nota1) ||
        isNaN(nota2) ||
        isNaN(nota3)
    ) {
        alert('Debe ingresar las tres notas');
        return;
    }

    if (
        nota1 < 0 || nota1 > 100 ||
        nota2 < 0 || nota2 > 100 ||
        nota3 < 0 || nota3 > 100
    ) {
        alert('Las notas deben estar entre 0 y 100');
        return;
    }

    const promedio = (nota1 + nota2 + nota3) / 3;

    let estado = '';

    if (promedio >= 70) {
        estado = 'Aprobado';
    } else {
        estado = 'Reprobado';
    }

    promedioTexto.innerHTML = `Promedio Final: <strong>${promedio.toFixed(2)}</strong>`;
    estadoTexto.innerHTML = `Estado: <strong>${estado}</strong>`;

    popup.style.display = 'flex';
});

cerrarPopup.addEventListener('click', () => {
    popup.style.display = 'none';
});