import React from 'react';
import {Link} from 'react-router-dom'
import './index.scss';
import INFO from 'src/store/index'
import {loading} from "../../decorators";
import {observer} from 'mobx-react'
import classnames from 'classnames'

export default class Main extends React.Component {
    state = {
        showMenu : false
    }
    render() {
        return (
            <div className='layer-box'>
                <div className="main">
                    <div className="top">
                        <span onClick={()=>{
                            this.setState({showMenu : !this.state.showMenu })
                        }}>
                            <img src={require('./image/iphone-mune.png')} alt=""/>
                        </span>
                        <p>XiaoLong's Blog{this.state.showMenu}</p>
                        <span></span>
                    </div>
                    {this.state.showMenu?<div onClick={()=>{
                        this.setState({showMenu : !this.state.showMenu })
                    }} className="mask"></div>:''}
                    <div className={classnames('left',{ action: this.state.showMenu})}>
                        <div className="title">
                            <p>XiaoLong's Blog</p>
                            <span>Learning together</span>
                        </div>
                        <div className="cate" onClick={()=>{
                            this.setState({showMenu : !this.state.showMenu })
                        }}>
                            <Link to='/index'>
                                <div className="item">
                                    <img src={require('./image/home.png')} alt=""/>
                                    <p>首页</p>
                                </div>
                            </Link>
                            <Link to="/cate">
                                <div className="item">
                                    <img src={require('./image/fenlei.png')} alt=""/>
                                    <p>分类</p>
                                </div>
                            </Link>
                            <Link to='/deal'>
                                <div className="item">
                                    <img src={require('./image/guidang.png')} alt=""/>
                                    <p>归档</p>
                                </div>
                            </Link>
                            <Link to='/search'>
                                <div className="item">
                                    <img src={require('./image/serch.png')} alt=""/>
                                    <p>搜索</p>
                                </div>
                            </Link>
                            <Link to='/faq'>
                                <div className="item">
                                    <img src={require('./image/liuyan.png')} alt=""/>
                                    <p>留言</p>
                                </div>
                            </Link>
                            {/*<div className="item">*/}
                            {/*<img src={require('./image/admin.png')} alt=""/>*/}
                            {/*<p>管理</p>*/}
                            {/*</div>*/}
                        </div>
                        <div className="extra">
                            <div className="head">
                                <img src={require('./image/head.jpg')} alt=""/>
                            </div>
                            <p className='name'>XiaoLong,Wang</p>
                            <Info/>
                            <div className="link">
                                <div className="h">
                                    <img src={require('./image/wangl.png')} alt=""/>
                                    <p>常用网站</p>
                                </div>
                                <a href="https://segmentfault.com">segmentfault</a>
                                <a href="https://juejin.im/">掘金</a>
                                <a href="http://www.ruanyifeng.com/home.html">阮一峰</a>
                                <a href="https://github.com/longfei59418888">my github</a>
                                <a href="http://www.alloyteam.com/">Alloy Team</a>
                                <a href="http://www.daqianduan.com/">大前端</a>
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
}

@loading(async (props,state)=>{
    await INFO.getInfo()
    return []
})
@observer
class Info extends React.Component{
    render(){
        let {classify,article,faq} = INFO.info;
        return(
            <div className="info">
                <div className="item">
                    <p>{article}</p>
                    <span>日志</span>
                </div>
                <div className="item">
                    <p>{classify}</p>
                    <span>分类</span>
                </div>
                <div className="item">
                    <p>{faq}</p>
                    <span>留言</span>
                </div>
            </div>
        )
    }
}














