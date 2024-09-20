import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { MdDeleteForever } from "react-icons/md";

const Users = () => {
    const [data, setData] = useState([])

    const fetchdata = async () => {
        try {
            let response = await fetch('http://localhost:8000/getdata')
            const data = await response.json()
            setData(data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchdata()
    }, [])

    const Deletehandler = async (id) => {
        try {
            let response = await fetch(`http://localhost:8000/deleteuser/${id}`, {

                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                }
            })
            const data = await response.json()
            if (response.ok) {
                alert(data.Message)
                fetchdata()
            } else {
                alert(data.Message)
            }
        } catch (error) {

        }
    }
    return (
        <>
            <table className='w-100 text-center'>
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Delete</th>
                        <th scope="col">Edit</th>

                    </tr>
                </thead>


                {
                    data.map((i, index) => (
                        <>
                            <tbody>
                                <tr>
                                    <th scope="row">{index + 1}</th>
                                    <td>{i.name}</td>
                                    <td>{i.email}</td>
                                    <td>
                                        <button className='btn btn-danger' type='button' onClick={() => Deletehandler(i._id)}><MdDeleteForever className='fs-3' /></button>
                                    </td>

                                    <td>
                                        <Link to={`/edit/${i._id}`} className='btn btn-warning'>Edit</Link>
                                    </td>
                                </tr>
                            </tbody>
                        </>

                    ))
                }
            </table>
        </>

    )
}

export default Users
