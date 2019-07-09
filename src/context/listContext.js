import React from 'react';

export const initialState = {
  startList: [
    {
      id: 1,
      name: 'Super Market',
      items: [3, 4],
      parent: 0
    },
    {
      id: 2,
      name: 'Music',
      items: [5, 6],
      parent: 0
    },
    {
      id: 3,
      name: 'Buy',
      items: [7, 8, 9],
      parent: 1
    },
    {
      id: 4,
      name: 'Pay',
      items: [10],
      parent: 1
    },
    {
      id: 5,
      name: 'Buy Records',
      items: [11, 12, 13],
      parent: 2
    },
    {
      id: 6,
      name: 'Try',
      items: [14],
      parent: 2
    },
    {
      id: 7,
      name: 'apples',
			items: [],
			parent: 3,
    },
    {
      id: 8,
      name: 'oranges',
			items: [],
			parent: 3,
    },
    {
      id: 9,
      name: 'soap',
			items: [],
			parent: 3,
    },
    {
      id: 10,
      name: 'Internet Service',
			items: [],
			parent: 4,
    },
    {
      id: 11,
      name: 'The Beatles',
			items: [],
			parent: 5,
    },
    {
      id: 12,
      name: 'The Doors',
			items: [],
			parent: 5,
    },
    {
      id: 13,
      name: 'AC DC',
			items: [],
			parent: 5,
    },
    {
      id: 14,
      name: 'Queen',
			items: [],
			parent: 6,
    }
  ],
  editListItem: () => {}
};

export const ListContext = React.createContext(initialState);

