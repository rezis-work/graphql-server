const resolvers = {
  SearchType: {
    __resolveType(obj: { species: string }) {
      if (obj.species) {
        return "Animal";
      }
      return "Person";
    },
  },
  Person: {
    name: (person: { name: string }) => {
      return person.name.toUpperCase();
    },
    pets: (person: { pets: { species: string; name: string }[] }) => {
      return [{ species: "Dog", name: "Bobby" }];
    },
  },
  Query: {
    search: () => {
      return [
        { name: "Rezi", id: "baskbcasjkbak" },
        {
          name: "Bobby",
          species: "Dog",
        },
      ];
    },
    me: () => {
      return "me";
    },
    people: () => {
      return [{ id: "acscasc", name: "Sam", pets: [1] }];
    },
  },
};

export default resolvers;
