import express from "express"
import ufcFigthersRoutes from "./routes/ufcFigthersRoutes.js";
import boxersFighterRoutes from './routes/boxersFigthersRoutes.js';
import { LocalStorage } from "node-localstorage";
import cors from 'cors';
// importing data_base
import DATA from "../DB/db.js";



// CONSTANT ASIGNS 
const app = express();
const PORT = process.env.PORT || 3500;
// 
export const ls = new LocalStorage('../DB');



// MIDDLEWARE PARA PODER LEER EL BODY DE LAS REQUEST
app.use(express.urlencoded({extended: false}));
app.use(express.json());


// ****** SETTING CORS ******
const whiteList = ['http://localhost:3000'];
const corsOptions = {
    origin:(origin, callBack)=> {
        if (whiteList.indexOf(origin) !== -1 || !origin){
            callBack(null, true);
        }else{
            console.log(origin);
            callBack(new Error('Not Allowed by CORS'));
        };
    },
    optionsSuccessStatus:200
};
//using cors
app.use(cors(corsOptions));



// ROUTES
app.use('/api/ufc/fighters', ufcFigthersRoutes);
app.use('/api/box/fighters', boxersFighterRoutes);



// setting the db in the localstorage
// ls.setItem('testingskils',JSON.stringify(DATA));

app.listen(PORT, ()=>console.log(`server running in port ${PORT}...`));


