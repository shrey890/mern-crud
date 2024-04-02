
import { TbListDetails } from "react-icons/tb";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
const BooksTable = ({books}) => {
  return (
    <div>
        <table className="w-full border-separate border-spacing-2">
					<thead>
						<tr>
							<th className="border border-slate-600 rounded-md">No.</th>
							<th className="border border-slate-600 rounded-md">Title</th>
							<th className="border border-slate-600 rounded-md max-md:hidden">
								Author
							</th>
							<th className="border border-slate-600 rounded-md max-md:hidden">
								Publish Year
							</th>
							<th className="border border-slate-600 rounded-md ">
								Operations
							</th>
						</tr>
					</thead>
					<tbody>
						{books.map((book, index) => (
							<tr key={book._id} className="h-8">
								<td className="border border-slate-500 rounded-md text-center">
									{index + 1}
								</td>
								<td className="border border-slate-500 rounded-md text-center">
									{book.title}
								</td>
								<td className="border border-slate-500 rounded-md text-center">
									{book.author}
								</td>
								<td className="border border-slate-500 rounded-md text-center">
									{book.publishYear}
								</td>
								<td className="border flex justify-evenly border-slate-500 rounded-md text-center">
									<Link to={`books/details/${book._id}`}>
										<TbListDetails className="text-2xl text-teal-800" />
									</Link>
									<Link to={`books/edit/${book._id}`}>
										<FaEdit className="text-2xl text-green-800" />
									</Link>
									<Link to={`books/delete/${book._id}`}>
										<MdDelete className="text-2xl text-red-600" />
									</Link>
								</td>
							</tr>
						))}
					</tbody>
				</table>
    </div>
  )
}

export default BooksTable