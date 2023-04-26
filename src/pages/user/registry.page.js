import React, { useState } from "react";
import { RegistryStep } from "@/components/RegistryStep";
import { RegistryStepOne } from "@/components/RegistryStepOne";
import { RegistryStepTwo } from "@/components/RegistryStepTwo";
import { RegistryStepTree } from "@/components/RegistryStepTree";
import { Navbar } from "@/components/common/Navbar";

export default function RegistryPage() {
  const [formData, setFormData] = useState({
    name: "",
    birth: "",
    phone: "",
    sexy: "",
    cpf: "",
    sus: "",
    pcd: "",
    cadUnico: "",
    userId: "",
  });

  const [currentStep, setCurrentStep] = useState(1);

  const handleNext = () => setCurrentStep(currentStep + 1);

  const handlePrevious = () => setCurrentStep(currentStep - 1);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aqui você pode enviar os dados do formulário para o servidor usando o método POST
    console.log(formData);
  };

  return (
    <>
      <Navbar />
      <div
        className="flex flex-col items-center
      justify-center px-4 py-8 mx-auto"
      >
        <div
          className="w-full bg-white rounded-lg
        shadow  md:mt-0 sm:max-w-md
        xl:p-0"
        >
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <form className="w-full max-w-sm" onSubmit={handleSubmit}>
              {currentStep === 1 && (
                <RegistryStep
                  handleChange={handleChange}
                  handleNext={handleNext}
                />
              )}
              {currentStep === 2 && (
                <RegistryStepOne
                  formData={formData}
                  handleChange={handleChange}
                  handleNext={handleNext}
                />
              )}
              {currentStep === 3 && (
                <RegistryStepTwo
                  formData={formData}
                  handleChange={handleChange}
                  handleNext={handleNext}
                  handlePrevious={handlePrevious}
                />
              )}
              {currentStep === 4 && (
                <RegistryStepTree
                  formData={formData}
                  handleChange={handleChange}
                  handlePrevious={handlePrevious}
                />
              )}
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
