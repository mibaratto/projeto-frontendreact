import { DivLabel } from "./FiltersStyle"


const Filters = ({minFilter, setMinFilter, maxFilter, setMaxFilter, searchFilter, setSearchFilter,cleanFilter}) => {

    const handleImputMinFilter = (event) => {
        if( event.target.value >= 0 ){
            setMinFilter(event.target.value)
        }  
    }

    const handleImputMaxFilter = (event) => {
        if( event.target.value >= 0){
            setMaxFilter(event.target.value)
        }   
    }

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
            <div>
                <DivLabel>
                <button onClick={() => cleanFilter()}>Limpar Filtros</button>
                </DivLabel>
            </div>
        </div>
    )
}

export default Filters