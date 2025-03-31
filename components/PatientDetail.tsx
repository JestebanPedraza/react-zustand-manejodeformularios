import { Patient } from "../types";
import PatientDetailItem from "./PatientDetailItem";
import { usePatientStore } from "../store";
import { toast } from "react-toastify";

type PatientDetailProps = {
  patient: Patient;
};

export default function PatientDetail({ patient }: PatientDetailProps) {
  const deletePatient = usePatientStore((state) => state.deletePatient);
  const getPatientById = usePatientStore((state) => state.getPatientById);

  const handleClick = () => {
    deletePatient(patient.id);
    toast.error("Paciente eliminado correctamente");
  };

  return (
    <div className="mx-5 my-5 px-5 py-5 bg-white shadow-md rounded-xl">
      <PatientDetailItem label="ID" data={patient.id} />
      <PatientDetailItem label="Nombre" data={patient.name} />
      <PatientDetailItem label="Propietario" data={patient.caretaker} />
      <PatientDetailItem label="Email" data={patient.email} />
      <PatientDetailItem label="Fecha" data={patient.date.toString()} />
      <PatientDetailItem label="Sintomas" data={patient.symptoms} />

      <div className="flex flex-col md:flex-row justify-center gap-3 mt-5">
        <button
          onClick={() => getPatientById(patient.id)}
          type="button"
          className="py-2 px-10 bg-indigo-600 hover:bg-indigo-800 cursor-pointer text-white font-bold uppercase rounded-lg"
        >
          Editar
        </button>
        <button
          onClick={handleClick}
          type="button"
          className="py-2 px-10 bg-red-600 hover:bg-red-800 cursor-pointer text-white font-bold uppercase rounded-lg"
        >
          Eliminar
        </button>
      </div>
    </div>
  );
}
