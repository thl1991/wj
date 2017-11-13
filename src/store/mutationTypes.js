/**
 * Created by thl on 2017/11/3.
 */

/**
 *用户相关的mutation类型
 */
export const USER = {
  //增加用户
  ADD: "U_ADD",
  //删除用户
  DELETE: "U_DELETE",
  //修改用户信息
  UPDATE: "U_UPDATE",
  //用户列表
  LIST: "U_LIST",
  //获取一个用户
  ENTITY: "U_ENTITY"
}
/**
 * 问卷相关的mutation类型
 * */
export const QUESTIONNAIRE = {
  //增加问卷
  ADD: "QNE_ADD",
  //删除问卷
  DELETE: "QNE_DELETE",
  //修改问卷
  UPDATE: "QNE_UPDATE",
  //问卷列表
  LIST: "QNE_LIST",
  //获取一个问卷
  ENTITY: "QNE_ENTITY"
}
/**
 * 问卷问题相关的mutation类型
 * */
export const QNEQUESTION = {
  //增加问题
  ADD: "QN_ADD",
  //删除问题
  DELETE: "QN_DELETE",
  //修改问题
  UPDATE: "QN_UPDATE",
  //问题列表
  LIST: "QN_LIST",
  //获取一个问题
  ENTITY: "QN_ENTITY"
}

/**
 * 问题选项相关的mutation类型
 * */
export const OPTION = {
  //增加选项
  ADD: "O_ADD",
  //删除选项
  DELETE: "O_DELETE",
  //修改选项
  UPDATE: "O_UPDATE",
  //问题选项
  LIST: "O_LIST",
  //获取一个选项
  ENTITY: "O_ENTITY"
}


