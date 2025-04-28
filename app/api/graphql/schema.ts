const schema = `#graphql
type Tweet {
  id: ID!
  content: String!
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

type Query {
  me: Person!
  characters: [Character]!
  search: [SearchResult!]!
} 
`;

export default schema;
