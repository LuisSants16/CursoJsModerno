
const reproductor = {
    cancion: "",
    reproducir: id => console.log(`Reproduciendo canción con el id ${id}`),
    pausar: () => console.log("Pausando..."),
    borrar: id => console.log(`Borrando canción... ${id}`),
    crearPlaylist: nombre => console.log(`Creando la playlist de ${nombre}`),
    reproducirPlaylist: nombre => console.log(`Reproduciendo la playlist ${nombre}`),

    set nuevaCancion(cancion){
        this.cancion = cancion;
        console.log(`Añadiendo ${cancion}`);
    },
    get obtenerCancion(){
        console.log(`${this.cancion}`);
    }
}

reproductor.nuevaCancion = "Enter Sandman";
reproductor.obtenerCancion;

reproductor.reproducir(2002);
reproductor.reproducir(3003);
reproductor.pausar();
reproductor.borrar(2002)
reproductor.crearPlaylist("Pop 2026"),
reproductor.crearPlaylist("Hindi-POP 2025");
reproductor.reproducirPlaylist("Pop 2026");