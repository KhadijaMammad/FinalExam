import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import "../../assets/styles/add.css"
import Header from "./Header";
import Table from "./Table";


export default function AddPage() {

  const validationSchema = Yup.object({
    image: Yup.string()
      .url("Invalid URL format")
      .required("Image URL is required"),
    name: Yup.string()
      .min(2, "Name must be at least 2 characters")
      .required("Name is required"),
    degrees: Yup.number()
      .positive("Price must be a positive number")
      .required("Price is required"),
    description: Yup.string()
      .min(2, "Name must be at least 2 characters")
      .required("Name is required"),
  });

  const initialValues = {
    image: "",
    name: "",
    degrees: "",
    description: "",
  };

  const handleSubmit = async (values, { resetForm }) => {
    try {
      console.log(values);

      const response = await axios.post("http://localhost:5000/sell", values);
      if (response.status === 201 || response.status === 200) {
        setData((prevData) => [...prevData, response.data]);
        resetForm();
      }
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  };

  return (
    <>
         <Header/>
      <div className="container">
        <div className="add-form">
          <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
          >
            {() => (
              <Form>
                <div className="add-product">
                  <label>Image:</label>
                  <Field type="text" name="image" className="field" />
                  <ErrorMessage
                    name="image"
                    component="div"
                    className="error"
                  />
                </div>
                <div className="add-product">
                  <label>Name:</label>
                  <Field type="text" name="name" className="field" />
                  <ErrorMessage name="name" component="div" className="error" />
                </div>
                <div className="add-product">
                  <label>Degrees:</label>
                  <Field type="number" name="price" className="field" />
                  <ErrorMessage
                    name="price"
                    component="div"
                    className="error"
                  />
                </div>
                <div className="add-product">
                  <label>Description:</label>
                  <Field type="text" name="name" className="field" />
                  <ErrorMessage name="name" component="div" className="error" />
                </div>
                <button type="submit" className="submit">
                  Submit
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
      <Table/>
    </>
  );
}
