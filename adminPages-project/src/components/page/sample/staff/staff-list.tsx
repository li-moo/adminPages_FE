import axios, { AxiosResponse } from 'axios';
import { useState } from 'react';

interface Staff {
  id: number;
  name: string;
  login_id: string;
  pwd: string;
  store_id: number;
}

const StaffList = () => {
  const [userData, setUserData] = useState<Staff[]>([]);
  const url_be = "http://localhost:8080/api/v1/staff/list"

  const fetchData = async () => {
    try {
      const response: AxiosResponse<Staff[]> = await axios.get<Staff[]>(url_be);
      setUserData(response.data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <button onClick={() => fetchData()}>데이터 가져오기</button>
      {userData.map((user) => (
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