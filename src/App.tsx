import React from "react";
import {Route, Routes} from "react-router-dom";
import { HomeOne } from "./pages/Home/HomeOne";
import { HomeTwo } from "./pages/Home/HomeTwo";
import { Demo } from "./pages/Demo";
import { About } from "./pages/About";
import { ComingSoon } from "./pages/ComingSoon";
import { Contact } from "./pages/Contacts";
import { NotFound } from "./pages/NotFound";

function App() {
    return (
        <>
            <Routes>
                <Route path="/kidol_react" element={ <Demo/> }/>
                <Route path="/HomeOne" element={ <HomeOne/> }/>
                <Route path="/HomeTwo" element={ <HomeTwo/> }/>
                <Route path="/About" element={ <About/> }/>
                <Route path="/NotFound" element={ <NotFound/> }/>
                <Route path="/ComingSoon" element={ <ComingSoon/> }/>
                <Route path="/Contact" element={ <Contact/> }/>
            </Routes>
        </>
    )
}
export default App;