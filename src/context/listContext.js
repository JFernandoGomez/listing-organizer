import React from 'react';

export const initialState = {
  startList: [
    {
      name: 'Super Market',
      items: [
        {
          name: 'Buy',
          items: [
            'apples',
            'oranges',
            'soap'
          ]
        }, 
        {
          name: 'Pay',
          items: [
            'Internet Service',
          ]
        }
      ]
    },
    {
      name: 'Music',
      items: [
        {
          name: 'Buy Records',
          items: [
            'The Beatles',
            'The Doors',
            'AC DC'
          ],
        },
        {
          name: 'Try',
          items: [
            'Queen'
          ]
        }
      ],
    }
  ],
  editListItem: () => {}
};

export const ListContext = React.createContext(initialState);

