import { useState } from 'react';
import Panel from './Panel';
// import PanelB from './PanelB';
// import PanelC from './PanelC';

function AccordionParent() {
  const arrayPanelData=[{heading:'PanelA',arryaData:'PanelA'}];
  // const [activePanel,setActivePanel] = useState(0);
  const [panelData,setPanelData] = useState(arrayPanelData);
  const toggle=(num)=>{
    // console.log(num.heading,num.arryaData)    
    // num!==activePanel?setActivePanel(num):setActivePanel(0); 
    
  }



  return (
    <>
        <Panel toggle={toggle} panelData={arrayPanelData}/>
        {/* <PanelB toggle={toggle} activePanel={activePanel}/>          
        <PanelC toggle={toggle} activePanel={activePanel}/>           */}
    </>
  );
}

export default AccordionParent