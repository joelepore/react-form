import Article from "./Article";
import Card from "./Card"

const ArticleList = ({ articles, className, onDelete }) => {

  const renderArticles = () => {
    const mappedArticles = articles.map(article => (
      <Article key={`art-${article.id}`} title={article.title} isComplete={article.isComplete} onDelete={() => onDelete(article.id)} />
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