import { IncomingMessage, ServerResponse } from "http"
import Database from "../../database/db";

const allAvos = async (request: IncomingMessage, response: ServerResponse) => { 
    const DB = new Database();
    const allEntries = await DB.getAll();

    response.statusCode = 200 //ok
    response.setHeader( 'Content-type', 'application/json');
    response.end(JSON.stringify({ data: allEntries}));
 }
 export default allAvos;