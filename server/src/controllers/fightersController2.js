import { ls } from "../index.js";

// got all the figthers & divisions
export const getAllFighters = (req, res) => {
  const DATA = JSON.parse(ls.getItem("testingskils")).ufc;

  res.send(DATA);
};

// got a single division
export const getFightersDivision = (req, res) => {
  const DATA = JSON.parse(ls.getItem("testingskils")).ufc;
  const division = req.params.division;

  const divisionData = DATA.find((e) => e.division === division);

  res.send(divisionData);
};

// get a single fighter
export const getSingleFighter = (req, res) => {
  const DATA = JSON.parse(ls.getItem("testingskils")).ufc;
  const id = req.params.id;
  const division = req.params.division;

  const divisionData = DATA.find((e) => e.division === division);
  const fighterData = divisionData.fighters.find((e) => e.id === id);

  res.send(fighterData);
};

// POST ++++++
export const postFighter = async (req, res) => {
  const DATA = JSON.parse(ls.getItem("testingskils")).ufc;
  const newFighter = req.body;
  const division = req.params.division;

  const divisionData = DATA.find((e) => e.division === division);
  divisionData.fighters.push(newFighter);

  ls.setItem("testingskils", JSON.stringify({ ufc: DATA }));

  res.send(DATA);
};

// EDIT ++++++
export const putFighter = (req, res) => {
  const id = req.params.id;
  const division = req.params.division;
  const DATA = JSON.parse(ls.getItem("testingskils")).ufc;

  const divisionData = DATA.find((e) => e.division === division);
  const fighterData = divisionData.fighters.find((e) => e.id === id);
  const updatedFighter = { ...fighterData, ...req.body };

  divisionData.fighters = divisionData.fighters.map((e) =>
    e.id === id ? updatedFighter : e
  );

  ls.setItem("testingskils", JSON.stringify({ ufc: DATA }));

  res.send(DATA);
};

// DELETE +++++
export const deleteFighter = (req, res) => {
  const division = req.params.division;
  const id = req.params.id;
  const DATA = JSON.parse(ls.getItem("testingskils")).ufc;

  const divisionData = DATA.find((e) => e.division === division);
  divisionData.fighters = divisionData.fighters.filter((e) => e.id !== id);

  ls.setItem("testingskils", JSON.stringify({ ufc: DATA }));

  res.send(DATA);
};
