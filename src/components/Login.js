export function Login() {
  return (
    <>
      <div
        className="w-full bg-white rounded-lg
        shadow  md:mt-0 sm:max-w-md
        xl:p-0"
      >
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h2
            className="text-2xl font-bold leading-tight
            tracking-tight text-gray-500"
          >
            Acessar / Login
          </h2>
          <form className="space-y-4 md:space-y-6">
            <div>
              <label className="block mb-2 text-md font-medium text-gray-400">
                E-mail
              </label>
              <input
                className="bg-gray-50 border border-gray-300
                text-gray-900 sm:text-sm rounded-lg
                focus:ring-primary-600 focus:border-primary-600
                block w-full p-2.5
                placeholder-gray-400"
              />
            </div>
            <div>
              <label className="block mb-2 text-md font-medium text-gray-400">
                Senha
              </label>
              <input
                className="bg-gray-50 border border-gray-300
                text-gray-900 sm:text-sm rounded-lg
                focus:ring-primary-600 focus:border-primary-600
                block w-full p-2.5
                placeholder-gray-400"
              />
            </div>
            <div>
              <button
                className="font-medium bg-blue-700
                text-white text-2xl rounded-lg
                focus:border-primary-600
                block w-full p-2.5 hover:bg-blue-600"
              >
                Entrar
              </button>
            </div>
          </form>
          <div className="my-3">
            <a className="font-medium text-blue-700 py-2 text-lg" href="#">
              Esqueceu a senha?
            </a>
            <hr className="my-3 border-1 border-gray-200" />
            <div className="text-center">
              <a
                className="font-medium bg-orange-500
                text-white text-2xl rounded-lg
                focus:border-primary-600
                block w-full p-2.5 hover:bg-orange-400"
                href="#cadastrar"
              >
                Criar nova conta
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
