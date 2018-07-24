import React from 'react';
import {Link} from 'react-router-dom'
import './index.scss';
import {loading, autobind} from "../../decorators";
import {observer} from 'mobx-react'
import Article from 'src/store/article'
import {getUTFDate} from 'src/utils/extend'

@loading(async (props, state) => {
    let id = props.match.params.id ? props.match.params.id : null
    await Article.init(id)
    if (Article.list == null) {
        await Article.getList()
    }
    return []
})
@observer
export default class Main extends React.Component {

    componentDidMount() {
        let boxList = this.refs['boxList'],
            _this = this,
            scroll = this.refs['scroll']
        _this.scrollTop = Article.position;
        console.log(_this.scrollTop)
        boxList.scrollTop = _this.scrollTop
        boxList.addEventListener('scroll', getTop)
        function getTop() {
            _this.scrollTop = boxList.scrollTop
            if(Article.loading || Article.end) return
            if (scroll.offsetHeight - (document.body.offsetHeight + boxList.scrollTop) < 500) {
                Article.getList()
            }
        }

        this.removeEvent = () => {
            boxList.removeEventListener('scroll', getTop)
        }
    }

    componentWillUnmount() {
        console.log(this.scrollTop)
        Article.position = this.scrollTop
        this.removeEvent()
    }

    render() {
        return (
            <div ref='boxList' className='home'>
                <div ref='scroll' className="scroll">
                    <div>
                        {Article.list.map((item, index) => {
                            return (
                                <div className="item">
                                    <p className="h5">{item.title}</p>
                                    <p className="info">
                                        <span>发表于 : {getUTFDate(item.createdAt).split(' ')[0]}</span> |
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
}














