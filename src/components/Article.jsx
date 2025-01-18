import { IoIosCloseCircle } from "react-icons/io";

const Article = ({ id, title, isComplete, onDelete }) => {
  return (
    <li className="border-b border-neutral-300 article-item">
      <div className="py-2 px-4 flex items-center justify-between">
        <div>
          <h3 className="text-lg font-medium">{title}</h3>
          <p className="text-sm">{`${isComplete ? 'Completo' : 'Draft'}`}</p>
        </div>
        <IoIosCloseCircle className="text-xl cursor-pointer" onClick={() => onDelete(id)} />
      </div>
    </li>
  )
}

export default Article