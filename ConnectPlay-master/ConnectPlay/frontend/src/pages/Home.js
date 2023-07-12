import React , {useState,useEffect} from 'react'
import { useSelector , useDispatch } from 'react-redux'
import DefaultLayout from '../components/DefaultLayout'
import { getAllGames } from '../redux/actions/gamesActions'
import { Col, Row , Divider , DatePicker, Checkbox} from 'antd'
import {Link} from 'react-router-dom'
import Spinner from '../components/Spinner';
import moment from 'moment'
const {RangePicker} = DatePicker
function Home() {
    const {games} = useSelector(state=>state.gamesReducer)
    const {loading} = useSelector(state=>state.alertsReducer)
    const [totalGames , setTotalgames] = useState([])
    const dispatch = useDispatch()
    

    useEffect(() => {
        dispatch(getAllGames())
    }, [])

    useEffect(() => {

        setTotalgames(games)
        
    }, [games])


    function setFilter(values){

        var selectedFrom = moment(values[0] , 'MMM DD yyyy HH:mm')
        var selectedTo = moment(values[1] , 'MMM DD yyyy HH:mm')

        var temp=[]

        for(var game of games){

              if(game.bookedTimeSlots.length == 0){
                  temp.push(game)
              }
              else{

                   for(var booking of game.bookedTimeSlots) {

                       if(selectedFrom.isBetween(booking.from , booking.to) ||
                       selectedTo.isBetween(booking.from , booking.to) || 
                       moment(booking.from).isBetween(selectedFrom , selectedTo) ||
                       moment(booking.to).isBetween(selectedFrom , selectedTo)
                       )
                       {

                       }
                       else{
                           temp.push(game)
                       }

                   }

              }

        }


        setTotalgames(temp)


    }

    return (
        <DefaultLayout>

             {/* <Row className='mt-3' justify='center'>
                 
                 <Col lg={20} sm={24} className='d-flex justify-content-left'>

                     <RangePicker showTime={{format: 'HH:mm'}} format='MMM DD yyyy HH:mm' onChange={setFilter}/>
                 
                 </Col>

             </Row> */}

              {loading == true && (<Spinner/>)}

              
              <Row justify='center' gutter={16}>

                   {totalGames.map(game=>{
                       return <Col lg={5} sm={24} xs={24}>
                            <div className="game p-2 bs1">
                               <img src={game.image} className="gameimg"/>

                               <div className="game-content d-flex align-items-center justify-content-between">

                                    <div className='text-left pl-2'>
                                        <p>{game.name}</p>
                                        <p> Cost Per Hour {game.rentPerHour} /-</p>
                                    </div>

                                    <div>
                                        <button className="btn1 mr-2"><Link to={`/booking/${game._id}`}>Book Now</Link></button>
                                    </div>

                               </div>
                            </div>
                       </Col>
                   })}

              </Row>

        </DefaultLayout>
    )
}

export default Home