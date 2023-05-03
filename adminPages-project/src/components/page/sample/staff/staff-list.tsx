import axios from 'axios';
import { useState } from 'react';

interface Staff {
  map(arg0: (user: any) => JSX.Element): import("react").ReactNode;
  id: number;
  name: string;
  login_id: string;
  pwd: string;
  store_id: number;
}

const StaffList = () => {
  const [userData, setUserData] = useState<Staff | null>(null);

  const fetchData = async (params: any) => {
    try {
      const response = await axios.get('http://localhost:3001/staff', { params });
      setUserData(response.data);
      // setUserData(response.data[0]);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (

    <div>
      <button onClick={() => fetchData({})}>데이터 가져오기</button>
      {userData && userData.map((user) => (
        <div key={user.id}>
          <div>ID: {user.id}</div>
          <div>이름: {user.name}</div>
          <div>로그인 ID: {user.login_id}</div>
          <div>비밀번호: {user.pwd}</div>
          <div>Store ID: {user.store_id}</div>
        </div>
      ))}
    </div>
  );
};

export default StaffList;