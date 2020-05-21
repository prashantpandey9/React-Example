import React from 'react'

export default function Person({person}) {
    return (
        <div>
            <h2>
            I am {person.name}. I am {person.age} Years old. I love {person.skill}
            </h2>
        </div>
    )
}
