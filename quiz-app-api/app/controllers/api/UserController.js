const ResourceController = require("../ResourceController");
const User = require("../../models/user");

class UserController extends ResourceController {
    constructor(...args) {
        super(...args);
    };
};

var uc = new UserController(User);

let user = {
    "create": (req, res) => {
        uc
            .create({ "name": "Another controller", "email": "vishal@jatana.ai" })
            .then((result) => {
                res.send(result);
            });
    },
    "list": (req, res) => {
        uc
            .index()
            .then((result) => {
                res.send(result);
            });
    },
    "show": (req, res) => {
        uc
            .show(req.params._id)
            .then((result) => {
                res.send(result);
            })
            .catch((e) => { })
    },
    "delete": (req, res) => {
        uc
            .delete()
            .then((result) => {
                res.send(result);
            });
    }
}

module.exports = user;
