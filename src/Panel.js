function Panel({toggle,panelData}) {
    return (
      <>
        <h2>Panel</h2>
        <button onClick={()=>toggle(panelData)}>Panel</button>
        {panelData && (
        <>
        <p>{panelData.heading}</p>
        <p>{panelData.arrayData}</p>
        </>
        )}
       
      </>
    );
  }

export default Panel
  