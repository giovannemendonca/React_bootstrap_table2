import BootstrapTable from 'react-bootstrap-table-next';
import React, { useState, useEffect } from 'react';

export const Table = () => {

    const [users, setUsers] = useState([])


    useEffect(() => {

        const getUsers = async () => {
            const data = await fetch(`https://jsonplaceholder.typicode.com/users`)
            const dataJson = await data.json();
            setUsers(dataJson)
        }

        getUsers()

    }, []);


    const columns = [{
        dataField: 'id',
        text: 'User ID'
    }, {
        dataField: 'name',
        text: 'User Name'
    }, {
        dataField: 'username',
        text: 'username'
    }];
    // branch master
    return (
        <>
            <BootstrapTable
                keyField='id'
                data={users}
                columns={columns}

            />
        </>
    );
}

