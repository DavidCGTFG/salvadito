import { createBrowserRouter } from 'react-router-dom';
import MainPage from '../pages/MainPage';
import LoginPage from '../pages/LoginPage';
import PartidaPage from '../pages/PartidaPage';
import VictoriaPage from '../pages/VictoriaPage';
import FracasoPage from '../pages/FracasoPage';
import PrePartida from '../pages/PrePartida';
import AgresivaPage from '../pages/AgresivaPage';
import PasivaPage from '../pages/PasivaPage';
import CreacionPage from '../pages/CreacionPage';
import CreacionItinerarioPage from '../pages/CreacionItinerarioPage';
import ModificarPage from '../pages/ModificarPage';


export const router = createBrowserRouter([
    {
        path: '/',
        element: <LoginPage />,
    },
    {
        path: '/main',
        element: <MainPage />,
    },{
        path: '/partida',
        element: <PartidaPage />,
    },
    {
        path: '/fracaso',
        element: <FracasoPage />,
    },
    {
        path: '/victoria',
        element: <VictoriaPage />,
    }
    ,
    {
        path: '/prePartida',
        element: <PrePartida />,
    },
    {
        path: '/agresiva',
        element: <AgresivaPage />,
    },
    {
        path: '/pasiva',
        element: <PasivaPage />,
    },
    {
        path: '/crear-partida',
        element: <CreacionPage />,
    },
    {
        path: '/crear-itinerario',
        element: <CreacionItinerarioPage />,
    },
    {
        path: '/modificar-partida',
        element: <ModificarPage />,
    }
])