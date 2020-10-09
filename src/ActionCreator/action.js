import axios from 'axios'

export const tabData = () => {
    let data = axios.get("https://expense-be.herokuapp.com/users")
    return (dispatch)=> {
        data.then( (res)=> {console.log(res.data)
            dispatch({
                type: 'get-data',
                payload: res.data
            })
        }
        )
    }
}

export const editData = (elem) => {
    
    return {
        type: 'edit-data',
        payload: elem
    }
    
}

export const submitNewData = (id, title, amount, note, date) => {
    let data = axios.put(`https://expense-be.herokuapp.com/users/${id}`, {title, amount, note, date})
    return (dispatch)=> {
        data.then( (res)=> {console.log(res.data,"elem")
            
            dispatch({
                type: 'updated-data',
                payload: res.data
            })
        }
        )
    }
}

export const userData = (title, amount, note, date) => {
    let data = axios.post("https://expense-be.herokuapp.com/users",{title, amount, note, date})
    return (dispatch)=> {
        data.then( (res)=> {console.log(res.data)
            dispatch({
                type: 'submit-data'
                
            })
        }
        )
    }
}


export const delData = (id) => {console.log(id)
    const data = axios.delete(`https://expense-be.herokuapp.com/users/${id}`)
    return (dispatch)=> {
        data.then( (res)=> {
            dispatch({
                type: 'user-delete',
                payload: res.data
            })
        }
        )
    }
}
