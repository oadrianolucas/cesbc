import React from "react";

export function RegistryStepTwo({
  formData,
  handleChange,
  handleNext,
  handlePrevious,
}) {
  return (
    <div>
      <label>
        Idade:
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
        />
      </label>
      <label>
        Gênero:
        <select name="gender" value={formData.gender} onChange={handleChange}>
          <option value="">Selecione</option>
          <option value="male">Masculino</option>
          <option value="female">Feminino</option>
          <option value="other">Outro</option>
        </select>
      </label>
      <label>
        Endereço:
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
        />
      </label>
      <label>
        Cidade:
        <input
          type="text"
          name="city"
          value={formData.city}
          onChange={handleChange}
        />
      </label>
      <label>
        Estado:
        <input
          type="text"
          name="state"
          value={formData.state}
          onChange={handleChange}
        />
      </label>
      <label>
        CEP:
        <input
          type="text"
          name="zipCode"
          value={formData.zipCode}
          onChange={handleChange}
        />
      </label>
      <button onClick={handlePrevious}>Anterior</button>
      <button onClick={handleNext}>Próximo</button>
    </div>
  );
}
