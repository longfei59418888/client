import React from 'react';
import {Link} from 'react-router-dom'
import './index.scss';
import {loading, autobind} from "../../decorators";
import {observer} from 'mobx-react'
import Cate from 'src/store/cate'


@loading(async (props, state) => {
    await Cate.getList()
    return []
})
@observer
export default class Main extends React.Component {
    render() {
        return (
            <div  className='cate-box'>
                {Cate.list.map((item,index)=>{
                    return (
                        <Link to={`/cate/${item.id}`}>
                            <div className='item'>
                                <p><span>{index+1}</span>.{item.title}</p>
                                <span>{item.description}</span>
                            </div>
                        </Link>
                    )
                })}
            </div>
        )
    }
}














