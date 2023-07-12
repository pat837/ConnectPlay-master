import React , {useState,useEffect} from 'react'
import { useSelector , useDispatch } from 'react-redux'
import DefaultLayout from '../components/DefaultLayout'
import { getAllGames } from '../redux/actions/gamesActions'
import { Col, Row , Divider , DatePicker, Checkbox} from 'antd'
import {Link} from 'react-router-dom'
import './Onoff.css';
import Spinner from '../components/Spinner';
import moment from 'moment'

function First(){
    return(
       <div className='first-page'>
       < DefaultLayout>

    <div className='cardss d-flex justify-content-center'>
    <div className="card" style={{width: "18rem",marginRight:"20px",marginTop:"50px"}} >
    <img src="https://images.unsplash.com/photo-1644571580646-7048372c491a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" className="card-img-top" alt="..."/>
    <div className="card-body">
    <h5 className="card-title" style={{color:"black"}}>ONLINE</h5>
    <p className="card-text" style={{color:"white"}}>Book slots to play your favorite online games</p>
    <Link to="/home" className="btn btn-light"style={{marginTop:"0.7rem"}}>BOOK NOW</Link>
  </div>
  </div>

  <div className="card" style={{width: "18rem",marginLeft:"20px",marginTop:"50px"}}>
  <img src="https://images.unsplash.com/photo-1503515091255-ab8063a1796d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title" style={{color:"black"}}>OFFLINE</h5>
    <p className="card-text" style={{color:"white"}}>Connect with players to play your favorite sports
    </p>
    <Link to="/home1" className="btn btn-light" style={{marginTop:"0.7rem"}}>BOOK NOW</Link>
  </div>
  </div>
  </div>
        </DefaultLayout>
       </div>
    )
}

export default First