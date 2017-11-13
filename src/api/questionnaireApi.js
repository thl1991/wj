/**
 * Created by thl on 2017/11/3.
 */

export default {
  getAllQuestionnaires(cb, query){
    var data = [{id: 1, name: "问卷一"}, {id: 2, name: "问卷二"}];
    cb(data);
  },
  addEntity(cb, entity){
    var data = {id: 1, name: "李四"};
    cb(data);
  }
}
