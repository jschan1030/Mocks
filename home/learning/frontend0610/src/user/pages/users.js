import React from "react";

import UsersList from "../components/UsersList";

const Users = () => {
    const USERS = [
        { id: 'u1', name: 'J Chan', image: `${process.env.PUBLIC_URL}/iuhp2023sample.png`, places: 3 }
    ]
    
    return <UsersList items={USERS} />
}

export default Users;