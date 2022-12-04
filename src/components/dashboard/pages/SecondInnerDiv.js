import React from 'react'

const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const tableData = [
    { srno: 1, property: "N/A", manager: "Rahul Rana", startDate: "22-11-2022", endDate: "06-06-2023", status: "---" },
    { srno: 2, property: "N/A", manager: "Rahul Rana", startDate: "22-11-2022", endDate: "06-06-2023", status: "---" },
    { srno: 3, property: "N/A", manager: "Rahul Rana", startDate: "22-11-2022", endDate: "06-06-2023", status: "---" },
]

const SecondInnerDiv = () => {
    return (
        <>
            <div className='details-div-container-second'>
                <div className='entries-div'>
                    <span>Show</span>

                    <select>
                        {
                            number.map((num) => {
                                return <option value="num">{num}</option>
                            })
                        }
                    </select>

                    <span>Entries</span>
                </div>

                <input type="text" placeholder="Search..." class="search" />

                <table>
                    <tr>
                        <th>S.No</th>
                        <th>Property</th>
                        <th>Manager</th>
                        <th>Start Date</th>
                        <th>End Date</th>
                        <th>Status</th>
                    </tr>

                    {
                        tableData.map((data, srno) => {
                            return (
                                <tr key={srno}>
                                    <td>{data.srno}</td>
                                    <td>{data.property}</td>
                                    <td>{data.manager}</td>
                                    <td>{data.startDate}</td>
                                    <td>{data.endDate}</td>
                                    <td>{data.status}</td>
                                </tr>
                            )
                        })
                    }
                </table>
            </div>
        </>
    )
}

export default SecondInnerDiv