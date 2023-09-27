import React from 'react'

const Cards = (props) => {
    let tech;
    if(props.technology !== undefined){
      tech = JSON.parse(props.technology)

    }
    console.log('technology =', tech);
    return (
        <div className='bg-gray-100 h-[400px] shadow-md m-4 hover:cursor-pointer hover:scale-105 transition-all ease-in-out '>
            <h1 className='text-xl font-bold text-[#3734e6] text-center'>{props.name}</h1>
            {props.role && <span>Worked as a :&nbsp;&nbsp;{props.role}</span>}
            { tech && <span>Technology Used :</span>} <ul>
                {
                    tech && tech.map((items , index)=>{
                        return(
                            <li className='text-gray-500' key={index}>{items}</li>
                        )
                    })
                }
            </ul>
        </div>
    )

}

export default Cards