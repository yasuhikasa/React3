import type { User } from "../types/user";
import type { FC } from "react";

//ユーザー情報の型定義(コンポーネント化)



export const ListItem: FC<User> = props =>{
    const { id, name, age, personalColor, hobbies } = props;
    return (
        
         <p style={{ color: personalColor }}>
            {id}:{name}({age}){hobbies?.join("/")}
        </p>
    );
};

