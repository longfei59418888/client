import React from 'react';
import { Link } from 'react-router-dom'
import './index.scss';
import {loading, autobind} from "../../decorators";
import {observer} from 'mobx-react'
import {action} from 'mobx';
import Article from 'src/store/article'
import {getUTFDate} from 'src/utils/extend'
import Scroller from '../util/iscroll/index.min'

// @loading(async (props, state) => {
//     let id = props.match.params.id
//     await Article.getArticle(id)
//     return []
// })
@observer
export default class Main extends React.Component {
    @action
    static async onEnter({states, pathname, query, params}){
        // console.log({states, pathname, query, params})
        // await Article.getArticle(params.id)
    }
    async componentWillMount(){
        let id = this.props.match.params.id
        await Article.getArticle(id)
    }
    componentWillUnmount(){
        Article.article={}
    }
    componentDidUpdate() {
        if(this.refs['article']){
            this.refs['article'].querySelectorAll('pre code').forEach(item=>{
                hljs.highlightBlock(item);
            })
        }
    }
    render() {

        if (!Article.article.publicDate) {
            return <div></div>
        }
        if(!window.DEVICE_IS_IPHONE){
            return (
                <div ref='article' className='article'>
                    <kbd>{Article.article.classify.title},{Article.article.title}</kbd>
                    <p className="h5">{Article.article.title}</p>
                    <p className="info">
                        <span>发表于 : {getUTFDate(Article.article.publicDate).split(' ')[0]}</span> |
                        <span> 分类 : </span>
                        <Link to={`/cate/${Article.article.classify.id}`}><span>{Article.article.classify.title}</span></Link>
                    </p>
                    <div className="content">
                        <div dangerouslySetInnerHTML={{__html: Article.article.content}}></div>
                    </div>
                </div>
            )
        }
        return (
            <Scroller>
                <div ref='article' className='article'>
                    <kbd>{Article.article.classify.title},{Article.article.title}</kbd>
                    <p className="h5">{Article.article.title}</p>
                    <p className="info">
                        <span>发表于 : {getUTFDate(Article.article.publicDate).split(' ')[0]}</span> |
                        <span> 分类 : </span>
                        <Link to={`/cate/${Article.article.classify.id}`}><span>{Article.article.classify.title}</span></Link>
                    </p>
                    <div className="content">
                        <div dangerouslySetInnerHTML={{__html: Article.article.content}}></div>
                    </div>
                </div>
            </Scroller>
        )
    }
}

















