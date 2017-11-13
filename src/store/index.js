/**
 * Created by thl on 2017/11/3.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import users from './modules/users'
import questionnaires from './modules/questionnaires'
import createLogger from '../../../src/plugins/logger'

Vue.use(Vuex)

const debug = true//process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  actions,
  getters,
  modules: {
    users,
    questionnaires
  },
  strict: debug,
  plugins: debug ? [createLogger()] : []
})

