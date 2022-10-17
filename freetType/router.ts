import type {Request, Response} from 'express';
import express from 'express';
import FreetCollection from '../freet/collection';
import UserCollection from '../user/collection';
import FreetTypeCollection from './collection';
import * as userValidator from '../user/middleware';
import * as freetTypeValidator from '../freetType/middleware';
import * as util from './util';

const router = express.Router();

/**
 * Create a Freet Type
 *
 * @name POST /api/freetTypes
 *
 * @param {string} freetTypeLabel - The Freet Type (label)
 * @return {FreetTypeResponse} - The created Freet Type
 * @throws {409} - If Freet Type is already taken
 * @throws {400} - If Freet Type is not in correct format
 *
 */
router.post(
  '/',
  [
    freetTypeValidator.isValidFreetTypeLabel
  ],
  async (req: Request, res: Response) => {
    const userId = (req.session.userId as string) ?? ''; // Will not be an empty string since its validated in isUserLoggedIn
    const freetType = await FreetTypeCollection.addOne(userId, req.body.freetTypeLabel);
    // Todo make a function (either in collection or middleware that tells you if freet type already exists)
    // req.session.userId = user._id.toString();
    res.status(201).json({
      message: `Your successfully created a freet type: ${freetType.freetTypeLabel}`,
      freetType: util.constructFreetTypeResponse(freetType)
    });
  }
);

export {router as freetTypeRouter};
