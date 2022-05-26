
import type { NextApiRequest, NextApiResponse } from 'next'
import { db } from '../../database'
import { Usuario } from '../../interfaces/Usuario';
import User from '../../models/usuario';
import bcrypt from 'bcryptjs';

 

 export default async function (req: NextApiRequest, res: NextApiResponse) {
     await db.connect();
        const user = new User({
            nombre: 'Julio Giovanni',
            email: 'jg250998@gmail.com',
            password: bcrypt.hashSync('123456', 10),
            rol: 'ADMIN_ROLE'
        });

        await user.save();

     await db.disconnect();
     res.status(200).json({
         user
    });
 }