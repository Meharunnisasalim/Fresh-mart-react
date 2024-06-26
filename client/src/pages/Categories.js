import Layout from 'antd/es/layout/layout'
import { Link } from 'react-router-dom'
import React,{useState,useEffect} from 'react'
import useCategory from '../hooks/useCategory'

const Categories = () => {
    const categories=useCategory()
  return (
    <Layout title='All Categories'>
       <div className='container' style={{marginTop:"100px"}}>
        <div className='row container'>
            {categories.map((c)=>{
              <div className='col-md-6 mt-5 mb-3 gx-3 gy-3'
               key={c._id}>
                <Link to={`/category/${c.slug}`} 
                className='btn btn-primary'>
                    {c.name}</Link>
          </div>
            })}
        </div>
       </div>
    </Layout>
  )
}

export default Categories;
