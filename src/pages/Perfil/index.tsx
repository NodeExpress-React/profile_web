// import { Link, useNavigate } from "react-router-dom";
import * as React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import api from "../../services/api";

function stringToColor(string: string) {
  let hash = 0;
  let i;

  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = "#";

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }

  return color;
}

function stringAvatar(name: string) {
  const nameParts = name.split(" ");
  return {
    sx: {
      bgcolor: stringToColor(name),
      width: 72,
      height: 72,
      fontSize: 40,
    },
    children: `${nameParts[0][0]}${nameParts[1] ? nameParts[1][0] : ""}`,
  };
}

interface User {
  email: string;
  name: string;
}

function Perfil() {
  const [userProfile, setUserProfile] = React.useState<User>();

  React.useEffect(() => {
    async function loadUser() {
      try {
        const response = await api.get("/usuarios/perfil-usuario", {
          headers: { Authorization: `Bearer ${sessionStorage.getItem("token")}` },
        });

        const user: User = response.data.user;
        setUserProfile(user);
      } catch (error) {
        console.error("Erro ao carregar o perfil do usuário:", error);
      }
    }

    loadUser();
  }, []);

  return (
    <section className="w-screen h-screen bg-bg-per bg-cover bg-center flex flex-row">
      <div className="w-6/12 h-full bg-white shadow-xl flex flex-col gap-20 items-center justify-center">
        <Box component="form" className="w-full m-4 h-[40ch]" noValidate autoComplete="off">
          {userProfile ? (
            <ul key={userProfile.email} className="flex flex-col items-center justify-center gap-25 h-full">
              <h1 className="text-3xl">Bem-Vindo de volta!</h1>
              <div className="flex flex-col gap-5">
                <Stack>
                  <Avatar {...stringAvatar(userProfile.name)} />
                </Stack>
                <li>
                  <TextField id={`name-${userProfile.name}`} disabled label="Nome de Usuário" defaultValue={userProfile.name} variant="outlined" />
                </li>
                <li>
                  <TextField id={`name-${userProfile.email}`} disabled label="Email" defaultValue={userProfile.email} variant="outlined" />
                </li>
              </div>
            </ul>
          ) : (
            <p>Carregando informações do usuário...</p>
          )}
        </Box>
      </div>
    </section>
  );
}

export default Perfil;
