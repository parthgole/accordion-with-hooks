function PanelA({toggle,activePanel}) {
    return (
      <>
        <h2>PanelA</h2>
        <button onClick={()=>toggle(1)}>PanelA</button>
        {activePanel===1 && (<p>PanelA</p>)}
       
      </>
    );
  }

export default PanelA
  