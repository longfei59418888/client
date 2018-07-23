import React from 'react';
// import { Link } from 'react-router-dom'
import './index.scss';
import {loading, autobind} from "../../decorators";
import {observer} from 'mobx-react'
import Article from 'src/store/article'
import {getUTFDate} from 'src/utils/extend'


@loading(async (props, state) => {
    let id = props.match.params.id
    await Article.getArticle(id)
    return []
})
@observer
export default class Main extends React.Component {

    componentDidMount() {
        this.refs['article'].querySelectorAll('pre code').forEach(item=>{
            hljs.highlightBlock(item);
        })
    }
    render() {
        if (!Article.article) {
            return <div>当前文档不存在</div>
        }
        return (
            <div ref='article' className='article'>
                <p className="h5">{Article.article.title}</p>
                <p className="info">
                    <span>发表于 : {getUTFDate(Article.article.createdAt).split(' ')[0]}</span> |
                    <span> 分类 : </span>
                    <a href=""><span>{Article.article.classify.title}</span></a>
                </p>
                <div className="content">
                    <div dangerouslySetInnerHTML={{__html: Article.article.content}}></div>
                </div>
            </div>
        )
    }
}

















