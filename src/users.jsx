import "./UserStyle.css";
import { useState } from 'react';
function Users({name,profile,status}){
    const [isOnline, setIsOnline] = useState(status);  
function changeStatus(){
     setIsOnline(!isOnline);
}

    let Styles={backgroundColor: isOnline?"lightgreen":"red"};

    return(
     <div className="card">
        <p className="para">Name:  {name}</p>
        <p>Profile:  {profile}</p>
        <button onClick={changeStatus}style={Styles}> Status: {isOnline?"Online":"offline"}</button>
    </div>
    );
}
export default Users;