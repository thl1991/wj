/**
 * Created by thl on 2017/11/3.
 */
import types from '../mutationTypes'
import api from '../../api/questionnaireApi'
import options from 'questions'

const state = {
  list: [],
  entity: {
    questions:[]
  }
}
const getters = {
  allQuestionnaires: state => state.list
}
const actions = {
  getAllQuestionnaires({commit},query){
    api.getQuestionnaires(questionnaires => {
      commit(types.QUESTIONNAIRE.LIST, {questionnaires})
    },query)
  },
  getEntity({commit}){
    api.getQuestionnaire(id => {
      commit(types.QUESTIONNAIRE.ENTITY, {id})
    })
  },
  addEntity({commit},entity)
  {
      api.AddQuestionnaire(entity=>{
        commit(types.QUESTIONNAIRE.ADD,{entity})
      },entity)
  }

}
const mutations = {
  [types.QUESTIONNAIRE.LIST] (state, {questionnaires}) {
    state.list = questionnaires
  },

  [types.QUESTIONNAIRE.ENTITY] (state, {id}) {
    state.entity = state.list.find(p => p.id === id);
  },
  [types.QUESTIONNAIRE.ADD](state, {entity}){
    state.entity = entity;
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
