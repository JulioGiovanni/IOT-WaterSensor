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
import { useForm as UF } from '@mantine/hooks';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useContext } from 'react';
import { AuthContext } from '../context';
import { useRouter } from 'next/router';

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


type FormData = {
  email   : string,
  password: string,
};

export default function AuthenticationImage() {
  const { loginUser } = useContext(AuthContext);
  const router = useRouter();
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();


  const onLoginUser = async ({ email, password }:FormData) => {
    const isValidLogin = await loginUser(email,password)
    if(!isValidLogin){
      console.log('Inicio de sesión no válido')
      return;
    }
    router.replace('/');
  }



  const form = UF({
    initialValues: {
      email: '',
      password: '',
    },

    validationRules: {
      email: (val) => /^\S+@\S+$/.test(val),
      password: (val) => val.length >= 6,
    },
  });
  const { classes } = useStyles();
  return (
    <div className={classes.wrapper}>
      <form onSubmit={form.onSubmit(()=>{
        // axios.post('/api/auth/login', form.values)
        onLoginUser(form.values)

        form.reset();
      })}>
      <Paper className={classes.form} radius={0} p={30}>
        <Title order={2} className={classes.title} align="center" mt="md" mb={50}>
         Bienvenido a AquaSystem
        </Title>
        <Title order={3} className={classes.title} align={"center"} mt="md" mb={50}>
            Inicio de sesión
        </Title>
        <TextInput 
          label="Correo" 
          placeholder="hello@gmail.com" 
          size="md" 
          value={form.values.email}
          onChange={(event) => form.setFieldValue('email', event.currentTarget.value)}
          error={form.errors.email && 'Invalid email'}
        />
          <PasswordInput 
            label="Contraseña" 
            placeholder="Your password" 
            mt="md" 
            size="md"
            value={form.values.password}
            onChange={(event) => form.setFieldValue('password', event.currentTarget.value)}
            error={form.errors.password && 'Invalid password'} 
          />
        <Button type='submit' fullWidth mt="xl" size="md">
          Iniciar sesión
        </Button>

      </Paper>
      </form>
    </div>
  );
}