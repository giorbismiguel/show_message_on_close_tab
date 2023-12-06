import React, { ChangeEvent, useEffect, useState } from 'react'
import { Button, Form, Input } from 'antd'
import useUnSaveChangesWarning from '../../../../hooks/useUnSaveChangesWarning';
import { useQuery } from '@apollo/client';
import GET_COMPANY from '../../../../graphql/queries';


const PageOne = () => {

  const [initialValues, setInitialValues] = useState({
    name: '',
    website: '',
  });

  const { setShowExitPrompt } = useUnSaveChangesWarning();

  const [form] = Form.useForm<{ name: string; website: string }>();

  const { loading, data: company, error } = useQuery(GET_COMPANY, {
    variables: {
      id: 3074
    }
  });

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInitialValues({
      ...initialValues,
      [e.target.name]: e.target.value,
    });

    setShowExitPrompt(!!initialValues.name && !!initialValues.website ? true : false);
  }


  useEffect(() => {
    if (company) {
      // form.setFieldsValue({
      //   name: company.GetCompany.name,
      //   website: company.GetCompany.website
      // });

      setInitialValues(company.GetCompany);
    }

  }, [form, company]);

  // useEffect(() => 
  //   form.resetFields(), 
  // [form, initialValues])

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  return (
    <Form form={form} initialValues={initialValues}>
      <Form.Item label="Nombre" name='name'>
        <Input placeholder="Nombre" onChange={handleOnChange} />
      </Form.Item>

      <Form.Item label="Website" name='website'>
        <Input placeholder="Website" onChange={handleOnChange} />
      </Form.Item>

      <Form.Item>
        <Button type="primary" size="large">Submit</Button>
      </Form.Item>
    </Form>
  )
}

export default PageOne