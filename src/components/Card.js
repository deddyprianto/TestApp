import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { takeData } from "../features/app/counterSlice";

const Card = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.app.data);
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("https://jsonplaceholder.typicode.com/posts");
      const res = await data.json();
      dispatch(takeData(res));
    };
    fetchData();
  }, []);
  // userId: 1,
  // id: 1,
  // title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
  // body: "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto"
  return (
    <div className="container">
      {data.map((data) => (
        <div key={data.id} className="card" style="width: 18rem;">
          <div className="card-body">
            <h5 className="card-title">{data.title}</h5>
            <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
            <p className="card-text">{data.body}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
