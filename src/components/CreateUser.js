export function CreateUser() {
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
            Criar nova conta
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
                type="email"
              />
            </div>
            <div>
              <label className="block mb-2 text-md font-medium text-gray-400">
                Nascimento
              </label>
              <input
                className="bg-gray-50 border border-gray-300
                text-gray-900 sm:text-sm rounded-lg
                focus:ring-primary-600 focus:border-primary-600
                block w-full p-2.5
                placeholder-gray-400"
                type="date"
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
                type="password"
              />
            </div>
            <div>
              <label className="block mb-2 text-md font-medium text-gray-400">
                Repita sua senha
              </label>
              <input
                className="bg-gray-50 border border-gray-300
                text-gray-900 sm:text-sm rounded-lg
                focus:ring-primary-600 focus:border-primary-600
                block w-full p-2.5
                placeholder-gray-400"
                type="password"
              />
            </div>
            <div>
              <button
                className="font-medium bg-blue-700
                text-white text-2xl rounded-lg
                focus:border-primary-600
                block w-full p-2.5 hover:bg-blue-600"
              >
                Criar conta
              </button>
            </div>
          </form>
          <div className="">
            <p className="text-gray-400">
              Ao se cadastrar, você estará concordando com as nossas{" "}
              <a href="#">políticas de privacidade</a>,{" "}
              <a href="#">políticas de cookies</a> e as normas da plataforma.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
