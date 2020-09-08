import React, { useState, useEffect } from 'react'

interface Item {
  title: string,
  date: Date,
}

interface Props {
  list: Array<Item>
}

function List({ list }: Props) {

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

export default List