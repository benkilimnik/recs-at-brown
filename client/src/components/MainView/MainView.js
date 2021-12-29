import { Box, Center, Grid, GridItem, Heading, Stack } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { CourseRecommendations } from '../CourseRecommendations/CourseRecommendations';
import { BottomNav } from '../NavBar/BottomNav';
import { TopNav } from '../NavBar/TopNav';
import { Selector } from '../Selector/Selector';
import brownCampus from '../../assets/brown-campus-light.png';

export const MainView = () => {
  const [courses, setCourses] = useState([]);
  const [defaultSelections, setDefaultSelections] = useState(false);

  useEffect(
    () => {
      console.log('reset');
    },
    [defaultSelections]
  );

  return (
    <Grid
      height="820px"
      templateRows="repeat(12, 1fr)"
      templateColumns="repeat(12, 1fr)"
    >
      <GridItem rowSpan={1} colSpan={12} bg="secondary.100">
        <TopNav
          defaultSelections={defaultSelections}
          setDefaultSelections={setDefaultSelections}
        />
      </GridItem>
      <GridItem rowSpan={10} colSpan={3} bg="primary.100">
        <Selector
          setCourses={setCourses}
          defaultSelections={defaultSelections}
        />
      </GridItem>
      <GridItem
        rowSpan={5}
        colSpan={9}
        bg="rgba(53, 40, 76, 0.9)"
        sx={{ backgroundImage: `url(${brownCampus})` }}
      >
        <Center width="100%" height="100%">
          <Box
            width="70%"
            height="60%"
            backgroundColor="rgba(221, 213, 208, 0.20)"
          >
            <Stack>
              <Heading p="4" size="2xl" color="secondary.100">
                Welcome To Recommendations@Brown!
              </Heading>
              <Heading p="4" size="md" color="secondary.100">
                Check out our{' '}
                <a href="#">
                  <u>tutorials</u>
                </a>{' '}
                if you&apos;re new here :)
              </Heading>
            </Stack>
          </Box>
        </Center>
      </GridItem>
      <GridItem rowSpan={5} colSpan={9} bg="primary.300">
        <CourseRecommendations courses={courses} />
      </GridItem>
      <GridItem rowSpan={1} colSpan={12} bg="secondary.100">
        <BottomNav />
      </GridItem>
    </Grid>
  );
};
