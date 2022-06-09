import React from 'react'
import './Card.css'


export default function Card(props){ 
    console.log(props)
    return ( 
    <div className="row mb-3">
            <div className="col-sm-3">
                       <img src={props.image} alt="..."/>
            </div>
     
           <div className=" col-sm-9 box">
           <div className="d-flex"> 
                  <i className="fa fa-map-marker mr-1" aria-hidden="true"></i>
                  <h6 className="locate mr-3">{props.location}</h6>
                  <a href="https://www.google.com/">View on Google Maps</a>
           </div>
           <h2 className="title mb-2">{props.title}</h2>
           <div className="date d-flex">
               <h6>{props['start date']}</h6>
               <h6 className="mx-1"> - </h6>
               <h6>{props['end date']}</h6>
           </div>
           <div className="desc">
               {props.description}
           </div>
        </div>
        </div>
    


    
    )
}