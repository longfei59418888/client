import React from 'react';
import {hydrate,render} from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import {AppContainer} from 'react-hot-loader'
import App from './containers/index';
import style from './style/util.scss'
import init from './utils/init'


// 初始化设置
init()

const renderApp = App => {
	let renderDom = render;
    if(process.env.NODE_ENV != 'dev'){
        renderDom = hydrate
	}
    renderDom(
		<AppContainer>
				<Router>
					  <App/>
				</Router>
		</AppContainer>,
		document.getElementById("app")
	);
};

renderApp(App);

if (module.hot) {
		// debugger;
      module.hot.accept(() => renderApp(App));
}