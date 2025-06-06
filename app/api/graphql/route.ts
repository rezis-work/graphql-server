import { NextRequest } from "next/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { ApolloServer } from "@apollo/server";
import {
  ApolloServerPluginLandingPageLocalDefault,
  ApolloServerPluginLandingPageProductionDefault,
} from "@apollo/server/plugin/landingPage/default";
import { schema } from "./schema";
import { resolvers } from "./resolvers";

let plugins = [];
if (process.env.NODE_ENV === "production") {
  plugins = [
    ApolloServerPluginLandingPageProductionDefault({
      embed: true,
      graphRef: "myGraph@prod",
    }),
  ];
} else {
  plugins = [ApolloServerPluginLandingPageLocalDefault({ embed: true })];
}

const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
  plugins,
});

const handler = startServerAndCreateNextHandler<NextRequest>(server, {});

export async function GET(request: NextRequest) {
  return handler(request);
}

export async function POST(request: NextRequest) {
  return handler(request);
}
