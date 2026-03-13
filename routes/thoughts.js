import express from "express"
import Thought from "../models/Thought.js"

const router = express.Router()

router.get("/", async (req, res) => {
    try {
        const thoughts = await Thought.find()
            .sort({ createdAt: -1 })
            .limit(20)

        res.json(thoughts)
    } catch (error) {
        res.status(500).json({ error: "Something went wrong" })
    }
})

router.post("/", async (req, res) => {
    try {
        const newThought = new Thought({
            message: req.body.message
        })

        const savedThought = await newThought.save()
        res.status(201).json(savedThought)
    } catch (error) {
        res.status(400).json({ error: "Invalid data", details: error.message })
    }
})

router.post("/:thoughtId/like", async (req, res) => {
    try {
        const updatedThought = await Thought.findByIdAndUpdate(
            req.params.thoughtId, // läser id:t från URL:en
            { $inc: { hearts: 1 } }, //ökar hjärtan med 1
            { new: true } //gör att den uppdaterade tanken visas
        )

        if (!updatedThought) {
            return res.status(404).json({ error: "Thought not found" })
        }

        res.json(updatedThought)
    } catch (error) {
        res.status(400).json({ error: "Invalid thought id" })
    }
})
export default router