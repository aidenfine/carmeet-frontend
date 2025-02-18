import { Button, Form, FormProps, Input, Typography } from "antd";
import FormItem from "antd/es/form/FormItem";
import Password from "antd/es/input/Password";

const { Title, Text } = Typography;

export const Login = () => {
  type LoginFieldType = {
    email?: string;
    password?: string;
    remember?: string;
  };

  const onFinish: FormProps<LoginFieldType>["onFinish"] = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed: FormProps<LoginFieldType>["onFinishFailed"] = (
    errorInfo,
  ) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <>
      <Title level={3}>Sign in</Title>
      <Form
        name="login"
        layout="vertical"
        style={{ width: "100%" }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="on"
      >
        <FormItem
          label="Email"
          name="email"
          rules={[{ required: true, message: "Please input your email!" }]}
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

        <Button
          type="primary"
          htmlType="submit"
          loading={true}
          block
          style={{ marginTop: 16, borderRadius: 24 }}
        >
          Sign In
        </Button>
      </Form>

      <Text style={{ display: "block", marginTop: 12 }}>
        Don't have an account? <a href="/register">Sign up</a>
      </Text>
    </>
  );
};
