import React from 'react';
import { Link } from 'react-router-dom';
import DefaultLayout from '../components/DefaultLayout';
import './Onoff.css';



class Headcards extends React.Component {
  render(){
    return (
      <DefaultLayout>
     
  
  <div className='cardss d-flex justify-content-center'>

  <div className="card" style={{width: "18rem",marginRight:"20px",marginTop:"50px"}} >
  <img src="https://static.toiimg.com/thumb/msid-80594781,width-238,height-134,resizemode-4/.jpg" className="card-img-top" alt="..."/>
  <div className="card-body">
  <h5 className="card-title" style={{color:"white"}}>Card title</h5>
    <p className="card-text" style={{color:"white"}}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <Link to="/online" className="btn btn-light">Online</Link>
  </div>
  </div>

  <div className="card" style={{width: "18rem",marginLeft:"20px",marginTop:"50px"}}>
  <img src="https://static01.nyt.com/images/2021/10/13/sports/13soccer-video/merlin_196217397_01e4ddb2-4c38-4296-91f8-ebfde83ce2bb-mobileMasterAt3x.jpg" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title" style={{color:"white"}}>Card title</h5>
    <p className="card-text" style={{color:"white"}}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="/" className="btn btn-light">Offline</a>
  </div>
</div>

  </div> 
  
 
  </DefaultLayout>
  );
    }
  
};

export default Headcards;