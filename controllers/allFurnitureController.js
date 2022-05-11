import FurnitureModel from '../models/meublesModel.js'

export default (req, res) => {
    FurnitureModel.find((err, docs) => {
      if (!err) res.render('furniture');
      else console.log('Erro to get data: ' + err);
     })
   }