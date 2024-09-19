// This is an example of how to access a session from an API route
import type { NextApiRequest, NextApiResponse } from "next"



export default async (req: NextApiRequest, res: NextApiResponse) => {
  let body =  JSON.parse(req.body)


   await db.collection("cart").deleteMany({})
   await db .collection("cart").insertMany(body.map(b=>{
    return{titel:b}
   }))
  res.send({ code: 0, cdn: process.env.CDN, pong:true})
}
