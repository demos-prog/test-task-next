import { MongoClient, ServerApiVersion } from "mongodb";

const uri = process.env.MONGO_URL || "";
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

try {
  await client.connect();
  await client.db("admin").command({ ping: 1 });
  console.log("You successfully connected to MongoDB!");
} catch (err) {
  console.error(err);
}

const db = client.db("posts");

export default db;
