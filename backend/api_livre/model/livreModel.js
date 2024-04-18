import { Schema, model } from "mongoose";
const livreSchema = new Schema({
    code: {
        type: String,
        required: true
    },
    titre: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    auteur: {
        type: String,
        required: true
    }
});

export default model('Livre', livreSchema);
