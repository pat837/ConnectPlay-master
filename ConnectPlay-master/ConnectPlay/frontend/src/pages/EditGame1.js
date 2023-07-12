import { Col, Row, Form, Input } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DefaultLayout1 from "../components/DefaultLayout1";
import Spinner from "../components/Spinner";
import { addGame1, editGame1, getAllGames1 } from "../redux/actions/gamesActions";
function EditGame1({ match }) {
  const { games } = useSelector((state) => state.gamesReducer1);
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.alertsReducer1);
  const [game, setgame] = useState();
  const [totalgames, settotalgames] = useState([]);
  useEffect(() => {
    if (games.length == 0) {
      dispatch(getAllGames1());
    } else {
      settotalgames(games);
      setgame(games.find((o) => o._id == match.params.gameid));
      console.log(game);
    }
  }, [games]);

  function onFinish(values) {
    values._id = game._id;

    dispatch(editGame1(values));
    console.log(values);
  }

  return (
    <DefaultLayout1>
      {loading && <Spinner />}
      <Row justify="center mt-5">
        <Col lg={12} sm={24} xs={24} className='p-2'>
          {totalgames.length > 0 && (
            <Form
              initialValues={game}
              className="bs1 p-2"
              layout="vertical"
              onFinish={onFinish}
            >
              <h3>Edit Game</h3>

              <hr />
              <Form.Item
                name="name"
                label="Game name"
                rules={[{ required: true }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="image"
                label="Image url"
                rules={[{ required: true }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="rentPerHour"
                label="Cost per hour"
                rules={[{ required: true }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="capacity"
                label="Capacity"
                rules={[{ required: true }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="fuelType"
                label="Game Mode"
                rules={[{ required: true }]}
              >
                <Input />
              </Form.Item>

              <div className="text-right">
                <button className="btn1">Edit GAME</button>
              </div>
            </Form>
          )}
        </Col>
      </Row>
    </DefaultLayout1>
  );
}

export default EditGame1;