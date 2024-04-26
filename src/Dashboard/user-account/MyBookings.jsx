import useFetchData from "../../hooks/useFetchData";
import { BASE_URL } from "../../config";
import GreenerCard from "../../components/Greeners/GreenerCard";
import Loading from "../../components/Loader/Loading";
import Error from "../../components/Error/Error";

const MyBookings = () => {

  const [token, setToken] = useState(localStorage.getItem("token") || ""); // Get the token from localStorage

  useEffect(() => {
    // Update token when it changes in local storage
    const updateToken = () => {
      setToken(localStorage.getItem("token") || "");
    };
    window.addEventListener("storage", updateToken);
    return () => window.removeEventListener("storage", updateToken);
  }, []);
  const { data: appointments, loading, error } = useFetchData(`${BASE_URL}/users/appointments/my-appointments`, token);

  return (
    <div>
      {loading && !error && <Loading />}

      {error && !loading && <Error errMessage={error} />}

      {!loading && !error && (
        <div className="grid grid-cols-1 ld:grid-cols-2 gap-5">
          {appointments.map((greener) => (
            <GreenerCard greener={greener} key={greener._id} />
          ))}
        </div>
      )}
      {!loading && !error && appointments.length === 0 && <h2 className="mt-5 text-center leading-7 text-[20px] font-semibold text-primaryColor">You did not book any Greener Yet!</h2>}
    </div>
  );
};

export default MyBookings;
