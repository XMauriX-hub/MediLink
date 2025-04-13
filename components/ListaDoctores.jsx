"use client";
import { useState } from "react";
import { Table, Button, Input, Space, Typography, Pagination, Layout } from "antd";
import { SearchOutlined, UserOutlined } from "@ant-design/icons";
import { Menu } from "./Menu";
import { PageTransition } from "../utils/PageTransition";
import { useNavigate } from "react-router-dom";

const { Title } = Typography;
const { Content } = Layout;

export default function ListaDoctores() {
  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();

  const users = [
    {
      id: 1,
      nombre: "Angel",
      apellido: "Gonzalez",
      correo: "agonzalez@gmail.com",
      rol: "Cliente",
      estado: "Inactivo",
      fechaRegistro: "16/03/2020",
    },
    {
      id: 2,
      nombre: "Jorge",
      apellido: "Perez",
      correo: "jperez@gmail.com",
      rol: "Cliente",
      estado: "Inactivo",
      fechaRegistro: "16/03/2020",
    },
    {
      id: 3,
      nombre: "Juan",
      apellido: "Salazar",
      correo: "jsalazar@gmail.com",
      rol: "Cliente",
      estado: "Activo",
      fechaRegistro: "15/03/2020",
    },
    {
      id: 4,
      nombre: "Leonel",
      apellido: "Fernandez",
      correo: "lfernandez@gmail.com",
      rol: "Cliente",
      estado: "Activo",
      fechaRegistro: "12/03/2020",
    },
    {
      id: 5,
      nombre: "Mayra",
      apellido: "Jimenez",
      correo: "mjimenez@gmail.com",
      rol: "Cliente",
      estado: "Activo",
      fechaRegistro: "10/03/2020",
    },
    {
      id: 6,
      nombre: "Stephanie",
      apellido: "Alvarez",
      correo: "salvarez@gmail.com",
      rol: "Cliente",
      estado: "Inactivo",
      fechaRegistro: "10/03/2020",
    },
  ];

  const columns = [
    {
      title: <span>Nombre</span>,
      dataIndex: "nombre",
      key: "nombre",
    },
    {
      title: <span>Apellido</span>,
      dataIndex: "apellido",
      key: "apellido",
    },
    {
      title: <span>Correo</span>,
      dataIndex: "correo",
      key: "correo",
    },
    {
      title: <span>Rol</span>,
      dataIndex: "rol",
      key: "rol",
    },
    {
      title: <span>Estado</span>,
      dataIndex: "estado",
      key: "estado",
    },
    {
      title: <span>Fecha de Registro</span>,
      dataIndex: "fechaRegistro",
      key: "fechaRegistro",
    },
    {
      title: <span>Acciones</span>,
      key: "acciones",
      render: (_, record) => (
        <Space style={{ justifyContent: "center", width: "100%" }}>
          <Button
            type="primary"
            style={{
              backgroundColor: "#FFC107",
              borderColor: "#FFC107",
              fontSize: "16px",
              padding: "8px 16px",
            }}
          >
            Editar
          </Button>
          <Button
            type="primary"
            style={{
              fontSize: "16px",
              padding: "8px 16px",
            }}
          >
            Detalle
          </Button>
          <Button
            type="primary"
            danger
            style={{
              fontSize: "16px",
              padding: "8px 16px",
            }}
          >
            Eliminar
          </Button>
        </Space>
      ),
    },
  ];

  const filteredUsers = users.filter((user) =>
    user.nombre.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <Layout>
      <PageTransition>
        <Content style={{ minHeight: "100vh", minWidth: "100vw", backgroundColor: "#f5f5f5", overflow: "hidden" }}>
          <Menu />
          <div style={{ padding: "20px", maxWidth: "100%", overflow: "auto" }}>
            <Button type="primary" style={{ width: 100, marginBottom: 20, }}
              onClick={() => navigate("/Dashboard")}
            >
              Volver
            </Button>
            <div style={{ backgroundColor: "#ffffff", borderRadius: "8px", boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)", padding: "24px" }}>
              <Space align="center" style={{ marginBottom: "24px" }}>
                <UserOutlined style={{ fontSize: "32px", color: "#1d4ed8",}} />
                <Title level={4} style={{ margin: 0 }}>
                  Lista de Doctores
                </Title>
              </Space>

              <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "24px" }}>
                <Button type="primary" style={{ width: 175 }}>
                  + Añadir nuevo Doctor
                </Button>
                <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 10, marginTop: 10 }}>
                  <Button type="primary">Exportar CSV</Button>
                  <Button type="primary">Exportar Excel</Button>
                  <Button type="primary">Exportar PDF</Button>
                </div>
                <Input
                  placeholder="Buscar Cliente"
                  prefix={<SearchOutlined />}
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                  style={{ width: "auto", padding: 10, fontSize: 20 }}
                />
              </div>

              <div style={{ overflowX: "auto", marginBottom: "24px" }}>
                <Table
                  columns={columns}
                  dataSource={filteredUsers}
                  rowKey="id"
                  pagination={false}
                  bordered={false}
                  style={{ minWidth: "900px" }}
                  components={{
                    header: {
                      cell: (props) => (
                        <th {...props} style={{ backgroundColor: "#105CE9", textAlign: "center", color: "#FFFFFF" }} />
                      ),
                    },
                    body: {
                      cell: (props) => (
                        <td {...props} style={{ textAlign: "center" }} />
                      ),
                    },
                  }}
                />
              </div>

              <div style={{ marginTop: "16px", textAlign: "center" }}>
                <Pagination defaultCurrent={1} total={6} pageSize={6} />
              </div>
            </div>

            <div style={{ textAlign: "center", color: "#6b7280", fontSize: "12px", marginTop: "24px" }}>
              © {new Date().getFullYear()} - Gestor de Productos | Desarrollado por Grupo Tecnológico
            </div>
          </div>
        </Content>
      </PageTransition>
    </Layout>
  );
}