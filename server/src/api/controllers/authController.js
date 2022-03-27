import Admin from "../model/Admin.js";

const register = async(req, res) => {
    //res.send('register')
    try {
        const { email, displayName, password } = req.body
        const admin = await Admin.create({ email, displayName, password });
        const token = admin.createJWT();
        //res.status(201).json({ admin });
        res.status(201).json({ admin: { email: admin.email, displayName: admin.displayName }, token })

    } catch (error) {
        res.status(500).json({ msg: "an error occured" });
    }
}

const login = async(req, res) => {
    //res.send('login');

    const { email, password } = req.body;

    if (!email || !password) {
        res.status(500).json({ msg: "please provide all values" });
    }
    const admin = await Admin.findOne({ email }).select('+password');

    if (!admin) {
        res.status(500).json({ msg: "invaliad crediantails" })
    }

    const isCorrect = await admin.comparePassword(password);

    if (!isCorrect) {
        res.status(500).json({ msg: "invaliad crediantails" })
    }

    const token = admin.createJWT();
    admin.password = undefined;
    res.status(201).json({ admin, token })


}

export { register, login }