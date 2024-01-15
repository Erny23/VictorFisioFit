import { db } from '../app.js';

const controller = {};

controller.check = (req, res) => {
    const user = req.session;
    console.log(user);

    res.json({
      isAuthenticated: user ? true : false,
      user: user ? user.name : null,
    });
};

controller.log = (req, res) => {
    const sql = 'SELECT * FROM clientesprueba WHERE `email` = ? AND `contrasena` = ?';
    db.query(sql, [ req.body.email, req.body.password ], (err, data) => {
        if(err) {
            return res.json(err);
        }
        if(data.length > 0) {
            const session = data[0];
            const name = data[0].nombre;
            return res.json({success: true, name})
        } else {
            return res.json({Faile: false})
        }
    })
};

controller.test = (req, res) => {
    const sql = 'SELECT * FROM clientesprueba';
    db.query(sql, (err, data) => {
        if(err) {
            return res.json(err);
        }
        if(data.length > 0) {
            const name = data[0].nombre;
            return res.json({success: true, name});
        } else {
            return res.json({Faile: false})
        }
    })
};

export default controller