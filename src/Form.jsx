import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { updateFullName, updateMobileNumber, deposit, withdraw,reset, addTransaction } from "./store"

export default function Form(){

    const [amount, setAmount] = useState("")
    const [fullname, setFullname] = useState("")
    const [mobilenum, setMobilenum] = useState("")

    const fullName = useSelector((state)=> state.user.fullname)

    let dispatch = useDispatch()

    return(
        <>
        <div className="container">
            <h2 className="text-primary">Account Form</h2>
            <div className="row">
                <div className="col-5">
                <input type="number" className="form-control" placeholder="Enter amount" value={amount} onChange={(e)=>setAmount(e.target.value)}/>
            </div>
            <button className="btn btn-primary col-1  mx-2" onClick={()=>{
                dispatch(deposit(amount));
                dispatch(addTransaction({
                    timeStamp: new Date().toISOString(),
                    type: 'credit',
                    accountName: fullName,
                    amount: amount
                }))
                setAmount("")
                }}>Deposit</button>
            <button className="btn btn-danger col-1 mx-2" onClick={()=>{
                dispatch(withdraw(amount));
                dispatch(addTransaction({
                    timeStamp: new Date().toISOString(),
                    type: 'debit',
                    accountName: fullName,
                    amount: amount
                }))
                setAmount("")}
                }>Withdraw</button>            
            </div>
            <div className="row mt-2">
                <div className="col-5">
                <input type="text" className="form-control" placeholder="Enter Name" value={fullname} onChange={(e)=>setFullname(e.target.value)}/>
            </div>
            <button className="btn btn-primary col-1 mx-2" onClick={()=>{dispatch(updateFullName(fullname));setFullname("")}}>Update</button>
            </div>
            <div className="row mt-2">
                <div className="col-5">
                <input type="number" className="form-control" placeholder="Enter Mobile number" value={mobilenum} onChange={(e)=>setMobilenum(e.target.value)}/>
            </div>
            <button className="btn btn-primary col-1 mx-2" onClick={()=>{dispatch(updateMobileNumber(mobilenum));setMobilenum("")}}>Update</button>
            </div>
            <button className="btn btn-danger col-2 mt-2" onClick={()=>{dispatch(reset())}}>Reset</button>
        </div>
        </>
    )
}