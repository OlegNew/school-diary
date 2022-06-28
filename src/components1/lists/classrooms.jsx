import React from 'react';

function btnClassRoomOnClick(obj){
    console.log(document.getElementById(obj))
    // document.getElementById(obj)
    document.getElementById(obj).classList.add("foo");
    
}
function Classrooms({classrooms}){
// console.log(1);
return(
    <div >
        <ul className='classrooms-list '>
            {classrooms.map((name, index)=>(
                <li 
                
                // onClick={() => console.log(name)} 
                key={`${name}_${index}`} 
                onClick={() => btnClassRoomOnClick(`${name}_${index}`)}  
                className='classroom-list'>
                    {name}
                </li>
            ))}
        </ul>
    </div>
)
}

export default Classrooms;