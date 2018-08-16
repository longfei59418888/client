import React from 'react';
import {Link} from 'react-router-dom'
import './index.scss';
import {loading, autobind} from "../../decorators";
import {observer} from 'mobx-react'
import Article from 'src/store/article'
import {getUTFDate} from 'src/utils/extend'
import Scroller from '../util/iscroll/index.min'

@loading(async (props, state) => {
    let id = props.match.params.id ? props.match.params.id : null
    let date = props.match.params.date ? props.match.params.date : null
    let key = props.match.params.key ? props.match.params.key : null
    await Article.init(id,date,key)
    if (Article.list == null) {
        await Article.getList()
    }
    return []
})
@observer
export default class Main extends React.Component {

    componentDidMount() {
        if(!window.DEVICE_IS_IPHONE){
            let boxList = this.refs['boxList'],
                _this = this,
                scroll = this.refs['scroll']
            _this.scrollTop = Article.position;
            boxList.scrollTop = _this.scrollTop
            boxList.addEventListener('scroll', getTop)
            function getTop() {
                _this.scrollTop = boxList.scrollTop
                if(Article.loading || Article.end) return
                if (scroll.offsetHeight - (document.body.offsetHeight-50 + boxList.scrollTop) < 500) {
                    Article.getList()
                }
            }

            this.removeEvent = () => {
                boxList.removeEventListener('scroll', getTop)
            }
        }
    }

    componentWillUnmount() {
        if(!window.DEVICE_IS_IPHONE){
            Article.position = this.scrollTop
            this.removeEvent()
        }
    }

    render() {
        if(!window.DEVICE_IS_IPHONE){
            return (
                <div ref='boxList' className='home'>
                    <div ref='scroll' className="scroll">
                        <div>
                            {Article.list.map((item, index) => {
                                return (
                                    <div className="item">
                                        <p className="h5">{item.title}</p>
                                        <p className="info">
                                            <span>发表于 : {getUTFDate(item.publicDate).split(' ')[0]}</span> |
                                            <span> 分类 : </span>
                                            <Link to={`/cate/${item.classify.id}`}><span>{item.classify.title}</span></Link>
                                        </p>
                                        <div className="descript">
                                            <div dangerouslySetInnerHTML={{__html: item.description}}></div>
                                        </div>
                                        <div className="btn">
                                            <Link to={`/article/${item.id}`}>阅读全文</Link>
                                        </div>
                                        <hr/>
                                    </div>
                                )
                            })}
                        </div>
                        <div className="loading">
                            {Article.end ? (Article.list.length<1?'--努力更新中--':'--完毕--') : '加载更多..'}
                        </div>
                    </div>
                </div>
            )
        }
        return (
            <Scroller
                ref="scroller"
                init={{x:0,y:Article.position}}
                leaveBefor={scroller=>{
                    Article.position = scroller.y
                }}
                onLoadMore={async (scroller,bak)=>{
                    await Article.getList()
                    if(Article.end) bak(true)
                    else bak()

                }}
            >
                <div  className='home'>
                    <div  className="scroll">
                        <div>
                            {Article.list.map((item, index) => {
                                return (
                                    <div className="item">
                                        <p className="h5">{item.title}</p>
                                        <p className="info">
                                            <span>发表于 : {getUTFDate(item.publicDate).split(' ')[0]}</span> |
                                            <span> 分类 : </span>
                                            <Link to={`/cate/${item.classify.id}`}><span>{item.classify.title}</span></Link>
                                        </p>
                                        <div className="descript">
                                            <div dangerouslySetInnerHTML={{__html: item.description}}></div>
                                        </div>
                                        <div className="btn">
                                            <Link to={`/article/${item.id}`}>阅读全文</Link>
                                        </div>
                                        <hr/>
                                    </div>
                                )
                            })}
                        </div>
                        {/*<div className="loading">*/}
                        {/*{Article.end ? (Article.list.length<1?'--努力更新中--':'--完毕--') : '加载更多..'}*/}
                        {/*</div>*/}
                    </div>
                </div>
            </Scroller>
        )
    }
}














