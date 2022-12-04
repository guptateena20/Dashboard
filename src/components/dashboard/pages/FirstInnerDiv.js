import React from 'react'


let propertyName = ["Apartments", "Townhouse", "Duplex"];
let propertyManager = ["Rahul Rana", "John Doe", "Smith Jason"];
let status = ["Delete", "Add", "Update"];

const FirstInnerDiv = () => {
    return (
        <>
            <div className='details-div-container-first'>

                
                <div className='dropdown-menu'>

                    <div className='dropdown-menu1'>
                        <p>Property Name</p>
                        <select>
                            <option value="" disabled selected hidden>Select Property Name</option>
                            {
                                propertyName.map((prop) => {
                                    return <option>{prop}</option>
                                })
                            }
                        </select>
                    </div>

                    
                    <div className='dropdown-menu2'>
                        <p>Property Manager</p>
                        <select>
                            {
                                propertyManager.map((manager) => {
                                    return <option>{manager}</option>
                                })
                            }
                        </select>
                    </div>

                    <div className='start-date'>
                        <p>Start Date</p>
                        <input type="date" />
                    </div>

                    <div className='end-date'>
                        <p>End Date</p>
                        <input type="date" />
                    </div>

                    <div className='dropdown-menu3'>
                        <p>Status</p>
                        <select>
                            {
                                status.map((state) => {
                                    return <option>{state}</option>
                                })
                            }
                        </select>
                    </div>

                </div>
                <button class="submit">Submit</button>
            </div>
        </>
    )
}

export default FirstInnerDiv