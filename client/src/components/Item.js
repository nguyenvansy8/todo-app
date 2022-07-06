import React from 'react'
import { Icon } from '@iconify/react';

export default function Item({text, remove, update}) {
    return (
        <div className="item">
            <div className="text">{text}</div>
            <div className="icons">
                <Icon icon="ri:pencil-fill" onClick={update}></Icon>
                <Icon icon="ri:delete-bin-2-fill" onClick={remove}></Icon>
            </div>
        </div>
    )
}