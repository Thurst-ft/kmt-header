import { PropTypes } from 'react';

export const menuTypes ={
  items: PropTypes.array,
  enableMobile: PropTypes.bool
};

export const itemsTypes ={
  label: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  active: PropTypes.bool
};

const defaultState = {
  items: [
    {
      label: 'DASHBOARD',
      attrs: {
        href: '#'
      }
    },
    {
      label: 'MY FT',
      active: true,
      attrs: {
        href: '#'
      }
    },
    {
      label: 'USERS',
      attrs: {
        href: '#'
      }
    }
  ],
  enableMobile: true
};

const mainMenu = (state = defaultState) => {
  return state;
};

export default mainMenu;
