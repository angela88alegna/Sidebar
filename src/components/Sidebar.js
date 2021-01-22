import React, {useState} from 'react';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import Icon from '@material-ui/core/Icon';
import OpenWithIcon from '@material-ui/icons/OpenWith';
import DeleteIcon from '@material-ui/icons/Delete';
import VisibilityIcon from '@material-ui/icons/Visibility';
import LabelIcon from '@material-ui/icons/Label';
import IconButton from '@material-ui/core/IconButton';


const Sidebar = ({data}) => {
    const[input, setInput]= useState('')


    return (
        <>
        <div className='sidebar' style= {{maxWidth:' 400px', display:'inline-block', 
        backgroundColor:'#3f3e38', 
        color:'white',
        padding:'10px 50px', 
        position: 'absolute',
        right:'0'
        }}>
        <p>
            Unassigned Jobs
        </p>
        <hr/>
        <button  style={{backgroundColor:'#ffd622', borderRadius:'10px', padding:'8px'}}
            Drag Job-Cleaner
            ><IconButton style={{maxHeight:'10px', maxWidth:'10px', color:'#000', verticalAlign:'center', marginRight:'2px'}}><OpenWithIcon/></IconButton>Drag Job-Cleaner
        </button>
        <span style={{color: '#ffd622', marginLeft:'10px'}}>
            Maintenance
        
        </span>
        <hr/>
            <input style={{paddingBottom:'0px', width:'250px', minHeight:'30px'}} type="text"
            placeholder='search_jobs'
            value={input}
                onChange={(e)=>setInput(e.target.value)}
            />
            <h6>Enter Unique Keywords To Quickly Find Your Job</h6>
            <hr/>
{data.map((dat)=>{
const{id, el_article, delivery_date, el_mold_version, machine_rejected }= dat;

{/* let filtering= data.filter(dat=>{return */}

 {/* dat.el_article.short_descr.toLowerCase().includes(setInput.toLowerCase())}) */}

return <article key={id}>
     <h5>Article-code: {el_article.article_code}</h5>
    <h5>Article Description: { el_article.short_descr}</h5> 
    <h5>delivery Date: {delivery_date}</h5>
    <h5>Mold code: { el_mold_version.mold_version_code}</h5>
    <h5>Number rejected machines: {machine_rejected}</h5>

    <button style={{backgroundColor:'#526066', color:'#fff', padding:'5px' }}> 
    <IconButton style={{maxHeight:'10px', maxWidth:'10px', color:'#fff'}}><AddCircleIcon/></IconButton>drag-me</button>
    <button style={{backgroundColor:'#526066', color:'#fff', padding:'5px'}}>  <IconButton style={{maxHeight:'10px', maxWidth:'10px', color:'#fff'}}><OpenWithIcon/></IconButton>add</button>
    <button style={{backgroundColor:'#526066', color:'#fff', padding:'5px'}}><IconButton style={{maxHeight:'10px', maxWidth:'10px', color:'#fff'}}><LabelIcon/></IconButton>mold</button>
    <button style={{backgroundColor:'#526066', color:'#fff', padding:'5px'}}>
    <IconButton style={{maxHeight:'10px', maxWidth:'10px', color:'#fff'}}><DeleteIcon/></IconButton>delete</button>
    <button style={{backgroundColor:'#526066', color:'#fff', padding:'5px'}}><IconButton style={{maxHeight:'10px', maxWidth:'10px', color:'#fff'}}><VisibilityIcon/></IconButton>info</button>
    <hr/>
</article>

}
)}
        </div>
        </>
    )
}

export default Sidebar
