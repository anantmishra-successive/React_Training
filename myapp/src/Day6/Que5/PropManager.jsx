import React from 'react';
    import Userprofile from './Userprofile';
    import Userdata from './UserData';

    const PropManager = () => {
        return (
            <Userprofile dataprop={Userdata} />
        );
    }
    export default PropManager;