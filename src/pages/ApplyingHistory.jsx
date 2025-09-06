import { useSelector } from "react-redux";

export default function ApplyingHistory() {
  const appliedTrainings = useSelector(
    (state) => state.applyHistory.appliedTrainings
  );

  console.log("Whole Redux state:", useSelector((state) => state));

  if (appliedTrainings.length === 0) {
    return (
      <div className="pt-32 px-8">
        <h2 className="text-2xl font-bold mb-4 text-textp">Applying History</h2>
        <p className="text-textp">All internships have you applied are here..</p>
      </div>
    );
  }

  const BASE_URL = import.meta.env.VITE_API_URL;


  return (
    <div className="pt-32 px-8">
      <h2 className="text-2xl font-bold mb-6 text-textp">Applying History</h2>
      <p className="text-textp mb-8">All internships have you applied are here..</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {appliedTrainings.map((internship, index) => (
          <div
            key={index}
            className="rounded-xl shadow-md p-4 bg-white hover:shadow-lg transition flex flex-col gap-4"
          >
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                {internship.logo && internship.logo.url && (
                  <img
                    src={internship.logo?.url ? internship.logo.url : '/placeholder.png'}
                    alt={internship.companyName || 'Company Logo'}
                    className="w-12 h-12 object-contain"
                  />
                )}
                <button className="text-secondary text-xs sm:text-sm border-secondary border-[2px] px-2 py-1 rounded-sm">
                  <span>{internship.type}</span>
                </button>
              </div>
              <div>
                <h3 className="text-base sm:text-lg text-textp font-semibold">
                  {internship.title}
                </h3>
                <p className="text-sm text-gray-500">{internship.companyName}</p>
              </div>
            </div>

            <div className="flex flex-col text-sm text-gray-600">
              <span>
                <span className="font-bold">Location: </span>
                {internship.location}
              </span>
              <span className="mb-3">
                <span className="font-bold">Duration: </span>
                {internship.duration} months
              </span>
            </div>

            <p className="text-xs text-gray-400">
              Applied at: {new Date(internship.appliedAt).toLocaleString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
