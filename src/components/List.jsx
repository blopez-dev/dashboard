import React, { useState, useEffect } from 'react'
import PropTypes from "prop-types"

function List({ list }) {

    return (
        <div>
            {
                list.map(item => {
                    return (
                        <div key={item.title} style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                            <h4>{item.title}</h4>
                            <h4>{new Date(item.date).toLocaleString()}</h4>
                        </div>
                    )
                })
            }
        </div>
    )
}

List.propTypes = {
    list: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string,
            date: PropTypes.date
        })
    )
}

export default List