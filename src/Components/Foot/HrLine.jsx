import React from 'react'

const HrLine = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: '0.33rem',
            margin: '1rem 0 1rem 0'
        }}
    />
);

export default HrLine