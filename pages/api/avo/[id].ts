import { NextApiRequest, NextApiResponse } from "next";
import Database from "@database";

const allAvos = async (request: NextApiRequest, response: NextApiResponse) => {
  const DB = new Database();

  const id = request.query.id;
  const avo = await DB.getById(id as string);

  // response.statusCode = 200 //ok
  // response.setHeader( 'Content-type', 'application/json');
  // response.end(JSON.stringify({ data: avo }));

  response.status(200).json(avo);
};
export default allAvos;
