import { MongoClient } from "mongodb";

// Reuse one client across hot reloads (dev) and warm serverless invocations (prod).
const globalForMongo = globalThis as unknown as { _mongoClient?: Promise<MongoClient> };

export function getDb() {
  const uri = process.env.MONGODB_URI;
  if (!uri) throw new Error("MONGODB_URI is not set");
  // fail fast (instead of the 30s default) so the form can show an error quickly;
  // drop the cached promise on failure so the next request retries
  globalForMongo._mongoClient ??= new MongoClient(uri, { serverSelectionTimeoutMS: 8000 })
    .connect()
    .catch((err) => {
      globalForMongo._mongoClient = undefined;
      throw err;
    });
  return globalForMongo._mongoClient.then((c) => c.db(process.env.MONGODB_DB || "razus_ict_world"));
}
