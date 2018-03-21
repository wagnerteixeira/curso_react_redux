import { toastr } from 'react-redux-toastr'
import axios from 'axios'

import consts from '../consts'

export function login(values) {
    return submit(values, `${consts.OAPI_URL}/login`)    
}

export function signUp(values) {
    return submit(values, `${consts.OAPI_URL}/signUp`)    
}

function submit(values, url){
    return dispatch => {
        axios.post(url, values)
            .then(resp=> {
                dispatch([
                    {type: 'USER_FECHED', payload: resp.data}
                ])
            })
            .catch(e => {
                e.responde.data.errors.forEach(error => {
                    toastr.error('Erro', error)
                });
            })
    }
}

export function logout() {
    return {type: 'TOKEN_VALIDATED', payload: false}
}

export function validateToken(token) {
    console.log(token)
    return dispatch => {
        if(token){
            axios.post(`${consts.OAPI_URL}/validateToken`, {token})
                .then(resp => {
                    dispatch({type: 'TOKEN_VALIDATED', payload: resp.data.valid})
                })
                .catch(e=> dispatch({type: 'TOKEN_VALIDATED', payload: false}))                
        } else {
            dispatch({type: 'TOKEN_VALIDATED', payload: false})
        }
    }
}