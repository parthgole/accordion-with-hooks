function Panel({toggle,heading,bookDescription,activePanelId,activeState}) {
    return (
      <>
        <div  onClick={()=>toggle(activePanelId)} style={{border:'1px solid black',backgroundColor:'#fffdd0',width:'80%',height:'auto',margin:'10px auto 5px'}}> 
        <h2>{heading}</h2>
        {/* <button onClick={()=>toggle(activePanelId)} style={{border:'none',backgroundColor:'green',color:'white'}}>{heading}</button>   */}

        {activePanelId===activeState?
        <p style={{backgroundColor:'orange',border:'1px solid black',width:'80%',height:'20px',margin:'5px auto 5px'}}>{bookDescription}</p>:<></>}

        </div>
              
      </>
    );
  }

export default Panel
  