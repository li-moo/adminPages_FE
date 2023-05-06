import { Form, Input, Button, message, Divider } from 'antd';
import axios from 'axios';
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { IProductFormValue, createProduct, updateProduct } from "@/client/sample/product";

interface MyFormValues {
  store_id: string;
  name: string;
  login_id: string;
  pwd: string;
}

interface IProductFormProps {
  id?: string;
  initialValues?: Partial<IProductFormValue>;
}


const StaffNew = ({ id, initialValues }: IProductFormProps) => {

  const [isLoading, setIsLoading] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();

  // const url_be = "http://localhost:8080/api/v1/staff/add";
  // http://localhost:8080/staff/add 
  // json-server --watch ./src/db/data.json --port 3001


  // const onFinish = (values: MyFormValues) => {
  //   axios.post("http://localhost:3001/staff", values)
  //     .then(response => {
  //       console.log(response);
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
  // };

  const onFinish = (values: MyFormValues) => {
    const url_be = "http://localhost:8080/api/v1/staff/add";
    axios(url_be,
      {
        method: 'post',
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
          withCredentials: true,
          mode: 'no-cors'
        },
        data: { //post 라면 . . .
          store_id: values.store_id,
          name: values.name,
          login_id: values.login_id,
          pwd: values.pwd
          // store_id: inputs.store_id,   
          // name: inputs.name,
          // login_id: inputs.login_id,
          // pwd: inputs.pwd
        }
      }
    ).catch(function (error) {
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      }
    })
  };



  return (
    <div className='items-center h-screen'>
      <Divider />
      <Form
        className='w-1/2'
        onFinish={onFinish}
      >
        <Form.Item label="점포 아이디" name="store_id">
          <Input />
        </Form.Item>
        <Form.Item label="이름" name="name">
          <Input />
        </Form.Item>
        <Form.Item label="로그인 아이디" name="login_id">
          <Input />
        </Form.Item>
        <Form.Item label="패스워드" name="pwd">
          <Input />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            저장
          </Button>
        </Form.Item>
        <Link href="/sample/staff/list/" className="min-w-[8rem] link-with-icon">
          <button> 직원 목록 페이지로 </button>
        </Link>
      </Form>
    </div>

  );
}

export default StaffNew;