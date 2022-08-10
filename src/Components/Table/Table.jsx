import BootstrapTable from 'react-bootstrap-table-next';
import React, { useState, useEffect } from 'react';

export const Table = () => {

    const [users, setUsers] = useState([])

    const getUsers = async () => {
        try {
            let url = `https://jsonplaceholder.typicode.com/users`
            const response = await fetch(url)
            const data = await response.json()
            setUsers(data)
        }
        catch (erro) {
            console.log(erro)
        }

    }

    const columns = [{
        dataField: 'name',
        text: 'User ID'
    }, {
        dataField: 'id',
        text: 'User Name'
    }, {
        dataField: 'username',
        text: 'usernama'
    }];
    // branch master
    return (
        <>

            {console.log(users)}
            {/* <BootstrapTable
                keyField='id'
                data={users}
                columns={columns}

            /> */}
        </>
    );
}

