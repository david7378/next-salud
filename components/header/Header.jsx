import { useRouter } from "next/router";
import { useAppContext } from "../../context/SaludProvider";
import SearchBar from "./SearchBar";

import "react-toastify/dist/ReactToastify.css";
import EmptySearchBar from "../alerts/EmptySearchBar";
export default function Header() {
  const { searchTerm, setSearchTerm, handlekey, fetchData, toastMessage } =
    useAppContext();

  const router = useRouter();
  const home = () => {
    fetchData(searchTerm);
    router.push("/");
  };

  return (
    <>
      <div className="bg-blue-500 ">

        {/* MENSAJE AL BUSCAR SIN COLOCAR UN DATO */}
        <EmptySearchBar toastMessage={toastMessage} />

        <div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between flex-wrap gap-4">

            {/* TITULO */}
            <div className="w-0 flex-1 flex items-center">
              <p className="ml-3 font-medium cursor-pointer text-white truncate">
                <span
                  onClick={() => home()}
                  className="text-xl font-bold hover:text-zinc-800  hover:rounded-3xl hover:text-2xl transition-all"
                >
                  MEJOR CON SALUD
                </span>
              </p>
            </div>

            <SearchBar
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              handlekey={handlekey}
              fetchData={fetchData}
            />
          </div>
        </div>
      </div>
    </>
  );
}
