function PanelB({toggle,activePanel}) {
    return (
      <>
        <h2>PanelB</h2>
        <button onClick={()=>toggle(2)}>PanelB</button>
        {activePanel===2 && (<p>PanelB</p>)}
       
      </>
    );
  }

export default PanelB
  