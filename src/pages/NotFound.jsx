import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <div className="container mx-auto flex flex-col justify-center items-center h-screen">
      <h1 className="text-4xl font-bold mb-8">페이지를 찾을 수 없습니다.</h1>
      <button className="btn btn-primary text-base" onClick={handleClick}>
        돌아가기
      </button>
    </div>
  );
}

export default NotFound;
