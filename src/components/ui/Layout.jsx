import { Box } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { cn } from '../../utils/cn';

export function Layout({ children, className }) {
  return (
    <main className={cn('w-full min-h-screen max-w-md', className)}>
      <Navbar />
      <Box p='4' pb='20'>
        {children}
      </Box>
    </main>
  );
}

function Navbar() {
  return (
    <Box
      as='nav'
      position='sticky'
      display='flex'
      alignItems='center'
      w='full'
      p='4'
      color='white'
      bg='gray.800'
      shadow='lg'
    >
      <Link href='/' as='a' className='text-3xl font-bold'>
        {'<App name>'}
      </Link>
    </Box>
  );
}
