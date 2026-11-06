import { db } from '../models/db.js';

export function getStudioInfo(req, res, next) {
  try {
    const data = db.readSync();
    res.json({
      success: true,
      data: data.studio || {},
    });
  } catch (err) {
    next(err);
  }
}

