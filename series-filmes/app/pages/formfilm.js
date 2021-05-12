export const FormFilmComponent = {
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
                        <input type="text" readonly v-model="filme.id"  placeholder="ID" class="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-green-100 focus:bg-green-100 focus:ring-0">
                    </div>
                    
                    <div>
                        <input type="text" v-model="filme.nome"  placeholder="Nome" class="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-green-100 focus:bg-green-100 focus:ring-0">
                    </div>

                    <div>
                        <input type="text" v-model="filme.genero"  placeholder="Gênero" class="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-green-100 focus:bg-green-100 focus:ring-0">
                    </div>                    
        
                    <div class="mt-7">
                        <button class="bg-green-500 w-full py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105" v-on:click="comunicaApi(methods)">
                            Confirmar
                        </button>
                    </div>
                    
                    <div class="mt-7">
                    <router-link :to="{name: 'Filme'}">
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
            filme: {
                id: '',
                nome: '',
                genero: ''
            }
        }
    },
    created: function () {
        if (this.$route.name == 'VisualFilme') {
            this.tituloPagina = 'Visualizar um Filme';
            this.getFilme(this.$route.params.id)
        } else if (this.$route.name == 'EditarFilme') {
            this.tituloPagina = 'Editar um Filme'
            this.getFilme(this.$route.params.id)
        } else if (this.$route.name == 'ExcluirFilme') {
            this.tituloPagina = 'Excluir um Filme'
            this.getFilme(this.$route.params.id)
            this.deletePublished(this.$route.params.id)
        } else if (this.$route.name = 'NovoFilm') {
            this.tituloPagina = 'Criar um Registro'
            this.createPublication
        }
    },
    methods: {
        getFilme(id) {
            fetch(`http://localhost:8080/filme/${id}`)
                .then(response => response.json().then((data) => {
                    this.filme.id = data.id
                    this.filme.nome = data.nome
                    this.filme.genero = data.genero
                }))
        },
        createPublication() {
            fetch(`http://127.0.0.1:8080/filme/`, {
                method: 'POST',
                body: JSON.stringify(this.filme),
                mode: "cors",
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*"
                },
            })
                .then(response => response.json().then((data) => {
                    this.filme.id = data.id
                    this.filme.nome = data.nome
                    this.filme.genero = data.genero
                    this.$router.push('/filme')
                }))
        },
        updatePublished() {
            fetch(`http://127.0.0.1:8080/filme`, {
                method: 'PUT',
                body: JSON.stringify(this.filme),
                mode: "cors",
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*"
                },
            })
                .then(response => response.json().then((data) => {
                    this.filme.id = data.id
                    this.filme.nome = data.nome
                    this.filme.genero = data.genero
                    this.$router.push('/filme')
                }))
        },
        deletePublished(id) {
            fetch(`http://127.0.0.1:8080/filme/${id}`, {
                method: 'DELETE',
                body: JSON.stringify(this.filme),
                mode: "cors",
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*"
                },
            })
                .then((response) => {
                    if (response.status == 200) {
                        this.$router.push('/filme')
                    }
                })
        },
        cancelar() {
            this.$router.push('/');
        },
        comunicaApi(methods) {
            if (this.$route.name == 'EditarFilme') {
                this.updatePublished()
            } else if (this.$route.name == 'ExcluirFilme') {
                this.deletePublished()
            } else if (this.$route.name = 'NovoFilm') {
                this.createPublication()
            } else if (this.$route.name == 'VisualFilme') {
                this.$router.push('/filme')
            }
        }
    }
}