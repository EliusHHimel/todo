import mongoose from 'mongoose';

// !Important → this connection is not proper and faces 'too many connection' error
// → please refere to singleton connection pattern for mongoDB with mongoose

export async function connect() {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        await mongoose.connection.on('connected', () => {
            console.log('Mongoose is connected!');
        });
    } catch (error) {
        console.log('Something went wrong!');
        console.log(error);
    }
}