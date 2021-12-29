import React, { useEffect } from 'react';
import {
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  Text,
  Box
} from '@chakra-ui/react';

export const HoursSlider = props => {
  const { maxHours, setMaxHours, minHours, setMinHours } = props;

  return (
    <RangeSlider
      width="70%"
      aria-label={['min', 'max']}
      min={0}
      max={30}
      defaultValue={[4, 20]}
      value={[minHours, maxHours]}
      colorScheme="primary"
      onChange={range => {
        setMinHours(range[0]);
        setMaxHours(range[1]);
      }}
    >
      <RangeSliderTrack>
        <RangeSliderFilledTrack />
      </RangeSliderTrack>
      <RangeSliderThumb boxSize={8} index={0}>
        <Box>{minHours}</Box>
      </RangeSliderThumb>
      <RangeSliderThumb boxSize={8} index={1}>
        <Box>
          <Text color="primary">{maxHours}</Text>
        </Box>
      </RangeSliderThumb>
    </RangeSlider>
  );
};
