import { Box, Button, Flex, Heading, Stack, Text } from '@chakra-ui/react';
import { useState } from 'react';
import { FaPlay } from 'react-icons/fa';
import { TbCircuitAmmeter } from 'react-icons/tb';
import { useNavigate } from 'react-router-dom';
import { Layout } from '../ui/Layout';
import { SlideDown } from '../ui/SlideDown';

export function Home() {
  const [active, setActive] = useState(null);

  return (
    <Layout>
      <Heading textAlign='center' size='lg' mb='3'>
        Browse Topics
      </Heading>
      <Stack spacing={4}>
        <Topic
          id={1}
          active={active}
          name={"Ohm's Law"}
          path='/ohms-law'
          description='Ohm’s law states the relationship between electric current and potential difference'
          onClick={(id) => setActive(active === id ? null : id)}
        />
        <Topic
          id={2}
          active={active}
          name={"Ohm's Law"}
          path='/ohms-law'
          description='Ohm’s law states the relationship between electric current and potential difference'
          onClick={(id) => setActive(active === id ? null : id)}
        />
      </Stack>
    </Layout>
  );
}

function Topic({ id, name, description, path, active, onClick }) {
  const navigate = useNavigate();

  return (
    <Box
      role='button'
      onClick={() => onClick(id)}
      w='full'
      p='4'
      overflow='hidden'
      transition='color 0.2s, background-color 0.2s'
      borderWidth='2px'
      borderColor='gray.600'
      rounded='xl'
      _hover={{ bgColor: 'gray.700' }}
    >
      <Flex alignItems='center' gap='4'>
        <TbCircuitAmmeter size={28} />
        <Heading size='md'>{name}</Heading>
      </Flex>
      <SlideDown show={id === active}>
        <Stack spacing='4' mt='2'>
          <Text fontSize='sm'>{description}</Text>
          <Button
            w='full'
            colorScheme='whatsapp'
            onClick={(e) => {
              e.stopPropagation();
              navigate(path);
            }}
            leftIcon={<FaPlay size={20} />}
          >
            Start lesson
          </Button>
        </Stack>
      </SlideDown>
    </Box>
  );
}
