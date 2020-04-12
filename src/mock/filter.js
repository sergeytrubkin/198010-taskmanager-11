const filtersName = [
  `All`, `Overdue`, `Today`, `Favorites`, `Repeating`, `Archive`,
];

const generateFilters = () => {
  return filtersName.map((it) => {
    return {
      name: it,
      count: Math.floor(Math.random() * 10),
    };
  });
};

export {generateFilters};
