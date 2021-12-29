import React, {useState} from 'react';
import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Button,
    CircularProgress,
    Text,
    InputGroup,
    InputRightElement,
    Icon
} from '@chakra-ui/react';

import {userLogin} from './LoginAPI';
import ErrorMessage from './ErrorMessage';
import LoginGoogle from "./Google/LoginGoogle";

export default function Login(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = async event => {
        event.preventDefault();

        setIsLoading(true);

        try {
            await userLogin({email, password});
            setIsLoggedIn(true);
            setIsLoading(false);
            setShowPassword(false);
            props.setIsLoggedIn(true);
            props.setEmail(email);
        } catch (error) {
            setError('Invalid username or password');
            setIsLoading(false);
            setEmail('');
            setPassword('');
            setShowPassword(false);
        }
    };

    const handlePasswordVisibility = () => setShowPassword(!showPassword);

    return (
        <Flex width="full" align="center" justifyContent="center">
                {isLoggedIn ? (
                    <Box textAlign="center">
                        <Text>{email} logged in!</Text>
                        <Button
                            variantcolor="orange"
                            variant="outline"
                            width="full"
                            mt={4}
                            onClick={() => setIsLoggedIn(false)}
                        >
                            Logout
                        </Button>
                    </Box>
                ) : (
                    <>
                        <Box textAlign="center">
                        </Box>
                        <Box my={4} textAlign="left">
                            <form onSubmit={handleSubmit}>
                                {error && <ErrorMessage message={error}/>}
                                <FormControl isRequired>
                                    <FormLabel>Email</FormLabel>
                                    <Input
                                        type="email"
                                        placeholder="test@test.com"
                                        size="lg"
                                        onChange={event => setEmail(event.currentTarget.value)}
                                    />
                                </FormControl>
                                <FormControl isRequired mt={6}>
                                    <FormLabel>Password</FormLabel>
                                    <InputGroup>
                                        <Input
                                            type={showPassword ? 'text' : 'password'}
                                            placeholder="*******"
                                            size="lg"
                                            onChange={event => setPassword(event.currentTarget.value)}
                                        />
                                        <InputRightElement width="3rem">
                                            <Button
                                                h="1.5rem"
                                                size="sm"
                                                onClick={handlePasswordVisibility}
                                            >
                                                {showPassword ? (
                                                    <Icon name="view-off"/>
                                                ) : (
                                                    <Icon name="view"/>
                                                )}
                                            </Button>
                                        </InputRightElement>
                                    </InputGroup>
                                </FormControl>
                                <Button
                                    variantcolor="teal"
                                    variant="outline"
                                    type="submit"
                                    width="full"
                                    mt={4}
                                >
                                    {isLoading ? (
                                        <CircularProgress
                                            isIndeterminate
                                            size="24px"
                                            color="teal"
                                        />
                                    ) : (
                                        'Login'
                                    )}
                                </Button>
                            </form>
                        </Box>
                    </>
                )}
        </Flex>
    );
}