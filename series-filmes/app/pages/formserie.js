export const FormSerieComponent = {
    template: `<div class="font-sans">
    <div class="bg-gradient-to-r from-black via-red-500 to-black relative min-h-screen flex flex-col sm:justify-center items-center bg-gray-100 ">
        <div class="relative sm:max-w-sm w-full">
            <div class="card bg-black shadow-lg  w-full h-full rounded-3xl absolute  transform -rotate-6"></div>
            <div class="card bg-red-400 shadow-lg  w-full h-full rounded-3xl absolute  transform rotate-6"></div>
            <div class="relative w-full rounded-3xl  px-6 py-4 bg-gray-100 shadow-md">
                <label for="" class="block text-sm text-gray-700 text-center font-semibold">
                    <h1>{{tituloPagina}}</h1>
                </label>
                <div class="mt-10">
                                  
                    <!-- campos -->
                    <div>
                        <input type="text" readonly v-model="serie.id"  placeholder="ID" class="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-green-100 focus:bg-green-100 focus:ring-0">
                    </div>
                    
                    <div>
                        <input type="text" v-model="serie.nome"  placeholder="Nome" class="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-green-100 focus:bg-green-100 focus:ring-0">
                    </div>

                    <div>
                        <input type="text" v-model="serie.temporada"  placeholder="Temporada" class="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-green-100 focus:bg-green-100 focus:ring-0">
                    </div>

                    <div>
                        <input type="text" v-model="serie.episodio"  placeholder="Episodio" class="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-green-100 focus:bg-green-100 focus:ring-0">
                    </div>

                    <div>
                        <input type="text" v-model="serie.genero"  placeholder="Gênero" class="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-green-100 focus:bg-green-100 focus:ring-0">
                    </div>                    
        
                    <div class="mt-7">
                        <button class="bg-green-500 w-full py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105" v-on:click="comunicaApi(methods)">
                            Confirmar
                        </button>
                    </div>

                    <div class="mt-7">
                    <router-link :to="{name: 'Serie'}">
                        <button class="bg-blue-500 w-full py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                            Voltar
                        </button>
                    </router-link>
                    </div>

                    <div class="mt-7">
                        <button @click="cancelar" class="bg-red-500 w-full py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                            Home
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>`,
    data() {
        return {
            tituloPagina: '',
            tituloAcao: '',
            serie: {
                id: '',
                nome: '',
                temporada: '',
                episodio: '',
                genero: ''
            }
        }
    },
    created: function () {
        if (this.$route.name == 'VisualSerie') {
            this.tituloPagina = 'Visualizar uma série';
            this.getSerie(this.$route.params.id)
        } else if (this.$route.name == 'EditarSerie') {
            this.tituloPagina = 'Editar uma série'
            this.getSerie(this.$route.params.id)
        } else if (this.$route.name == 'ExcluirSerie') {
            this.tituloPagina = 'Excluir uma série'
            alert("Item removido!")
            this.deletePublished(this.$route.params.id)
        } else if (this.$route.name == 'NovaSerie') {
            this.tituloPagina = 'Criar um Registro'
            this.createPublication
        }
    },
    methods: {
        getSerie(id) {
            fetch(`http://localhost:8080/serie/${id}`)
                .then(response => response.json().then((data) => {
                    this.serie.id = data.id
                    this.serie.nome = data.nome
                    this.serie.temporada = data.temporada
                    this.serie.episodio = data.episodio
                    this.serie.genero = data.genero
                }))
        },
        createPublication() {
            fetch(`http://127.0.0.1:8080/serie/`, {
                method: 'POST',
                body: JSON.stringify(this.serie),
                mode: "cors",
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*"
                },
            })
                .then(response => response.json().then((data) => {
                    this.serie.id = data.id
                    this.serie.nome = data.nome
                    this.serie.temporada = data.temporada
                    this.serie.episodio = data.episodio
                    this.serie.genero = data.genero
                    this.$router.push('/serie')
                }))
        },
        updatePublished() {
            fetch(`http://127.0.0.1:8080/serie`, {
                method: 'PUT',
                body: JSON.stringify(this.serie),
                mode: "cors",
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*"
                },
            })
                .then(response => response.json().then((data) => {
                    this.serie.id = data.id
                    this.serie.nome = data.nome
                    this.serie.temporada = data.temporada
                    this.serie.episodio = data.episodio
                    this.serie.genero = data.genero
                    this.$router.push('/serie')
                }))
        },
        deletePublished(id) {
            fetch(`http://127.0.0.1:8080/serie/${id}`, {
                method: 'DELETE',
                body: JSON.stringify(this.serie),
                mode: "cors",
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*"
                },
            })
                .then((response) => {
                    if (response.status == 200) {
                        this.$router.push('/serie')
                    }
                })
        },
        cancelar() {
            this.$router.push('/');
        },
        comunicaApi(methods) {
            if (this.$route.name == 'EditarSerie') {
                this.updatePublished()
            } else if (this.$route.name == 'ExcluirSerie') {
                this.deletePublished()
            } else if (this.$route.name == 'NovaSerie') {
                this.createPublication()
            } else if (this.$route.name == 'VisualSerie') {
                this.$router.push('/filme')
            }
        }
    }
}