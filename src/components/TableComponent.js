import React, { useState } from "react";
import { Table, Button, Space } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { deleteFormData, updateFormData } from "../actions/formActions";
import EditModal from "./EditModal";
import "../styles/formcomp.css";
const TableComponent = () => {
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.formReducer.formData);
  const [editingIndex, setEditingIndex] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const columns = [
    { title: "S.No", dataIndex: "sno", key: "sno" },
    { title: "Name", dataIndex: "name", key: "name" },
    { title: "Contact", dataIndex: "contact", key: "contact" },
    { title: "Email", dataIndex: "email", key: "email" },
    { title: "Weekday", dataIndex: "weekday", key: "weekday" },
    { title: "Gender", dataIndex: "gender", key: "gender" },
    { title: "DOB", dataIndex: "dob", key: "dob" },
    {
      title: "Action",
      key: "action",
      render: (_, record, index) => (
        <Space size="middle">
          <Button onClick={() => handleEdit(record, index)}>Edit</Button>
          <Button onClick={() => handleDelete(index)}>Delete</Button>
        </Space>
      ),
    },
  ];

  const handleDelete = (index) => {
    dispatch(deleteFormData(index));
  };

  const handleEdit = (record, index) => {
    setEditingIndex(index);
    setIsModalVisible(true);
  };

  const handleModalCancel = () => {
    setEditingIndex(null);
    setIsModalVisible(false);
  };

  const handleModalOk = (values) => {
    dispatch(updateFormData(editingIndex, values));
    setEditingIndex(null);
    setIsModalVisible(false);
  };

  const formatWeekdays = (weekdays) => {
    return weekdays.join(", ");
  };

  const tableData = formData.map((data, index) => ({
    ...data,
    sno: index + 1,
    dob: data.dob.format("YYYY-MM-DD"),
    weekday: formatWeekdays(data.weekday),
  }));
  console.log("Table data::>>", tableData);
  return (
    <>
      <div style={{ padding: "20px", borderRadius: "5px" }}>
        <Table columns={columns} dataSource={tableData} scroll={{ x: true }} />
        <EditModal
          visible={isModalVisible}
          onCancel={handleModalCancel}
          onOk={handleModalOk}
          initialValues={formData[editingIndex]}
        />
      </div>
    </>
  );
};

export default TableComponent;
