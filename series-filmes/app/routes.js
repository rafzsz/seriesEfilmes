import { WelcomeComponent } from "./pages/welcome.js"
import { SerieComponent } from "./pages/serie.js"
import { FilmeComponent } from "./pages/filme.js"
import { FormFilmComponent } from "./pages/formfilm.js"
import { FormSerieComponent } from "./pages/formserie.js"


export const routes = [
    {
        path: '/',
        component: WelcomeComponent,
        name: 'Home'
    },
    {
        path: '/serie',
        component: SerieComponent,
        name: 'Serie'
    },
    {
        path: '/filme',
        component: FilmeComponent,
        name: 'Filme'
    },
    {
        path: '/create',
        component: FormFilmComponent,
        name: 'NovoFilm'
    },
    {
        path: '/view/:id',
        component: FormFilmComponent,
        name: 'VisualFilme'
    },
    {
        path: '/edit/:id',
        component: FormFilmComponent,
        name: 'EditarFilme'
    },
    {
        path: '/excluir/:id',
        component: FormFilmComponent,
        name: 'ExcluirFilme'
    },
    {
        path: '/create/',
        component: FormSerieComponent,
        name: 'NovaSerie'
    },
    {
        path: '/view/:id',
        component: FormSerieComponent,
        name: 'VisualSerie'
    },
    {
        path: '/edit/:id',
        component: FormSerieComponent,
        name: 'EditarSerie'
    },
    {
        path: '/excluir/:id',
        component: FormSerieComponent,
        name: 'ExcluirSerie'
    }
]