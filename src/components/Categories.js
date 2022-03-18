import React from 'react'

const Categories = ({categories, handleFilter}) => {
  return (
    <div className='btn-container  categories'>
     {categories.map((category,index) => {
      return (
       <button type='button' className='btn-secondary btn-filter'
       key={index}
       onClick={()=>{handleFilter(category)}}
       >
        {category}
       </button>
      )
     })
    }
    </div>
  )
}



export default Categories
