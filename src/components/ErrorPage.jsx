import { useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();

  return (
    <div className="flex justify-center items-center h-screen bg-gray-800 text-white">
      <h1 className="text-white text-6xl">Error! {error?.statusText || "Menu Not Found!"}</h1>
      {error?.message && <p className="text-white mt-4">{error.message}</p>}
    </div>
  );
}

export default ErrorPage;
