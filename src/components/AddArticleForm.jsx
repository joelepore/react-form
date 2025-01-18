import Card from "./Card"
import Button from "./partials/Button"

const AddArticleForm = () => {
  return (
    <Card>
      <h2 className="text-xl font-medium text-center border-b border-neutral-300 py-4">Aggiungi un nuovo articolo</h2>
      <form className="p-4 article-form gap-y-4">
        <span className="mr-4">Titolo</span>
        <input
          type="text"
          placeholder="Inserisci un titolo"
          className="border border-neutral-300 focus:outline-none rounded-lg px-1 text-sm"
        />
        <span className="mr-4">Stato</span>
        <div className="flex gap-2">
          <div>
            <input
              type="radio"
              id="radio-draft"
              name="state"
              className="mr-1"
            />
            <label htmlFor="radio-draft" className="text-sm">Draft</label>
          </div>
          <div>
            <input
              type="radio"
              id="radio-completo"
              name="state"
              className="mr-1"
            />
            <label htmlFor="radio-completo" className="text-sm">Completo</label>
          </div>
        </div>
        <Button className="col-span-2" text="Aggiungi" />
      </form>
    </Card>
  )
}

export default AddArticleForm