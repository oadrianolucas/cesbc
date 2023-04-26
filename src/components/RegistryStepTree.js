import React from "react";

export function RegistryStepTree({ formData, handleChange, handlePrevious }) {
  return (
    <div>
      <h2>Confirme seus dados:</h2>
      <p>Nome: {formData.name}</p>
      <p>Email: {formData.email}</p>
      <p>Idade: {formData.age}</p>
      <p>Gênero: {formData.gender}</p>
      <p>Endereço: {formData.address}</p>
      <p>Cidade: {formData.city}</p>
      <p>Estado: {formData.state}</p>
      <p>CEP: {formData.zipCode}</p>
      <button onClick={handlePrevious}>Anterior</button>
      <button type="submit">Enviar</button>
    </div>
  );
}
