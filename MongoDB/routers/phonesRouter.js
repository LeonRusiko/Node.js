const exp = require('express');
const router = exp.Router();

const { PhoneModel } = require('../Models')

router.get("/", (req, res) => {
    const model = req.query.model;
    if(model) {
        PhoneModel.find({ model: model }, (err, results) => {
            if(err) {
                res.status(500).send(err)
            }else {
                res.status(200).send(results)
            }
        })
    }else {
        PhoneModel.find({}, (err, results) => {
            if(err) {
                res.status(500).send(err)
            }else {
                res.status(200).send(results)
            }
        })
    }
})


router.post("/", (req, res) => {
    const { model, price, color } = req.body;
    const newPhone = new PhoneModel({ model, price, color })
    newPhone.save((err) => {
        if(err) {
            res.status(500).send(err)
        }else {
            res.status(201).send('ok')
        }
    })
})

router.delete("/:id", (req, res) => {
    const id = req.params.id
    PhoneModel.deleteOne({ id })
    res.send("deleted");
});

router.put("/:id", (req, res) => {
    const id = req.params.id
    const { model, price, color } = req.body;
    PhoneModel.findByIdAndUpdate(id,{model: model, price: price, color: color})
    res.send("updated");
});

module.exports = router;