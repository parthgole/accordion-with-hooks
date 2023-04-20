import { useState } from 'react';
import Panel from './Panel';
// import PanelB from './PanelB';
// import PanelC from './PanelC';

function AccordionParent() {
  const arrayPanelData=[{heading:'PanelA',arryaData:'PanelA'},{heading:'PanelB',arryaData:'PanelB'},
  {heading:'PanelC',arryaData:'PanelC'},{heading:'PanelD',arryaData:'PanelD'}];
  // const [activePanel,setActivePanel] = useState(0);
  const [panelData,setPanelData] = useState(-1);
  const toggle=(num)=>{
    console.log(num,panelData)
    num===panelData?setPanelData(-1):setPanelData(num);
     
  }



  return (
    <>
        <Panel toggle={toggle} panelData={arrayPanelData} panelDataId={panelData}/>
        {/* <PanelB toggle={toggle} activePanel={activePanel}/>          
        <PanelC toggle={toggle} activePanel={activePanel}/>  */}
    </>
  );
}

export default AccordionParent