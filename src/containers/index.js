import React from 'react';
import {Route, Link, withRouter} from "react-router-dom";
import LazyRoute from "lazy-route";
import style from './index.scss'
import dot from './lib/dot'
import Layer  from './layer'

class Home extends React.Component {
    componentDidMount() {
        dot(this.refs['canvas'], {})
    }
    render() {
        return <div style={{position: 'absolute', width: '100%', height: '100%'}}>
            <Layer>
                <Route path='/index'
                       render={props => (<LazyRoute {...props} component={import ('./home')}/>)}/>
                <Route  path='/article/:id'
                        render={props => (<LazyRoute {...props} component={import ('./article')}/>)}/>
            </Layer>
            <div><canvas ref='canvas'></canvas></div>
        </div>
    }
}

export default Home