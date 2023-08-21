const express = require('express');
const router = express.Router();
const UsersControllers = require('../controllers/users.controller');

router.get('/', async (req, res) => {
    try {
        const users = await UsersControllers.getUsers();
        res.send(users);
    } catch (e) {
        console.log(e);
    }
});

router.get('/userById/:id', async (req, res) => {
    try {
        const user = await UsersControllers.getUsersById(req.params.id);
        res.send(user);
    } catch (e) {
        console.log(e);
    }
});

router.get('/:gender', async (req, res) => {
    try {
        const user = await UsersControllers.getUsersByGender(req.params.gender);
        res.send(user);
    } catch (e) {
        console.log(e);
    }
});

router.get('/a/filtredUsers', async (req, res) => {
    try {
        const user = await UsersControllers.getUsersByAge(req.query);
        res.send(user);
    } catch (e) {
        console.log(e);
    }
});

router.post('/create', async (req, res) => {
    try {
        const newUser = await UsersControllers.postUser(req.body);
        res.send(newUser);
    } catch (e) {
        console.log(e);
    }
});

router.put('/edit/:id', async (req, res) => {
    try {
        const user = await UsersControllers.putUserById(
            req.body,
            req.params.id
        );
        res.send(user);
    } catch (e) {
        console.log(e);
    }
});

router.patch('/editUser/:id', async (req, res) => {
    try {
        const user = await UsersControllers.patchUserById(
            req.body,
            req.params.id
        );
        res.send(user);
    } catch (e) {
        console.log(e);
    }
});

router.delete('/delete/:id', async (req, res) => {
    try {
        const user = await UsersControllers.deleteUserById(req.params.id);
        res.send(user);
    } catch (e) {
        console.log(e);
    }
});

module.exports = router;
