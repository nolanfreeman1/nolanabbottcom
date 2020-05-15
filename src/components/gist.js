import React from 'react';

export default ({content}) => {
    return (
        <div>
        {
            content.map((section) => {
                return (
                    <div>
                      <h2>{section.title}</h2>
                      <div style={{}}>

                      </div>
                    </div>
                );
            })
        }
        </div>
    );
}
