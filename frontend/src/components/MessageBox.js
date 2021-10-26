import React from 'react';

export default function MessageBox(props) {
    //error msg is passed as props here
    return (
        <div className={`alert alert-${props.variant || 'info'}`}>
            {props.children}
        </div>
    );
}