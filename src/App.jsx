import Card from "./components/Card"
import Button from "./components/partials/Button"

function App() {

  return (
    <>
      <h1 className="text-4xl font-bold text-center py-4">Il tuo blog</h1>
      <div className="max-w-screen-sm mx-auto">
        <Card>
          <h2 className="text-xl font-medium text-center border-b border-neutral-300 py-4">Aggiungi un nuovo articolo</h2>
          <form>
            <span>Titolo</span>
            <input
              type="text"
              placeholder="Inserisci un titolo"
            />
            <span>Stato</span>
            <div>
              <input
                type="radio"
                id="radio-draft"
                name="state"
              />
              <label htmlFor="radio-draft">Draft</label>
              <input
                type="radio"
                id="radio-completo"
                name="state"
              />
              <label htmlFor="radio-completo">Completo</label>
            </div>
            <Button text="Aggiungi" />
          </form>
        </Card>
      </div>
    </>
  )
}

export default App
