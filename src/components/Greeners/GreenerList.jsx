import GreenerCard from "./GreenerCard";
import { BASE_URL } from "./../../config";
import useFetchData from "./../../hooks/useFetchData";
import Loader from "../../components/Loader/Loading";
import Error from "../../components/Error/Error";

const GreenerList = () => {
  const { data: greeners, loading, error } = useFetchData(`${BASE_URL}/greeners`);

  return (
    <>
      {loading && <Loader />}
      {error && <Error />}
      {!loading && !error && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
          {greeners.map((greener) => (
            <GreenerCard key={greener._id} greener={greener} />
          ))}
        </div>
      )}
    </>
  );
};

export default GreenerList;
