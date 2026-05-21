const producto = {
  nombre: "Monitor 20 Pulgadas",
  precio: 300,
  disponible: true,
  mostrarInfo: function () {
    console.log(
      `El producto: ${this.nombre} tiene un precio de ${this.precio}`,
    );
  },
};

//producto.mostrarInfo();

const producto2 = {
  nombre: "Tablet",
  precio: 3000,
  disponible: true,
  mostrarInfo: function () {
    console.log(
      `El producto: ${this.nombre} tiene un precio de ${this.precio}`,
    );
  },
};

//producto2.mostrarInfo();

// Ejercicio 1: El Televisor Inteligente (Lectura de datos)
const televisor = {
  marca: "Samsung",
  pulgadas: 55,
  encendido: false,
  encender: function () {
    console.log(
      `El televisor ${this.marca} de ${this.pulgadas}" se ha encendido`,
    );
  },
};

televisor.encender();

// Ejercicio 2: La Cafetera Wi-Fi (Mutación interna)
const cafetera = {
  tipoCafe: "Espress",
  agua: 100,
  prepararCafe: function () {
    this.agua -= 20;
    console.log(
      `Preparando un ${this.tipoCafe}. Nivel de agua restante: ${this.agua}%`,
    );
  },
};

cafetera.prepararCafe();
cafetera.prepararCafe();

// Ejercicio 3: La Cámara de Seguridad (Condicionales dentro de métodos)
const camara = {
  ubicacion: "Patio Principal",
  grabando: false,
  alternarGrabacion: function () {
    this.grabando = !this.grabando;
    console.log(
      `La camara del ${this.ubicacion} está: ${this.grabando ? "Grabando" : "en espera"}`,
    );
  },
};

camara.alternarGrabacion();

//Ejercicio 4: El Termostato (Control matemático)

    const termostato = {
        temperatura : 22,
        modo : "automatico",
        subirTemperatura:function(){
            this.temperatura++;
            console.log(`La temperatura ha subido a ${this.temperatura}°c. modo: ${this.modo}`);
        }
    }

    termostato.subirTemperatura();

//Ejercicio 5: El Altavoz Inteligente (Método con parámetros)

const altavoz = {
    volumen : 5,
    cancionActual : "Silencio",
    reproducir:function(nuevaCacion){
        this.cancionActual = nuevaCacion;
        console.log(`Reproduciendo ahora : ${this.cancionActual} a volumen ${this.volumen}`)
    }
}
altavoz.reproducir("imagination");
altavoz.reproducir("dos palgas");

// Ejercicio 6: La Cerradura Biométrica (Consumo de energía)

const cerradura = {
    puertaAbierta : false,
    bateria : 100,
    desbloquear:function(){
        this.puertaAbierta = true;
        this.bateria -= 5;
        console.log(`Puerta desbloqueada. Batería restante de la cerradura: ${this.bateria}%.`)
    }
}

cerradura.desbloquear();
cerradura.desbloquear();

// Ejercicio 7: El Sistema de Riego Automático (Toma de decisiones)

const riego = {
    estaLloviendo : false,
    litrosAgua : 50,
    evaluarClima:function(){
        if(this.estaLloviendo){
            console.log("Se detectó lluvia. Sistema de riego en pausa")
        } else{
            this.litrosAgua -= 10;
            console.log(`Regando el césped. Agua restante: ${this.litrosAgua}`);
        }
    }
}

riego.evaluarClima();
riego.evaluarClima();




/*

// Ejercicio: Interrupt de luz

const luz = {
  encendida: false,
  interrupto: function () {
    this.encendida = !this.encendida;
    console.log(this.encendida ? "Luz encendida" : "Luz apagada");
  },
};

luz.interrupto();

// 🧪 Ejercicio: Sistema de Usuario (Estado + Contador)
const usuario = {
  nombre: "Luis",
  logueado: false,
  intentos: 0,
  login: function () {
    this.logueado = !this.logueado;
    this.intentos++;
    console.log(
      `Usuario ${this.nombre} ${this.logueado ? "Ha iniciado sesión" : "Ha cerrado sesión"}. ${this.intentos}`,
    );
  },
  resetearIntentos: function () {
    this.intentos = 0;
    console.log(`Intento reiniciado : ${this.intentos}`);
  },
};

usuario.login();
usuario.login();
usuario.resetearIntentos();
usuario.login();

// 🧪 Ejercicio: Sistema de Cuenta Inteligente

const cuenta = {
  titular: "Luis Santos",
  saldo: 1000,
  activa: true,
  intentosFallidos: 0,
  retirar: function (monto) {

    if (!this.activa) {
      console.log("Cuenta bloqueada");
      return;
    }

    if (this.saldo < monto) {
      this.intentosFallidos++;
      console.log("Fondos insuficiente");
      this.verificarSeguridad()
    } else {
      this.saldo -= monto;
      this.intentosFallidos = 0;
      console.log(`Retiro exitoso. Saldo ${this.saldo}`);
    }
  },
  depositar: function (monto) {
    this.saldo += monto;
    console.log(`Saldo Actual : ${this.saldo}`);
  },
  verificarSeguridad: function () {
    if (this.intentosFallidos >= 3) {
      this.activa = false;
      console.log("Cuenta bloqueada por seguridad");
    } else{
        console.log("Cuenta Activa")
    }
  },
  desbloquear:function(){
    this.activa = true;
    this.intentosFallidos = 0;
    console.log("Cuenta Desbloqueada");
  },
  estado: function () {
    console.log(`
            Titular: ${this.titular}
            Saldo : ${this.saldo}
            Estado : ${this.activa}
            intento fallidos : ${this.intentosFallidos}
            `);
  },
};
*/