import React, {useState, useEffect} from "react";
import Sidebar from './components/Sidebar'
import response from './response.json'




const App = () => {
    const [data, setData]= useState(response)


    return (
        <div>
       
            <Sidebar data={data}/>
        </div>
    )
}

export default App
