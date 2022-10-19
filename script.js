//horário de Washington////////////////////////////////////////////////////////////////////////////////////////
        setInterval(function relog() {
        let rel = document.getElementById('relogio01')
        let data = new Date();
        data.setSeconds(data.getSeconds() +30);
        data.setHours(data.getHours() -1);
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

        
    //horário de Los Angeles////////////////////////////////////////////////////////////////////////  
    setInterval(function relog2() {
        let rel = document.getElementById('relogio2')
        let data = new Date();
        data.setSeconds(data.getSeconds() +30);
        data.setHours(data.getHours() -4);
        let h = data.getHours() ; 
        let m = data.getMinutes();
        let s = data.getSeconds() 
           if (h < 10) {  // coloca um zero antes dos números abaixo de dez: ex: 1: 1: 1 depois ex 01:01:01////////////////////
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
    //horário de Anchorage///////////////////////////////////////////////////////////////////////////////////   
    setInterval(function relog3() {
        let rel = document.getElementById('relogio3');
        let data = new Date();
        data.setSeconds(data.getSeconds() +30);
        data.setHours(data.getHours() -5);
        let h = data.getHours() ;
        let m = data.getMinutes();
        let s = data.getSeconds(); 
          if (h < 10) {  // coloca um zero antes dos números abaixo de dez: ex: 1: 1: 1 depois ex 01:01:01////////////////////
           h = `0${h}`
        }
        if (m < 10) {
           m = `0${m}`
        }
        if (s < 10) {
           s = `0${s}`
        }
            rel.innerHTML = `${h}:${m}:${s}`   // Mostra a hora minutos e segundos na página /////////////////////////////////////////////////////
           })
    //horário de Honolulu////////////////////////////////////////////////////////////////////////////////////
    setInterval(function relog4() {
        let rel = document.getElementById('relogio4')
        let data = new Date();
        data.setSeconds(data.getSeconds() +30);
        data.setHours(data.getHours() -7);
        let h = data.getHours();
        let m = data.getMinutes();
        let s = data.getSeconds() ;  
          if (h < 10) { // coloca um zero antes dos números abaixo de dez: ex: 1: 1: 1 depois ex 01:01:01////////////////////
           h = `0${h}`
        }
        if (m < 10) {
           m = `0${m}`
        } 
        if (s < 10) {
           s = `0${s}`
        }
            rel.innerHTML = `${h}:${m}:${s}`  // Mostra a hora minutos e segundos na página /////////////////////////////////////////////////////       
           })   
               //horário de Chicago ////////////////////////////////////////////////////////////////////////////////////
    setInterval(function relog5() {
      let rel = document.getElementById('relogio5')
      let data = new Date();
      data.setSeconds(data.getSeconds() +30);
      data.setHours(data.getHours() -2);
      let h = data.getHours();
      let m = data.getMinutes();
      let s = data.getSeconds() ;  
        if (h < 10) { // coloca um zero antes dos números abaixo de dez: ex: 1: 1: 1 depois ex 01:01:01////////////////////
         h = `0${h}`
      }
      if (m < 10) {
         m = `0${m}`
      } 
      if (s < 10) {
         s = `0${s}`
      }
          rel.innerHTML = `${h}:${m}:${s}`  // Mostra a hora minutos e segundos na página /////////////////////////////////////////////////////       
         })   
             //horário de Denver ////////////////////////////////////////////////////////////////////////////////////
    setInterval(function relog6() {
      let rel = document.getElementById('relogio6')
      let data = new Date();
      data.setSeconds(data.getSeconds() +30);
      data.setHours(data.getHours() -3);
      let h = data.getHours();
      let m = data.getMinutes();
      let s = data.getSeconds() ;  
        if (h < 10) { // coloca um zero antes dos números abaixo de dez: ex: 1: 1: 1 depois ex 01:01:01////////////////////
         h = `0${h}`
      }
      if (m < 10) {
         m = `0${m}`
      } 
      if (s < 10) {
         s = `0${s}`
      }
          rel.innerHTML = `${h}:${m}:${s}`  // Mostra a hora minutos e segundos na página /////////////////////////////////////////////////////       
         })   
             //horário de Phoenix////////////////////////////////////////////////////////////////////////////////////
    setInterval(function relog7() {
      let rel = document.getElementById('relogio7')
      let data = new Date();
      data.setSeconds(data.getSeconds() +30);
      data.setHours(data.getHours() -4);
      let h = data.getHours();
      let m = data.getMinutes();
      let s = data.getSeconds() ;  
        if (h < 10) { // coloca um zero antes dos números abaixo de dez: ex: 1: 1: 1 depois ex 01:01:01////////////////////
         h = `0${h}`
      }
      if (m < 10) {
         m = `0${m}`
      } 
      if (s < 10) {
         s = `0${s}`
      }
          rel.innerHTML = `${h}:${m}:${s}`  // Mostra a hora minutos e segundos na página /////////////////////////////////////////////////////       
         })   



    