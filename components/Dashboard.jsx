"use client"
import { Layout, Card, Typography } from "antd";
import { CalendarOutlined, UserOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { Menu } from "./Menu"
import { PageTransition } from "../utils/PageTransition";
import { useAuthCheck } from "../utils/AuthCheck";
import { LoadingScreen } from "../utils/LoadingScreen";

const { Content } = Layout;
const { Text } = Typography;

export default function Dashboard() {
    const navigate = useNavigate();

      const checkingAuth = useAuthCheck();
    
      if (checkingAuth) return <LoadingScreen />;

    return (
        <Layout style={{ minHeight: "100vh" }}>
            <PageTransition>
                <Menu />
                <Content>
                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", padding: "16px" }}>
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                flexWrap: "wrap",
                                marginTop: "10px",
                                gap: "16px",
                            }}
                        >
                            <Card
                                hoverable
                                style={{
                                    textAlign: "center",
                                    width: "250px",
                                    height: "120px",
                                    flex: "1 1 calc(100% - 32px)",
                                    maxWidth: "250px",
                                    maxHeight: "120px",
                                }}
                                onClick={() => navigate("/Pacientes")}
                            >
                                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                                    <CalendarOutlined style={{ color: "blue", fontSize: "2.5rem", marginBottom: "8px" }} />
                                    <Text>Lista de Pacientes</Text>
                                </div>
                            </Card>
                            <Card
                                hoverable
                                style={{
                                    textAlign: "center",
                                    width: "250px",
                                    height: "120px",
                                    flex: "1 1 calc(100% - 32px)",
                                    maxWidth: "250px",
                                    maxHeight: "120px",
                                }}
                                onClick={() => navigate("/Doctores")}
                            >
                                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                                    <UserOutlined style={{ color: "blue", fontSize: "2.5rem", marginBottom: "8px" }} />
                                    <Text>Lista de Doctores</Text>
                                </div>
                            </Card>
                        </div>
                    </div>
                </Content>
            </PageTransition>
        </Layout>
    );
}