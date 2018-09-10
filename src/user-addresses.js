import React, { Component } from "react";
import ReactDOM from "react-dom";
import Addresses from "./components/Addresses/Addresses";
import { BrowserRouter, Switch, Route} from "react-router-dom";

import brandonWoff from './assets/fonts/brandon_reg-webfont.woff';
import brandonWoff2 from './assets/fonts/brandon_reg-webfont.woff2';
import brandonEot from './assets/fonts/brandon_reg-webfont.eot';
import brandonTtf from './assets/fonts/brandon_reg-webfont.ttf';
import brandonSvg from './assets/fonts/brandon_reg-webfont.svg';

import "normalize.css";
import "./styles/app.scss";

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route exact path='/user/addresses' component={Addresses} />
        </Switch>
    </BrowserRouter>, 
    document.getElementById("app"));