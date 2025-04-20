import {
  Button,
  Form,
  FormProps,
  Input,
  Select,
  Typography,
  message,
} from "antd";
import { NoticeType } from "antd/es/message/interface";
import FormItem from "antd/es/form/FormItem";
import Password from "antd/es/input/Password";
import { useState } from "react";
import { INTRESTS_OPTIONS, US_STATES_OPTIONS } from "./config";
import { AuthService } from "src/services/auth";
import { useNavigate } from "react-router-dom";

const { Title, Text } = Typography;

type RegisterFieldType = {
  email: string;
  username: string;
  password: string;
  confirmPassword: string;
  applyingForHost?: string;
  interests?: string[];
  states?: string[];
};

export const Register = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [messageApi, contextHolder] = message.useMessage();
  const showPopup = (type: NoticeType, message: string) => {
    messageApi.open({
      type: type,
      content: message,
    });
  };

  const onFinish: FormProps<RegisterFieldType>["onFinish"] = (values) => {
    console.log(values, "values");
    try {
      AuthService.register({
        username: values.username,
        email: values.email,
        password_hash: values.password,
        host_status: values.applyingForHost,
        interests: values.interests,
        states: values.states,
      }).then((res) => {
        console.log(res);
        if (res.status == 200) {
          showPopup("success", "Account has been created");
          navigate("/home", { replace: true });
        } else {
          showPopup("error", res?.data?.message);
        }
      });
    } catch (error) {
      console.error(error);
    }
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
        name="interests"
      >
        <Select mode="tags" options={INTRESTS_OPTIONS} />
      </FormItem>
      <FormItem
        label="What states would you like to see events from?"
        name="states"
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
    <>
      {contextHolder}
      <Form
        form={form}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        layout="vertical"
        style={{ width: "100%" }}
        autoComplete="on"
      >
        <div style={{ display: currentStep === 1 ? "block" : "none" }}>
          <Step1 />
        </div>
        <div style={{ display: currentStep === 2 ? "block" : "none" }}>
          <Step2 />
        </div>

        <Text style={{ display: "block", marginTop: 12 }}>
          Already have an account? <a href="login">Sign in</a>
        </Text>
      </Form>
    </>
  );
};
