import { Button, Form, FormProps, Input, Typography, message } from "antd";
import FormItem from "antd/es/form/FormItem";
import Password from "antd/es/input/Password";
import { AuthService } from "src/services";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "src/context/Auth";

const { Title, Text } = Typography;

export const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { checkAuth } = useAuth();

  type LoginFieldType = { email: string; password: string; remember?: string };

  const onFinish: FormProps<LoginFieldType>["onFinish"] = async (values) => {
    setIsLoading(true);
    try {
      await login(values.email, values.password);
      await checkAuth();
      navigate("/home", { replace: true });
      message.success("Login successful");
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      message.error("Login failed. Please try again.");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const login = async (email: string, password: string) => {
    console.log(import.meta.env.VITE_BASE_URL);
    try {
      const response = await AuthService.login({ email, password });
      return response;
    } catch (err) {
      console.error("Login failed:", err);
      throw err;
    }
  };

  const onFinishFailed: FormProps<LoginFieldType>["onFinishFailed"] = (
    errorInfo,
  ) => {
    console.log("Failed:", errorInfo);
    message.error("Please check your input and try again.");
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
          <Input disabled={isLoading} />
        </FormItem>
        <FormItem
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Password disabled={isLoading} />
        </FormItem>

        <Button
          type="primary"
          htmlType="submit"
          loading={isLoading}
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
