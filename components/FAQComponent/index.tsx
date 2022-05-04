
import { Container, Title, Accordion, createStyles } from '@mantine/core';

const useStyles = createStyles((theme, _params, getRef) => {
  const control = getRef('control');

  return {
    wrapper: {
      paddingTop: theme.spacing.xl * 2,
      paddingBottom: theme.spacing.xl * 2,
      minHeight: 650,
    },

    title: {
      fontWeight: 400,
      marginBottom: theme.spacing.xl * 1.5,
    },

    control: {
      ref: control,

      '&:hover': {
        backgroundColor: 'transparent',
      },
    },

    item: {
      borderRadius: theme.radius.md,
      marginBottom: theme.spacing.lg,

      border: `1px solid ${
        theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[3]
      }`,
    },

    itemOpened: {
      [`& .${control}`]: {
        color: theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 4 : 6],
      },
    },
  };
});

const placeholder =
'La competencia que tiene el mercado es algo escaso, ya que los productos actuales tienen un problema de solo plasmar el error y no forzar al usuario a hacer algo al respecto.'
const placeholder2=
'La diferencia es que nosotros damos enfasis lo que perjudica tener un filtro no funcional en algo tan importante como es tomar agua de dispensador dentro de tu casa.'
const placeholder3=
'El costo esperado ????'//tu lo pones xd
const placeholder4=
'La informacion ademas de tener una alerta de tus dispensadores de agua, fuerza que el usuario haga algo al respecto.'
export function FaqSimple() {
  const { classes } = useStyles();
  return (
    <Container size="sm" className={classes.wrapper}>
      <Title align="center" className={classes.title}>
        Frequently Asked Questions
      </Title>

      <Accordion
        iconPosition="right"
        classNames={{
          item: classes.item,
          itemOpened: classes.itemOpened,
          control: classes.control,
        }}
      >
        <Accordion.Item label="Cual es la competencia en contra del mercado?">{placeholder}</Accordion.Item>
        <Accordion.Item label="Cual es la diferencia entre la competencia?">{placeholder2}</Accordion.Item>
        <Accordion.Item label="Cual es el costo esperado?">{placeholder3}</Accordion.Item>
        <Accordion.Item label="Que puedo hacer con la informacion plasmada?">{placeholder4}</Accordion.Item>
      </Accordion>
    </Container>
  );
}