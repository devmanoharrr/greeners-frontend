import React, { useState, useEffect } from "react";
import GreenerCard from "./../../components/Greeners/GreenerCard";
import Testimonial from "./../../components/Testimonial/Testimonial";
import { BASE_URL } from "./../../config";
import useFetchData from "./../../hooks/useFetchData";
import Loader from "../../components/Loader/Loading";
import Error from "../../components/Error/Error";

const Greeners = () => {
  const [query, setQuery] = useState("");
  const [debounceQuery, setDebounceQuery] = useState('');

  const handleSearch = () => {
    setDebounceQuery(query.trim());
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebounceQuery(query.trim());
    }, 700);

    return () => clearTimeout(timeout);
  }, [query]);

  const [token, setToken] = useState(localStorage.getItem("token") || ""); // Get the token from localStorage

  useEffect(() => {
    // Update token when it changes in local storage
    const updateToken = () => {
      setToken(localStorage.getItem("token") || "");
    };
    window.addEventListener("storage", updateToken);
    return () => window.removeEventListener("storage", updateToken);
  }, []);

  const { data: greeners, loading, error } = useFetchData(`${BASE_URL}/greeners?query=${debounceQuery}`, token);

  return (
    <>
      <section className="bg-[#fff9ea]">
        <div className="container text-center">
          <h2 className="heading">Find a Greener</h2>
          <div className="max-w-[570px] mt-[30px] mx-auto bg-[#0066ff2c] rounded-md flex items-center justify-between">
            <input type="search" className="py-4 pl-4 pr-2 bg-transparent w-full focus:outline-none cursor-pointer placeholder:text-textColor" placeholder="Search greener by name or specification" value={query} onChange={e => setQuery(e.target.value)} />
            <button onClick={handleSearch} className="btn mt-0 rounded-[0px] rounded-r-md">Search</button>
          </div>
        </div>
      </section>

      <section>
        {loading && <Loader />}
        {error && <Error />}

        {!loading && !error && (
          <div className="container">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
              {greeners.map((greener) => (
                <GreenerCard key={greener.id} greener={greener} />
              ))}
            </div>
          </div>
        )}
      </section>

      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">What Our Customers say</h2>
            <p className="text__para text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, expedita.</p>
          </div>
          <Testimonial />
        </div>
      </section>
    </>
  );
};

export default Greeners;