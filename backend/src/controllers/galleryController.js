import { db } from '../models/db.js';

export function getGallery(req, res, next) {
  try {
    const { category, tag } = req.query;
    let list = db.getCollection('gallery');

    if (category && category !== 'all') {
      list = list.filter((g) => g.category?.toLowerCase().includes(category.toLowerCase()));
    }

    if (tag) {
      list = list.filter((g) => g.tags?.some((t) => t.toLowerCase() === tag.toLowerCase()));
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

export function getGalleryById(req, res, next) {
  try {
    const { id } = req.params;
    const item = db.findById('gallery', id);

    if (!item) {
      return res.status(404).json({
        success: false,
        error: {
          message: `Gallery item '${id}' not found`,
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

