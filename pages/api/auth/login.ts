import bcrypt from 'bcryptjs';
import User from '../../../models/usuario';
import { NextApiRequest, NextApiResponse } from 'next';
import { db } from '../../../database';

const login = async (req: NextApiRequest, res: NextApiResponse) => {
    const { email, password } = req.body;
    await db.connect();
    const user = await User.findOne({ email });
    if (!user) {
        console.log('Inicio de sesión incorrecto')
        return res.status(404).json({
            ok: false,
            msg: 'Usuario o contraseña incorrectos'
        });
    }
    const validPassword = bcrypt.compareSync(password, user.password!);
    if (!validPassword) {
        console.log('Inicio de sesión incorrecto')
        return res.status(404).json({
            ok: false,
            msg: 'Usuario o contraseña incorrectos'
        });
        
    }
    // const token = await jwt.sign({
    //     user: user
    // }, process.env.SECRET || 'secret', { expiresIn: '1h' });
    console.log('Inicio de sesión correcto')
    res.json({
        ok: true,
        user,
        // token
    });
    await db.disconnect();
}
export default login;