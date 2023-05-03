
import { IProductFormValue, createProduct, updateProduct } from "@/client/sample/product";
import CodemirrorEditor from "@/components/shared/form/control/codemirror-editor";
import QuillEditor from "@/components/shared/form/control/quill-editor";
import DefaultForm from "@/components/shared/form/ui/default-form";
import FormGroup from "@/components/shared/form/ui/form-group";
import FormSection from "@/components/shared/form/ui/form-section";
import { Button, Divider, Form, Input, Radio, Select, message } from "antd";
import { useForm } from "antd/lib/form/Form";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { getDefaultLayout } from "@/components/layout/default-layout";
import pageHeader from "@/components/layout/page-header";
import axios from "axios";

interface IProductFormProps {
  id?: string;
  initialValues?: Partial<IProductFormValue>;
}

// const router = useRouter();

const StaffForm = ({ id, initialValues }: IProductFormProps) => {
  const [form] = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();

  const [inputs, setInputs] = useState({
    store_id: "",
    name: "",
    login_id: "",
    pwd: "",
  });

  //api
  useEffect(() => {
    createStaffs();
    // deleteStaffs();
  }, []);

  /*create staff*/
  const createStaffs = () => {
    return axios.post("http://localhost:3001/staff", {
      store_id: inputs.store_id,
      name: inputs.name,
      login_id: inputs.login_id,
      pwd: inputs.pwd
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
    <>
      {contextHolder}
      <DefaultForm<IProductFormValue> form={form} initialValues={initialValues} onFinish={handleFinish}>
        <FormSection title="기본정보" description="직원 기본 정보를 입력해주세요">

          <Divider />

          <FormGroup title="점포 아이디*">
            <Form.Item name="store_id" rules={[{ required: true, message: "필수값입니다" }]}>
              <Select style={{ maxWidth: 250 }} placeholder="매장 아이디를 선택하세요">
                <Select.Option value="1">store01</Select.Option>
                <Select.Option value="2">store02</Select.Option>
                <Select.Option value="3">store03</Select.Option>
                <Select.Option value="4">store04</Select.Option>
                <Select.Option value="5">store05</Select.Option>
                <Select.Option value="6">store06</Select.Option>
              </Select>
            </Form.Item>
          </FormGroup>

          <Divider />

          <FormGroup title="이름*">
            <Form.Item name="name" rules={[{ required: true, message: "필수값입니다" }]}>
              <Input placeholder="이름을 입력하세요" />
            </Form.Item>
          </FormGroup>

          <Divider />

          <FormGroup title="로그인 ID*">
            <Form.Item name="login_id" rules={[{ required: true, message: "필수값입니다" }]}>
              <Input placeholder="로그인 ID 입력하세요" />
            </Form.Item>
          </FormGroup>

          <Divider />

          <FormGroup title="패스워드*">
            <Form.Item name="pwd" rules={[{ required: true, message: "필수값입니다" }]}>
              <Input placeholder="패스워드를 입력하세요" />
            </Form.Item>
          </FormGroup>
        </FormSection>

        <div className="text-center">
          <Button htmlType="submit" type="primary" loading={isLoading} onClick={createStaffs}>
            저장
          </Button>
          <Link href="/sample/staff/list/" className="min-w-[8rem] link-with-icon">
            <button> 직원 목록 페이지로 </button>
          </Link>
        </div>
      </DefaultForm>
    </>
  );
};

StaffForm.getLayout = getDefaultLayout;
StaffForm.pageHeader = pageHeader;

export default React.memo(StaffForm);
