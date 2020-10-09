import React, { useState, useEffect } from 'react';
import { userData, submitNewData, updateData } from '../ActionCreator/action'
import { connect } from 'react-redux'
import './form.css'

function Form({ userData, updateData, count, isEdit, submitNewData }) {

    const [title, setTitle] = useState("")
    const [amount, setAmount] = useState("")
    const [note, setNote] = useState("")
    const [date, setDate] = useState("")



    function submitForm(e) {
        e.preventDefault();

        userData(title, amount, note, date)


        setTitle("")
        setAmount("")
        setNote("")
        setDate("")
    }

    function editForm(e) {
        e.preventDefault();
        console.log(updateData[0], "updateData[0]")
        submitNewData(updateData[0]._id, title, amount, note, date)

    }
    useEffect(() => {
        if (updateData.length) {
            setTitle(updateData[0].title)
            setAmount(updateData[0].amount)
            setNote(updateData[0].note)
            setDate(updateData[0].date)
            console.log(updateData[0], "update")
        }
    }, [updateData.length, count])



    return (
        <>
            <h1 className="mb-5" style={{color:'white'}}>MY EXPENSES</h1>
            {!isEdit ?
                <form onSubmit={submitForm}>

                    <input className="form-control mt-5 no-border" value={title} onChange={e => setTitle(e.target.value)} placeholder="Title"
                        type="text" maxLength="10" required style={{backgroundColor:"#6200EE", color:"white", height:"8vh"}}/>

                    <input className="form-control mt-3 no-border" value={amount} onChange={e => setAmount(e.target.value)} placeholder="Amount"
                        type="number" required style={{backgroundColor:"#6200EE", color:"white", height:"8vh"}}/>

                    <input className="form-control mt-3 no-border" value={note} onChange={e => setNote(e.target.value)} placeholder="Note"
                        type="text" required style={{backgroundColor:"#6200EE", color:"white", height:"8vh"}}/>

                    <input className="form-control mt-3 no-border" value={date} onChange={e => setDate(e.target.value)} placeholder="Date"
                        type="date" required style={{backgroundColor:"#6200EE", color:"white", height:"8vh"}}/>

                    <button type="submit" className="btn btn-lg btn-block mt-5 mb-3 rounded-pill" style={{backgroundColor:"#03DAC5", width:"200px"}}><i class="fa fa-plus"></i> Add Expense</button>


                </form>
                :
                <form onSubmit={editForm}>

                    <input className="form-control mt-5 no-border" value={title} onChange={e => setTitle(e.target.value)} placeholder="Title"
                        type="text" maxLength="10" required style={{backgroundColor:"#6200EE", color:"white", height:"8vh"}}/>

                    <input className="form-control mt-3 no-border" value={amount} onChange={e => setAmount(e.target.value)} placeholder="Amount"
                        type="number" required style={{backgroundColor:"#6200EE", color:"white", height:"8vh"}}/>

                    <input className="form-control mt-3 no-border" value={note} onChange={e => setNote(e.target.value)} placeholder="Note"
                        type="text" required style={{backgroundColor:"#6200EE", color:"white", height:"8vh"}}/>

                    <input className="form-control mt-3 no-border" value={date} onChange={e => setDate(e.target.value)} placeholder="Date"
                        type="date" required style={{backgroundColor:"#6200EE", color:"white", height:"8vh"}}/>


                    <button type="submit" className="btn btn-lg btn-block mt-5 mb-3 rounded-pill" style={{backgroundColor:"#03DAC5", width:"200px"}}><i class="fa fa-pencil"></i> Edit Expense</button>

                </form>
            }


        </>
    );
}

let mapStateToProps = (state) => {
    console.log("hi", state)
    return {
        updateData: state.updateData,
        count: state.count,
        isEdit: state.isEdit
    }
}

export default connect(mapStateToProps, { userData, submitNewData })(Form)