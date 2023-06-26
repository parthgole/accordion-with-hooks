import { useState } from 'react';
import Panel from './Panel';

function AccordionParent() {

  const bookData=[{heading:'PanelA',Description:'PanelA'},{heading:'PanelB',Description:'PanelB'},
  {heading:'PanelC',Description:'PanelC'},{heading:'PanelD',Description:'PanelD'},{heading:'PanelE',Description:'PanelE'}];

  const [activePanel,setActivePanel] = useState(-1);
  const [heading,setHeading]=useState('')
  const toggle=(num,heading)=>{
    // console.log(heading)
    num===activePanel?setActivePanel(-1):setActivePanel(num);
    setHeading(heading)
  }

  document.title=activePanel===(-1)?'Accordion':heading

  return (
    <>  
        <h3 style={{border:'1px solid red',borderRadius:'10px',backgroundColor:'black',
        color:'white',width:'80%',height:'auto',margin:'10px auto 5px',padding:'10px'}}>
          My First Accordion Example with useState</h3>
        {bookData.map((item,index)=>

        <Panel  key={index} toggle={toggle} heading={item.heading} 
        bookDescription={item.Description} activePanelId={index} activeState={activePanel}/>
          
        )}
        <h4 style={{border:'1px solid red',borderRadius:'10px',backgroundColor:'black',color:'white',width:'50%',height:'auto',margin:'10px auto 5px',padding:'10px'}}>
          Thank You For Visiting My BookStore</h4>
    </>
  );
}

export default AccordionParent