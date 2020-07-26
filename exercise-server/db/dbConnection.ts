import { readFileSync, writeFileSync } from "fs";
import * as path from "path";

import { Contact } from "../types/contact";

export class DBConnection {
    PATH = path.resolve(__dirname, "./data/contacts.json");
    readValues(): Contact[] {
        try {
            const rawData = readFileSync(this.PATH);
            return JSON.parse(rawData.toString()).contacts;
        } catch (error) {
            console.log("couldn't read file");
            throw error;
        }
    }

    writeValues(data: Contact[]): void {
        try {
            writeFileSync(this.PATH, JSON.stringify({contacts: data}));
        } catch (error) {
            console.log("couldn't write to file");
            throw error;
        }
    }
}