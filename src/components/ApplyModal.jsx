import { useDispatch } from "react-redux";
import { addToHistory } from "../redux/applyHistorySlice"; 


export default function ApplyModal({ internship, setSelectedInternship }) {
  if (!internship) return null;

  const dispatch = useDispatch();
  const BASE_URL = import.meta.env.VITE_API_URL;


  return (
    <div className="fixed inset-0 bg-black/10 backdrop-blur-xs flex justify-center items-center z-50">
      <div className="bg-white rounded-2xl shadow-lg p-6 w-full max-w-4xl relative flex gap-6">
        
        <button
          onClick={() => setSelectedInternship(null)}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
        >
          ✕
        </button>

        <div className="w-1/2 border-r pr-6">
          <div className="flex items-center gap-3 mb-4">
          <img
          src={internship.logo?.url ? internship.logo.url : '/placeholder.png'}
          alt={internship.companyName || 'Company Logo'}
          className="w-12 h-12 object-contain"
          />
            <div>
              <h3 className="text-lg font-semibold">{internship.title}</h3>
              <p className="text-sm text-gray-500">{internship.companyName}</p>
            </div>
          </div>
          <p className="text-sm text-gray-600 mb-2">
            <span className="font-bold">Location: </span>{internship.location}
          </p>
          <p className="text-sm text-gray-600 mb-2">
            <span className="font-bold">Duration: </span>{internship.duration} months
          </p>
          <p className="text-sm text-gray-700">{internship.describtion}</p>
          <div className="flex flex-wrap gap-2 mt-3">
            {internship.skills &&
              internship.skills.split(",").map((skill, index) => (
                <span
                  key={index}
                  className="bg-blue-50 text-secondary px-3 py-1 rounded-full text-xs"
                >
                  {skill.trim()}
                </span>
              ))}
          </div>
        </div>

        <div className="w-1/2">
          <h2 className="text-xl font-semibold mb-4">Fill this Form to Apply</h2>
          <form className="flex flex-col gap-4">
            <input type="text" placeholder="Full Name" className="border p-2 rounded-md" />
            <input type="text" placeholder="Address" className="border p-2 rounded-md" />
            <input type="tel" placeholder="Phone Number" className="border p-2 rounded-md" />
            <input type="email" placeholder="Email" className="border p-2 rounded-md" />
            <p>Upload your CV👇</p>
            <input type="file" placeholder="Upload your CV" className="border p-2 rounded-md" />

            <button
              type="submit"
              className="bg-primary cursor-pointer text-white rounded-md px-4 py-2 hover:bg-primary/90"
              onClick={(e) => {
                e.preventDefault(); 
                console.log("Dispatching internship:", internship);
                dispatch(addToHistory(internship));
                alert("Thanks for applying, We will contact you soon 🤗")
                setSelectedInternship(null);
              }}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
