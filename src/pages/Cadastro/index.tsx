import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Input from "../../components/Input.tsx";
import Button from "../../components/Button.tsx";
import api from "../../services/api.ts";

function Cadastro() {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data: any) => {
    try {
      await api.post("/usuarios/cadastro", {
        name: data.name,
        email: data.email,
        password: data.password,
      });
      alert("Usuário cadastrado com sucesso");

      navigate("/login");
    } catch (err) {
      alert("Erro ao cadastrar");
    }
  };

  return (
    <>
      <section className="w-screen h-screen bg-bg-cad bg-cover bg-center">
        <div className="w-6/12 h-full bg-white shadow-xl flex flex-col gap-20 items-center justify-center">
          <h2 className="text-5xl font-bold">Cadastre seu perfil</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="w-4/12 flex flex-col gap-4">
            <Input register={register} name="name" type="text" placeholder="Nome" />
            <Input register={register} name="email" type="email" placeholder="E-mail" />
            <Input register={register} name="password" type="password" placeholder="Senha" />
            <Button text="Cadastre-se" />
          </form>
          <Link to="/login" className="font-medium text-sky-400 hover:text-sky-600 ease-in duration-150 focus:outline-none focus:text-sky-600">
            Já tem uma conta? Faça login
          </Link>
        </div>
      </section>
    </>
  );
}

export default Cadastro;
