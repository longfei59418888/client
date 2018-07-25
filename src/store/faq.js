import {observable, action, runInAction} from 'mobx'
import {get, post, del, put} from '../utils/fetch'
import { error } from '../containers/util/pc/toast'

class Models {
    @observable list = null;
    @observable page = 0;
    @observable timeList = null;


    @action
    async faq(name,content,articleId) {
        if(content.length<10){
            error('填写多于10字评论信息！')
            return
        }
        let rst = await post(`api/faq/save`, {
            data:{
                content,
                name,
                articleId
            }
        })
        if (rst) {
            console.log(rst)
            return 1;
        }
        return 0;
    }
    @action
    async getList() {
        let rst = await get(`api/classify/list`, {})
        if (rst) {
            this.list = rst.rows
            return 1;
        }
        return 0;
    }
}

const Model = new Models()
export default Model