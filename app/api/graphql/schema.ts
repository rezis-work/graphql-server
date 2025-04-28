const schema = `#graphql
type Tweet {
  id: ID!
  content: String!
}

enum STATUSES {
  IN_PROGRESS
  TODO
  DONE
}

type Todo {
  status: STATUSES!
}

type Profile {
  id: ID!
  username: String!
  person: Person!
}
union SearchResult = Profile

interface Character {
  name: String!
  outfit: String!
  strengthStats: Int!
}
type Person implements Character {
  name: String!
  outfit: String!
  strengthStats: Int!
  profile: Profile!

  backgroundStory: String!
}

type Alien implements Character {
  name: String!
  outfit: String!
  strengthStats: Int!

  homePlanet: String!
}

input SearchInput {
  id: ID
  name: String
}

type Query {
  me: Person!
  characters: [Character]!
  search(input: SearchInput!): [SearchResult!]!
}

type Mutation {
  makeTweet(content: String!): Tweet!
}
`;

export default schema;
