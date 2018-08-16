import React from 'react';
import {Route, Link, withRouter} from "react-router-dom";
import LazyRoute from "lazy-route";
import style from './index.scss'
import dot from './lib/dot'
import Layer  from './layer'
import Article from './article'
class Home extends React.Component {
    componentDidMount() {
        dot(this.refs['canvas'], {})
    }
    render() {
        return <div style={{position: 'absolute', width: '100%', height: '100%'}}>
            <Layer>
                <Route path='/'
                       render={props => (<LazyRoute {...props} component={import('./home')}/>)}/>
                <Route path='/index'
                       render={props => (<LazyRoute {...props} component={import('./home')}/>)}/>
                <Route  path='/article/:id' component={Article}
                        // render={props => (<LazyRoute {...props} component={import ('./article')}/>)}
                />
                <Route exact  path='/cate'
                        render={props => (<LazyRoute {...props} component={import ('./cate')}/>)}/>
                <Route exact path='/cate/:id'
                        render={props => (<LazyRoute {...props} component={import ('./home')}/>)}/>
                <Route exact path='/deal'
                       render={props => (<LazyRoute {...props} component={import ('./deal')}/>)}/>
                <Route exact path='/time/:date'
                       render={props => (<LazyRoute {...props} component={import ('./home')}/>)}/>
                <Route exact path='/search/:key'
                       render={props => (<LazyRoute {...props} component={import ('./home')}/>)}/>
                <Route exact  path='/search'
                       render={props => (<LazyRoute {...props} component={import ('./search')}/>)}/>
                <Route exact  path='/faq'
                       render={props => (<LazyRoute {...props} component={import ('./faq')}/>)}/>
            </Layer>
            <div><canvas ref='canvas'></canvas></div>
        </div>
    }
}

export default Home