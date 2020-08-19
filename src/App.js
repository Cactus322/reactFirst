import React from "react";
import Logo from "./components/Logo";
import Navigation from "./components/Navigation";
import Who_We_Are from "./components/Who_We_Are";
import Dog from "./components/Dog";
import Services from "./components/Services";
import Appointment from "./components/Appointment";
import Customers from "./components/Customers";
import Impact from "./components/Impact";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";

class App extends React.Component {
    render() {
        return(
            <div>
                <div className="HeaderBackgroundImage">
                    <Logo />
                    <Navigation />
                    <Who_We_Are />
                    <Dog />
                    <Services />
                    <Appointment  className="AppointmentBackgroundImage"/>
                    <Customers />
                    <Impact />
                    <Contacts />
                    <Footer />
                </div>
            </div>
        );
    }

}

export default App;