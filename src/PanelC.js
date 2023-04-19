function PanelC({toggle,activePanel}) {
    return (
      <>
        <h2>PanelC</h2>
        <button onClick={()=>toggle(3)}>PanelC</button>
        {activePanel===3 && (<p>PanelC</p>)}
       
      </>
    );
  }

export default PanelC
  