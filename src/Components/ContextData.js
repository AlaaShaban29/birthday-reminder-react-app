import React, { createContext, useContext, useState } from 'react'
import data from './Data/data';
const ContextData=createContext([])
export function ContextDataProvider({children}) {
    const [userList, setUserList] = useState(data)
    const [isClearAll, setIsClearAll] = useState(false)
function clearAllData(){
    let list=[...userList]
        list=[]
        setUserList(list)
    setIsClearAll(true)
}
function RefreshData(){
        setUserList(data)
    setIsClearAll(false)
}

    return (
        <>
           <ContextData.Provider value={{userList,isClearAll,clearAllData,setUserList,setIsClearAll,RefreshData}}>
               {children}
               </ContextData.Provider> 
        </>
    )
}
function useGlobalContext(){
return useContext(ContextData)
}

export default useGlobalContext
