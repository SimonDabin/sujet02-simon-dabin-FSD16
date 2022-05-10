import mongoose from 'mongoose';

const MeubleModel = mongoose.model(
    "fabricant-meuble",
    {
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
    },
    "meubles"
)

export default MeubleModel 