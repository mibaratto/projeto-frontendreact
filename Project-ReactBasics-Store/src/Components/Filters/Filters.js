import { DivLabel } from "./FiltersStyle"


const Filters = ({minFilter, setMinFilter, maxFilter, setMaxFilter, searchFilter, setSearchFilter}) => {
    console.log(searchFilter)
    console.log(minFilter)

    const handleImputMinFilter = (event) => setMinFilter(event.target.value)
    const handleImputMaxFilter = (event) => setMaxFilter(event.target.value)
    const handleImputSearchFilter = (event) => setSearchFilter(event.target.value)



    return (
        <div>
            <h1>Filters</h1>
            <div>
                <DivLabel>
                <div><label >Valor mínimo:</label></div>
                <div><input type="number" value={minFilter}  onChange={handleImputMinFilter}/></div>
                </DivLabel>
            </div>
            <div>
                <DivLabel>
                <div><label>Valor máximo:</label></div>
                <div><input type="number" value={maxFilter}  onChange={handleImputMaxFilter}/></div>
                </DivLabel>
            </div>
            <div>
                <DivLabel>
                <div><label>Busca por nome:</label></div>
                <div><input type="text" value={searchFilter} onChange={handleImputSearchFilter} /></div>
                </DivLabel>
            </div>
        </div>
    )
}

export default Filters