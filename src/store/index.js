import {observable, action, runInAction} from 'mobx'
import {get} from '../utils/fetch'


class Models {
    @observable info = null;
    @action
    async getInfo() {
        let rst = await get(`api/index/info`, {})
        if (rst) {
            this.info = rst
            return 1;
        }
        return 0;
    }
}

const Model = new Models()
export default Model