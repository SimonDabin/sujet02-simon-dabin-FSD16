import mongoose from 'mongoose'

mongoose.connect(
    'mongodb://localhost:27017/fabricant-meuble',
    { useNewUrlParser: true, useUnifiedTopology: true },
    (err) => {
        if (!err) console.log('mongoDdb connected');
        else console.log('connection error:' + err);
    }
)

export default {}