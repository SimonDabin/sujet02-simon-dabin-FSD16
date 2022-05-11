import mongoose from 'mongoose'

export default() => {
    mongoose.connect(
        'mongodb://localhost:27017/fabricant-meuble',
        { useNewUrlParser: true, useUnifiedTopology: true }
        
    ).then(() => {
        console.log('Database connected');
    }).catch(() => {
        console.log('Database connexion failed' + err);
    })
}


