import {observable, action, runInAction} from 'mobx'
import {get, post, del, put} from '../utils/fetch'
import { get as getSession, set} from '../utils/session'

class Models {

    @observable list = null;
    @observable page = 0;
    @observable end = false;
    @observable position = 0;

    @observable article = {};

    @action
    init() {
        runInAction(() => {
            this.end = false
            this.list = null
            this.page = 0
            this.position = 0;
        })
    }

    @action
    async getArticle(id) {
        let rst = await get(`api/article/${id}`,{})
        if (rst) {
            this.article = rst;
            return 1;
        }
        return 0;
    }

    @action
    async getList(classifyId) {
        let data = {page:this.page}
        if(classifyId) data.classifyId = classifyId
        let rst = await get(`api/article/list`, {
            data
        })
        console.log(rst)
        if (rst) {
            runInAction(()=>{
                let list = this.list?this.list:[]
                this.list = list.concat(rst.rows);
                this.page++
            })
            if(rst.rows.length>10){
                this.end = true
            }
            return 1;
        }
        return 0;
    }
}

const Model = new Models()
export default Model