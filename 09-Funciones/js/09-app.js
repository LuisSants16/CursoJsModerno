
const reproductor  = {
    reproducir: function(id){
        console.log(`Reproduciendo canción con el id ${id}`);
    },
    pausar: function(){
        console.log("Pausando...");
    },
    borrar: function(id){
        console.log(`Borrando canción... ${id}`);
    },
    crearPlaylist: function(nombre){
        console.log(`Creando la playlist de ${nombre}`);
    },
    reproducirPlaylist: function(nombre){
        console.log(`Reproduciendo la playlist ${nombre}`);
    }
}

reproductor.reproducir(2002);
reproductor.reproducir(3003);
reproductor.pausar();
reproductor.borrar(2002)
reproductor.crearPlaylist("Pop 2026"),
reproductor.crearPlaylist("Hindi-POP 2025");
reproductor.reproducirPlaylist("Pop 2026");