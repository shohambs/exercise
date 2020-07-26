"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DBConnection = void 0;
var fs_1 = require("fs");
var path = __importStar(require("path"));
var DBConnection = /** @class */ (function () {
    function DBConnection() {
        this.PATH = path.resolve(__dirname, "./data/contacts.json");
    }
    DBConnection.prototype.readValues = function () {
        try {
            var rawData = fs_1.readFileSync(this.PATH);
            return JSON.parse(rawData.toString()).contacts;
        }
        catch (error) {
            console.log("couldn't read file");
            throw error;
        }
    };
    DBConnection.prototype.writeValues = function (data) {
        try {
            fs_1.writeFileSync(this.PATH, JSON.stringify({ contacts: data }));
        }
        catch (error) {
            console.log("couldn't write to file");
            throw error;
        }
    };
    return DBConnection;
}());
exports.DBConnection = DBConnection;
//# sourceMappingURL=dbConnection.js.map