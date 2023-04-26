import React from "react";

export function RegistryStepOne({ formData, handleChange, handleNext }) {
  return (
    <>
      <h2
        className="text-2xl font-bold leading-tight
  tracking-tight text-gray-500"
      >
        Criar cadastro
      </h2>
      <div className="my-3">
        <label className="block mb-2 text-md font-medium text-gray-400">
          Nome:
        </label>
        <input
          type="text"
          className="bg-gray-50 border border-gray-300
                text-gray-900 sm:text-sm rounded-lg
                focus:ring-primary-600 focus:border-primary-600
                block w-full p-2.5
                placeholder-gray-400"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div className="my-3">
        <label className="block mb-2 text-md font-medium text-gray-400">
          Nascimento:
        </label>
        <input
          type="email"
          name="email"
          className="bg-gray-50 border border-gray-300
            text-gray-900 sm:text-sm rounded-lg
            focus:ring-primary-600 focus:border-primary-600
            block w-full p-2.5
            placeholder-gray-400"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div className="my-3">
        <label className="block mb-2 text-md font-medium text-gray-400">
          Celular:
        </label>
        <input
          type="text"
          name="password"
          className="bg-gray-50 border border-gray-300
            text-gray-900 sm:text-sm rounded-lg
            focus:ring-primary-600 focus:border-primary-600
            block w-full p-2.5
            placeholder-gray-400"
          value={formData.password}
          onChange={handleChange}
        />
      </div>
      <div className="my-3">
        <label className="block mb-2 text-md font-medium text-gray-400">
          Cpf:
        </label>
        <input
          type="text"
          name="confirmPassword"
          className="bg-gray-50 border border-gray-300
            text-gray-900 sm:text-sm rounded-lg
            focus:ring-primary-600 focus:border-primary-600
            block w-full p-2.5
            placeholder-gray-400"
          value={formData.confirmPassword}
          onChange={handleChange}
        />
      </div>
      <button
        className="mt-3 font-medium bg-orange-500
                text-white text-2xl rounded-lg
                focus:border-primary-600
                block w-full p-2.5 hover:bg-blue-600"
        onClick={handleNext}
      >
        Próximo
      </button>
    </>
  );
}
