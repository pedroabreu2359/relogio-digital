const formatarHora = (num) => num < 10 ? '0' + num : num;

function exibirHora() {
    const agora = new Date();
    const horas = formatarHora(agora.getHours());
    const minutos = formatarHora(agora.getMinutes());
    const segundos = formatarHora(agora.getSeconds());

    document.getElementById('horas').innerHTML = horas;
    document.getElementById('minutos').innerHTML = minutos;
    document.getElementById('segundos').innerHTML = segundos;
}

setInterval(exibirHora, 1);