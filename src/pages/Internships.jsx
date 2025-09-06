import { useState } from "react";
import ApplyModal from "../components/ApplyModal";
import { useGetInternshipsQuery } from '../redux/internship';
import { AnimatePresence } from "framer-motion";
import Card from "../components/Card";

export default function Internships() {

  const [selectedField, setSelectedField] = useState('All');
  const { data, error, isLoading } =  useGetInternshipsQuery(selectedField);
  const [selectedInternship, setSelectedInternship] = useState(null);

  const all = 'All';
  const front = 'Front-End';
  const back = 'Back-End';
  const cyber = 'Cyber Security';
  const ai = 'AI & ML';
  const dataAnalysis = 'Data Analysis';
  const ui = 'UI/UX';
  const graphic = 'Graphic Designer';
  const video = 'Video Editing';

  return (
    <div className="pt-32">

      <div className="px-8 mb-12 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">

        <div>
          <h3 className="text-textp text-2xl font-bold">Find Your Internship</h3>
          <p>Choose your field and start your journey</p>
        </div>

        <div className="flex gap-3 flex-wrap">
          <button onClick={() => setSelectedField(all)} className={`transition-all duration-200 cursor-pointer px-3.5 py-1 border rounded-md font-bold ${selectedField === all ? "bg-primary text-white border-primary" : "text-primary border-primary hover:bg-blue-100"}`}>All Internships</button>

          <button onClick={() => setSelectedField(front)} className={`transition-all duration-200 cursor-pointer px-3.5 py-1 border rounded-md font-bold ${selectedField === front ? "bg-secondary text-white border-secondary" : "text-secondary border-secondary hover:bg-blue-100"}`}>Front-End</button>

          <button onClick={() => setSelectedField(back)} className={`transition-all duration-200 cursor-pointer px-3.5 py-1 border rounded-md font-bold ${selectedField === back ? "bg-secondary text-white border-secondary" : "text-secondary border-secondary hover:bg-blue-100"}`}>Back-End</button>

          <button onClick={() => setSelectedField(cyber)} className={`transition-all duration-200 cursor-pointer px-3.5 py-1 border rounded-md font-bold ${selectedField === cyber ? "bg-secondary text-white border-secondary" : "text-secondary border-secondary hover:bg-blue-100"}`}>Cyber Security</button>

          <button onClick={() => setSelectedField(ai)} className={`transition-all duration-200 cursor-pointer px-3.5 py-1 border rounded-md font-bold ${selectedField === ai ? "bg-secondary text-white border-secondary" : "text-secondary border-secondary hover:bg-blue-100"}`}>AI & ML</button>

          <button onClick={() => setSelectedField(dataAnalysis)} className={`transition-all duration-200 cursor-pointer px-3.5 py-1 border rounded-md font-bold ${selectedField === dataAnalysis ? "bg-secondary text-white border-secondary" : "text-secondary border-secondary hover:bg-blue-100"}`}>Data Analysis</button>

          <button onClick={() => setSelectedField(ui)} className={`transition-all duration-200 cursor-pointer px-3.5 py-1 border rounded-md font-bold ${selectedField === ui ? "bg-secondary text-white border-secondary" : "text-secondary border-secondary hover:bg-blue-100"}`}>UI/UX</button>

          <button onClick={() => setSelectedField(graphic)} className={`transition-all duration-200 cursor-pointer px-3.5 py-1 border rounded-md font-bold ${selectedField === graphic ? "bg-secondary text-white border-secondary" : "text-secondary border-secondary hover:bg-blue-100"}`}>Graphic Design</button>

          <button onClick={() => setSelectedField(video)} className={`transition-all duration-200 cursor-pointer px-3.5 py-1 border rounded-md font-bold ${selectedField === video ? "bg-secondary text-white border-secondary" : "text-secondary border-secondary hover:bg-blue-100"}`}>Video Editing</button>
        </div>
      </div>

      <AnimatePresence>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {isLoading && <p>Loading...</p>}
        {error && <p>Error loading internships</p>}
        {data?.data?.length > 0 ? (
          data.data.map((internship) => (
            <Card
              key={internship.id}
              internship={internship}
              setIsOpen={setSelectedInternship}
            />
          ))
        ) : (
          <p>No internships found</p>
        )}
      </div>
      </AnimatePresence>

      <ApplyModal
        internship={selectedInternship}
        setSelectedInternship={setSelectedInternship}
      />

    </div>
  );
}
