import { ExternalLinkIcon } from '@chakra-ui/icons';
import {
  Box,
  Divider,
  Heading,
  HStack,
  Flex,
  VStack,
  Text,
  Center
} from '@chakra-ui/layout';
import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stat,
  StatHelpText,
  StatLabel,
  StatNumber,
  useDisclosure
} from '@chakra-ui/react';
import React from 'react';
import './Course.scss';

export const Course = props => {
  const course = props.course;
  const minHours = props.minHours;
  const maxHours = props.maxHours;

  const { isOpen, onOpen, onClose } = useDisclosure();

  const emojify = bool => {
    if (bool) {
      return '✅';
    } else {
      return '❌';
    }
  };

  const ratingify = num => {
    if (num > 4.75) {
      return '🤩 The very best!';
    } else if (num > 4.5) {
      return '😍 Excellent pick!';
    } else if (num > 4) {
      return '😃 Pretty solid';
    } else {
      return '💩 Uhm... you should pass ';
    }
  };

  const hoursInRange = num => {
    if (num > maxHours) {
      return `⬆ ${((num - maxHours) / maxHours * 100).toFixed(2)}% more`;
    } else if (num < minHours) {
      return `⬇ ${((minHours - num) / minHours * 100).toFixed(2)}% less`;
    } else {
      return '👌 Just right ';
    }
  };

  return (
    <Box
      className="course"
      width="98%"
      border="2px"
      borderColor="purple.100"
      mb="20px"
      onClick={onOpen}
      _hover={{
        bg: 'primary.400'
      }}
    >
      <HStack width="100%" height="50px" color="purple.100">
        <Heading ml="20px" size="sm" width="100px">
          {course.id}
        </Heading>
        <Divider color="purple.100" height="30px" orientation="vertical" />
        <Heading pl="20px" size="sm" width="370px">
          {course.Title.length > 35
            ? course.Title.substring(0, 35).trim() + '...'
            : course.Title}
        </Heading>
        <Divider color="purple.100" height="30px" orientation="vertical" />
        <Heading pl="20px" size="sm" width="140px">
          Hours: ~{course.CourseHours.toFixed(2)}
        </Heading>
        <Divider color="purple.100" height="30px" orientation="vertical" />
        <Heading pl="20px" size="sm" width="100px">
          WRIT: {emojify(course.WRIT)}
        </Heading>
        <Divider color="purple.100" height="30px" orientation="vertical" />
        <Heading pl="20px" size="sm" width="100px">
          DIAP: {emojify(course.DIAP)}
        </Heading>
        <Divider color="purple.100" height="30px" orientation="vertical" />
        <Heading pl="20px" size="sm">
          {course.Professor.length > 11
            ? course.Professor.substring(0, 11).trim() + '...'
            : course.Professor}
        </Heading>
      </HStack>
      <Modal size="xl" variant="secondary" isOpen={isOpen} onClose={onClose}>
        <ModalOverlay color="secondary.100" />
        <ModalContent>
          <ModalHeader>{course.Title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box width="100%" mb="10px" py="10px" backgroundColor="primary.300">
              <Center>
                <Heading size="md" color="secondary.100">
                  Stats
                </Heading>
              </Center>
            </Box>
            <Flex mb="10px" justifyContent="space-between">
              <Stat>
                <StatLabel>Average Hours</StatLabel>
                <StatNumber>{course.CourseHours.toFixed(2)}</StatNumber>
                <StatHelpText>{hoursInRange(course.CourseHours)}</StatHelpText>
              </Stat>
              <Stat>
                <StatLabel>Max Hours</StatLabel>
                <StatNumber>{course.maxHours.toFixed(2)}</StatNumber>
                <StatHelpText>{hoursInRange(course.maxHours)}</StatHelpText>
              </Stat>
              <Stat>
                <StatLabel>Course Rating</StatLabel>
                <StatNumber>{course.courseRating.toFixed(2)}</StatNumber>
                <StatHelpText>{ratingify(course.courseRating)}</StatHelpText>
              </Stat>
              <Stat>
                <StatLabel>Prof Rating</StatLabel>
                <StatNumber>{course.professorRating.toFixed(2)}</StatNumber>
                <StatHelpText size="lg">
                  {ratingify(course.professorRating)}
                </StatHelpText>
              </Stat>
            </Flex>
            <Box width="100%" mb="10px" py="10px" backgroundColor="primary.300">
              <Center>
                <Heading size="md" color="secondary.100">
                  Logistics
                </Heading>
              </Center>
            </Box>
            <VStack alignItems="start" mb="10px">
              <Text>
                <b>Course ID:</b> {course.id}
              </Text>
              <Text>
                <b>Course Time(s):</b> {course.CourseTime}
              </Text>
              <Text>
                <b>Course Reference Number:</b> {course.CRN}
              </Text>
              <Text>
                <b>Professor:</b> {course.Professor}
              </Text>
            </VStack>
            <Box width="100%" mb="10px" py="10px" backgroundColor="primary.300">
              <Center>
                <Heading size="md" color="secondary.100">
                  Curricular Programs
                </Heading>
              </Center>
            </Box>
            <VStack alignItems="start">
              <Text>
                <b>Writing-Designated:</b> {emojify(course.WRIT)}
              </Text>
              <Text>
                <b>DIAP (Race, Gender, Inequality):</b> {emojify(course.DIAP)}
              </Text>
              <Text>
                <b>First Year Seminar:</b> {emojify(course.FYS)}
              </Text>
              <Text>
                <b>Sophomore Seminar:</b> {emojify(course.SOPH)}
              </Text>
              <Text>
                <b>Community-Based Learning and Research:</b>{' '}
                {emojify(course.CBLR)}
              </Text>
              <Text>
                <b>Collaborative Scholarly Experiences:</b>{' '}
                {emojify(course.CSE)}
              </Text>
            </VStack>
          </ModalBody>
          <ModalFooter>
            <a
              href={`https://thecriticalreview.org/search/${
                course.Department
              }/${course.CourseNum}/`}
              target={'_blank'}
            >
              <Button
                rightIcon={<ExternalLinkIcon />}
                variant="primaryOutline"
                mr={3}
              >
                Critical Review
              </Button>
            </a>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};
