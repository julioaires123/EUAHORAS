//horário de Washington////////////////////////////////////////////////////////////////////////////////////////
        setInterval(function relog() {
        let rel = document.getElementById('relogio01')
        let data = new Date();
        data.setSeconds(data.getSeconds() +30);
        data.setHours(data.getHours() +3);
        let h = data.getHours();
        let m = data.getMinutes();
        let s = data.getSeconds();
          if (h < 10) {// coloca um zero antes dos números abaixo de dez: ex: 1: 1: 1 depois ex 01:01:01////////////////////
           h = `0${h}`
        }
        if (m < 10) {
           m = `0${m}`
        }  
        if (s < 10) {
           s = `0${s}`
        }
        
        // Mostra a hora minutos e segundos na página /////////////////////////////////////////////////////
            rel.innerHTML = `${h}:${m}:${s}`
        })

        
    
//Dia mês e ano /////////////////////////////////////////////////////////////////////////////////////////////
let meses = new Array( "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");
let semanas = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
let data = new Date();
let diasem = data.getUTCDay();
let dia = data.getUTCDate();
let mes = data.getUTCMonth();
let ano = data.getUTCFullYear();
document.write(semanas[diasem] + ", " + dia + " " + meses[mes] + " " + ano);     
    
