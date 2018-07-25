import React from 'react';
import {Link} from 'react-router-dom'
import './index.scss';
import {loading, autobind} from "../../decorators";
import {observer} from 'mobx-react'
import Cate from 'src/store/cate'

@loading(async (props, state) => {
    await Cate.getTimeList()
    return []
})
@observer
export default class Main extends React.Component {

    componentDidMount(){
        this.refs['key'].addEventListener('keyup',()=>{
            if (event.keyCode == "13") {
                this.search()
            }

        })
    }
    @autobind
    search(){
        let key = this.refs['key'].value;
        if(key.length<1) return;
        this.props.history.push(`/search/${key}`)
    }
    render() {
        return (
            <div className='search-box'>
                <div className="search">
                    <input type="text" ref='key'/>
                    <button onClick={()=>{
                        this.search()
                    }}>搜索</button>
                </div>
                <div className='hot-list'>
                    <Link to=''>hosdfset</Link>
                    <Link to=''>hosdfsdet</Link>
                    <Link to=''>hosdfset</Link>
                    <Link to=''>hosdfet</Link>
                    <Link to=''>hoet</Link>
                    <Link to=''>hosdfsdet</Link>
                    <Link to=''>hsdfsoet</Link>
                    <Link to=''>hoet</Link>
                    <Link to=''>hosdfet</Link>
                </div>
            </div>
        )
    }
}














