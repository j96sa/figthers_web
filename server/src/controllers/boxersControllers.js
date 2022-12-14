import {ls} from '../index.js';

export const getAllBoxers = (req, res)=>{
    const DATA = JSON.parse(ls.getItem('testingskils')).box;

    console.log(DATA);
    res.send(JSON.stringify(DATA))
};

export const getSingleDivision = (req, res)=>{
    const DATA = JSON.parse(ls.getItem('testingskils')).box;
    const division = req.params.division;

    const newArr = DATA.filter(div => div.division == division);

    console.log(newArr);
    res.send(DATA)
};

export const getSingleBoxer = (req, res)=>{
    const DATA = JSON.parse(ls.getItem('testingskils')).box;
    const division = req.params.division;
    const id = req.params.id;

    const newDivision = DATA.filter(div => div.division == division);
    const singleBoxer = newDivision[0].fighters.filter(fig => fig.id == id);

    res.send(singleBoxer);
};

// ******** POST 
export const postBoxer = (req, res)=>{
    const DATA = JSON.parse(ls.getItem('testingskils')).box; 
};

// ******** PUT 
export const putBoxer = (req, res)=>{
    const DATA = JSON.parse(ls.getItem('testingskils')).box;
};

// ******** DELETE
export const deleteBoxer = (req, res)=>{
    const DATA = JSON.parse(ls.getItem('testingskils')).box;
};



