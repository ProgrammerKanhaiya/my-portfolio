import React from 'react'


import Cards from './Cards'

const projects = [
  {
    "id" : 1,
    "name": "ICICI - Projects",
    "role" : "Full Stack Developer",
    "image" : "https://upload.wikimedia.org/wikipedia/commons/1/12/ICICI_Bank_Logo.svg",
    "technology" :[
      "Node js ",
      "React js",
      "MySQl",
    ],
    "description" : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived"
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
    <div className="pt-4 grid grid-cols-1 md:grid-cols-3 shadow-transparent px-10 ">
      {
        projects.map((items)=>{
          console.log('items =',items);
          return(
            <Cards key={items.id} name={items.name} image={items.image} technology={JSON.stringify(items.technology)} role={items.role?items.role:null } description ={items.description}/>
          )
        })
      }
     
    
    </div>
  )
}

export default Projects