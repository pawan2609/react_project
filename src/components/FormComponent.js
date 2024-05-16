import React, { useState } from "react";
import { Form, Input, Checkbox, Radio, DatePicker, Button } from "antd";
import { useDispatch } from "react-redux";
import { addFormData } from "../actions/formActions";
import "../styles/formcomp.css";
const FormComponent = () => {
  const dispatch = useDispatch();
  const [form] = Form.useForm();

  const onFinish = (values) => {
    dispatch(addFormData(values));
    form.resetFields();
  };

  return (
    <div className="main-screen">
      <Form
        form={form}
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: "Please input your name!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              type: "email",
              message: "Please input a valid email!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Contact"
          name="contact"
          rules={[
            { required: true, message: "Please input your contact number!" },
          ]}
        >
          <Input type="number" />
        </Form.Item>

        <Form.Item name="weekday" label="Weekdays" valuePropName="checked">
          <Checkbox.Group>
            <Checkbox value="Monday">Monday</Checkbox>
            <Checkbox value="Tuesday">Tuesday</Checkbox>
            <Checkbox value="Wednesday">Wednesday</Checkbox>
            <Checkbox value="Thursday">Thursday</Checkbox>
            <Checkbox value="Friday">Friday</Checkbox>
          </Checkbox.Group>
        </Form.Item>

        <Form.Item name="gender" label="Gender">
          <Radio.Group>
            <Radio value="Male">Male</Radio>
            <Radio value="Female">Female</Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item label="DOB" name="dob">
          <DatePicker />
        </Form.Item>
        <div className="submit-btn">
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </div>
      </Form>
    </div>
  );
};

export default FormComponent;
