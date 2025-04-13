import { LogOut } from "lucide-react";
import { useState, useEffect } from "react";
import { PageTransition } from "/utils/PageTransition";
import { Button, Input, Layout, Typography, Form, Card } from "antd";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { Content } = Layout;
  const { Title } = Typography;
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn) {
      navigate("/dashboard");
    }
  }, [navigate]);

  const handleSubmit = async () => {
    try {
      const response = await fetch('/login.json');
      if (!response.ok) {
        throw new Error('Error al obtener los usuarios');
      }
      const user = await response.json();
  
      if (user.email === email && user.password === password) {
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("userEmail", email);
        navigate("/Dashboard");
      } else {
        console.log("Usuario o contraseña incorrectos");
      }
    } catch (error) {
      console.error('Error al intentar loguear:', error);
    }

    /*API para implementar: 
     const formData = { password,email };
    const data = await POST("login", formData);

    if (data?.statuscode === 500) {
      messageApi.error("Error en el servidor, mantenimiento");
      return;
    }
    */
  };

  return (
    <Layout>
      <PageTransition>
        <Content style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh" }}>
          <div style={{ width: "100%", maxWidth: "600px", }}>
            <Card style={{ padding: "20px", borderRadius: "8px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "30px", marginTop: "30px", }}>
                <LogOut style={{ fontSize: "2rem", color: "#2BB2E3", marginRight: "10px" }} />
                <Title level={1} style={{ margin: "0", fontSize: "1.8rem", color: "#2BB2E3", }}>Iniciar Sesión</Title>
              </div>
              <Form layout="vertical" onFinish={handleSubmit} requiredMark={false}>
                <div style={{ width: "100%", borderBottom: "1px solid black", marginBottom: "20px" }}></div>
                <Form.Item
                  label={<span style={{ fontSize: "1.2rem" }}>Correo Electronico</span>}
                  name="identificator"
                  rules={[{ required: true, message: "Ingrese Correo" }]}
                >
                  <Input
                    placeholder="Ingrese su Correo"
                    size="large"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Item>

                <Form.Item
                  label={<span style={{ fontSize: "1.2rem" }}>Contraseña</span>}
                  name="password"
                  rules={[{ required: true, message: "Ingrese Contraseña" }]}
                >
                  <Input.Password
                    placeholder="Ingrese su contraseña"
                    size="large"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Form.Item>
                <Form.Item>
                  <Button
                    htmlType="submit"
                    type="primary"
                    style={{ width: "100%", fontSize: "1rem", padding: "10px 0" }}
                    icon={<LogOut />}
                    size="large"
                  >
                    Iniciar Sesion
                  </Button>
                </Form.Item>
              </Form>
            </Card>
            <div style={{ textAlign: "center", fontSize: "0.875rem", color: "gray", marginTop: "10px" }}>
              © {new Date().getFullYear()} Gestor de Productos | Desarrollado por Grupo Tecnico.
            </div>
          </div>
        </Content>
      </PageTransition>
    </Layout>
  );
}
