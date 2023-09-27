import React from 'react'


import Cards from './Cards'

const projects = [
  {
    "id" : 1,
    "name": "ICICI - INSTA SAVE ACCOUNT",
    "role" : "Full Stack Developer"
  },
  {
    "id" : 2,
    "name": "Project 2",
  },
  {
    "id" : 3,
    "name": "Project 3",
  },
  {
    "id" : 4,
    "name": "Project 4",
  },
  {
    "id" : 5,
    "name": "Project 5",
    "technology" :[
      "Node js ",
      "Express js ",
      "MongoDB ",
    ]
  },
]

const Projects = ()=> {
  return (
    <div className="p-5 grid grid-cols-1 md:grid-cols-3 shadow-transparent ">
      {
        projects.map((items)=>{
          console.log('items =',items);
          return(
            <Cards key={items.id} name={items.name} technology={JSON.stringify(items.technology)} role={items.role?items.role:null }/>
          )
        })
      }
     
    
    </div>
  )
}

export default Projects