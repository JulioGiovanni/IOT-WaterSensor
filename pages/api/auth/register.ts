import type { NextApiRequest, NextApiResponse } from 'next'
import { db } from '../../../database'
import User from '../../../models/usuario';
import bcrypt from 'bcryptjs';



export default async function (req: NextApiRequest, res: NextApiResponse) {
    await db.connect();
    const user = new User({
        nombre: req.body.name,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 10),
        rol: req.body.rol
    });
    await user.save();
    await db.disconnect();
    res.status(200).json({
        user
    });
}