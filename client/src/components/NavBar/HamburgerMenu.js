import React from 'react';
import { Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/menu';
import { Icon } from '@chakra-ui/react';
import { IconButton } from '@chakra-ui/button';
import { HamburgerIcon, RepeatIcon } from '@chakra-ui/icons';
import { MdMail } from 'react-icons/md';

export const HamburgerMenu = props => {
  return (
    <Menu>
      <MenuButton
        colorScheme="primary"
        as={IconButton}
        aria-label="Options"
        icon={<HamburgerIcon />}
        variant="primaryOutline"
      />
      <MenuList
        bg="secondary.100"
        color="primary.300"
        borderColor="primary.300"
      >
        <MenuItem icon={<Icon as={MdMail} />}>Provide Feedback</MenuItem>
        <MenuItem
          icon={<RepeatIcon />}
          onClick={() => props.setDefaultSelections(!props.defaultSelections)}
        >
          Reset Search Criteria
        </MenuItem>
      </MenuList>
    </Menu>
  );
};
