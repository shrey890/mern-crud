import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
const EditBook = () => {
	const [title, setTitle] = useState("");
	const [author, setAuthor] = useState("");
	const [publishYear, setPublishYear] = useState("");
	const [loadings, setLoadings] = useState(false);
	const { id } = useParams();
	const navigate = useNavigate();
	useEffect(() => {
		setLoadings(true);
		axios.get(`http://localhost:5555/books/${id}`).then((res) => {
			setAuthor(res.data.author);
			setPublishYear(res.data.publishYear);
			setTitle(res.data.title);
			setLoadings(false);
		}).catch((error)=>{
      setLoadings(false)
      alert('An Error happened.Please Check Console')
      console.log(error)
    })
	}, []);
	const handelEditBook = () => {
		const data = {
			title,
			author,
			publishYear,
		};
		setLoadings(true);
		axios
			.put(`http://localhost:5555/books/${id}`, data)
			.then(() => {
				setLoadings(false);
				navigate("/");
			})
			.catch((error) => {
				setLoadings(false);
				alert("an error happened. please check console");
				console.log(error);
			});
	};
	return (
		<div className="p-4">
			<BackButton />
			<h1 className="text-3xl my-4">Edit Book</h1>
			{loadings ? <Spinner /> : ""}
			<div className="flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto">
				<div className="my-4">
					<label className="text-xl mr-4 text-grey-500"> Title </label>
					<input
						className="border-2 border-grey=500 px-4 py-2 w-full"
						type="text"
						value={title}
						onChange={(e) => setTitle(e.target.value)}
					/>
				</div>
				<div className="my-4">
					<label className="text-xl mr-4 text-grey-500"> author</label>
					<input
						className="border-2 border-grey=500 px-4 py-2 w-full"
						type="text"
						value={author}
						onChange={(e) => setAuthor(e.target.value)}
					/>
				</div>
				<div className="my-4">
					<label className="text-xl mr-4 text-grey-500"> Publish Year</label>
					<input
						className="border-2 border-grey=500 px-4 py-2 w-full"
						type="text"
						value={publishYear}
						onChange={(e) => setPublishYear(e.target.value)}
					/>
				</div>
				<button className="p-2 bg-sky-300 m-8" onClick={handelEditBook}>
					Update
				</button>
			</div>
		</div>
	);
};
export default EditBook;
