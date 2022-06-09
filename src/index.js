import React from 'react'
import ReactDom from 'react-dom/client'
import './index.css'
import data from './data'
import Card from './Card'

function App(){

  const dataElem = data.map((item) => { 
    return ( 
          <Card 
          key = {item.id}
           {...item} />
    )
  })
  return ( 
    <div className="wrapper">
       <div className="wrapper-inner">
         <div className="header">
                   <div>
                      <i className="fa fa-globe  text-white" aria-hidden="true"></i>
                   </div>
                <h3> my travel journal.</h3>
           </div>
         <div className="px-5 pt-4">
         {dataElem}
         </div>
       </div>
    </div>
  )
}

const root = ReactDom.createRoot(document.getElementById('root'))
root.render(<App />)