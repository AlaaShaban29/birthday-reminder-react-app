import React from "react";
import useGlobalContext from "../ContextData";
import List from "./../List/List";
function Reminder() {
  let { userList, clearAllData,isClearAll,RefreshData } = useGlobalContext();

  return (
    <main className="d-flex flex-column justify-content-center align-items-center">
      <div className="container h-100">
        <div className="containerReminder">
          <h3>{userList.length} birthday today</h3>
          <ul className="list-unstyled d-flex  flex-column ">
            <List />
          </ul>
       
        <button
            className="btn w-100  py-2"
            onClick={isClearAll?RefreshData:clearAllData}
          >
{isClearAll?'Refresh':'ClearAll'}
          </button>
    
        </div>
      </div>
    </main>
  );
}

export default Reminder;
