import {observable, action, runInAction} from 'mobx'
import {get, post, del, put} from '../utils/fetch'


class Models {
    @observable list = null;
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