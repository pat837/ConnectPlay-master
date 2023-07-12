import { Col , Row , Form , Input} from 'antd'
import React from 'react'
import { useDispatch , useSelector } from 'react-redux'
import DefaultLayout1 from '../components/DefaultLayout1'
import Spinner from '../components/Spinner'
import { addGame1 } from '../redux/actions/gamesActions'
function AddGame1() {

    const dispatch = useDispatch()
    const {loading} = useSelector(state=>state.alertsReducer1)

    function onFinish(values){

         values.bookedTimeSlots=[]

         dispatch(addGame1(values))
         console.log(values)
    }

    return (
        <DefaultLayout1>
               {loading && (<Spinner />)}
               <Row justify='center mt-5'>
                   <Col lg={12} sm={24} xs={24} className='p-2'>
                       <Form className='bs1 p-2' layout='vertical' onFinish={onFinish}>
                           <h3>Add New Game</h3>
                           <hr />
                           <Form.Item name='name' label='Game name' rules={[{required: true}]}>
                               <Input/>
                           </Form.Item>
                           <Form.Item name='image' label='Image url' rules={[{required: true}]}>
                               <Input/>
                           </Form.Item>
                           <Form.Item name='rentPerHour' label='Cost per hour' rules={[{required: true}]}>
                               <Input/>
                           </Form.Item>
                           <Form.Item name='capacity' label='Capacity' rules={[{required: true}]}>
                               <Input/>
                           </Form.Item>
                           <Form.Item name='fuelType' label='Game Mode' rules={[{required: true}]}>
                               <Input/>
                           </Form.Item>

                           <div className='text-right'>
                           <button className='btn1'>ADD GAME</button>
                           </div>

                       </Form>
                   </Col>
               </Row>

        </DefaultLayout1>
    )
}

export default AddGame1