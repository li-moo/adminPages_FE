import axios from "axios";
import React, { useEffect, useState } from "react";
import Link from "next/link";

export default function StaffForm() {
//   const [login, setLogin] = useState([]);
  const [inputs, setInputs] = useState({
    store_id: "",   
    name: "",
    login_id: "",
    pwd: ""
  });

  //api
  useEffect(() => {
    createStaffs();
    // deleteUsers();
  }, []);

// json-server --watch ./src/db/data.json --port 3001

  // "http://localhost:3001/staff"
  // http://localhost:8080/staff/add
  const createStaffs = () => {
    return axios.post("http://localhost:3001/staff", {
    store_id: inputs.store_id,   
    name: inputs.name,
    login_id: inputs.login_id,
    pwd: inputs.pwd
    });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    const store_id = e.target.store_id.value;
    const name = e.target.name.value;
    const login_id = e.target.login_id.value;
    const pwd = e.target.pwd.value;
    console.log(`name ${name}, login_id ${login_id}`);
  };

  const handleOnChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
    // console.log(inputs.id);
  };
  return (
    <div className="h-screen flex items-center flex justify-center"> 
      <form
        onSubmit={handleSubmit}
        onChange={handleOnChange}
        className="ml-4 flex flex-col w-2/12"
      >
        <label>storeid</label>
        <input className="border" type="text" name="store_id" />

        <label>이름</label>
        <input className="border" type="text" name="name" />

        <label>loginid</label>
        <input className="border" type="text" name="login_id" />

        <label>password</label>
        <input className="border" type="password" name="pwd" />


        <button className="bg-red-100 p-3 mt-4" onClick={createStaffs}>
          Submit
        </button>
      <Link href="/sample/staff/list/" className="min-w-[8rem] link-with-icon">
          <button> 직원 목록 페이지로 </button>
      </Link>
      </form>

    </div>
  );
}