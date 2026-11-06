import { db } from '../models/db.js';

export function getInteriors(req, res, next) {
  try {
    const list = db.getCollection('interiors');
    res.json({
      success: true,
      count: list.length,
      data: list,
    });
  } catch (err) {
    next(err);
  }
}

export function getInteriorById(req, res, next) {
  try {
    const { id } = req.params;
    const item = db.findById('interiors', id);

    if (!item) {
      return res.status(404).json({
        success: false,
        error: {
          message: `Interior chamber '${id}' not found`,
          code: 'NOT_FOUND',
        },
      });
    }

    res.json({
      success: true,
      data: item,
    });
  } catch (err) {
    next(err);
  }
}

