import React from "react";
import { useAuth } from "../../hooks/useAuth";
import { CustomAlert, RegisterForm } from "../../components";

const Profile = () => {
  const { session, perfil } = useAuth();

  return (
    <div className="flex justify-center items-start">
      <div className="w-full bg-white lg:w-1/2 flex items-center justify-center rounded-3xl">

        <div className="max-w-xl w-full p-6">
          <h2 className="text-3xl font-light mb-3 text-black text-center">
            Mis Datos {perfil.nombre}
          </h2>
          <h3 className="text-sm font-light mb-8 text-gray-500 text-center">
            Recuerda mantener actualizados tus datos para tener una mejor experiencia.
          </h3>

          {session.showMsg && (
            <div className="mx-auto max-w-xl py-7">
              <CustomAlert
                type={session.msg === "Usuario registrado con exito." ? "success" : "error"}
                msg={session.msg}
                className="!mb-4"
              />
            </div>
          )}

          <RegisterForm />
        </div>
      </div>
    </div>
  );
};

export default Profile;