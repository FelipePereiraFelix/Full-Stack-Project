// Javascript Assincrono
// await async
// Fullfilled
import { MongoClient } from "mongodb";
import dotenv from "dotenv";

const URI = process.env.MONGODB_URI;

const client = new MongoClient(URI);

export const db = client.db("spotifyAula");
// const songCollection = await db.collection("songs").find({}).toArray();

// console.log(songCollection);
