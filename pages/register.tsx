import {
    Paper,
    createStyles,
    TextInput,
    PasswordInput,
    Checkbox,
    Button,
    Title,
    Text,
    Anchor,
  } from '@mantine/core';
import Link from 'next/link';
  
  const useStyles = createStyles((theme) => ({
    wrapper: {
      minHeight: 900,
      backgroundSize: 'cover',
      backgroundImage:
        'url(https://images.unsplash.com/photo-1484242857719-4b9144542727?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1280&q=80)',
    },
  
    form: {
      borderRight: `1px solid ${
        theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[3]
      }`,
      minHeight: 900,
      maxWidth: 450,
      paddingTop: 80,
  
      [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
        maxWidth: '100%',
      },
    },
  
    title: {
      color: theme.colorScheme === 'dark' ? theme.white : theme.black,
      fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    },
  
    logo: {
      color: theme.colorScheme === 'dark' ? theme.white : theme.black,
      width: 120,
      display: 'block',
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  }));
  
  export default function AuthenticationImage() {
    const { classes } = useStyles();


    return (
      
      <div className={classes.wrapper}>
        <Paper className={classes.form} radius={0} p={30}>
          <Title order={2} className={classes.title} align="center" mt="md" mb={50}>
           Bienvenido a AquaSystem
          </Title>
        <Title order={3} className={classes.title} align={"center"} mt="md" mb={50}>
            Crear una nueva cuenta 
        </Title>
        <form action="" method='post'>

            <TextInput label="Nombre" name='nombre' id='nombre' placeholder='Juan Pérez' size='md'/>
          <TextInput label="Correo" name='email' id='email' placeholder="hello@gmail.com" size="md" />
          <PasswordInput label="Contraseña" name='password' id='password' placeholder="Your password" mt="md" size="md" />
          <Button fullWidth mt="xl" size="md">
            Login
          </Button>
        </form>
  
          <Text align="center" mt="md">
            ¿Ya tienes una cuenta?{' '}
            <Link href={"/login"} passHref>
            <Anchor<'a'> href="/login" weight={700}>
              Iniciar sesión
            </Anchor>
            </Link>
          </Text>
        </Paper>
      </div>
    );
  }