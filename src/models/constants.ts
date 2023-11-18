import path from "node:path";

export const PROJECT_ROOT_DIRECTORY = process.env.APP_DIR as string;
export const DATA_DIRECTORY = path.resolve(PROJECT_ROOT_DIRECTORY, "data");
export const BOOKS_DIRECTORY = path.resolve(DATA_DIRECTORY, "books");
