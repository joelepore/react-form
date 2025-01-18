import AddArticleForm from "./components/AddArticleForm"
import ArticleList from "./components/ArticleList"

import blogArticles from "./data/blogArticles"

function App() {

  return (
    <>
      <h1 className="text-4xl font-bold text-center py-4">Il tuo blog</h1>
      <div className="max-w-screen-sm mx-auto">
        <AddArticleForm />
        <h2 className="py-4 font-bold text-2xl text-center">Articoli recenti</h2>
        <ArticleList articles={blogArticles} />
      </div>
    </>
  )
}

export default App
