import React from 'react';
import './index.scss';
import {loading, autobind} from "../../decorators";
import {observer} from 'mobx-react'
import Cate from 'src/store/cate'
import CheckBox from '../util/form/checkBox'
import FormBox from './words'
import {success} from '../util/pc/toast'

@loading(async (props, state) => {
    await Cate.getTimeList()
    return []
})
@observer
export default class Main extends React.Component {
    componentDidMount() {
        let deal = this.refs['deal'];
    }
    render() {
        return (
            <div className='faq-box'>
                <div className="box">
                    <FormBox  callback={(rst)=>{
                        success('留言成功！')
                    }}/>
                </div>
                <div className="code">
                    <p>微信二维码</p>
                    <div className="er">
                        <img src={require('./weixin.jpg')} alt=""/>
                    </div>
                </div>
            </div>
        )
    }
}














