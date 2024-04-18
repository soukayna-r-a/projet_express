import express from 'express';
const router = express.Router();

import Livre from '../models/Livre.js';

router.get('/:idLivre', async (req, res) => {
    try {
        const livre = await Livre.findById(req.params.idLivre);
        if (!livre) {
            return res.status(404).json({ error: 'Livre not found' });
        }
        res.status(200).json(livre);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
});

// POST - Add a new livre
router.post('/', async (req, res) => {
    try {
        const { code, titre, description, auteur } = req.body;
        const newLivre = new Livre({ code, titre, description, auteur });
        await newLivre.save();
        res.status(201).json(newLivre);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
});

// PUT - Update a livre by ID
router.put('/:idLivre', async (req, res) => {
    try {
        const { code, titre, description, auteur } = req.body;
        const updatedLivre = await Livre.findByIdAndUpdate(req.params.idLivre, { code, titre, description, auteur }, { new: true });
        if (!updatedLivre) {
            return res.status(404).json({ error: 'Livre not found' });
        }
        res.status(200).json(updatedLivre);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
});

// DELETE - Delete a livre by ID
router.delete('/:idLivre', async (req, res) => {
    try {
        const deletedLivre = await Livre.findByIdAndDelete(req.params.idLivre);
        if (!deletedLivre) {
            return res.status(404).json({ error: 'Livre not found' });
        }
        res.status(200).json({ message: 'Livre deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server error' });
    }
});

export default router;
