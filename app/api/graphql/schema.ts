const schema = `#graphql
type Person {
  name: String!
  id: ID!
}
type Query {
  me: String!
  people: [Person!]!
}
`;

export default schema;
