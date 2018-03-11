class ResourceController {
    constructor(model) {
        this.Model = model;
    };

    create(data) {
        return new Promise((resolve, reject) => {
            var model = new this.Model(data);
            model.save((err, response) => {
                if (err) {
                    reject(err);
                }
                resolve(response);
            });
        });
    };

    index() {
        return new Promise((resolve, reject) => {
            var model = this.Model
            model.find({}, (err, response) => {
                if (err) {
                    reject(err);
                }
                resolve(response);
            })
        })
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
        });
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
        })
    };

    update() {
        console.log("this is the value of this" + this)
        console.log("update called");
        // res.send('update called from resource controller')
    };

    delete() {};
};

module.exports = ResourceController;
