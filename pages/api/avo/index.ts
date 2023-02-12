// import { IncomingMessage, ServerResponse } from "http";
import { NextApiRequest, NextApiResponse } from "next";

import Database from "@database";
const allAvos = async (request: NextApiRequest, response: NextApiResponse) => { 
    const DB = new Database();
    const allEntries = await DB.getAll();
    const dataLength = allEntries.length

    response.statusCode = 200 //ok
    response.setHeader( 'Content-type', 'application/json');
    response.end(JSON.stringify({ data: allEntries, dataLength}));
 }
 export default allAvos;