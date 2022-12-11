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

    let newArr = DATA.filter(e=>e.division == division);
    newArr = newArr[0].fighters;
    const index = newArr.findIndex(e=>e.id==id);

    res.send(newArr[index]);
};

// POST ++++++
export const postFighter = async(req, res)=>{
    const DATA = JSON.parse(ls.getItem('testingskils')).ufc;
    const newFighter = req.body;
    const division = req.params.division;

    let newArr = DATA.filter(e=>e.division == division);
    newArr[0].fighters.push(newFighter)

    const newData = DATA.map(e=>e.division == division ?newArr[0] :e);
    ls.setItem('testingskils',JSON.stringify({ufc:newData}));
    
    res.send(JSON.stringify({ufc:newData}));
};

// EDIT ++++++
export const putFighter = (req, res)=>{
    const id = req.params.id;
    const division = JSON.parse(req.params.division);
    const DATA = JSON.parse(ls.getItem('testingskils')).ufc;

    // 
    const div = DATA.find(div => div.fighters.find(fig => fig.id == id));
    const divUpdated = div.fighters.map(fig => fig.id == id ?req.body :fig);
    const newDATA = DATA.map(e => e.division == division ?{division, fighters:divUpdated} :e);

    ls.setItem('testingskils', JSON.stringify({ufc:newDATA}));

    console.log(division);
    res.send(newDATA);
};

// DELETE +++++
export const deleteFighter = (req, res)=>{
    const division = JSON.parse(req.params.division);
    const id = req.params.id;
    const DATA = JSON.parse(ls.getItem('testingskils')).ufc;

    const divisionToEdit = DATA.filter(div => div.division == division);
    const divisionUpdated = divisionToEdit[0].fighters.filter(fig => fig.id != id);
    const newDATA = DATA.map(div => div.division == division ?{division, fighters:divisionUpdated} :div)

    ls.setItem('testingskils', JSON.stringify({ufc:newDATA}));
    
    res.send(newDATA);
};


