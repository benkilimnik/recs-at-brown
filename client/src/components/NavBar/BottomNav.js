import React from 'react';
import { Flex, Spacer, Link, IconButton, HStack } from '@chakra-ui/react';
import { FaFacebook, FaDiscord, FaYoutube } from 'react-icons/fa';
import { ExternalLinkIcon } from '@chakra-ui/icons';

export const BottomNav = () => {
  return (
    <Flex pt="3">
      <HStack ml="4" spacing="24px">
        <Link color="primary.300" href="https://cab.brown.edu/" isExternal>
          Courses@Brown <ExternalLinkIcon mx="2px" />
        </Link>
        <Link
          color="primary.300"
          href="https://thecriticalreview.org/"
          isExternal
        >
          Critical Review <ExternalLinkIcon mx="2px" />
        </Link>
      </HStack>
      <Spacer />
      <HStack spacing="10px" mr="4">
        <IconButton colorScheme="facebook" icon={<FaFacebook />} />
        <IconButton bg="#c4302b" color="white" icon={<FaYoutube />} />
        <IconButton bg="#7289d9" color="white" icon={<FaDiscord />} />
      </HStack>
    </Flex>
  );
};
