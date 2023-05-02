// export default function StaffAdd() {

//     return(
//         <div>
//             <h2>직원 등록 페이지 안녕하세여!!</h2>
            
//         </div>
//     );
// }
import { IProductFormValue, createProduct, updateProduct } from "@/client/sample/product";
import CodemirrorEditor from "@/components/shared/form/control/codemirror-editor";
import QuillEditor from "@/components/shared/form/control/quill-editor";
import DefaultForm from "@/components/shared/form/ui/default-form";
import FormGroup from "@/components/shared/form/ui/form-group";
import FormSection from "@/components/shared/form/ui/form-section";
import { Button, Divider, Form, Input, Radio, Select, message } from "antd";
import { useForm } from "antd/lib/form/Form";
import React, { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

interface IProductFormProps {
  id?: string;
  initialValues?: Partial<IProductFormValue>;
}

// const router = useRouter();

const ProductForm = ({ id, initialValues }: IProductFormProps) => {
  const [form] = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();

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
                <Select.Option value="store01">store01</Select.Option>
                <Select.Option value="store02">store02</Select.Option>
                <Select.Option value="store03">store03</Select.Option>
                <Select.Option value="store04">store04</Select.Option>
                <Select.Option value="store05">store05</Select.Option>
                <Select.Option value="store06">store06</Select.Option>
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
            <Form.Item name="staff_id" rules={[{ required: true, message: "필수값입니다" }]}>
              <Input placeholder="로그인 ID 입력하세요" />
            </Form.Item>
          </FormGroup>

          <Divider />

          <FormGroup title="패스워드*">
            <Form.Item name="password" rules={[{ required: true, message: "필수값입니다" }]}>
              <Input placeholder="패스워드를 입력하세요" />
            </Form.Item>
          </FormGroup>
        </FormSection>
{/* 
        <FormSection title="상품상세" description="상품 상세 정보를 입력해주세요">
          <FormGroup title="상품상세">
            <Form.Item name="description">
              <QuillEditor />
            </Form.Item>
          </FormGroup>

          <Divider />
        </FormSection> */}

        <div className="text-center">
          <Button htmlType="submit" type="primary" loading={isLoading}>
            저장
          </Button>
          <Link href="/sample/staff/list/" className="min-w-[8rem] link-with-icon">
          <button> 직원 등록 링크</button>
        </Link>

          {/* <Button type="primary" onClick={() => router.push("/sample/staff/list/add")}>
            직원 등록 버튼
          </Button> */}
        </div>
      </DefaultForm>
    </>
  );
};

export default React.memo(ProductForm);