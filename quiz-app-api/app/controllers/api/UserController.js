// const ResourceController = require("../ResourceController");
const ResourceController = require("../ResourceController-Singleton");
const User = require("../../models/user");

class UserController extends ResourceController {

    constructor(...args) {
        super();
        this.name = args[0];
        this.email = args[1];
    };

};

const rc = ResourceController.getInstance(User);
let uc;

let user = {
    "create": (req, res) => {
        uc = new UserController(req.query.name, req.query.email);
        console.log(uc);

        rc
            .create(uc)
            .then((result) => {
                res.send(result);
            });
    },
    "list": (req, res) => {
        rc
            .index(uc)
            .then((result) => {
                res.send(result);
            });
    },
    "show": (req, res) => {
        rc
            .show(uc, req.params._id)
            .then((result) => {
                res.send(result);
            })
            .catch((e) => {})
    },
    "delete": (req, res) => {
        rc
            .delete(uc)
            .then((result) => {
                res.send(result);
            });
    }
};

module.exports = user;
