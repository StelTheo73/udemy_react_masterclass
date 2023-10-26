import { useParams } from "react-router-dom";

export const ProductDetail = () => {
  const params = useParams();

  return (
    <div className="component">{params.name} - {params.id}</div>
  )
}
