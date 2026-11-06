import { db } from '../models/db.js';

export function subscribeNewsletter(req, res, next) {
  try {
    const { email } = req.body;
    const cleanEmail = email.trim().toLowerCase();

    // Check if already subscribed
    const existing = db.query('newsletter_subscribers', (s) => s.email === cleanEmail);

    if (existing.length > 0) {
      return res.status(200).json({
        success: true,
        message: 'Email is already subscribed to architectural monographs',
        data: existing[0],
      });
    }

    const newSubscriber = db.insert('newsletter_subscribers', {
      email: cleanEmail,
      subscribedAt: new Date().toISOString(),
      source: 'web_footer',
    });

    res.status(201).json({
      success: true,
      message: 'Successfully subscribed to architectural monographs',
      data: newSubscriber,
    });
  } catch (err) {
    next(err);
  }
}

export function getSubscribers(req, res, next) {
  try {
    const list = db.getCollection('newsletter_subscribers');
    res.json({
      success: true,
      count: list.length,
      data: list,
    });
  } catch (err) {
    next(err);
  }
}

