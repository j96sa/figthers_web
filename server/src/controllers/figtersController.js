import { ls } from "../index.js";

// got all the figthers & divisions
export const getAllFighters =  (req, res)=>{
    const DATA = JSON.parse(ls.getItem('testingskils')).ufc;
    res.send(DATA);    
};

// got a single division
export const getFightersDivision =  (req, res)=>{
    const DATA = JSON.parse(ls.getItem('testingskils')).ufc;
    const division = req.params.division;
    
    const index = DATA.findIndex(e=>e.division == division);

    res.send(DATA[index]);
};

// get a single fighter
export const getSingleFighter =  (req, res)=>{
    const DATA = JSON.parse(ls.getItem('testingskils')).ufc;
    const id = req.params.id;
    const division = req.params.division;

    // let newArr = DATA.filter(e=>e.division == division);
    // newArr = newArr[0].fighters;
    // const index = newArr.findIndex(e=>e.id==id);
    // res.send(newArr[index]);

    // optimized code by CHAT-GPT3
    const divisionData = DATA.find((e) => e.division === division);
    const fighterData = divisionData.fighters.find((e) => e.id === id);

    res.send(fighterData);
};

// POST ++++++
export const postFighter = (req, res)=>{
    const FULL_DATABASE = JSON.parse(ls.getItem('testingskils'));
    const DATA = FULL_DATABASE.ufc;
    const newFighter = req.body;
    const division = req.params.division;

    // let newArr = DATA.filter(e=>e.division == division);
    // newArr[0].fighters.push(newFighter)
    // const newData = DATA.map(e=>e.division == division ?newArr[0] :e);
    // ls.setItem('testingskils',JSON.stringify({box:[...FULL_DATABASE.box], ufc:newData}));
    
    // optimized code by CHAT-GPT3
    const divisionData = DATA.find((e) => e.division === division);
    divisionData.fighters.push(newFighter);

    ls.setItem('testingskils',JSON.stringify({box:FULL_DATABASE.box, ufc:DATA}));
    
    res.send(JSON.stringify(DATA));
};

// EDIT || PUT ++++++
export const putFighter = (req, res)=>{
    const FULL_DATABASE = JSON.parse(ls.getItem('testingskils'));
    const DATA = FULL_DATABASE.ufc;
    const id = req.params.id;
    const division = req.params.division;

    // 
    // const div = DATA.find(div => div.fighters.find(fig => fig.id == id));
    // const divUpdated = div.fighters.map(fig => fig.id == id ?req.body :fig);
    // const newDATA = DATA.map(e => e.division == division ?{division, fighters:divUpdated} :e);

    // ls.setItem('testingskils', JSON.stringify({box:FULL_DATABASE.box, ufc:newDATA}));

    // optimized code by CHAT-GPT3
    const divisionData = DATA.find((e) => e.division === division);
    const fighterData = divisionData.fighters.find((e) => e.id == id);
    const updatedFighter = { ...fighterData, ...req.body };

    divisionData.fighters = divisionData.fighters.map((e) =>
      e.id == id ? updatedFighter : e
    );

    ls.setItem('testingskils', JSON.stringify({box:FULL_DATABASE.box, ufc:DATA}));
    res.send(divisionData);
};

// DELETE +++++
export const deleteFighter = (req, res)=>{
    const FULL_DATABASE = JSON.parse(ls.getItem('testingskils'));
    const DATA = FULL_DATABASE.ufc;
    const division = req.params.division;
    const id = req.params.id;

    // const divisionToEdit = DATA.filter(div => div.division == division);
    // const divisionUpdated = divisionToEdit[0].fighters.filter(fig => fig.id != id);
    // const newDATA = DATA.map(div => div.division == division ?{division, fighters:divisionUpdated} :div)
    // ls.setItem('testingskils', JSON.stringify({ufc:newDATA}));

    //  optimized code by CHAT-GPT3
    const divisionData = DATA.find((e) => e.division === division);
    divisionData.fighters = divisionData.fighters.filter((e) => e.id != id);

    ls.setItem("testingskils", JSON.stringify({box:FULL_DATABASE.box ,ufc: DATA }));
    
    res.send(DATA);
};


