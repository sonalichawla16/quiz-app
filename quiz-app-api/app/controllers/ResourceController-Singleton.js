class ResourceController {

    constructor(model) {
        this.Model = model;
    };

    create(_user) {
        return new Promise((resolve, reject) => {
            var data = {"name": _user.name, "email": _user.email};
            var model = new this.Model(data);
            model.save((err, response) => {
                if (err) {
                    reject(err);
                }
                resolve(response);
            });
        }).catch((e) => {
            console.log(e)
        })
    };

    index(_user) {
        return new Promise((resolve, reject) => {
            var model = this.Model
            /* model.find({}, (err, response) => {
                if (err) {
                    reject(err);
                }
                resolve(response);
            }); */
            model.findOne({"name": _user.name}, (err, response) => {
                if (err) {
                    reject(err);
                }
                resolve(response);
            });
        }).catch((e) => {})
    };

    list(req, res) {
        return new Promise((resolve, reject) => {
            var model = this.Model
            model.find({}, (err, response) => {
                if (err) {
                    reject(err);
                }
                resolve(response);
            })
        }).then((result) => {
            console.log(result)
            res.send(result);
        }).catch((e) => {})
    };

    show(id) {
        return new Promise((resolve, reject) => {
            var model = this.Model
            model.find({
                "_id": id
            }, (err, response) => {
                if (err) {
                    reject(err);
                }
                resolve(response);
            })
        });
    };

    update(req, res, next) {
        console.log("this is the value of this: " + this)
        console.log("update called");
        res.send("update called from resource controller " + this)
        next();
    };

    delete() {
        console.log("here")
        return new Promise((resolve, reject) => {
            var msg = "In Delete Method!";
            if (!msg) {
                reject(err);
            }
            resolve(msg);
        }).catch((e) => {});
    };

    static getInstance (model) {
        if (ResourceController.rc === undefined) {
            ResourceController.rc = new ResourceController(model);
        }
        return ResourceController.rc;
    }
};

module.exports = ResourceController;
