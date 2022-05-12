import mongoose, { Schema,Model,model } from 'mongoose';
import { Usuario } from '../interfaces/Usuario';

const UsuarioSchema = new Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es necesario']
    },
    email: {
        type: String,
        required: [true, 'El email es necesario'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'La contraseña es necesaria']
    },
    rol:{
        type: String,
        enum: {
            values: ['ADMIN_ROLE', 'USER_ROLE'],
            message: 'El rol debe ser ADMIN_ROLE o USER_ROLE'

        },
        default: 'USER_ROLE'
    }
},{
    timestamps: true
});

const User:Model<Usuario> = mongoose.models.User || model('User', UsuarioSchema);
export default User;