import { Avatar, Container, Grid, ScrollArea, SimpleGrid, Skeleton, Space, Text, ThemeIcon, Timeline, Title, useMantineTheme } from '@mantine/core';
import { Sun, Video } from 'tabler-icons-react';

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

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
          </Grid.Col>
          <Grid.Col span={6}>
            <Title order={5}>Turbidez Actual:</Title>          
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

        {arr.map(() => (
            <Timeline.Item title="24/03/22" bulletSize={24}>
            <Text color="dimmed" size="sm">
              pH: 7
              Turbidez: 600ppm
            </Text>
          </Timeline.Item>
        ))}

   
            </Timeline>
        </ScrollArea>
    </div>

        
      </SimpleGrid>
    </Container>
  );
}