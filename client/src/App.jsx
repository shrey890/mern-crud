import React from "react";
import {Routes , Route} from 'react-router-dom'
import Home from "./pages/Home";
import CreateBook from "./pages/CreateBook";
import EditBook from "./pages/EditBook";
import DeleteBook from "./pages/DeleteBook";
import ShowBook from "./pages/ShowBook";
const App = () => {
	return (
		<div>
			<Routes>
				<Route path='/' element={<Home/>}/>
				<Route path='/books/create' element={<CreateBook/>}/>
				<Route path='/books/edit/:id' element={<EditBook/>}/>
				<Route path='/books/delete/:id' element={<DeleteBook/>}/>
				<Route path='/books/details/:id' element={<ShowBook/>}/>
			</Routes>
		</div>
	);
};
export default App;
