import {observable, action, runInAction} from 'mobx'
import {get, post, del, put} from '../utils/fetch'
import { get as getSession, set} from '../utils/session'

class Models {

    @observable list = null;
    @observable page = 0;
    @observable end = false;
    @observable position = 0;
    @observable loading = false;
    @observable id = null;
    @observable date = null;
    @observable key = null;

    @observable article = {};

    @action
    init(id,date,key) {
        if(id == this.id && date == this.date && key == this.key) return 1;
        runInAction(() => {
            this.id = id
            this.end = false
            this.list = null
            this.page = 0
            this.date = date
            this.key = key
            this.loading = false
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
    async getList() {
        this.loading = true
        let data = {page:this.page}
        if(this.id) data.classifyId = this.id
        if(this.date) data.date = this.date
        if(this.key) data.key = this.key
        let rst = await get(`api/article/list`, {
            data
        })
        if (rst) {
            runInAction(()=>{
                let list = this.list?this.list:[]
                this.list = list.concat(rst.rows);
                this.page++
            })
            if(rst.rows.length<10){
                this.end = true
            }
            this.loading = false
            return 1;
        }
        return 0;
    }
}

const Model = new Models()
export default Model