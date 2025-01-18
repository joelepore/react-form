import Card from "./Card"
import { IoIosCloseCircle } from "react-icons/io";

const ArticleList = ({ articles, className, onDelete }) => {

  const renderArticles = () => {
    const mappedArticles = articles.map(article => (
      <li key={`art-${article.id}`} className="border-b border-neutral-300 article-item">
        <div className="py-2 px-4 flex items-center justify-between">
          <div>
            <h3 className="text-lg font-medium">{article.title}</h3>
            <p className="text-sm">{`${article.isComplete ? 'Completo' : 'Draft'}`}</p>
          </div>
          <IoIosCloseCircle className="text-xl cursor-pointer" onClick={() => onDelete(article.id)} />
        </div>
      </li>
    ));

    return mappedArticles.length == 0 ? <li className="py-2 px-4">Nessun articolo presente</li> : mappedArticles;
  }

  return (
    <Card className={`${className}`}>
      <ul>
        {renderArticles()}
      </ul>
    </Card>
  )
}

export default ArticleList