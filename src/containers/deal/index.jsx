import React from 'react';
import {Link} from 'react-router-dom'
import './index.scss';
import {loading, autobind} from "../../decorators";
import {observer} from 'mobx-react'
import Cate from 'src/store/cate'
import {CSSTransitionGroup} from 'react-transition-group'
import classnames from "classnames"; // ES6

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
            <div ref='deal' className='deal-box'>
                <CSSTransitionGroup
                    transitionName="example-toast-enter"
                    transitionEnterTimeout={1000}
                    transitionLeaveTimeout={300}>
                        {Cate.timeList.map(item => {
                            return (
                                <div className="item">
                                    <Link to={`/time/${item.time}`}>
                                        <p>
                                            {item.time}<br/>
                                            <span>共计{item.count}篇</span>
                                        </p>
                                    </Link>
                                </div>
                            )
                        })}
                </CSSTransitionGroup>
            </div>
        )
    }
}














