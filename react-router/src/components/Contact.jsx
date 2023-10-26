import { useNavigate } from "react-router-dom";

export const Contact = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  }

  return (
    <div>
      <div className="component">Contact</div>
      <button onClick={() => handleClick()}>Back To Home</button>
    </div>
  )
}
