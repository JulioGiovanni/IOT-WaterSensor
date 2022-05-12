import React from 'react';
import { createStyles, Paper, Text, Title, Button, Container, SimpleGrid, Grid } from '@mantine/core';
import Link from 'next/link';

const useStyles = createStyles((theme) => ({
  card: {
    height: 440,
    width: 300,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },

  title: {
    fontFamily: `Greycliff CF ${theme.fontFamily}`,
    fontWeight: 900,
    color: theme.black,
    lineHeight: 1.2,
    fontSize: 32,
    marginTop: theme.spacing.xs,
  },

  category: {
    color: theme.white,
    opacity: 0.7,
    fontWeight: 700,
    textTransform: 'uppercase',
  },
}));

interface ArticleCardImageProps {
  image: string;
  title: string;
  category: string;
}

export default function ArticleCardImage({ image, title, category }: ArticleCardImageProps) {
  const { classes } = useStyles();

  return (

<Container my="md">
<SimpleGrid cols={2} spacing="md" breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
<Paper
      shadow="md"
      p="xl"
      radius="md"
      sx={{ backgroundImage: `url(https://s1.eestatic.com/2019/03/28/ciencia/nutricion/alimentacion-agua-mitos_386722449_118991219_1706x960.jpg)` }}
      className={classes.card}
    >
      <div>
        <Text className={classes.category} size="xs">
          {category}
        </Text>
        <Title order={3} className={classes.title}>
          Mi Filtro de agua
        </Title>
      </div>
      <Link href={'/dispositivos/metricas'} passHref>
      <Button variant="white" color="dark">
        Ver estadísticas
      </Button>
      </Link>
    </Paper>
  <Grid gutter="md">
    <Grid.Col>
      {/* <Skeleton height={SECONDARY_COL_HEIGHT} radius="md" animate={false} /> */}
    </Grid.Col>
    <Grid.Col span={6}>
      {/* <Skeleton height={SECONDARY_COL_HEIGHT} radius="md" animate={false} /> */}
    </Grid.Col>
    <Grid.Col span={6}>
      {/* <Skeleton height={SECONDARY_COL_HEIGHT} radius="md" animate={false} /> */}
    </Grid.Col>
  </Grid>
</SimpleGrid>
</Container>


   
  );
}


