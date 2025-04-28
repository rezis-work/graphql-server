const resolvers = {
  Person: {
    name: (person: { name: string }) => {
      return person.name.toUpperCase();
    },
  },
  Query: {
    me: () => {
      return "me";
    },
    people: () => {
      return [{ id: "acscasc", name: "Sam" }];
    },
  },
};

export default resolvers;
