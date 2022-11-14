import mongoose from 'mongoose';

export type FilmDocument = mongoose.Document & {
    title: string,
    opening_crawl: string,
    episode_id: number,
    url: string,
    vehicles: string[],
};

const filmSchema = new mongoose.Schema({
    title: String,
    opening_crawl: String,
    episode_id: Number,
    url: String,
    vehicles: [String],
});


export const film = (mongoose.models.film ||
    mongoose.model<FilmDocument>('film', filmSchema, process.env.DB_CHARGE_COLLECTION)
);