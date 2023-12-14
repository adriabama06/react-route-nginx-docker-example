import { Link, useRouteError, useSearchParams } from "react-router-dom";

export default function ErrorPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  
  const error = useRouteError();
  console.error(error);

  return (
    <div className='card'>
      <div className='title'>
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <div className='line'/>
      </div>
      <div className='content'>
        <p>{error.statusText || error.message}</p>
        <Link to={{pathname: "/", search: searchParams.toString()}}>Go to the main page</Link>
      </div>
    </div>
  );
}
