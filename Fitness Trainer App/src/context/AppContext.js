import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import scroll from '../assets/up-arrow.png'


export const AppContext = createContext();

export default function AppContextProvider({children}) {
    const navigate = useNavigate();
    const [home, setHome] = useState(false);
    const [service, setService] = useState(false);
    const [about, setAbout] = useState(false);
    const [contact, setContact] = useState(false);

    function homeHandler() {
        scrollHandler();
        setHome(true);
        setService(false);
        setAbout(false);
        setContact(false);
    }
    function serviceHandler() {
        scrollHandler();
        setHome(false);
        setService(true);
        setAbout(false);
        setContact(false);
    }
    function aboutHandler() {
        scrollHandler();
        setHome(false);
        setService(false);
        setAbout(true);
        setContact(false);
    }
    function contactHandler() {
        scrollHandler();
        setHome(false);
        setService(false);
        setAbout(false);
        setContact(true);
    }
    function allHandler() {
        scrollHandler();
        setHome(false);
        setService(false);
        setAbout(false);
        setContact(false);
    }
    function startButtonHandler() {
        // <Navigate to='/services'/>
        scrollHandler();
        navigate('/services');
    }
    function aboutButtonHandler() {
        // <Navigate to='/services'/>
        scrollHandler();
        navigate('/about');
    }
    function contactButtonHandler() {
        // <Navigate to='/services'/>
        scrollHandler();
        navigate('/contact');
    }
    function offerButtonHandler() {
        scrollHandler();
        navigate('/offer');
    //    <Navigate to='/offer' />
    }
    function scrollHandler() { 
        // 👇️ scroll to top on page load
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }

    const value = {
        home,
        setHome,
        service,
        setService,
        about,
        setAbout,
        contact,
        setContact,
        homeHandler,
        serviceHandler,
        aboutHandler,
        contactHandler,
        allHandler,
        startButtonHandler,
        aboutButtonHandler,
        contactButtonHandler,
        offerButtonHandler,
        scroll,
        scrollHandler
    }

    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}