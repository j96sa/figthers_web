import express from "express"
import ufcFigthersRoutes from "./routes/ufcFigthersRoutes.js";
import { LocalStorage } from "node-localstorage";
// importind data_base
import DATA from "../DB/db.js";



// CONSTANT ASIGNS 
const app = express();
const PORT = process.env.PORT || 3500;
// 
export const ls = new LocalStorage('../DB');



// MIDDLEWARE PARA PODER LEER EL BODY DE LAS REQUEST
app.use(express.urlencoded({extended: false}));
app.use(express.json());



// ROUTES
app.use('/api/ufc/fighters', ufcFigthersRoutes);



// setting the db in the localstorage
// ls.setItem('testingskils',JSON.stringify(DATA));

app.listen(PORT, ()=>console.log(`server running in port ${PORT}...`));