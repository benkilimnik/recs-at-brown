import { Button } from '@chakra-ui/button';
import { Box, Flex, Heading, Spacer } from '@chakra-ui/layout';
import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Checkbox,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Textarea,
  CloseButton
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { Course } from '../CourseRecommendations/Course';
import { HoursSlider } from './HoursSlider';

export const Selector = props => {
  /* Default variables used when the user decides to reset selection */
  const DEFAULT_MAX_HOURS = 20;
  const DEFAULT_MIN_HOURS = 4;
  const DEFAULT_WRIT = false;
  const DEFAULT_DIAP = false;
  const DEFAULT_NUM_REQS = 2;
  const DEFAULT_KEYWORDS = '';

  /* state variables that are used to make course requests */
  const [maxHours, setMaxHours] = useState(DEFAULT_MAX_HOURS);
  const [minHours, setMinHours] = useState(DEFAULT_MIN_HOURS);
  const [writ, setWrit] = useState(DEFAULT_WRIT);
  const [diap, setDiap] = useState(DEFAULT_DIAP);
  const [numReqs, setNumReqs] = useState(DEFAULT_NUM_REQS);
  const [keywords, setKeywords] = useState(DEFAULT_KEYWORDS);
  const [displayErr, setDisplayErr] = useState('none');

  /* handles changes to the keywords text area */
  const handleInputChange = e => {
    let inputValue = e.target.value;
    setKeywords(inputValue);
  };

  useEffect(
    () => {
      setMaxHours(DEFAULT_MAX_HOURS);
      setMinHours(DEFAULT_MIN_HOURS);
      setWrit(DEFAULT_WRIT);
      setDiap(DEFAULT_DIAP);
      setNumReqs(DEFAULT_NUM_REQS);
      setKeywords(DEFAULT_KEYWORDS);
    },
    [props.defaultSelections]
  );

  useEffect(() => {
    getRecommendations();
  }, []);

  /* fetches course recommendations */
  const getRecommendations = async () => {
    const recommendations = await fetch('http://localhost:4567/recommend', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({
        username: 'none',
        keywords: keywords,
        hours: (maxHours + minHours) / 2,
        WRIT: writ,
        DIAP: diap
      })
    })
      .then(response => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .catch(() => {
        setDisplayErr(' ');
      });
    const courses = [];
    for (const recommendation in recommendations) {
      const course = JSON.parse(recommendations[recommendation]);
      courses.push(
        <Course course={course} minHours={minHours} maxHours={maxHours} />
      );
    }
    props.setCourses(courses);
  };

  return (
    <Box height="100%" width="100%">
      <Flex
        direction="column"
        ml="6"
        mt="6"
        mb="3"
        justifyContent="space-between"
        alignItems="start"
        height="70%"
        width="100%"
      >
        {/* <Box>
        <Heading color="primary.300" size="md" mb="2">
          Preferred Departments:
        </Heading>
        <Button leftIcon={<BsPlusLg />} variant="primary">
          Add A Department
        </Button>
      </Box>
      <Spacer /> */}
        <Box>
          <Heading color="primary.300" size="md" mb="2">
            Keywords:
          </Heading>
          <Textarea
            width="270px"
            value={keywords}
            onChange={handleInputChange}
            // placeholder="Enter search keywords..."
            color="primary.300"
            size="md"
            resize={'none'}
          />
        </Box>
        <Spacer />
        {/* <Box>
        <Heading color="primary.300" size="md" mb="2">
          Give Me More Like:
        </Heading>
        <Button leftIcon={<BsPlusLg />} variant="primary">
          Add A Course
        </Button>
      </Box>
      <Spacer />
      <Box>
        <Heading color="primary.300" size="md" mb="2">
          Give Me Less Like:
        </Heading>
        <Button leftIcon={<BsPlusLg />} variant="primary">
          Add A Course
        </Button>
      </Box>
      <Spacer /> */}
        <Box width="100%">
          <Heading color="primary.300" size="md" mb="2">
            Weekly Hours:
          </Heading>
          <HoursSlider
            minHours={minHours}
            maxHours={maxHours}
            setMaxHours={setMaxHours}
            setMinHours={setMinHours}
          />
        </Box>
        <Spacer />
        <Box>
          <Heading color="primary.300" size="md" mb="2">
            # Of Requirements:
          </Heading>
          <NumberInput
            value={numReqs}
            min={0}
            max={5}
            onChange={e => setNumReqs(e)}
          >
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </Box>
        <Spacer />
        <Checkbox
          size="md"
          colorScheme="primary"
          isChecked={writ}
          onChange={() => setWrit(!writ)}
        >
          Writing-Designated Courses
        </Checkbox>
        <Spacer />
        <Checkbox
          size="md"
          colorScheme="primary"
          isChecked={diap}
          onChange={() => setDiap(!diap)}
        >
          DIAP Courses: Race, Gender, Inequality
        </Checkbox>
        <Spacer />
        <Button variant="primary" onClick={getRecommendations}>
          Get Recommendations
        </Button>
      </Flex>
      <Alert status="error" display={displayErr}>
        <AlertIcon />
        <Box flex="1">
          <AlertTitle>Server Error!</AlertTitle>
          <AlertDescription display="block">
            It looks like you were unable to access our servers. Please refresh
            your page and try again.
          </AlertDescription>
        </Box>
        <CloseButton
          position="absolute"
          right="8px"
          top="8px"
          onClick={() => setDisplayErr('none')}
        />
      </Alert>
    </Box>
  );
};
