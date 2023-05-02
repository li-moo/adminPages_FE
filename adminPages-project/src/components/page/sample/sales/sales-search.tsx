import { IProductFormValue } from "@/client/sample/product";
import DateRangeField from "@/components/shared/form/control/date-range-field";
import DefaultSearchForm from "@/components/shared/form/ui/default-search-form";
import FieldInline from "@/components/shared/form/ui/field-inline";
import FormSearch from "@/components/shared/form/ui/form-search";
import { Button, Checkbox, Form, Input, Select } from "antd";
import { useForm } from "antd/lib/form/Form";
import { Search } from "lucide-react";
import { useRouter } from "next/router";
import React, { useCallback } from "react";

const statusOptions = [
  { label: "전체", value: "ALL" },
  { label: "판매중", value: "SALE" },
  { label: "품절", value: "SOLDOUT" },
  { label: "판매중단", value: "NOTSALE" },
];

const SalesSearch = () => {
  const [form] = useForm();
  const router = useRouter();

  const handleFinish = useCallback(
    (formValue: IProductFormValue) => {
      router.push({
        pathname: router.pathname,
        query: { ...router.query, ...formValue },
      });
    },
    [router]
  );

  return (
    <DefaultSearchForm form={form} onFinish={handleFinish}>
      <FormSearch>
        <FieldInline>
          <Form.Item label="기간" name="searchDateType" initialValue="created">
            <Select dropdownMatchSelectWidth={false}>
              <Select.Option value="created">등록일자</Select.Option>
              <Select.Option value="updated">수정일자</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item name="searchDatePeriod">
            <DateRangeField />
          </Form.Item>

        </FieldInline>
      </FormSearch>
    </DefaultSearchForm>
  );
};

export default React.memo(SalesSearch);
