import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    text: {
        type: String,
        required: true
    },
    status: {
        type: Boolean,
        default: false
    }
});

const Todo = mongoose.models.todos || mongoose.model("todos", todoSchema);

export default Todo;