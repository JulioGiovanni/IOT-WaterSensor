import { Avatar, Container, Grid, ScrollArea, SimpleGrid, Skeleton, Space, Text, ThemeIcon, Timeline, Title, useMantineTheme } from '@mantine/core';
import { useEffect, useState } from 'react';

import { Sun, Video } from 'tabler-icons-react';

const today = new Date();
//Get the last 10 days
const days = Array.from({ length: 10 }, (_, i) => new Date(today.getFullYear(), today.getMonth(), today.getDate() - i));
console.log(days);
//Days to array
const daysArray = days.map(day => day.toLocaleDateString());


// const [Turbidez, setTurbidez] = useState(0)
// const [pH, setpH] = useState(0)

// useEffect(() => {
//   //Change the turbidez every 5 seconds
//   const interval = setInterval(() => {
//     setTurbidez(Math.floor(Math.random() * (500 - 5) + 1));
//   }
//     , 5000);
//   //Change the pH every 5 seconds
//   const interval2 = setInterval(() => {
//     setpH(Math.floor(Math.random() * (10 - 5) + 1));
//   }
//     , 5000);
//   return () => {
//     clearInterval(interval);
//     clearInterval(interval2);
//   };

// }, [])

const PRIMARY_COL_HEIGHT = 300;

export default function LeadGrid() {
  const theme = useMantineTheme();
  const SECONDARY_COL_HEIGHT = PRIMARY_COL_HEIGHT / 2 - theme.spacing.md / 2;

  return (
    <Container my="md">
        <Grid gutter="md">
          <Grid.Col>
            <Title>
                Estado Actual:

            </Title>
          </Grid.Col>
          <Grid.Col span={6}>
            <Title order={5}>
                pH Actual:
            </Title>
            <Text></Text>
          </Grid.Col>
          <Grid.Col span={6}>
            <Title order={5}>Turbidez Actual:</Title>
            <Text></Text>          
        </Grid.Col>
        </Grid>
        <Space h={100}></Space>
      <SimpleGrid cols={2} spacing="md" breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
        <Title>
            Mis métricas:
        </Title>

        <div style={{ maxWidth: 320, margin: 'auto' }}>
       <ScrollArea style={{height:250, width:400}}>
        <Timeline style={{padding:20}}>
        {/* If you do not pass bullet prop, default bullet will be rendered */}

        {daysArray.map((day,index) => {

          const turbidez = Math.floor(Math.random() * (600 - 1) + 1);
         return(
          <Timeline.Item key={index} title={day} bulletSize={24}>
          <Text color="dimmed" size="sm">
            pH: {Math.floor(Math.random() * (14 - 1) + 1)},
            Turbidez: {turbidez}ppm
          </Text>
        </Timeline.Item>
         )})}
        

   
            </Timeline>
        </ScrollArea>
    </div>

        
      </SimpleGrid>
    </Container>
  );
}