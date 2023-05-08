// import DefaultModal from "@/components/shared/ui/default-modal";
// import { Alert, Button, Form, Input } from "antd";
// import { useForm } from "antd/lib/form/Form";
// import { signIn } from "next-auth/react";
// import { useRouter } from "next/router";
// import React, { useCallback, useState } from "react";

// interface ILoginFormValue {
//   username: string;
//   password: string;
// }

// const LoginForm = () => {
//   const router = useRouter();
//   const [form] = useForm<ILoginFormValue>();
//   const [isLoading, setIsLoading] = useState(false);
//   const [showPasswordModal, setShowPasswordModal] = useState(false);

//   const handleFinish = useCallback(async (value: ILoginFormValue) => {
//     setIsLoading(true);

//     try {
//       console.log(value);
//       await signIn("login-credentials", { username: value.username, password: value.password });
//     } catch (error) {
//       setIsLoading(false);
//     }
//   }, []);

//   return (
//     <>
//       {router?.query.error && router?.query.error !== "CredentialsSignin" ? (
//         <div className="mb-3">
//           <Alert message={`로그인 중 오류가 발생했습니다. ${router?.query.error}`} type="warning" />
//         </div>
//       ) : null}

//       <div className="my-5 text-lg text-center text-gray-400"></div>
//       <Form<ILoginFormValue>
//         form={form}
//         layout="vertical"
//         initialValues={{ username: "admin", password: "admin" }} // 초기값
//         onFinish={handleFinish}
//       >
//         <div className="mb-3">
//           {router?.query.error === "CredentialsSignin" ? (
//             <>
//               <Alert message="로그인에 실패했습니다. 아이디 또는 비밀번호를 다시 확인해주세요." type="error" />
//             </>
//           ) : (
//             <></>
//           )}
//         </div>
//         <Form.Item name="username" rules={[{ required: true, message: "아이디를 입력해주세요" }]}>
//           <Input size="large" placeholder="아이디" />
//         </Form.Item>

//         <Form.Item name="password" rules={[{ required: true, message: "비밀번호를 입력해주세요" }]}>
//           <Input placeholder="비밀번호" type="password" size="large" />
//         </Form.Item>


//         <Button size="large" type="primary" htmlType="submit" className="w-full" loading={isLoading}>
//           로그인
//         </Button>

//         <a className="inline-block mt-2 text-gray-400" onClick={() => setShowPasswordModal(true)}>
//           비밀번호 찾기
//         </a>
//       </Form>

//       <DefaultModal title="비밀번호 찾기" open={showPasswordModal} handleHide={() => setShowPasswordModal(false)}>
//         🔑 임시 로그인 정보는 admin / admin 입니다.
//       </DefaultModal>
//     </>
//   );
// };

// export default React.memo(LoginForm);

import DefaultModal from "@/components/shared/ui/default-modal";
import { useState, useCallback } from "react";
import { useRouter } from "next/router";
import { useForm } from "antd/lib/form/Form";
import { Button, Form, Input, Alert} from "antd";
import axios from "axios";

interface ILoginFormValue {
  login_id: string;
  pwd: string;
} 

const LoginForm = () => {
  const router = useRouter();
  const [form] = useForm<ILoginFormValue>();
  const [isLoading, setIsLoading] = useState(false);
  const [showPasswordModal, setShowPasswordModal] = useState(false);

  // const onFinish = (values: ILoginFormValue) => {
    const onFinish = (values: ILoginFormValue) => {

    const url_be = "http://localhost:8080/api/v1/staff/login";
    // const url_be = "http://localhost:8080/staff/login";

    axios(url_be,
      {
        method: 'post',
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json',
          withCredentials: true,
          mode: 'no-cors'
        },
        data: {
          login_id: values.login_id,
          pwd: values.pwd
        }
      })
    .catch(function (error) {
      if (error.response) {
        setIsLoading(false);
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      }
    })
    console.log(values.login_id);
    console.log(values.pwd);
  };


  return (
    <>
      {router?.query.error && router?.query.error !== "CredentialsSignin" ? (
        <div className="mb-3">
          <Alert message={`로그인 중 오류가 발생했습니다. ${router?.query.error}`} type="warning" />
        </div>
      ) : null}

      <div className="my-5 text-lg text-center text-gray-400"></div>
      {/* <Form<ILoginFormValue> */}
      <Form
        form={form}
        layout="vertical"
        //initialValues={{ login_id: "admin", pwd: "admin" }} // 초기값
        onFinish={onFinish}
      >
        <div className="mb-3">
          {router?.query.error === "CredentialsSignin" ? (
            <>
              <Alert message="로그인에 실패했습니다. 아이디 또는 비밀번호를 다시 확인해주세요." type="error" />
            </>
          ) : (
            <></>
          )}
        </div>

        <Form.Item name="login_id" rules={[{ required: true, message: "아이디를 입력해주세요" }]}>
          <Input  size="large" placeholder="아이디" />
        </Form.Item>
        <Form.Item name="pwd" rules={[{ required: true, message: "비밀번호를 입력해주세요" }]}>
          <Input placeholder="비밀번호" type="password" size="large" />
        </Form.Item>
        <Button size="large" type="primary" htmlType="submit" className="w-full" loading={isLoading}>
          로그인
        </Button>
        <a className="inline-block mt-2 text-gray-400" onClick={() => setShowPasswordModal(true)}>
          비밀번호 찾기
        </a>
      </Form>
      <DefaultModal title="비밀번호 찾기" open={showPasswordModal} handleHide={() => setShowPasswordModal(false)}>
        🔑 임시 로그인 정보는 admin / admin 입니다.
      </DefaultModal>
    </>
  );
};

export default LoginForm;
