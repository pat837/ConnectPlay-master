import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import DefaultLayout1 from "../components/DefaultLayout1";
import { deleteGame1, getAllGames1 } from "../redux/actions/gamesActions";
import { Col, Row, Divider, DatePicker, Checkbox, Edit } from "antd";
import { Link } from "react-router-dom";
import Spinner from "../components/Spinner";
import moment from "moment";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Popconfirm, message } from "antd";
const { RangePicker } = DatePicker;
function AdminHome1() {
  const { games } = useSelector((state) => state.gamesReducer1);
  const { loading } = useSelector((state) => state.alertsReducer1);
  const [totalGames, setTotalgames] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllGames1());
  }, []);

  useEffect(() => {
    setTotalgames(games);
  }, [games]);

  return (
    <DefaultLayout1>  
      <Row justify="center" gutter={16} className="mt-2">
        <Col lg={20} sm={24}>
          <div className="d-flex justify-content-between align-items-center">
            <h3 className="mt-1 mr-2">Admin</h3>
            <button className="btn1">
              <a href="/addgame1">ADD GAME</a>
            </button>
          </div>
        </Col>
      </Row>

      {loading == true && <Spinner />}

      <Row justify="center" gutter={16}>
        {totalGames.map((game) => {
          return (
            <Col lg={5} sm={24} xs={24}>
              <div className="game p-2 bs1">
                <img src={game.image} className="gameimg" />

                <div className="game-content d-flex align-items-center justify-content-between">
                  <div className="text-left pl-2">
                    <p>{game.name}</p>
                    <p> Cost Per Hour {game.rentPerHour} /-</p>
                  </div>

                  <div className="mr-4">
                    <Link to={`/editgame1/${game._id}`}>
                      <EditOutlined
                        className="mr-3"
                        style={{ color: "green", cursor: "pointer" }}
                      />
                    </Link>

                    <Popconfirm
                      title="Are you sure to delete this game?"
                      onConfirm={()=>{dispatch(deleteGame1({gameid : game._id}))}}
                      
                      okText="Yes"
                      cancelText="No"
                    >
                      <DeleteOutlined
                        style={{ color: "red", cursor: "pointer" }}
                      />
                    </Popconfirm>
                  </div>
                </div>
              </div>
            </Col>
          );
        })}
      </Row>
    </DefaultLayout1>
  );
}

export default AdminHome1;