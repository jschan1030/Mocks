import React from 'react';
import UsersList from '../components/UsersList';

const Users = () => {
    const USERS = [{id:'u1', image:'', name:'Man Man',}];
    return <UsersList items = {USERS} />
}

export default Users;