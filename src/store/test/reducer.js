import * as home from './action-type'

let defaultState = {
    test: ''
}
// 首页表单数据
export const test = (state = defaultState, action = {}) => {
    switch (action.type) {
        case home.CONSOLE_STRING:
            return {...state, ...action['string']}
        default:
            return state
    }
}
