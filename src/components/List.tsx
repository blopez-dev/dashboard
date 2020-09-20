import React, { useState, useEffect, ReactElement } from 'react'

interface Item {
  title: string,
  date: Date,
}

const array: Array<Item | string> = [{ title: '123', date: new Date() }, 'hola', 'que', 'tal']

interface Props {
  list: Array<Item | string> // Array<Item> || Array<string> || Array<number> || Array<Object> || Array<any>
}

function List({ list }: Props): ReactElement {

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