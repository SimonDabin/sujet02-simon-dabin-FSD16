import MeubleModel from '../models/meublesModel.js'

export default (req, res) => {
  const { name, category, quantity } = req.body
  if(name != '' && category != '' && !isNaN(parseFloat(quantity)) ){
    const newRecord = new MeubleModel({
      name: req.body.name,
      category: req.body.category,
      quantity: req.body.quantity
    })
      newRecord.save( (err, docs) => {
        if(err) {
          console.log(err);
          res.render('formMeuble', {error:true} )
          return ;
        }
        res.redirect('formMeuble')
        console.log('donnée enregistrée');
      })
      console.log(req.body);
      console.log(name != '' && category != '' && !isNaN(parseFloat(quantity)));
  }

  
}