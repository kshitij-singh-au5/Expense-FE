
function appReducer(state = { tableData: [],count:0,updateData:[],isEdit:false,total:0}, action) {
    let stateCopy = JSON.parse(JSON.stringify(state))
    console.log(action)
    switch (action.type) {
        case "get-data":
            console.log(action.payload)
            stateCopy.tableData = action.payload
            stateCopy.total=0
            for(let i=0;i<stateCopy.tableData.length;i++){
                stateCopy.total+=stateCopy.tableData[i].amount
            }
            return stateCopy
        case "submit-data":
            stateCopy.count += 1
            
            return stateCopy
        case "user-delete":
            
            return stateCopy

        case "edit-data":
            stateCopy.isEdit = true
            stateCopy.updateData = [action.payload]
            stateCopy.count += 1
            console.log(stateCopy.updateData,"key")
            return stateCopy
        case "updated-data":
            stateCopy.count +=1
            stateCopy.isEdit = false
            return stateCopy
        default:
            return stateCopy
    }
}

export default appReducer;