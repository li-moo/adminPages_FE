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


// const StaffForm = ({ id, initialValues }: IProductFormProps) => {
const StaffNew = ({ id, initialValues }: IProductFormProps) => {

  const [isLoading, setIsLoading] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();

  const onFinish = (values: MyFormValues) => {
    axios.post("http://localhost:3001/staff", values)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  };

  const handleFinish = async (formValue: IProductFormValue) => {
    try {
      setIsLoading(true);

      if (id) {
        await updateProduct(id, formValue);
        messageApi.success("수정되었습니다");
      } else {
        await createProduct(formValue);
        messageApi.success("생성되었습니다");
      }
    } catch (e: unknown) {
      messageApi.error("에러가 발생했습니다");
    } finally {
      setTimeout(() => setIsLoading(false), 500);
    }
  };

  return (
    <div className='items-center h-screen'>
      <Divider />
      <Form className='w-1/2' onFinish={onFinish}>
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