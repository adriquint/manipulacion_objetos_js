function Pokemon(id, name) {
    this.id = id;
    this.name = name;
    const id_str = id.toString().padStart(3, "0");
    this.thumbnail = `https://raw.githubusercontent.com/InoveAlumnos/pokemon_assets_js/main/assets/${id_str}.png`;

    /*this.render = (clase) => {
        return  `<article pokemonId=${this.id} class="${clase}">
                    <img
                    src=${this.thumbnail}
                    class="icon-type"
                    alt="icon type"
                    />
                    <p>
                        ${this.name}
                    </p>
                </article>
                `
    };*/
}

/*function Persona2(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
  
    this.nombreCompleto = () => {
      console.log(`"this" dentro de la función flecha dentro del prototipo: ${this}`);
      return this.nombre + " " + this.apellido;
    }
  }

  function Pokemon(id, name, thumbnail) {
    this.id = id;
    this.name = name;
    this.thumbnail = thumbnail;

    this.render = () => {
        return  `<article pokemonId=${this.id}>
                    <img
                    src=${this.thumbnail}
                    class="icon-type"
                    alt="icon type"
                    />
                    <p>
                        ${this.name}
                    </p>
                </article>
                `
    };
}

function Post (titulo, avatar, texto) {
    this.titulo = titulo;
    this.avatar = avatar;
    this.texto = texto;
  }
  console.log(Post)

const posts = [];
console.log(posts)

for(const datos of data){
  const post = new Post (datos.titulo, datos.avatar, datos.texto)
  posts.push(post)
}*/