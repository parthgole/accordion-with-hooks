function Panel({toggle,panelData,panelDataId}) {
    return (
      <>
        {panelData.map((item,index)=>(
        
        <div key={index}> 
        <h2>{item.heading}</h2>
        <button onClick={()=>toggle(index)}>{item.heading}</button>  

        {index===panelDataId?<p>{item.arryaData}</p>:<></>}

        </div>)
        
        )}
       
      </>
    );
  }

export default Panel
  