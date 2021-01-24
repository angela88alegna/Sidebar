import React, {useState, useEffect} from "react";
import Sidebar from './components/Sidebar'
import response from './response.json'




const App = () => {

   
    const [data, setData]= useState(response)

    const[searchTerm, setSearchTerm]= useState('')

    return (
        <div>
       
            <Sidebar searchTerm={searchTerm} setSearchTerm={setSearchTerm} data={data} />
        </div>
    )
}

export default App
