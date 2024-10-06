import { useSelector } from "react-redux"

export default function Account(){

    let data = useSelector((state) => {
        console.log(state); 
        return state})

    return(
        <>
        <div className="container">
            <h2 className="text-primary">Account details</h2>
                <table className="table table-bordered w-50">
                    <thead>
                        <tr>
                            <th>Balance</th>
                            <th>Full Name</th>
                            <th>Mobile</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{data.user.balance}</td>
                            <td>{data.user.fullName}</td>
                            <td>{data.user.mobile}</td>
                        </tr>
                    </tbody>
                </table>
                <h2 className="text-primary">Transaction details</h2>
                <table className="table table-bordered w-50">
                    <thead>
                        <tr>
                            <th>Time</th>
                            <th>Type</th>
                            <th>Amount</th>
                        </tr>
                    </thead>
                    <tbody>                   
                    {
                                data.transaction.map(
                                    (tr) => (
                                        <tr>
                                            <td>{tr.timeStamp}</td>
                                            <td>{tr.type}</td>
                                            <td>{tr.amount}</td>
                                        </tr>
                                    )
                                )
                            }
                           
                    </tbody>
                </table>             
        </div>
        </>
    )
}