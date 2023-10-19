//usando variaveis globais
const time_el = document.querySelector('.watch .time');
const start_btn = document.getElementById('start');
const stop_btn = document.getElementById('stop');
const reset_btn = document.getElementById('reset');

let seconds = 0;
let interval = null;

//Lista de Eventos
start_btn.addEventListener('click', start);
stop_btn.addEventListener('click', stop);
reset_btn.addEventListener('click', reset);

//Atualizar o cronometro
function timer () {
    seconds++;

    //formatar o tempo
    let hrs = Math.floor(seconds / 3600);
    let mins = Math.floor((seconds - (hrs * 3600)) / 60);
    let secs = seconds % 60;

    if (secs < 10) secs = '0' + secs;
    if (mins < 10) mins = '0' + mins;
    if (hrs < 10) hrs = '0' + hrs;
    
    time_el.innerText = `${hrs}:${mins}:${secs}`;
}
//função para inciar 
function start() {
    if (interval) {
        return
    }

    interval = setInterval(timer,1000);
}
//função para parar
function stop() {
    clearInterval(interval);
    interval = null
}
// função para resetar
function reset () {
    stop();
    seconds = 0;
    time_el.innerText = '00:00:00';
}

