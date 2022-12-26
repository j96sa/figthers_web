import {ls} from '../index.js';

// got all fighters & divisions
export const getAllBoxers = (req, res)=>{
    const BOX_DATA = JSON.parse(ls.getItem('testingskils')).box;
    res.send(BOX_DATA);
};


// got a single fighter division
export const getSingleDivision = (req, res)=>{
    const BOX_DATA = JSON.parse(ls.getItem('testingskils')).box;
    const divisionID = req.params.division;

    const selectedDivision = BOX_DATA.find(e => e.division === divisionID);

    res.send(selectedDivision);
};


// got a single fighter
export const getSingleBoxer = (req, res)=>{
    const BOX_DATA = JSON.parse(ls.getItem('testingskils')).box;
    const divisionID = req.params.division;
    const id = req.params.id;

    const selectedDivision = BOX_DATA.find(div => div.division === divisionID);
    const SINGLE_BOXER = selectedDivision.fighters.find(boxer => boxer.id === id);

    res.send(SINGLE_BOXER);
};


// ******** POST 
export const postBoxer = (req, res)=>{
    const FULL_DATA = JSON.parse(ls.getItem('testingskils'));
    const BOX_DATA = FULL_DATA.box; 
    const divisionID = req.params.division;
    const newBoxer = req.body;

    // Añadir el nuevo boxeador al array de boxeadores de la división especificada
    const divisionIndex = BOX_DATA.findIndex(div => div.division === divisionID);
    BOX_DATA[divisionIndex].fighters.push(newBoxer);

    // Guardar los cambios en la base de datos
    ls.setItem('testingskils', JSON.stringify({ufc:FULL_DATA.ufc, box: DATA }));

    res.send(DATA[divisionIndex]);
};

// ******** PUT 
export const putBoxer = (req, res)=>{
    const FULL_DATA = JSON.parse(ls.getItem('testingskils'));
    const BOX_DATA = FULL_DATA.box;
    const divisionID = req.params.division;
    const id = req.params.id;
    const updatedBoxer = req.body;

    // Encontrar el índice de la división y el boxeador especificados
    const divisionIndex = BOX_DATA.findIndex(div => div.division === divisionID);
    const boxerIndex = BOX_DATA[divisionIndex].fighters.findIndex(fig => fig.id === id);

    // Actualizar los datos del boxeador
    BOX_DATA[divisionIndex].fighters[boxerIndex] = updatedBoxer;

    // Guardar los cambios en la base de datos
    ls.setItem('testingskils', JSON.stringify({ ufc:FULL_DATA.ufc, box: BOX_DATA }));

    res.send(BOX_DATA[divisionIndex]);
};

// ******** DELETE
export const deleteBoxer = (req, res)=>{
    const FULL_DATA = JSON.parse(ls.getItem('testingskils'));
    const BOX_DATA = FULL_DATA.box;

    const divisionID = req.params.division;
    const id = req.params.id;

    // Encontrar el índice de la división y el boxeador especificados
    const divisionIndex = BOX_DATA.findIndex(div => div.division === divisionID);
    const boxerIndex = BOX_DATA[divisionIndex].fighters.findIndex(fig => fig.id === id);

    // Eliminar el boxeador del array
    BOX_DATA[divisionIndex].fighters.splice(boxerIndex, 1);

    // Guardar los cambios en la base de datos
    ls.setItem('testingskils', JSON.stringify({ufc: FULL_DATA.ufc, box: BOX_DATA }));

    res.send(BOX_DATA[divisionIndex]);
};



