import React from 'react'
import Person from './Person'
export default function NameList() {
    const names=['Bruce','Clark','Diana']
    // const persons=[
    //     {
    //         id:1,
    //         name:'Bruce',
    //         age:30,
    //         skill:'react'
    //     },
    //     {
    //         id:2,
    //         name:'Clark',
    //         age:30,
    //         skill:'react'
    //     },
    //     {
    //         id:3,
    //         name:'Diana',
    //         age:30,
    //         skill:'react'
    //     }
    // ]
    const nameList=names.map((name,index)=><h2 key={index}>{index} WElcome {name}</h2>)
    // const personList=persons.map(person=>(
    //     <Person key={person.id} person={person}/>
    // ))
    return (
        <div>
            {nameList}
             {/* {personList} */}
            
        </div>
    )
}
