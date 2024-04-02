import axios from "axios";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
const DeleteBook = () => {
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();
	const { id } = useParams();
	const handleDeleteBook = () => {
		setLoading(true);
		axios.delete(`http://localhost:5555/books/${id}`)
			.then(() => {
				setLoading(false);
				navigate("/");
			})
			.catch((error) => {
				setLoading(false);
				alert("an error occurred. please check the console");
				console.log(error);
			});
	};
	return (
		<div>
			<BackButton />
			<h1 className="text-3xl my-4">Delete Book</h1>
			{loading ? <Spinner /> : ""}
			<div className="flex flex-col items-center border-2 border-rose-500 rounded-xl w-[600px] p-8 mx-auto">
        <h3 className="text-2xl">Are you Sure You Want to Delete This Book?</h3>
        <button className="p-4 bg-rose-600 text-white m-8 w-full" onClick={handleDeleteBook}>Yes, Delete It</button>
      </div>
		</div>
	);
};
export default DeleteBook;
