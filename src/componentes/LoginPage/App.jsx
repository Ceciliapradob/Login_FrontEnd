import React from 'react';
import '../../App.css'; // Importa el archivo CSS
import imagenLogin from '../../assets/imagenLogin.jpg'; // Importa la imagen
import 'tailwindcss/tailwind.css';

const LoginPage = () => {
  const formHandler = (event) => {
    event.preventDefault();
    // Lógica de manejo del formulario aquí
  };

  return (
    <div className="h-screen flex overflow-hidden">
      <div className="w-1/2 bg-gray-300 flex items-center justify-center">
        <img src={imagenLogin} alt="Perfil" className="w-full" width="300" height="100%" /> {/* Utiliza la imagen importada */}
      </div>

      <div className="w-1/2 bg-black text-white flex items-center justify-center">
        <div className="mx-auto py-8 px-6 sm:p-20 xl:w-10/12 h-full flex flex-col justify-center">
          <div className="space-y-4 text-center">
            <p className="text-xl" style={{ fontSize: '40px' }}>Sign up for templanata</p>
            <p className="font-medium text-lg text-white-600">
              Bienvenido a Learnflow AI. ¡Inicia Sesión primero!
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-1">
            <button
              className="py-3 px-4 rounded-xl bg-blue-50 hover:bg-blue-100 focus:bg-blue-100 active:bg-blue-200 w-full"
            >
              <div className="flex gap-4 justify-center items-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px" className="bg-white rounded-full p-1">
                  <circle cx="12" cy="12" r="10" fill="white" />
                  <path
                    d="M21 12c0-.67-.05-1.34-.15-2H12v4h5.63c-.26 1.36-.97 2.53-2.01 3.38v2.82h3.24C20.55 17.14 24 14.11 24 12h-3z"
                    fill="#4285F4"
                  />
                  <path
                    fill="#34A853"
                    d="M12 21c3.88 0 7.11-1.28 9.47-3.47l-3.24-2.82c-.88.6-2 1.09-3.47 1.09-2.66 0-4.92-1.79-5.72-4.21H3.84v2.63C6.16 18.18 8.94 21 12 21z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M6.28 14.47c-.25-.72-.39-1.49-.39-2.28s.14-1.56.39-2.28V7.36H3.84C2.73 9.21 2 10.54 2 12s.73 2.79 1.84 4.64l2.44-2.17z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 6.08c1.43 0 2.59.49 3.47 1.09l2.48-2.22C19.11 3.41 15.88 2 12 2 8.06 2 4.82 4.37 3.84 7.36l2.44 2.17C7.08 7.87 9.34 6.08 12 6.08z"
                  />
                  <path fill="none" d="M0 0h24v24H0z" />
                </svg>
                <span className="block w-max font-medium tracking-wide text-sm text-blue-700">Sign Up with Google</span>
              </div>
            </button>

            <button
              className="py-3 px-4 rounded-xl bg-gray-900 transition hover:bg-gray-800 active:bg-gray-600 focus:bg-gray-700 w-full"
            >
              <div className="flex gap-4 items-center justify-center text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  className="w-5"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
                  />
                </svg>
                <span className="block w-max font-medium tracking-wide text-sm text-white">Sign Up with Github</span>
              </div>
            </button>
          </div>

          <div role="hidden" className="mt-5 flex items-center">
            <hr className="flex-grow border-t border-white" />
            <span className="px-4 text-white">Or sign up with e-mail</span>
            <hr className="flex-grow border-t border-white" />
          </div>

          <form onSubmit={formHandler} className="space-y-6">
            <div className="flex flex-col mt-3">
              <label className="pb-2 font-bold" htmlFor="">Correo electrónico</label>
              <input
                type="text"
                placeholder="example@xyz.com"
                required
                className="w-full py-2 px-3 ring-1 ring-gray-300 rounded-lg placeholder-gray-600 bg-transparent transition disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-gray-500 focus:invalid:outline-none"
              />
            </div>

            <div className="flex flex-col">
              <label className="pb-2 font-bold" htmlFor="">Contraseña</label>
              <input
                type="password"
                placeholder="*********"
                required
                className="w-full py-2 px-3 ring-1 ring-gray-300 rounded-lg placeholder-gray-600 bg-transparent transition disabled:ring-gray-200 disabled:bg-gray-100 disabled:placeholder-gray-400 invalid:ring-gray-500 focus:invalid:outline-none"
              />
            </div>

            <div>
              <button className="w-full px-3 py-2 rounded-lg bg-green-600 transition hover:bg-green-700 focus:bg-green-700 active:bg-green-800">
                <span className="font-semibold text-white text-lg">Iniciar sesión</span>
              </button>

              <div className="flex justify-between mt-4">
                <a href="/auth/register" type="reset" className="w-full p-2">
                    <span className="text-sm tracking-wide  block text-center underline text-white mr-10">Crear nueva cuenta</span>
                </a>
                <button type="reset" className="w-full p-2 ">
                    <span className="text-sm tracking-wide  block text-center underline text-white ml-10">Olvidé mi contraseña</span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
