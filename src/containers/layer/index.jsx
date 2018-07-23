import React from 'react';
import {Link} from 'react-router-dom'
import './index.scss';
// import {observer} from 'mobx-react'

// @observer
export default class Main extends React.Component {

    render() {
        return (
            <div className='layer-box'>
                <div className="main">
                    <div className="left">
                        <div className="title">
                            <p>XiaoLong's Blog</p>
                            <span>Learning together</span>
                        </div>
                        <div className="cate">
                            <div className="item">
                                <img src={require('./image/home.png')} alt=""/>
                                <p>首页</p>
                            </div>
                            <div className="item">
                                <img src={require('./image/fenlei.png')} alt=""/>
                                <p>分类</p>
                            </div>
                            <div className="item">
                                <img src={require('./image/guidang.png')} alt=""/>
                                <p>归档</p>
                            </div>
                            <div className="item">
                                <img src={require('./image/serch.png')} alt=""/>
                                <p>搜索</p>
                            </div>
                            <div className="item">
                                <img src={require('./image/liuyan.png')} alt=""/>
                                <p>留言</p>
                            </div>
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
                            <div className="info">
                                <div className="item">
                                    <p>30</p>
                                    <span>日志</span>
                                </div>
                                <div className="item">
                                    <p>17</p>
                                    <span>分类</span>
                                </div>
                                <div className="item">
                                    <p>30</p>
                                    <span>留言</span>
                                </div>
                            </div>
                            <div className="link">
                                <div className="h">
                                    <img src={require('./image/wangl.png')} alt=""/>
                                    <p>常用网站</p>
                                </div>
                                <a href="">segmentfault</a>
                                <a href="">掘金</a>
                                <a href="">阮一峰</a>
                                <a href="">最牛前端收藏夹</a>
                                <a href="">Alloy Team</a>
                                <a href="">大前端</a>
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
















