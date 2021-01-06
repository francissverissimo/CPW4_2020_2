import { createWebHistory, createRouter } from 'vue-router';
import Home from '../pages/Home';
import HistoricoLancamentos from '../pages/HistoricoLancamentos';

const routes = [
    {
        path: "/",
        component: Home
    },
    {
        path: "/historico",
        component: HistoricoLancamentos
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;