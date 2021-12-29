import {
  Flex,
  Spacer,
  Heading,
  Button,
  HStack,
  Center,
  Box,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Text
} from '@chakra-ui/react';
import React, { useState } from 'react';
import Login from '../LoginView/Login';
import SignUp from '../LoginView/SignUp';
import { HamburgerMenu } from './HamburgerMenu';
import LoginGoogle from '../LoginView/Google/LoginGoogle';
import Logout from '../LoginView/Google/Logout';

export const TopNav = () => {
  const {
    isOpen: isOpenLogin,
    onOpen: onOpenLogin,
    onClose: onCloseLogin
  } = useDisclosure();
  const {
    isOpen: isOpenSignUp,
    onOpen: onOpenSignUp,
    onClose: onCloseSignUp
  } = useDisclosure();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoggedInGoogle, setIsLoggedInGoogle] = useState(false);
  const [email, setEmail] = useState('');
  return (
    <Flex pt="3" ml="2">
      <HStack spacing="12px">
        <HamburgerMenu />
        <Heading color="primary.300" size="md">
          Recommendations@Brown
        </Heading>
      </HStack>
      <Spacer />
      <HStack pr="4">
        {isLoggedIn || isLoggedInGoogle ? (
          <Center>
            <Text m={2}>Logged in as {email}</Text>
            {isLoggedIn ? (
              <Button
                size="md"
                variant="primary"
                mr="2"
                onClick={() => setIsLoggedIn(false)}
              >
                Logout
              </Button>
            ) : null}
            {isLoggedInGoogle ? (
              <Box m={2} textAlign="left">
                <Logout setIsLoggedInGoogle={setIsLoggedInGoogle} />
              </Box>
            ) : null}
          </Center>
        ) : (
          <>
            <Center>
              <Button
                onClick={onOpenSignUp}
                size="md"
                variant="primaryOutline"
                mr="2"
              >
                Sign Up
              </Button>
              <Modal isOpen={isOpenSignUp} onClose={onCloseSignUp}>
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader>SignUp</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>
                    <SignUp setIsLoggedIn={setIsLoggedIn} setEmail={setEmail} />
                  </ModalBody>
                  <ModalFooter />
                </ModalContent>
              </Modal>
            </Center>
            <Center>
              <Button
                onClick={onOpenLogin}
                size="md"
                variant="primary"
                color="secondary.100"
              >
                Login
              </Button>
              <Modal isOpen={isOpenLogin} onClose={onCloseLogin}>
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader>Login</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>
                    <Login setIsLoggedIn={setIsLoggedIn} setEmail={setEmail} />
                    <Flex width="full" align="center" justifyContent="center">
                      <Box m={2} textAlign="left">
                        <LoginGoogle
                          setIsLoggedInGoogle={setIsLoggedInGoogle}
                          setEmail={setEmail}
                        />
                      </Box>
                    </Flex>
                  </ModalBody>
                  <ModalFooter />
                </ModalContent>
              </Modal>
            </Center>
          </>
        )}
      </HStack>
    </Flex>
  );
};
