import { NextRequest, NextResponse } from "next/server";
import { connect } from "@/dbConfig/db";
import Todo from "@/Models/todo";
import { v4 } from "uuid";

connect();

export async function GET(request) {
    try {
        const todos = await Todo.find({});
        return NextResponse.json({ msg: "To Do List", status: "Ok", todos });
    } catch (error) {
        return NextResponse.json({ error: error.message, status: error.status });
    }
}

export async function POST(request) {
    try {
        const { text } = await request.json();
        console.log(text);
        const todo = new Todo({
            id: v4(),
            text,
            status: false
        });
        const savedToDo = await todo.save();
        return NextResponse.json(savedToDo);
    } catch (error) {
        return NextResponse.json({ error: error.message, status: error.status });
    }
}