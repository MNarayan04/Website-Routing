import React from 'react';
import { useParams } from 'react-router-dom';

function User(props) {

    const userid=useParams();

    return (
        <div>
            <h2> Lorem ipsum USER : {userid} ulpa harum laudantium. </h2>
        </div>
    );
}

export default User;<h2> Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate culpa harum laudantium. </h2>