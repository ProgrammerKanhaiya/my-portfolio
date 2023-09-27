import React from 'react'

const Cards = (props) => {
    let tech;
    if (props.technology !== undefined) {
        tech = JSON.parse(props.technology)

    }
    console.log('technology =', tech);
    return (
        <div className='bg-gray-100 min-h-[400px] shadow-md m-4 hover:cursor-pointer hover:scale-105 transition-all ease-in-out px-4'>
            <div className="w-full h-10">
                {props.image && <img src={props.image} alt="Project Image" className='w-25 h-10 m-auto rounded-lg' />}

            </div>
            <h1 className='text-xl font-bold text-[#3734e6] pt-4'><span>Project Name : &nbsp; </span>{props.name}</h1>
            {props.role && <span>Worked as a :&nbsp;&nbsp;{props.role}</span>}
            {props.description && <p className='text-gray-500 pt-4 text-justify'>{props.description}</p>}
            {tech && <div className='pt-3'>Technology Used &nbsp; :</div>}
            {tech && <ul className='pt-2'>
                {
                    tech && tech.map((items, index) => {
                        return (
                            <li className='text-gray-500' key={index}>{items}</li>
                        )
                    })
                }
            </ul>
            }
        </div>
    )

}

export default Cards