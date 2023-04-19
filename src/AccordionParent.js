import { useState } from 'react';
import PanelA from './PanelA';
import PanelB from './PanelB';
import PanelC from './PanelC';

function AccordionParent() {
  const [activePanel,setActivePanel] = useState(0);
  const toggle=(num)=>{
    // console.log(num)    
    num!==activePanel?setActivePanel(num):setActivePanel(0);
    
    
  }
  console.log(activePanel)
  return (
    <>
        <PanelA toggle={toggle} activePanel={activePanel}/>
        <PanelB toggle={toggle} activePanel={activePanel}/>          
        <PanelC toggle={toggle} activePanel={activePanel}/>          
    </>
  );
}

export default AccordionParent