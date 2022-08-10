import BootstrapTable from 'react-bootstrap-table-next';
import React, { useState, useEffect } from 'react';

export const Table = () => {

    const [users, setUsers] = useState([])

    useEffect(() => {
        let url = `https://jsonplaceholder.typicode.com/users`;
        fetch(url)
            .then(response => response.json())
            .then(data => setUsers(data))
    }, []);


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

    return (
        <>
            <BootstrapTable
            keyField='id'
            data={users}
            columns = {columns}
    
            />
        </>
    );
}

