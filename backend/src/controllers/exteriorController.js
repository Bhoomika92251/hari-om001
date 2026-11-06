import { db } from '../models/db.js';

export function getExteriors(req, res, next) {
  try {
    const list = db.getCollection('exteriors');
    res.json({
      success: true,
      count: list.length,
      data: list,
    });
  } catch (err) {
    next(err);
  }
}

export function getExteriorById(req, res, next) {
  try {
    const { id } = req.params;
    const item = db.findById('exteriors', id);

    if (!item) {
      return res.status(404).json({
        success: false,
        error: {
          message: `Exterior element '${id}' not found`,
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

