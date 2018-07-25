
import React from 'react';
import './index.scss';
import {observer} from 'mobx-react'
import CheckBox from '../util/form/checkBox'
import { autobind } from '../../decorators'
import Btn from '../util/form/btn'
import Faq from 'src/store/faq'



@observer
export default class Main extends React.Component {
    @autobind
    async submit(){
        let name = this.refs['name'].value,
            content = this.refs['content'].value,
            callback = this.props.callback
        console.log(name,content)
        let rst = await Faq.faq(name,content)
        if(rst && callback){
            callback(rst)
            this.refs['name'].value = ''
            this.refs['content'].value = ''

        }

    }
    render() {
        return (
            <div className="info-liuyan">
                <div className="item">
                    <span>用户名：</span>
                    <p><input ref='name' type="text" placeholder='姓名或者微信/手机号..'/></p>
                    <div className='check'>
                        匿名:<CheckBox/>
                    </div>
                </div>
                <div className="item">
                    <span>留言：</span>
                    <p><textarea ref='content' placeholder="请多于10字..." ></textarea></p>
                </div>
                <p onClick={()=>{
                   this.submit()
                }} className='btn'>
                   提交
                </p>
            </div>
        )
    }
}














