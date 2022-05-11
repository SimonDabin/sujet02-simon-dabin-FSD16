import FurnitureModel from '../models/meublesModel.js';

export default (req, res) => {
  const { name, category, quantity } = req.body;

  if(name != '' && category != '' && !isNaN(parseFloat(quantity)) ){
    const furniture= new FurnitureModel({
      name: req.body.name,
      category: req.body.category,
      quantity: req.body.quantity
    })
      furniture.save( (err) => {
        if(err) {
          console.log(err);
          res.render('formMeuble', {error:true} )
          return;
        }
        res.redirect('formMeuble');
      })
  }
}