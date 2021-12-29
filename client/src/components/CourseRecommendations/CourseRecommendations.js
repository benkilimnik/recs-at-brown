import React, { useState } from 'react';
import { Flex } from '@chakra-ui/layout';

export const CourseRecommendations = props => {
  return (
    <Flex height="100%" pt="4">
      <Flex
        direction="column"
        width="100%"
        alignItems="center"
        overflow="scroll"
        justifyContent="space-between"
      >
        {props.courses.length > 0 && props.courses}
      </Flex>
    </Flex>
  );
};
