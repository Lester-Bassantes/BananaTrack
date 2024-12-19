import Image from "next/image";

export default function Page() {
  return (
      <div className="flex items-center justify-center h-screen bg-gradient-to-br from-gray-800 via-gray-900 to-black ">
        <form
            className="bg-gray-800 p-8 rounded-xl shadow-lg w-full max-w-md border border-gray-700 animate__animated animate__fadeInDown"
            action=""
            method="post"
        >
          <div className="flex justify-center items-center mb-6">
            <Image src={"/images/Grupo-Palmar-Logotipo.png"} alt={"Logo"} height={150} width={250}/>
          </div>

          <div className="mb-4">
            <label
                htmlFor="txtUsername"
                className="block text-gray-300 mb-2 font-medium"
            >
              Usuario
            </label>
            <input
                type="text"
                name="txtUsername"
                id="txtUsername"
                className="w-full px-4 py-2 text-white bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder-gray-400"
                placeholder="Ingresa tu usuario"
            />
          </div>

          <div className="mb-6">
            <label
                htmlFor="txtPassword"
                className="block text-gray-300 mb-2 font-medium"
            >
              Contraseña
            </label>
            <input
                type="password"
                name="txtPassword"
                id="txtPassword"
                className="w-full px-4 py-2 text-white bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder-gray-400"
                placeholder="Ingresa tu contraseña"
            />
          </div>

          <button
              type="submit"
              className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 focus:ring-2 focus:ring-purple-500 focus:outline-none transition duration-300"
          >
            Ingresar
          </button>

          <p className="mt-4 text-sm text-center text-gray-400">
            ¿No tienes cuenta?{" "}
            <a href="/register" className="text-purple-500 hover:underline">
              Regístrate aquí
            </a>
          </p>
        </form>
      </div>
  );
}
