import { Button, Form, FormProps, Input, Typography } from "antd";
import FormItem from "antd/es/form/FormItem";
import Password from "antd/es/input/Password";

const { Title, Text } = Typography;

export const Register = () => {
  type RegisterFieldType = {
    email?: string;
    username?: string;
    password?: string;
    confirmPassword?: string;
  };

  const onFinish: FormProps<RegisterFieldType>["onFinish"] = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed: FormProps<RegisterFieldType>["onFinishFailed"] = (
    errorInfo,
  ) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <>
      <Title level={3}>Register</Title>
      <Form
        name="login"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        layout="vertical"
        style={{ width: "100%" }}
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
          htmlType="submit"
          block
          style={{ marginTop: 16, borderRadius: 24 }}
        >
          Continue
        </Button>
      </Form>

      <Text style={{ display: "block", marginTop: 12 }}>
        Already have an account? <a href="login">Sign in</a>
      </Text>
    </>
  );
};
