import bcrypt from 'bcryptjs';
import User from '../../../models/usuario';
import { NextApiRequest, NextApiResponse } from 'next';
const login = async (req: NextApiRequest, res: NextApiResponse) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
        return res.status(404).json({
            ok: false,
            msg: 'Usuario o contraseña incorrectos'
        });
    }
    const validPassword = bcrypt.compareSync(password, user.password!);
    if (!validPassword) {
        return res.status(404).json({
            ok: false,
            msg: 'Usuario o contraseña incorrectos'
        });
    }
    const token = await jwt.sign({
        user: user
    }, process.env.SECRET || 'secret', { expiresIn: '1h' });
    res.json({
        ok: true,
        user,
        token
    });
}
export default login;