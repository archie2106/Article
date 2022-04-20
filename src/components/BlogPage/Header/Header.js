import React from 'react'
import './Header.css'

export default function Header({image}) {
    return (
        <header style={{backgroundImage: `url(${image})`}} />
    )
}
