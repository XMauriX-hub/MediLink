import { Image,Button } from "antd";
import { Header } from "antd/es/layout/layout";
import { LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";

export function Menu() {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("userEmail");
        navigate("/");
      };
    return (
        <Header
            style={{
                backgroundColor: "#117EE8",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%",
                padding: 20,
                paddingLeft: 0,
                marginBottom: 20,
                height: 80,
                overflow: "hidden",
            }}
        >
            <Image
                src="../Image/Logo.jpeg"
                alt="Logo"
                hoverable
                style={{
                    height: "100%",
                    width: "auto",
                    maxWidth: 150,
                    objectFit: "contain",
                    cursor: "pointer", 
                }}
                onClick={() => navigate("/Dashboard")}
                preview={false}
            />
            <Button
                icon={<LogOut style={{ height: 15, width: 15 }} />}
                onClick={() => handleLogout()}
                style={{height: 40, width: 150, }}
            >
             Cerrar Sesion
            </Button>
        </Header>
    );
}