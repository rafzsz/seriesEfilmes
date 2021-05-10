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
                        <button class="bg-green-500 w-full py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                            Confirmar
                        </button>
                    </div>
                    
                    <div class="mt-7">
                    <router-link :to="{name: 'Filme'}">
                        <button class="bg-blue-500 w-full py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                            Voltar
                        </button>
                    </route-link>
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
        } else if (this.$route.name == 'EditarFilme') {
            this.tituloPagina = 'Editar um Filme'
        } else if (this.$route.name == 'ExcluirFilme') {
            this.tituloPagina = 'Excluir um Filme'
        }
    },
    methods: {
        getFilme(id) {
            FilmeDataService.get(id)
                .then(response => {
                    this.currentFilme = response.data;
                    console.log(response.data);
                })
                .catch(e => {
                    console.log(e);
                });
        },
        updatePublished(status) {
            var data = {
                id: this.currentFilme.id,
                title: this.currentFilme.title,
                description: this.currentFilme.description,
                published: status
            };

            FilmeDataService.update(this.currentFilme.id, data)
                .then(response => {
                    this.currentFilme.published = status;
                    console.log(response.data);
                })
                .catch(e => {
                    console.log(e);
                });
        },
        cancelar() {
            this.$router.push('/');
        }
    }
}