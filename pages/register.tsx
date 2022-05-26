import React from 'react';
import { useForm, useToggle, upperFirst } from '@mantine/hooks';
import {
  TextInput,
  PasswordInput,
  Text,
  Paper,
  Group,
  PaperProps,
  Button,
  Divider,
  Checkbox,
  Anchor,
  Select
} from '@mantine/core';
import axios from 'axios';


export default function AuthenticationForm(props: PaperProps<'div'>) {

  const form = useForm({
    initialValues: {
      email: '',
      name: '',
      password: '',
      rol: '',
    },

    validationRules: {
      email: (val) => /^\S+@\S+$/.test(val),
      password: (val) => val.length >= 6,
    },
  });

  return (
    <div style={{display:'flex',justifyContent:'center'}}>
      <Paper radius="md" p="xl" withBorder {...props}>
        <Text size="lg" weight={500}>
          Bienvenido a AquaSystem, Registra un nuevo usuario
        </Text>
        <Group grow mb="md" mt="md">
        </Group>
        <form onSubmit={form.onSubmit(() => {
          console.log(form)
          axios.post('/api/auth/register', form.values)
          form.reset();
        })}>
          <Group direction="column" grow>
            
              <TextInput
                label="Nombre"
                placeholder="Nombre del usuario"
                value={form.values.name}
                onChange={(event) => form.setFieldValue('name', event.currentTarget.value)}
              />
      
            <TextInput
              required
              label="Correo"
              placeholder="correo@correo.com"
              value={form.values.email}
              onChange={(event) => form.setFieldValue('email', event.currentTarget.value)}
              error={form.errors.email && 'Invalid email'}
            />
            <PasswordInput
              required
              label="Contraseña"
              placeholder="abc123"
              value={form.values.password}
              onChange={(event) => form.setFieldValue('password', event.currentTarget.value)}
              error={form.errors.password && 'Password should include at least 6 characters'}
            />
      <Select
        label="Selecciona el tipo de usuario"
        placeholder="Rol"
        data={[
          { value: 'USER_ROLE', label: 'Usuario' },
          { value: 'ADMIN_ROLE', label: 'Admin' },
        ]}
        value={form.values.rol}
        onChange={(event) => form.setFieldValue('rol', event!)}
      />
          </Group>
          <Group position="apart" mt="xl">
            <Button type="submit">Registrar Usuario</Button>
          </Group>
        </form>
      </Paper>
    </div>
  );
}