import React from "react";
import { Modal, Form, Input, Button } from "antd";

const EditModal = ({ visible, onCancel, onOk, initialValues }) => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    onOk(values);
    form.resetFields();
  };

  return (
    <Modal
      visible={visible}
      title="Edit Record"
      onCancel={onCancel}
      footer={[
        <Button key="back" onClick={onCancel}>
          Cancel
        </Button>,
        <Button key="submit" type="primary" onClick={() => form.submit()}>
          Save
        </Button>,
      ]}
    >
      <Form form={form} initialValues={initialValues} onFinish={onFinish}>
        <Form.Item label="Name" name="name">
          <Input />
        </Form.Item>
        <Form.Item label="Contact" name="contact">
          <Input />
        </Form.Item>
        <Form.Item label="Email" name="email">
          <Input />
        </Form.Item>
        <Form.Item label="Weekday" name="weekday">
          <Input />
        </Form.Item>
        <Form.Item label="Gender" name="gender">
          <Input />
        </Form.Item>
        <Form.Item label="DOB" name="dob">
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default EditModal;
