const ProductModel = require('../models/product')
const productList = { 'cpu': 'CPU', 'cooler': 'CPU Cooler', 'motherboard': 'Motherboard', 'ram': 'RAM', 'gpu': 'GPU', 'storage': 'Storage', 'psu': 'Power Supply', 'case': 'Case' }

const productsControllers = {

    getlist: (req, res) => {
        res.render('product/list', {
            pageTitle: 'System Builder',
            product: productList
        })
    },
    listProduct: (req, res) => {
        let type = req.params.product
        ProductModel.find({
            type: type
        })
            .then(result => {
                if (!result) {
                    res.redirect('/pcpicker/list')
                    return
                }
                res.render('product/selection', {
                    pageTitle: "Choose a " + productList[type],
                    items: result
                })
            })
            .catch(err => {
                console.log(err)
                res.redirect('/pcpicker/list')
            })

    },
}

module.exports = productsControllers