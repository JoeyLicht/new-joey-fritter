import type {Types} from 'mongoose';
import {Schema, model} from 'mongoose';

/**
 * This file defines the properties stored in a Freet Type
 * DO NOT implement operations here ---> use collection file
 */

// Type definition for Freet Type on the backend
export type FreetType = {
  _id: Types.ObjectId; // MongoDB assigns each object this ID on creation
  freetTypeLabel: string;
};

// Mongoose schema definition for interfacing with a MongoDB table
// Freet Types stored in this table will have these fields, with the
// type given by the type property, inside MongoDB
const FreetTypeSchema = new Schema({
  // The freetTypeLabel
  freetTypeLabel: {
    type: String,
    required: true
  }
});

const FreetTypeModel = model<FreetType>('FreetType', FreetTypeSchema);
export default FreetTypeModel;
