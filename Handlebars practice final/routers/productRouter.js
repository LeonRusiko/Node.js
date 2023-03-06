const exp = require('express');
const fs = require('fs');

const router = exp.Router();

const products = JSON.parse(fs.readFileSync('products.json', {encoding: 'utf-8'}))
const categories = JSON.parse(fs.readFileSync('categories.json', {encoding: 'utf-8'}))

router.get('/', (req,res) => {
    res.send(JSON.parse(fs.readFileSync('products.json', {encoding:'utf-8'})))
})

//normalno ne poluchilos
router.get('/:id', (req,res) => {
    const categId = +req.params.id;
    const category = categories.find(item => item.id === categId)
    
    if(category) {
        const product = products.find(item => item.categoryId === category.id);
        res.send(JSON.stringify(product));
    }else {
        res.send('error')
    }
})

router.post('/', (req,res) => {
    const { name, price, categoryId } = req.body;
    
    if(categories.find(item => item.id === categoryId)) {
        fs.writeFileSync('products.json', JSON.stringify([...products, {id: products.length+1, name, price, categoryId}]))
        res.status(200).send('ok')
    }else {
        res.status(500).send('error')
    }
})

module.exports = router;