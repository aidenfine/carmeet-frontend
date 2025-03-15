import { Button, Form, FormProps, Input, Select, Typography } from "antd";
import FormItem from "antd/es/form/FormItem";
import Password from "antd/es/input/Password";
import { useState } from "react";
import { INTRESTS_OPTIONS, US_STATES_OPTIONS } from "./config";

const { Title, Text } = Typography;

type RegisterFieldType = {
  email: string;
  username: string;
  password: string;
  confirmPassword: string;
  applyingForHost?: string;
  intrests?: string[];
  state?: string[];
};

export const Register = () => {
  const [form] = Form.useForm();
  const [currentStep, setCurrentStep] = useState(2);

  const onFinish: FormProps<RegisterFieldType>["onFinish"] = (values) => {
    console.log("Success:", values);
    // send data to backend
  };

  const onFinishFailed: FormProps<RegisterFieldType>["onFinishFailed"] = (
    errorInfo,
  ) => {
    console.log("Failed:", errorInfo);
  };

  const nextStep = () => {
    form.validateFields().then(() => {
      setCurrentStep(currentStep + 1);
    });
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };
  const Step1 = () => (
    <>
      <Title level={3}>Register</Title>
      <FormItem
        label="Email"
        name="email"
        rules={[{ required: true, message: "Please input your email!" }]}
      >
        <Input />
      </FormItem>
      <FormItem
        label="Username"
        name="username"
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        <Input />
      </FormItem>
      <FormItem
        label="Password"
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Password />
      </FormItem>
      <FormItem
        label="Confirm Password"
        name="confirmPassword"
        dependencies={["password"]}
        hasFeedback
        rules={[
          {
            required: true,
            message: "Please confirm your password!",
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue("password") === value) {
                return Promise.resolve();
              }
              return Promise.reject(
                new Error("The password that you entered do not match!"),
              );
            },
          }),
        ]}
      >
        <Password />
      </FormItem>
      <Button
        type="primary"
        onClick={nextStep}
        block
        style={{ marginTop: 16, borderRadius: 24 }}
      >
        Continue
      </Button>
    </>
  );

  const Step2 = () => (
    <>
      <Title level={3}>Personalization</Title>
      <FormItem label="Intrested in becoming a host?" name="applyingForHost">
        <Select
          options={[
            { value: "Yes", label: "Yes" },
            { value: "No", label: "No" },
            { value: "future", label: "Maybe in the future" },
          ]}
        />
      </FormItem>
      <FormItem
        label="What type of meets are you intrested in?"
        name="intrests"
      >
        <Select mode="tags" options={INTRESTS_OPTIONS} />
      </FormItem>
      <FormItem
        label="What states would you like to see events from?"
        name="state"
      >
        <Select
          mode="multiple"
          options={US_STATES_OPTIONS}
          filterOption={(input, option) =>
            (option?.label as string)
              .toLowerCase()
              .includes(input.toLowerCase())
          }
        />
      </FormItem>
      <Button onClick={prevStep} block style={{ borderRadius: 24 }}>
        Back
      </Button>
      <Button
        type="primary"
        htmlType="submit"
        block
        style={{ marginTop: 16, borderRadius: 24 }}
      >
        Continue
      </Button>
    </>
  );

  return (
    <Form
      form={form}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      layout="vertical"
      style={{ width: "100%" }}
      autoComplete="on"
    >
      {currentStep === 1 && <Step1 />}
      {currentStep === 2 && <Step2 />}

      <Text style={{ display: "block", marginTop: 12 }}>
        Already have an account? <a href="login">Sign in</a>
      </Text>
    </Form>
  );
};
