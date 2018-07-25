import {observable, action, runInAction} from 'mobx'
import {get, post, del, put} from '../utils/fetch'


class Models {
    @observable list = null;
    @observable timeList = null;
    @action
    async getList() {
        let rst = await get(`api/classify/list`, {})
        if (rst) {
            this.list = rst.rows
            return 1;
        }
        return 0;
    }
    @action
    async getTimeList() {
        let rst = await get(`api/classify/year`, {})
        if (rst) {
            let list = {},arr=[],target=[]
            rst.forEach(item=>{
                if(list.length<1) list.push(item);
                list[item.count] = item;
                arr.push(item.count)
            })
            arr = arr.sort().reverse()
            target.push(list[arr[1]])
            target.push(list[arr[3]])
            target.push(list[arr[2]])
            target.push(list[arr[0]])
            this.timeList = target;
            return 1;
        }
        return 0;
    }
}

const Model = new Models()
export default Model