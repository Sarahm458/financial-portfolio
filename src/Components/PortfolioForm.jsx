import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const PortfolioForm = ({ initialValues, onSubmit }) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={Yup.object({
        name: Yup.string().required('Required'),
        owner: Yup.string().required('Required'),
        totalValue: Yup.number().required('Required').positive(),
        creationDate: Yup.date().required('Required'),
      })}
      onSubmit={(values, { setSubmitting }) => {
        onSubmit(values);
        setSubmitting(false);
      }}
      enableReinitialize={true}
    >
      <Form className="bg-white shadow-lg rounded-lg p-6 space-y-4 mx-auto" style={{ width: '70%' }}>
        <div>
          <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Portfolio Name</label>
          <Field name="name" type="text" className="w-full p-2 border border-gray-300 rounded" />
          <ErrorMessage name="name" component="div" className="text-red-500 text-sm mt-1" />
        </div>

        <div>
          <label htmlFor="owner" className="block text-gray-700 font-semibold mb-2">Owner</label>
          <Field name="owner" type="text" className="w-full p-2 border border-gray-300 rounded" />
          <ErrorMessage name="owner" component="div" className="text-red-500 text-sm mt-1" />
        </div>

        <div>
          <label htmlFor="totalValue" className="block text-gray-700 font-semibold mb-2">Total Balance</label>
          <Field name="totalValue" type="number" className="w-full p-2 border border-gray-300 rounded" />
          <ErrorMessage name="totalValue" component="div" className="text-red-500 text-sm mt-1" />
        </div>

        <div>
          <label htmlFor="creationDate" className="block text-gray-700 font-semibold mb-2">Creation Date</label>
          <Field name="creationDate" type="date" className="w-full p-2 border border-gray-300 rounded" />
          <ErrorMessage name="creationDate" component="div" className="text-red-500 text-sm mt-1" />
        </div>

        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-200">
          {initialValues.id ? 'Update Portfolio' : 'Add Portfolio'}
        </button>
      </Form>
    </Formik>
  );
};

export default PortfolioForm;
