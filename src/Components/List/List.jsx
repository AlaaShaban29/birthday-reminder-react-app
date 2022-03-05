import React from 'react'
import useGlobalContext from '../ContextData'
import {FaTrash} from 'react-icons/fa'
function List() {
    let {userList,setUserList,setIsClearAll}=useGlobalContext()
    
    function deleteUser(id)
    {
        let user=[...userList]
        user=user.filter((item)=>item.id!==id)
setUserList(user)
        console.log(user)
        if(user.length===0){
            setIsClearAll(true)
        }
    }
    return (
        <>
            {userList.map((user,index)=>{
                const{image,name,age,id}=user
                return(
                    <li className='d-flex person  ' key={index}>
<img src={image} alt={name}/>
    <div className='personInfo m-3'>
<h4>
{name}
</h4>
<p>
{age} years

</p>

    </div>
        <button className="trashBtn" onClick={()=>deleteUser(id)}>
        <FaTrash size={18} />
       
        </button>
</li> 
                )
            })}
        </>
    )
}

export default List
