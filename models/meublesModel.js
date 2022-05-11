import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const FurnitureSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const FurnitureModel = model('meubles', FurnitureSchema)
   

export default FurnitureModel; 