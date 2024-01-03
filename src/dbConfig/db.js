import mongoose from 'mongoose';

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