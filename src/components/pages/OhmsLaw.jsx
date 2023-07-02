'use client';

import { Button, Flex, Heading, Stack } from '@chakra-ui/react';
import { useState } from 'react';
import { FaArrowRight, FaPlay } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { Formula } from '../ui/Formula';
import { Layout } from '../ui/Layout';
import { SlideDown } from '../ui/SlideDown';
import { Var } from '../ui/Var';

export function OhmsLaw() {
  const [step, setStep] = useState(1);

  return (
    <Layout>
      <Heading textAlign='center' size='lg' mb='3'>
        Ohm&apos;s Law
      </Heading>
      <Stack spacing='4'>
        <SlideDown show={step >= 1}>
          <Step1 />
        </SlideDown>
        <SlideDown show={step >= 2}>
          <Step2 />
        </SlideDown>
        <SlideDown show={step >= 3}>
          <Step3 />
        </SlideDown>
        <SlideDown show={step >= 4}>
          <Step4 />
        </SlideDown>
      </Stack>
      {step < 4 && (
        <Button
          w='full'
          mt='4'
          colorScheme='whatsapp'
          rightIcon={<FaArrowRight />}
          onClick={() => setStep((prev) => prev + 1)}
        >
          Next
        </Button>
      )}
    </Layout>
  );
}

function Step1() {
  return (
    <>
      <p>
        Ohm’s law describes the relationship between <b>current</b> in and{' '}
        <b>potential difference</b> across <b>conductors</b>. The law was developed by physicist{' '}
        <b>Georg Ohm</b>, who found that for many types of conductors the current in them was{' '}
        <b>directly proportional</b> to the potential difference across them.
      </p>
      <br />
      <p>
        Ohm eventually identified a mathematical relationship between current, resistance, and
        potential difference for a conductor.
      </p>
      <br />
    </>
  );
}

function Step2() {
  return (
    <>
      <h2 className='text-xl font-bold'>Formula</h2>
      <p>
        If <Var>I</Var> is the current in a conductor in an electrical circuit, <Var>V</Var> is the
        potential difference across the conductor, and <Var>R</Var> is the conductor’s resistance to
        charge flow, then
      </p>
      <Formula>V = I &#215; R</Formula>
      <p>
        In this expression, the standard unit of potential difference is volts (V), the unit of
        current is amperes (A), and the unit of resistance is ohms (Ω).
      </p>
      <br />
    </>
  );
}

function Step3() {
  const [selected, setSelected] = useState(null);
  const [win, setWin] = useState(null);

  const onGuess = () => {
    if (selected === '0.5') {
      setWin(true);
    } else {
      setWin(false);
    }
  };

  return (
    <>
      <h2 className='text-xl font-bold'>Example</h2>
      <p>
        A 10 Ω resistor in a circuit has a potential difference of 5 V across it. What is the
        current through the resistor?
      </p>
      <Flex alignItems='center' justifyContent='center' bg='white'>
        <img src='/circuit.svg' alt='circuit' className='w-auto h-full' />
      </Flex>
      <br />
      <h2 className='text-xl font-bold'>Answer</h2>
      <p>Choose an answer:</p>
      <div className='pl-10'>
        <div className='space-x-3'>
          <input
            type='radio'
            name='answer'
            id='5'
            value='5'
            checked={selected === '5'}
            onChange={(e) => setSelected(e.target.value)}
          />
          <label htmlFor='5'>5 A</label>
        </div>
        <div className='space-x-3'>
          <input
            type='radio'
            name='answer'
            id='0.5'
            value='0.5'
            checked={selected === '0.5'}
            onChange={(e) => setSelected(e.target.value)}
          />
          <label htmlFor='0.5'>0.5 A</label>
        </div>
        <div className='space-x-3'>
          <input
            type='radio'
            name='answer'
            id='0.25'
            value='0.25'
            checked={selected === '0.25'}
            onChange={(e) => setSelected(e.target.value)}
          />
          <label htmlFor='0.25'>0.25 A</label>
        </div>
        <div className='font-bold'>
          {win !== null && win ? (
            <p className='text-green-500'>Correct!</p>
          ) : (
            win !== null && !win && <p className='text-red-500'>Incorrect!</p>
          )}
        </div>
      </div>
      <Button w='full' mt='4' colorScheme='whatsapp' onClick={onGuess} disabled={!selected}>
        Submit
      </Button>
      <br />
    </>
  );
}

function Step4() {
  const navigate = useNavigate();

  return (
    <>
      <h2 className='text-xl font-bold'>Visualize</h2>
      <p>
        You can visualize a physical representation of Ohm&apos;s Law in Augmented Reality by
        scanning an image of the circuit. Start by clicking the button below.
      </p>
      <Button
        mt='4'
        w='full'
        colorScheme='whatsapp'
        leftIcon={<FaPlay size={20} />}
        onClick={() => navigate('/tracker')}
      >
        Visualize in 3D
      </Button>
    </>
  );
}
