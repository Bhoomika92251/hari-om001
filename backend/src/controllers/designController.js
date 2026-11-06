import { db } from '../models/db.js';

export function getDesigns(req, res, next) {
  try {
    const { category, search } = req.query;
    let list = db.getCollection('designs');

    if (category && category !== 'all') {
      list = list.filter((d) => d.category?.toLowerCase() === category.toLowerCase());
    }

    if (search) {
      const q = search.toLowerCase();
      list = list.filter(
        (d) =>
          d.title?.toLowerCase().includes(q) ||
          d.typology?.toLowerCase().includes(q) ||
          d.description?.toLowerCase().includes(q)
      );
    }

    res.json({
      success: true,
      count: list.length,
      data: list,
    });
  } catch (err) {
    next(err);
  }
}

export function getDesignById(req, res, next) {
  try {
    const { id } = req.params;
    const design = db.findById('designs', id);

    if (!design) {
      return res.status(404).json({
        success: false,
        error: {
          message: `Design '${id}' not found`,
          code: 'NOT_FOUND',
        },
      });
    }

    res.json({
      success: true,
      data: design,
    });
  } catch (err) {
    next(err);
  }
}

