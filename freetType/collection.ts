import type {HydratedDocument, Types} from 'mongoose';
import type {FreetType} from './model';
import FreetTypeModel from './model';

/**
 * This file contains a class with functionality to create Freet Types
 *
 * Note: HydratedDocument<FreetType> is the output of the FreetTypeModel() constructor,
 * and contains all the information in FreetType. https://mongoosejs.com/docs/typescript.html
 */
class FreetTypeCollection {
  /**
   * Add a new Freet Type
   *
   * @param {string} freetTypeLabel - The Freet Type (label)
   * @return {Promise<HydratedDocument<FreetType>>} - The newly created Freet Type
   */
  static async addOne(authorId: Types.ObjectId | string, freetTypeLabel: string): Promise<HydratedDocument<FreetType>> {
    const freetType = new FreetTypeModel({
      authorId,
      freetTypeLabel
    });
    await freetType.save(); // Saves user to MongoDB
    return freetType.populate('authorID');
  }
}

export default FreetTypeCollection;
