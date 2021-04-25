import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { DEFAULT_THEME, MantineProvider } from '@mantine/theme';
import { NumberInput } from './NumberInput';

function Wrapper(props: Omit<React.ComponentProps<typeof NumberInput>, 'value' | 'onChange'>) {
  const [value, setValue] = useState(0);
  return <NumberInput value={value} onChange={setValue} {...props} />;
}

storiesOf('@mantine/core/NumberInput', module)
  .add('General usage', () => (
    <div style={{ maxWidth: 400, padding: 20 }}>
      <Wrapper max={10} step={1} min={-10} placeholder="Number input" />
      <Wrapper
        style={{ marginTop: 15 }}
        variant="filled"
        max={10}
        step={1}
        min={-10}
        placeholder="Number input"
      />
      <Wrapper
        style={{ marginTop: 15 }}
        variant="unstyled"
        max={10}
        step={1}
        min={-10}
        placeholder="Number input"
      />
    </div>
  ))
  .add('Dark theme', () => (
    <MantineProvider theme={{ colorScheme: 'dark' }}>
      <div
        style={{ backgroundColor: DEFAULT_THEME.colors.dark[7], padding: 40, minHeight: '100vh' }}
      >
        <div style={{ maxWidth: 400, padding: 20 }}>
          <Wrapper max={10} step={1} min={-10} placeholder="Number input" />
          <Wrapper
            style={{ marginTop: 15 }}
            variant="filled"
            max={10}
            step={1}
            min={-10}
            placeholder="Number input"
          />
          <Wrapper
            style={{ marginTop: 15 }}
            variant="unstyled"
            max={10}
            step={1}
            min={-10}
            placeholder="Number input"
          />
        </div>
      </div>
    </MantineProvider>
  ));