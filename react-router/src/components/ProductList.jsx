import { useSearchParams, useLocation } from "react-router-dom";

export const ProductList = () => {
  const [SearchParams] = useSearchParams();
  console.log(SearchParams.get("keyword"));
  console.log(SearchParams.get("in_stock"));
  console.log(SearchParams.get("rating"));

  // Gives the location of the page.
  // Can retrieve the hash at the end of a url
  const location = useLocation()
  console.log(location)

  return (
    <div className="component">ProductList</div>
  )
}
