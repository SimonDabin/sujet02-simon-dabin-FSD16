import mongoose from 'mongoose';

const meubleModel = mongoose.model(
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
        }
    },
    "meubles"
)

export default { meubleModel }