import { useEffect, useState } from "react";
import { ListItem } from "./components/ListItem";
import axios from "axios";
import type { User } from "./types/user";
import './App.css';

//ユーザー情報の型定義(コンポーネント化)


export function App() {
  //取得したユーザー情報
  const [users, setUsers] = useState<User[]>([]);

  //画面表示時にユーザー情報取得
  useEffect(() =>{
    axios.get<User[]>("https://example.com/users").then((res) => {
      setUsers(res.data);
    })
  },[])

  return (
    <div>
     {users.map(user => (
       <ListItem 
       id={user.id} 
       name={user.name} 
       age={user.age}
       personalColor={user.personalColor}
       hobbies={user.hobbies}
      />
     ))}

    </div>
  );
};

export default App;
