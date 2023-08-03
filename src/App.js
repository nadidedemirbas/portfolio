import "./styles/anim.css";
import {React} from "react";
import {Route, Switch} from "react-router-dom";
import Home from "./components/home/Home";
import About from "./components/home/About";
import Isler from "./components/home/Isler";
import Iletisim from "./components/home/Iletisim";

function App() {
    return (
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/hakkimda' component={About}/>
            <Route exact path='/isler' component={Isler}/>
            <Route exact path='/iletisim' component={Iletisim}/>
        </Switch>
    );
}

export default App;
