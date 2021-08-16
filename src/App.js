import "./App.css";
//dispatch는 action불러오고 useSelector는 상태값불러옴
import { useDispatch, useSelector } from "react-redux";
import { getUsersFetch } from "./actions";

function App() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.reducers.users);
  return (
    <div className="App">
      <div>
        Users:
        {users.map((user) => (
          <div>{user.name}</div>
        ))}
      </div>
      <button onClick={() => dispatch(getUsersFetch())}>dispatch</button>
    </div>
  );
}

export default App;
