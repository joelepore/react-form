import Card from "./Card"
import { IoIosCloseCircle } from "react-icons/io";

const ArticleList = ({ articles, className, onDelete }) => {
  return (
    <Card className={`${className}`}>
      <ul>
        {articles.map(article => (
          <li key={`art-${article.id}`} className="border-b border-neutral-300 article-item">
            <div className="py-2 px-4 flex items-center justify-between">
              <div>
                <h3 className="text-lg font-medium">{article.title}</h3>
                <p className="text-sm">{`${article.isComplete ? 'Completo' : 'Draft'}`}</p>
              </div>
              <IoIosCloseCircle className="text-xl cursor-pointer" onClick={() => onDelete(article.id)} />
            </div>
          </li>
        ))}
      </ul>
    </Card>
  )
}

export default ArticleList