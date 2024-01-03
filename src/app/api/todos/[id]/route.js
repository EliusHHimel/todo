import { NextResponse } from "next/server";
import { connect } from "@/dbConfig/db";
import Todo from "@/Models/todo";

connect();

export async function PUT(request) {
    try {
        const { id, text, status } = await request.json();
        const updatedToDo = await Todo.findOneAndUpdate(
            { id },
            { text, status },
            { new: true }
        );
        return NextResponse.json(updatedToDo);
    } catch (error) {
        return NextResponse.json({ error: error.message, status: error.status });
    }
}

export async function DELETE(request) {
    try {
        await Todo.deleteOne({ id: request.params.id });
        console.log(request.params.id);
        return NextResponse.json({ msg: "Todo Deleted" });
    }
    catch (error) {
        return NextResponse.json({ error: error.message, status: error.status });
    }
}