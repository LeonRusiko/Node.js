const exp = require('express');
const fs = require('fs');
const router = exp.Router();

const categories = JSON.parse(fs.readFileSync('categories.json', {encoding: 'utf-8'}))

router.get('/', (req, res)=> {
    res.send(JSON.parse(fs.readFileSync('categories.json', {encoding:'utf-8'})))
})

router.post('/', (req, res) => {
    const { name }= req.body;
    fs.writeFileSync('categories.json', JSON.stringify([...categories, {id: categories.length+1, name:name}]))
    res.status(200).send('ok')
})


module.exports = router;